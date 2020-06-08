import React from "react";
import {Button, Grid, TextField, Typography} from "@material-ui/core";
import useStyles from "../LogIn/login.style";
import clsx from "clsx";
import {useDispatch} from "react-redux";
import {signup} from "../../store/actions/auth";


const SignUp = props=>{
    const classes = useStyles();
    const [data,setData] = React.useState({name:'',email:'',password:''});
    const [message,setMessage] = React.useState('');
    const dispatch = useDispatch();

    const onChange = (e,value)=>{
        setData(
            {
                ...data,
                ...value,
            }
        )
    }

    const registerUser = async ()=>{
        setMessage("Please wait we are creating your account");
        try{
           await dispatch(signup(data));
           props.history.push("/shipping-address");
       }catch(e){
           setMessage("Email Address Already In Use");
       }
    }

    return(
        <Grid container direction={"column"} className={classes.root} justify={"center"} alignItems={"center"}>
            <Grid item>
                <Typography variant={"h5"} align={"center"}>Sign Up</Typography>
                <br/>

            </Grid>
            <br/><br/>

            <Grid item>
                <TextField className={classes.inputBox} type={"text"} label={"Full Name"} onChange={e=>onChange(e,{name:e.target.value})}/>

            </Grid>

            <Grid item>
                <TextField className={classes.inputBox} type={"email"} label={"Email"} onChange={e=>onChange(e,{email:e.target.value})}/>

            </Grid>
            <Grid item>
                <TextField className={classes.inputBox} type={"password"} label={"Password"} onChange={e=>onChange(e,{password:e.target.value})}/>
            </Grid>

            <br/>
            <Grid item>
                <Button className={clsx(classes.inputBox,classes.btnStyle)} color={"primary"} onClick={registerUser} >Register Me</Button>
            </Grid>
            {
                message
            }

        </Grid>
    )
}


export default SignUp;
