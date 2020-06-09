import axios from "axios";

export const ADD_PRODUCTS = "ADD_PRODUCTS";

export const addProducts = ()=>async dispatch =>{
    const res = await axios({
        method:"GET",
        url:"http://localhost:8000/jsonapi/product?include=attribute,media,price,product,product/property,text&page%5Boffset%5D=0", // return price and page[offset]=

        headers:{ "Access-Control-Allow-Origin": "*",withCredentials:true}
    })

    const productList = [];



    res.data.data.map(item=>{



        const priceArray = [];
        const attributeArray = [];
        const mediaArray = [];
        const product_property = [];
        const textArray = [];

        if(item.relationships['price']) {
            for (let i = 0; i < item.relationships['price'].data.length; i++) {
                 const refId = item.relationships['price'].data[i].attributes['product.lists.refid'];

                priceArray.push(refId);
            }
        }
        if(item.relationships['attribute']) {
            for (let i = 0; i < item.relationships['attribute'].data.length; i++) {
                const refId = item.relationships['attribute'].data[i].attributes['product.lists.refid'];

                attributeArray.push(refId);
            }
        }
        if(item.relationships['media']) {
            for (let i = 0; i < item.relationships['media'].data.length; i++) {
                const refId = item.relationships['media'].data[i].attributes['product.lists.refid'];

                mediaArray.push(refId);
            }
        }

        if(item.relationships['product/property']) {
            for (let i = 0; i < item.relationships['product/property'].data.length; i++) {
                const refId = item.relationships['product/property'].data[i];

                product_property.push({
                    ...refId,
                    productId:item.id,
                });
            }
        }
        if(item.relationships['text']) {
            for (let i = 0; i < item.relationships['text'].data.length; i++) {
                const refId = item.relationships['text'].data[i].attributes['product.lists.refid'];
                textArray.push(refId);
            }
        }


        // for(let key in item.relationships){
        //     for (let i = 0; i < item.relationships[key].data.length; i++){
        //         //products[6].relationships[key].data[i].attribute  // product.lists.refid
        //         const refId = item.relationships[key].data[i].attributes['product.lists.refid'];
        //
        //         // console.log("refId is = ",{
        //         //     key: refId,
        //         // });
        //     }
        //
        // }

        productList.push({
            ...item,
            priceArray,
            mediaArray,
            product_property,
            textArray,
            attributeArray


        })
    });




    return dispatch({
        type:ADD_PRODUCTS,
        payload :{
            itemData:productList,
            includedData:res.data.included,
            meta:res.data.meta,

        } ,
    })



}


