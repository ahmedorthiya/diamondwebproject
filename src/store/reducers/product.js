import {ADD_PRODUCTS} from "../actions/product";

const initialState= {
    items:[],
    includedData:[],


}


export default (state=initialState,actions)=>{
    switch (actions.type) {
        case ADD_PRODUCTS:

            return{
                ...state,
               items:[...state.items,...actions.payload.itemData],
               includedData: [...state.includedData,...actions.payload.includedData],
            }
        default:
            return state;
    }
}
