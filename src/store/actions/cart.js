import {ADD_ITEM_TO_CART} from "../type";

export const addItemToCart = (payload,meta,token)=>async (dispatch,getState,axios)=>{
   // let url = `http://localhost:8000/jsonapi/basket?id=${payload.id}&related=product`//payload['links']['basket/product']['href'];
    //let url = `http://127.0.0.1:8000/jsonapi/basket?product.id=${payload.id}&related=product&_token=`+meta['csrf']['value']//payload['links']['basket/product']['href'];
   // const token = payload['meta']['csrf']['value'];

    let url = `http://localhost:8000/jsonapi/basket?id=default&related=product&_token=${meta['csrf']['value']}`;




    const data = {data: [{
            attributes: {
                "product.id": payload['id'], // from product response
                quantity: 1, // optional

            }
        }]};






    await axios.post(url,data,{
        headers:{
            "XSRF-TOKEN":meta['csrf']['value']
        }
    })



    // dispatch({
    //     type:ADD_ITEM_TO_CART,
    //     payload
    // })
};
