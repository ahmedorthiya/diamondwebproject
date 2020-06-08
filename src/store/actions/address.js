import {UPDATE_USER} from "./auth";


export const updateAddress = (value,token)=>async (dispatch,getState,axios)=>{
    const res = await axios.put("/api/update-address",value,{
        headers:{
            "Authorization": "Bearer "+token
        }
    });
    console.log("user data is = ",res.data);

    dispatch({
        type:UPDATE_USER,
        payload:res.data,
    })

    return res.data;
}
