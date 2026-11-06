import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://elzenmusic.com";
const CAMPAIGN_IMAGE = `${SITE_URL}/images/covers/red_ocean.jpg`;

const PAGE_METADATA = {
  "/": {
    title: "Red Ocean — Elzen | Guitarra jazz y flamenco",
    description:
      "Escucha Red Ocean, el lanzamiento de Elzen, y descubre su guitarra con influencias de jazz y flamenco. Artista de Torreón, México.",
  },
  "/website": {
    title: "Elzen Music | Guitarrista y músico de Torreón",
    description:
      "Conoce a Elzen, músico y guitarrista de Torreón, México. Descubre su biografía, composiciones y propuestas de guitarra instrumental.",
  },
  "/music": {
    title: "Música y videos de Elzen | Jazz, flamenco y más",
    description:
      "Escucha los álbumes, sencillos y EP de Elzen y mira sus videos musicales. Guitarra instrumental con influencias de jazz, flamenco y bossa nova.",
  },
  "/contact": {
    title: "Contacto y contrataciones | Elzen Music",
    description:
      "Contacta a Elzen Music para informes, presentaciones y eventos. Escríbenos por WhatsApp o utiliza el formulario de contacto.",
  },
  "/privacy-policy": {
    title: "Política de privacidad | Elzen Music",
    description:
      "Consulta la política de privacidad del sitio web de Elzen Music.",
  },
  "/spotify-gate": {
    title: "Red Ocean — Elzen | Guitarra jazz y flamenco",
    description:
      "Escucha Red Ocean y descubre la música de Elzen, guitarrista de Torreón con influencias de jazz y flamenco.",
    canonicalPath: "/",
    noindex: true,
  },
};

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function SeoMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = PAGE_METADATA[pathname];
    if (!metadata) return;

    const canonicalUrl = `${SITE_URL}${metadata.canonicalPath || pathname}`;
    document.title = metadata.title;

    setMeta("name", "description", metadata.description);
    setMeta("name", "robots", metadata.noindex ? "noindex, follow" : "index, follow");
    setMeta("property", "og:title", metadata.title);
    setMeta("property", "og:description", metadata.description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", CAMPAIGN_IMAGE);
    setMeta("name", "twitter:title", metadata.title);
    setMeta("name", "twitter:description", metadata.description);
    setMeta("name", "twitter:image", CAMPAIGN_IMAGE);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, [pathname]);

  return null;
}

export default SeoMetadata;
