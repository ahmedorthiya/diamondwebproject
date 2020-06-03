import {ADD_PRODUCTS} from "../actions/product";

const initialState= {
    items:[],
    itemsLinks:[],
    itemsPrices:[],
    itemsText:[],
    itemsMedia:[],

}


export default (state=initialState,actions)=>{
    switch (actions.type) {
        case ADD_PRODUCTS:
            console.log("payload of products is = ",actions.payload);
            return{
                ...state,
                items:[...state.items,...actions.payload.itemAttributes],
                itemsLinks:[...state.itemsLinks,...actions.payload.itemsLinks],
                itemsPrices:[...state.itemsPrices,...actions.payload.itemsPrices],
                itemsText: [...state.itemsText,...actions.payload.itemsText],
                itemsMedia: [...state.itemsMedia,...actions.payload.itemsMedia],
            }
        default:
            return state;
    }
}
