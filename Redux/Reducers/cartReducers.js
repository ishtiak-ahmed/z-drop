const { ADD_TO_CART, REMOVE_FROM_CART } = require("../Actions/cartActions");

const initialState = [
  {
    name: "Men Striped Casual Spread Shirt Super Skinny Fit Low",
    id: 5,
    price: 3455,
    company: "Nike",
    discount: 15,
    color: "White",
    size: "XL",
  },
  {
    name: "Men Tee Shirt Skinny Fit Low",
    id: 13,
    price: 3550,
    company: "Kilou",
    discount: 25,
    color: "Black",
    size: "XL",
  },
  {
    name: "Men Striped Shirt Skinny Fit Low",
    id: 13,
    price: 3550,
    company: "Kilou",
    discount: 25,
    color: "Gray",
    size: "XL",
  },
  {
    name: "Men Striped Casual Spread Shirt Super Skinny Fit Low",
    id: 8,
    price: 3025,
    company: "Adidas",
    discount: 25,
  },
];
const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return state;
    case REMOVE_FROM_CART:
      const newCart = state.cart.filter((item) => item.id != action.id);
      return { ...state, cart: newCart };
    default:
      return state;
  }
};

export default cartReducers;
