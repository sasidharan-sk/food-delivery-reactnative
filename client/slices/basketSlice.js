import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      let newBasket = [...state.items];
      let itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        newBasket.splice(itemIndex, 1);
      } else {
        console.log("can't remove item as it's not in the basket");
      }
      state.items = newBasket;
    },
    emptyBasket: (state) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket, emptyBasket } = basketSlice.actions;

// Selectors with createSelector for memoization
export const selectBasket = (state) => state.basket;

export const selectBasketItems = createSelector(
  [selectBasket],
  (basket) => basket.items
);

export const selectBasketItemsById = createSelector(
  [selectBasket, (_, id) => id],
  (basket, id) => basket.items.filter((item) => item.id === id)
);

export const selectBasketTotal = createSelector(
  [selectBasketItems],
  (items) => items.reduce((total, item) => total + item.price, 0)
);

export default basketSlice.reducer;
