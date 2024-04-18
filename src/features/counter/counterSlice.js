import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount, fetchProducts } from "./counterAPI";

const initialState = {
  value: 0,
  status: "idle",
  tabs: [],
  requestedTabs: [],
  disabledTabFlag: false,
  tabButtonTitle: "Agregar Tablatura",
  total: 0,
  cached: false,
  request:[],
  email:'',
  emailValid:false
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchProductsAsync = createAsyncThunk(
  "cart/fetchProducts",
  async () => {
    const response = await fetchProducts();
    return response;
  }
);

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
          state.total += action.payload.price ;
        } else {
          state.total = action.payload.price;
        }
      }
      // else{
      //   const index = state.requestedTabs.findIndex(tab => tab.id === action.payload.id);
      //   state.tabButtonTitles[index]  = "Has Agregado esta Tab"
      // }
    },
    removeTabFromCart(state, action) {
      const { id } = action.payload;
      const index = state.tabs.findIndex(
        (tab) => tab.id === action.payload.id
      );
      state.tabs[index].buttonTitle = "Agregar Tab";
      state.tabs[index].variant = "success";
      state.requestedTabs = state.requestedTabs.filter((tab) => tab.id !== id);
      if (state.total !== 0) {
        // Actualizas el estado o la variable del total
        state.total -= action.payload.price ;
      } else {
        state.total = action.payload.price;
      }
    },
    checkout(state, action){
      state.request[0]={email:action.payload,requestTabs:state.requestedTabs} 
    },
    handleEmailChange (state,action) {
      state.email = action.payload;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      state.emailValid = emailRegex.test(action.payload);
    },
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value = state.value <= 0 ? 0 : (state.value -= 1);
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        if (!state.cached) {
          state.status = "idle";
          state.tabs = action.payload;
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

        // Puedes hacer algo con los productos obtenidos si es necesario
      });
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  addTabToCart,
  removeTabFromCart,
  checkout,
  handleEmailChange
} = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.counter.value;
export const selectTabs = (state) => state.counter.tabs;
export const selectRequestedTabs = (state) => state.counter.requestedTabs;
export const selectRequest = (state) => state.counter.request;
export const selectTabButtonTitle = (state) => state.counter.tabButtonTitle;
export const selectTotal = (state) => state.counter.total;
export const selectEmail = (state) => state.counter.email;
export const selectEmailValid = (state) => state.counter.emailValid;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export default counterSlice.reducer;