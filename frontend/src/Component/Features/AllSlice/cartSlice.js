import { createSlice } from "@reduxjs/toolkit";
import { sucessToast, ErrorToast, InfoToast } from "../../../../utils/Toast";

const initialState = {
  cartItem: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
  totalAmount: 0,
  totalQunatity: 0,
};

export const AddtoCartSlice = createSlice({
  name: "AddtoCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { cartItem } = state;
      const findIndexCart = cartItem.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (findIndexCart >= 0) {
        cartItem[findIndexCart].cartQuantity += 1;
        InfoToast(`${action.payload.title} is updated`);
        localStorage.setItem("cartItem", JSON.stringify(cartItem));
      } else {
        cartItem.push({ ...action.payload, cartQuantity: 1 });
        sucessToast(`${action.payload.title} Add to Cart`);
        localStorage.setItem("cartItem", JSON.stringify(cartItem));
      }
    },
    removeCartItem: (state, action) => {
      const removeItem = state.cartItem.filter((item) => {
        return item.id !== action.payload.id;
      });

      state.cartItem = removeItem;
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
      ErrorToast(`${action.payload.title} Removed To Cart`);
    },
    decrementProduct: (state, action) => {
      const findIndexCart = state.cartItem.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (state.cartItem[findIndexCart].cartQuantity > 1) {
        state.cartItem[findIndexCart].cartQuantity -= 1;
        InfoToast(`${action.payload.title} Decreced `);
        localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
      }
    },
    incrementProduct: (state, action) => {
      const findIndexCart = state.cartItem.findIndex((item) => {
        return item.id === action.payload.id;
      });

      state.cartItem[findIndexCart].cartQuantity += 1;
      sucessToast(`${action.payload.title} Add to Cart`);
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },
    getTotal: (state, action) => {
      const { totalAmount, totalItem } = state.cartItem.reduce(
        (totalCart, eachProduct) => {
          const { price, cartQuantity } = eachProduct;
          totalCart.totalAmount += price * cartQuantity;
          totalCart.totalItem += cartQuantity;
          return totalCart;
        },
        {
          totalAmount: 0,
          totalItem: 0,
        }
      );
      state.totalAmount = totalAmount;
      state.totalQunatity = totalItem;
      console.log(state.totalAmount);
    },
  },
});

export const {
  addToCart,
  removeCartItem,
  decrementProduct,
  incrementProduct,
  getTotal,
} = AddtoCartSlice.actions;

export default AddtoCartSlice.reducer;
