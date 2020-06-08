import {combineReducers} from "redux";
import cart from "./reducers/cart";
import product from "./reducers/product";
import auth from "./reducers/auth";

const rootReducer = combineReducers({
    cart,
    products:product,
    login: auth,
});


export default rootReducer;
