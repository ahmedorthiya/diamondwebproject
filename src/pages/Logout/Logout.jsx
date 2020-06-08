import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../store/actions/auth";


export default props=>{
    const dispatch = useDispatch();
    const token = useSelector(store=>store.login.token);
   React.useEffect(()=>{
       const logoutUser = async ()=>{
           await dispatch(logout(token));
           props.history.push("/");
       }
       logoutUser();
   },[])
    return(
        <div>
            please wait we are logging you out ...
        </div>
    )
}
