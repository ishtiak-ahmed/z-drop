const { ADD_TO_CART, REMOVE_FROM_CART } = require("../Actions/cartActions");

const initialState = [
  {
    name: "Men Tee Shirt Super Skinny Fit Low",
    id: 8,
    price: 3255,
    company: "Nike",
    discount: 15,
    color: "Black",
    size: "XL",
    delivery: 40,
    image: "/img/black-t.png",
  },
  {
    name: "Men Striped Casual Spread Shirt Super Skinny Fit Low",
    id: 5,
    price: 3455,
    company: "Nike",
    discount: 15,
    color: "White",
    size: "XL",
    delivery: 40,
    image: "/img/striped.png",
  },
  {
    name: "Men Tee Shirt Skinny Fit Low",
    id: 13,
    price: 3550,
    company: "Kilou",
    discount: 25,
    color: "Black",
    size: "XL",
    delivery: 40,
    image: "/img/striped.png",
  },
  {
    name: "Men Striped Shirt Skinny Fit Low",
    id: 11,
    price: 3550,
    company: "Kilou",
    discount: 25,
    color: "Gray",
    size: "XL",
    delivery: 40,
    image: "/img/striped.png",
  },
  {
    name: "Men Striped Casual Spread Shirt Super Skinny Fit Low",
    id: 9,
    price: 3025,
    company: "Adidas",
    discount: 25,
    delivery: 40,
    color: "Black",
    size: "XL",
    image: "/img/spa.png",
  },
];
const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return state;
    case REMOVE_FROM_CART:
      const newCart = state.filter((item) => item.id != action.id);
      return [...newCart];
    default:
      return state;
  }
};

export default cartReducers;
