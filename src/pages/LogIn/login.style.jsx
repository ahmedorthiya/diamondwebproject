import {makeStyles} from "@material-ui/styles";
import {btnTransition} from "../../theme/ButtonStyle";



export default makeStyles(theme=>({
    root:{
        height:"100vh"
    },
    socialItem:{
        margin:"0 10px",
    },
    inputBox:{
        width:300,
    },
    btnStyle:{
        ...btnTransition
    }
}));
