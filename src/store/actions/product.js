import axios from "axios";

export const ADD_PRODUCTS = "ADD_PRODUCTS";

export const addProducts = ()=>async dispatch =>{
    const res = await axios({
        method:"GET",
        url:"http://localhost:8000/jsonapi/product?include=media,price,text&page%5Boffset%5D=0", // return price and page[offset]=
        //   url:"http://localhost:8000/jsonapi/product?include=attribute%2Cmedia%2Cprice%2Cproduct%2Cproduct%2Fproperty%2Ctext&page%5Boffset%5D=0", // return price and page[offset]=

        headers:{ "Access-Control-Allow-Origin": "*",}
    })


    const itemAttributes = [];
    const links = [];
    const priceArray = [];
    const mediaArray = [];
    const textArray = [];

    res.data.data.map(item=>{



        itemAttributes.push(item.attributes);
        links.push(item.links);

        const prices =   item.relationships.price.data.map(priceItem=>{

            priceItem.attributes.productId = item.id;
            return priceItem;
        });

        const media =   item.relationships.media.data.map(priceItem=>{

            priceItem.attributes.productId = item.id;
            return priceItem;
        });

        const texts =   item.relationships.text.data.map(priceItem=>{

            priceItem.attributes.productId = item.id;
            return priceItem;
        });


        priceArray.push(...prices);
        mediaArray.push(...media);
        textArray.push(...texts);






    });


    const itemPrices = [];
    const itemMedia = [];
    const itemText = [];
    res.data.included.map(item=>{
        const priceIndex = priceArray.findIndex(priceItem=> priceItem.type === item.type && priceItem.id === item.id);
        const mediaIndex =  mediaArray.findIndex(priceItem=> priceItem.type === item.type && priceItem.id === item.id)
        const textIndex = textArray.findIndex(priceItem=> priceItem.type === item.type && priceItem.id === item.id);
        if( priceIndex > -1){

            itemPrices.push({...item,productId:priceArray[priceIndex].attributes.productId});
        }else if( mediaIndex> -1){

            itemMedia.push({...item,productId:mediaArray[mediaIndex].attributes.productId});
        }else if( textIndex> -1){

            itemText.push({...item,productId:textArray[textIndex].attributes.productId});
        }

    })



    return dispatch({
        type:ADD_PRODUCTS,
        payload :  {
            itemAttributes: itemAttributes,
            itemsLinks:links,
            itemsPrices:itemPrices,
            itemsMedia:itemMedia,
            itemsText:itemText,
        }
    })



}


