import React from "react";
import {Grid, TextField, Button, Typography} from "@material-ui/core";
import facebook from "../../assets/images/social-icons/facebook.svg";
import insta from "../../assets/images/social-icons/insta.svg";
import google from "../../assets/images/social-icons/g.svg";
import twitter from "../../assets/images/social-icons/twitter.svg";
import pinterest from "../../assets/images/social-icons/pinterest.svg";
import clsx from "clsx";
import useStyles from "./login.style";

const LogIn = props=>{
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
                  <TextField className={classes.inputBox} type={"email"} label={"Email"}/>

              </Grid>
              <Grid item>
                  <TextField className={classes.inputBox} type={"password"} label={"Password"}/>
              </Grid>

              <br/>
              <Grid item>
                  <Button className={clsx(classes.inputBox,classes.btnStyle)} color={"primary"} >Login</Button>
              </Grid>

          </Grid>
    )
}


export default LogIn;
