import React, {useCallback, useState} from "react";
import {Grid, TextField, Button, Typography} from "@material-ui/core";
import facebook from "../../assets/images/social-icons/facebook.svg";
import insta from "../../assets/images/social-icons/insta.svg";
import google from "../../assets/images/social-icons/g.svg";
import twitter from "../../assets/images/social-icons/twitter.svg";
import pinterest from "../../assets/images/social-icons/pinterest.svg";
import clsx from "clsx";
import useStyles from "./login.style";
import axios from "axios";
import {useDispatch} from "react-redux";
import {login} from "../../store/actions/auth";

const LogIn = props=>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState('');
    const dispatch = useDispatch();
    const loginUser = async ()=>{
        setMessage("Please wait...");
        await dispatch(login({email,password}));
        props.history.push("/product-list");

    };


   const classes = useStyles();
    return(
          <Grid container direction={"column"} className={classes.root} justify={"center"} alignItems={"center"}>
              <Grid item>
                  <Typography variant={"h6"} align={"center"}>Social Login</Typography>
                  <br/>
                  <Grid container justify={"center"}>
                      <Grid item className={classes.socialItem}>
                          <img src={google} width={50} height={50}/>

                      </Grid>
                      <Grid item className={classes.socialItem}>
                          <img src={twitter} width={50} height={50}/>

                      </Grid>

                      <Grid item className={classes.socialItem}>
                          <img src={facebook} width={50} height={50}/>

                      </Grid>

                      <Grid item className={classes.socialItem}>
                          <img src={pinterest} width={50} height={50}/>

                      </Grid>

                      <Grid item className={classes.socialItem}>
                          <img src={insta} width={50} height={50}/>

                      </Grid>
                  </Grid>
              </Grid>
              <br/><br/>

              <Grid item>
                  <TextField className={classes.inputBox} onChange={e=>setEmail(e.target.value)} type={"email"} label={"Email"}/>

              </Grid>
              <Grid item>
                  <TextField className={classes.inputBox} onChange={e=>setPassword(e.target.value)} type={"password"} label={"Password"}/>
              </Grid>

              <br/>
              <Grid item>
                  <Button className={clsx(classes.inputBox,classes.btnStyle)} onClick={loginUser} color={"primary"} >Login</Button>
              </Grid>
              {
                  message
              }

          </Grid>
    )
}


export default LogIn;
