export const priceResult= (data,includedDataItem)=>{

    if(data.priceArray.length > 0){
        if(data.priceArray[0] === includedDataItem.id && includedDataItem.type === "price"){
            // only get one supportive country currency
            return includedDataItem.attributes['price.currencyid']+" "+ includedDataItem.attributes['price.value']
        }
    }

    return "";

}

// export const intPrice= (data,includedDataItem)=>{
//
//     if(data.priceArray.length > 0){
//         if(data.priceArray[0] === includedDataItem.id && includedDataItem.type === "price"){
//             // only get one supportive country currency
//             return includedDataItem.attributes['price.value']
//         }
//     }
//
//     return "";
//
// }


export const singleMedia = (data,dataItem)=>{
    colorAttribute(data,dataItem);


    if(data.mediaArray.length > 0){
        if(data.mediaArray[0] === dataItem.id && dataItem.type === "media"){
            // only get one supportive country currency

            return  dataItem.attributes['media.url'];
        }
    }

    return "";

}


export const allMedia = (data,dataItem)=>{


    if(data.mediaArray.length > 0){
        if(data.mediaArray.includes(dataItem.id) && dataItem.type === "media"){
            // only get one supportive country currency

            return  dataItem.attributes['media.url'];
        }
    }

    return "";

}


export   const colorAttribute = (data,includedDataItem)=>{
    if(data.attributeArray.length > 0){



        if(includedDataItem.type === "attribute" && includedDataItem.attributes['attribute.type'] === 'color' && data.attributeArray.find(item=>item === includedDataItem.id)){
             //  includedDataItem.attributes['attribute.label']
        }

    }

    return "";
}

export   const shortText = (data,includedDataItem)=>{
    if(data.textArray.length > 0){
         if(includedDataItem.type === "text" && includedDataItem.attributes['text.type'] === 'short' && data.textArray.find(item=>item === includedDataItem.id)){
           return includedDataItem.attributes['text.content'];
        }

    }

    return "";
}

export   const longText = (data,includedDataItem)=>{
    if(data.textArray.length > 0){
        if(includedDataItem.type === "text" && includedDataItem.attributes['text.type'] === 'long' && data.textArray.find(item=>item === includedDataItem.id)){
            return includedDataItem.attributes['text.content'];
        }

    }

    return "";
}
