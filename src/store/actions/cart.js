import {ADD_ITEM_TO_CART} from "../type";

export const addItemToCart = payload=>({
    type:ADD_ITEM_TO_CART,
    payload,
});
