import React from "react";
import {Grid, Typography} from "@material-ui/core"
import PinterestIcon from '@material-ui/icons/Pinterest';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme=>({
    footerContainer:{
        paddingTop:"20px",
        backgroundColor:"black",
        color:"white",
        padding:"50px 20px",
        fontFamily:"'Montserrat Alternates', sans-serif",
        position:"relative",
        bottom:"0",


    },
    footerItem:{borderRight:"1px solid white",paddingRight:"20px"}
}));

export default props=>{
    const classes = useStyles();
    return(


        <Grid container justify={"space-around"} alignItems={"center"} direction={"row"} className={classes.footerContainer}>
            <Grid item  className={classes.footerItem}>
                <Grid item>
                    <Typography variant={"subtitle6"}>
                        Growing
                    </Typography>

                </Grid>
                <Grid item>
                    <Typography variant={"subtitle6"}>
                        Attractive
                    </Typography>

                </Grid>
                <Grid item>
                    <Typography variant={"subtitle6"}>
                        On Demand
                    </Typography>

                </Grid>
                <Grid item>
                    <Typography variant={"subtitle6"}>
                        Latest
                    </Typography>

                </Grid>
            </Grid>

            <Grid item className={classes.footerItem}>

                <Grid item>
                <Typography variant={"subtitle6"}>
                    Award
                </Typography>
                </Grid>
                    <Grid item>
                <Typography variant={"subtitle6"}>
                    partner
                </Typography>
                    </Grid>
                        <Grid item>
                <Typography variant={"subtitle6"}>
                    Pics Art
                </Typography>
                        </Grid>


            </Grid>

            <Grid item className={classes.footerItem}>
                <Grid container item>
                    <PinterestIcon/>
                    <FacebookIcon/>
                    <YouTubeIcon/>
                    <TwitterIcon/>
                </Grid>

            </Grid>
            <Grid item className={classes.footerItem}>
                <Grid item>
                <Typography variant={"subtitle6"}>
                    Latest
                </Typography>
                </Grid>
                <Grid item>
                <Typography variant={"subtitle6"}>
                    Speech
                </Typography>
                </Grid>

            </Grid>
            <Grid item className={classes.footerItem}>
                <Grid item>
                <Typography variant={"subtitle6"}>
                    Contact
                </Typography>
                </Grid>
                <Grid item>
                <Typography variant={"subtitle6"}>
                    About
                </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
};
