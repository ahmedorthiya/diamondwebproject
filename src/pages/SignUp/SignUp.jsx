import React from "react";
import {Button, Grid, TextField, Typography} from "@material-ui/core";
import useStyles from "../LogIn/login.style";
import clsx from "clsx";

const SignUp = props=>{
    const classes = useStyles();
    return(
        <Grid container direction={"column"} className={classes.root} justify={"center"} alignItems={"center"}>
            <Grid item>
                <Typography variant={"h5"} align={"center"}>Sign Up</Typography>
                <br/>

            </Grid>
            <br/><br/>

            <Grid item>
                <TextField className={classes.inputBox} type={"text"} label={"Full Name"}/>

            </Grid>

            <Grid item>
                <TextField className={classes.inputBox} type={"email"} label={"Email"}/>

            </Grid>
            <Grid item>
                <TextField className={classes.inputBox} type={"password"} label={"Password"}/>
            </Grid>

            <br/>
            <Grid item>
                <Button className={clsx(classes.inputBox,classes.btnStyle)} color={"primary"} >Register Me</Button>
            </Grid>

        </Grid>
    )
}


export default SignUp;
