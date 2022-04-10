import { CartReducers } from "./reducers/cart/CartReducers";
import { toDoReducer } from "./reducers/to-do/to-doReducer";

const { combineReducers } = require("redux");
const { default: ProductReducers } = require("./reducers/products/productReducers");

const RootReducer=combineReducers({
    product:ProductReducers,
    cart:CartReducers,
    todo:toDoReducer
})

export default RootReducer; 