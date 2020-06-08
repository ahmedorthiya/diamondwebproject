export const LOGIN = "LOGIN";
export const UPDATE_USER = "UPDATE_USER";
export const LOGOUT = "LOGOUT";

export const login = userDetails=>async (dispatch,getState,axios)=>{
    const res = await axios.post('/api/login',userDetails);
        dispatch({
        type:LOGIN,
        payload:{user:res.data.user,token:res.data.access_token},
    })
    return res.data;
}

export const logout = (token)=>async (dispatch,getState,axios)=>{
    const res = await axios.get('/api/logout',{
        headers:{
            "Authorization": "Bearer "+token
        }
    });
    dispatch({
        type:LOGOUT,
    })
     return res.data;
}

export const signup = userDetails=>async (dispatch,getState,axios)=>{
    const res = await axios.post("/api/register",userDetails);
    try{


    dispatch({
        type:LOGIN,
        payload:{user:res.data.user,token:res.data.access_token}
    })
        return res.data;

    }catch(e){
        return "";
    }
}
