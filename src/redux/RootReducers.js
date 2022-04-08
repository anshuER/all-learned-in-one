import { CartReducers } from "./reducers/cart/CartReducers";

const { combineReducers } = require("redux");
const { default: ProductReducers } = require("./reducers/products/productReducers");

const RootReducer=combineReducers({
    product:ProductReducers,
    cart:CartReducers
})

export default RootReducer; 