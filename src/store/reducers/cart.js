import {ADD_ITEM_TO_CART} from "../type";

const initialState={
    items:[],
};

export default (state=initialState,actions)=>{
    switch (actions.type) {
        case ADD_ITEM_TO_CART:
            const item = state.items.find(item=>item.id === actions.payload.id)
            let updateOrNewItems=[];
            if(!item) {
                updateOrNewItems= [...state.items, {...actions.payload}]
                console.log("updte or new item ",updateOrNewItems);

            }else{
                updateOrNewItems= state.items.map(item=>{
                    if(item.id === actions.payload.id){
                        item.noOfItems = item.noOfItems+actions.payload.noOfItems;

                    }
                    return item;
                })
                console.log("item = ",updateOrNewItems);

                // return {
                //     ...state,
                //     items: [...state.items, {...actions.payload,noOfItems:state.items.noOfItems++}]
                // }
            }
            return {
                ...state,
                items:updateOrNewItems
            }
        default:
            return state;
    }
}
