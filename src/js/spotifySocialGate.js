const SPOTIFY_ACCOUNTS_URL = "https://accounts.spotify.com";
const SPOTIFY_API_URL = "https://api.spotify.com/v1";

const OAUTH_STATE_KEY = "spotify_gate_state";
const OAUTH_VERIFIER_KEY = "spotify_gate_verifier";
const OAUTH_REDIRECT_URI_KEY = "spotify_gate_redirect_uri";

export const SPOTIFY_ARTIST_ID = "7DqPzKzHovGCHfD6jW90Yv";
export const SPOTIFY_TRACK_URL =
  "https://open.spotify.com/track/62B8uNWhZ7O1Sj1X3lFpSg";

function base64UrlEncode(arrayBuffer) {
  const bytes = new Uint8Array(arrayBuffer);
  let binary = "";

  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return window
    .btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function randomString(length = 64) {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const values = new Uint8Array(length);
  window.crypto.getRandomValues(values);

  return Array.from(values, (value) => charset[value % charset.length]).join("");
}

async function createCodeChallenge(codeVerifier) {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await window.crypto.subtle.digest("SHA-256", data);
  return base64UrlEncode(digest);
}

function clearSpotifyGateSession() {
  window.sessionStorage.removeItem(OAUTH_STATE_KEY);
  window.sessionStorage.removeItem(OAUTH_VERIFIER_KEY);
  window.sessionStorage.removeItem(OAUTH_REDIRECT_URI_KEY);
}

function clearOAuthParamsFromUrl() {
  const url = new URL(window.location.href);
  url.searchParams.delete("code");
  url.searchParams.delete("state");
  url.searchParams.delete("error");

  const nextQuery = url.searchParams.toString();
  const nextUrl = `${url.pathname}${nextQuery ? `?${nextQuery}` : ""}${url.hash}`;
  window.history.replaceState({}, document.title, nextUrl);
}

function getClientId() {
  const clientId = (process.env.REACT_APP_SPOTIFY_CLIENT_ID || "").trim();

  if (!clientId) {
    throw new Error("Falta REACT_APP_SPOTIFY_CLIENT_ID en el archivo .env");
  }

  if (clientId === SPOTIFY_ARTIST_ID) {
    throw new Error(
      "REACT_APP_SPOTIFY_CLIENT_ID tiene el Artist ID. Debe ser el Client ID de tu app en Spotify Developer Dashboard."
    );
  }

  if (!/^[A-Za-z0-9]{24,64}$/.test(clientId)) {
    throw new Error(
      "REACT_APP_SPOTIFY_CLIENT_ID parece invalido. Revisa y copia el Client ID exacto desde Spotify Developer Dashboard."
    );
  }

  return clientId;
}

function getRedirectUri() {
  if (process.env.REACT_APP_SPOTIFY_REDIRECT_URI) {
    return process.env.REACT_APP_SPOTIFY_REDIRECT_URI.trim();
  }
  // Fallback: use current origin + "/" so it always matches the registered URI
  // regardless of whether the user entered via www or non-www.
  return `${window.location.origin}/`;
}

export async function startSpotifySocialGateAuth() {
  const clientId = getClientId();

  const redirectUri = getRedirectUri();
  const state = randomString(24);
  const codeVerifier = randomString(96);
  const codeChallenge = await createCodeChallenge(codeVerifier);

  window.sessionStorage.setItem(OAUTH_STATE_KEY, state);
  window.sessionStorage.setItem(OAUTH_VERIFIER_KEY, codeVerifier);
  window.sessionStorage.setItem(OAUTH_REDIRECT_URI_KEY, redirectUri);

  const params = new URLSearchParams({
    client_id: clientId,
    response_type: "code",
    redirect_uri: redirectUri,
    scope: "user-follow-modify",
    state,
    code_challenge_method: "S256",
    code_challenge: codeChallenge,
    show_dialog: "true",
  });

  window.location.assign(`${SPOTIFY_ACCOUNTS_URL}/authorize?${params.toString()}`);
}

async function exchangeCodeForToken(code, codeVerifier, redirectUri) {
  const clientId = getClientId();
  const tokenParams = new URLSearchParams({
    client_id: clientId,
    grant_type: "authorization_code",
    code,
    redirect_uri: redirectUri,
    code_verifier: codeVerifier,
  });

  const response = await fetch(`${SPOTIFY_ACCOUNTS_URL}/api/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: tokenParams.toString(),
  });

  if (!response.ok) {
    throw new Error("No se pudo obtener el access token de Spotify.");
  }

  return response.json();
}

async function followArtist(accessToken) {
  const response = await fetch(
    `${SPOTIFY_API_URL}/me/following?type=artist&ids=${SPOTIFY_ARTIST_ID}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response;
}

export async function completeSpotifySocialGateFromUrl() {
  const url = new URL(window.location.href);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const error = url.searchParams.get("error");

  if (!code && !error) {
    return { status: "idle" };
  }

  if (error) {
    clearOAuthParamsFromUrl();
    clearSpotifyGateSession();
    return {
      status: "error",
      message: `Spotify devolvio un error de autorizacion: ${error}.`,
    };
  }

  const savedState = window.sessionStorage.getItem(OAUTH_STATE_KEY);
  const savedVerifier = window.sessionStorage.getItem(OAUTH_VERIFIER_KEY);
  const savedRedirectUri = window.sessionStorage.getItem(OAUTH_REDIRECT_URI_KEY);

  if (!savedState || !savedVerifier || !savedRedirectUri || savedState !== state) {
    clearOAuthParamsFromUrl();
    clearSpotifyGateSession();
    return {
      status: "error",
      message: "La sesion de autorizacion es invalida o expiro. Intenta de nuevo.",
    };
  }

  try {
    const tokenData = await exchangeCodeForToken(code, savedVerifier, savedRedirectUri);
    const followResponse = await followArtist(tokenData.access_token);

    clearOAuthParamsFromUrl();
    clearSpotifyGateSession();

    if (followResponse.status === 204) {
      return { status: "success" };
    }

    return {
      status: "error",
      message: `Spotify no confirmo el follow (status ${followResponse.status}).`,
    };
  } catch (errorObject) {
    clearOAuthParamsFromUrl();
    clearSpotifyGateSession();
    return {
      status: "error",
      message: errorObject.message || "No se pudo completar el follow en Spotify.",
    };
  }
}
