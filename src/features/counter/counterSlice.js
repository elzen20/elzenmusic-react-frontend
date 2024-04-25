import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../js/firebase";

const initialState = {
  tabs: [],
  requestedTabs: [],
  disabledTabFlag: false,
  tabButtonTitle: "Agregar Tablatura",
  total: 0,
  cached: false,
  request: [],
  email: "",
  emailValid: false,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const fetchProductsAsync = createAsyncThunk(
  "cart/fetchProducts",
  async () => {
    const response = [];
    const q = query(collection(db, "tablatura"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      response.push(doc.data());
    });

    return response;
  }
);
function defaultButtonProperties(state) {
  const buttonTitleProperty = "buttonTitle";
  const buttonTitleValue = "Agregar Tab";
  state.tabs.forEach((tab) => {
    tab[buttonTitleProperty] = buttonTitleValue;
  });
  const variantProperty = "variant";
  const variantValue = "success";
  state.tabs.forEach((tab) => {
    tab[variantProperty] = variantValue;
  });
}
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addTabToCart(state, action) {
      const alreadyInCart = state.requestedTabs.some(
        (tab) => tab.id === action.payload.id
      );
      if (!alreadyInCart) {
        const index = state.tabs.findIndex(
          (tab) => tab.id === action.payload.id
        );
        state.tabs[index].buttonTitle = "Has agregado esta tab";
        state.tabs[index].variant = "warning";
        state.cached = true;

        state.requestedTabs.push(action.payload);

        // Sumas el precio extraído al total acumulado
        if (state.total !== 0) {
          // Actualizas el estado o la variable del total
          state.total += action.payload.price;
        } else {
          state.total = action.payload.price;
        }
      }
    },
    removeTabFromCart(state, action) {
      const { id } = action.payload;
      const index = state.tabs.findIndex((tab) => tab.id === action.payload.id);
      state.tabs[index].buttonTitle = "Agregar Tab";
      state.tabs[index].variant = "success";
      state.requestedTabs = state.requestedTabs.filter((tab) => tab.id !== id);
      if (state.total !== 0) {
        // Actualizas el estado o la variable del total
        state.total -= action.payload.price;
      } else {
        state.total = action.payload.price;
      }
    },
    checkout(state, action) {
      state.request[0] = {
        email: action.payload,
        requestTabs: state.requestedTabs,
      };
    },
    handleEmailChange(state, action) {
      state.email = action.payload;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      state.emailValid = emailRegex.test(action.payload);
    },
    cleaningRequestedTabs(state) {
      state.requestedTabs = [];
      defaultButtonProperties(state);
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
      if (!state.cached) {
        state.status = "idle";
        state.tabs = action.payload;
        defaultButtonProperties(state);
      }

      // Puedes hacer algo con los productos obtenidos si es necesario
    });
  },
});

export const {
  incrementByAmount,
  addTabToCart,
  removeTabFromCart,
  checkout,
  handleEmailChange,
  cleaningRequestedTabs,
} = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectTabs = (state) => state.counter.tabs;
export const selectRequestedTabs = (state) => state.counter.requestedTabs;
export const selectRequest = (state) => state.counter.request;
export const selectTabButtonTitle = (state) => state.counter.tabButtonTitle;
export const selectTotal = (state) => state.counter.total;
export const selectEmail = (state) => state.counter.email;
export const selectEmailValid = (state) => state.counter.emailValid;

export default counterSlice.reducer;
