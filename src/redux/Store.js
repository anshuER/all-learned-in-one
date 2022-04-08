const { createStore } = require("redux");
const { default: RootReducer } = require("./RootReducers");

const store=createStore(
    RootReducer
)

export default store