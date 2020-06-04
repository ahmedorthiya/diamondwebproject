import {combineReducers} from "redux";
import cart from "./reducers/cart";
import product from "./reducers/product";

const rootReducer = combineReducers({
    cart,
    products:product
});


export default rootReducer;
