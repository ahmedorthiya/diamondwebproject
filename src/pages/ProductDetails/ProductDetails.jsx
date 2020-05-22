import React from "react";
import {Grid,Button, Typography,FormControl,InputLabel,Select,MenuItem} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import uniqueTransite from "../../assets/images/Unique_Tansanite_14mm_++.jpg";
import fdia1 from "../../assets/images/fdia1.PNG";
import fdia2 from "../../assets/images/fdia2.PNG";


const useStyles = makeStyles(theme=>({
    container:{
        paddingTop:"1.5rem",
        textAlign:"center",
        backgroundColor:theme.palette.common.bgColor,
        height:"100%",
    },
    productMainImg:{
        width:"500px",
        height:"500px",
        borderRadius:"50%",
        [theme.breakpoints.down("md")]:{
         width:"350px",
         height:"350px",
        },
       [theme.breakpoints.down("sm")]:{
            margin:"20px 0",
        }


    },
    productDes:{
        [theme.breakpoints.down("sm")]:{
            margin:"20px 0",
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    widthSetter:{
        width:"90%",margin:"auto"
    }
}))
export default props =>{
    const classes = useStyles();
    const [noOfItems, setItems] = React.useState('');

    const handleChange = (event) => {
        setItems(event.target.value);
    };

    return(
        <Grid container direction={"column"} className={classes.container} >

        <Grid item  container className={classes.widthSetter}
              alignItems={"center"}>

         <Grid item sm={12} xs={12} md={3} lg={3} xl={3}
            className={classes.productDes}

             >
              <Typography variant={"h5"}>
                  Tansanite
              </Typography>
                 <Typography color={"secondary"} variant={"h6"}>
                 {/*    type | size | 10.57ct*/}
                 Unique | 14mm | 10.57ct
                 </Typography>
                 <Typography color={"secondary"} variant={"subtitle6"}>
                     ndustry. Lorem Ipsum has been the industry's standard dummy text ever
                     since the 1500s, when an unknown printer took a galley of type and scrambled it
                     to make a type specimen book. It has survived not only five centuries, but also the
                     leap into electronic typesetting, remaining essentially unchanged. It was popularised
                     in the 1960s with the release of Letraset sh
                 </Typography>
             </Grid>
            <Grid item

                  sm={12}
                  xs={12}
                  md={6}
                  lg={6}
                  style={{textAlign:"center"}}
                  xl={6} >
                <img src={uniqueTransite} className={classes.productMainImg}/>
            </Grid>
            <Grid item
                  container
                  sm={12}
                  xs={12}
                  md={3}
                  lg={3}
                  xl={3}
                  direction={"column"}
            >

             <Grid item container >
                 <img src={uniqueTransite} alt="" width={"30px"} height={"30px"} />
                 <img src={uniqueTransite} alt="" width={"30px"} height={"30px"} />
                 <img src={uniqueTransite} alt="" width={"30px"} height={"30px"} />
                 <img src={uniqueTransite} alt="" width={"30px"} height={"30px"} />
                 <img src={uniqueTransite} alt="" width={"30px"} height={"30px"} />
             </Grid>



                <Grid item>
                    <FormControl className={classes.formControl} fullWidth>
                        <InputLabel id="demo-simple-select-label">No Of Items</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={noOfItems}
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={11}>11</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={13}>13</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={15}>15</MenuItem>
                        </Select>
                    </FormControl>


                </Grid>


                <Grid item>
                    <Button variant={"contained"} color={"primary"}>Add To Cart</Button>
                    </Grid>
                <br/>

               <Grid item>
                   <Typography color={"secondary"} variant={"subtitle6"}>
                       ndustry. Lorem Ipsum has been the industry's standard dummy text ever
                       since the 1500s, when an unknown printer took a galley of type and scrambled it
                       to make a type specimen book. It has survived not only five centuries, but also the
                       leap into electronic typesetting, remaining essentially unchanged. It was popularised
                       in the 1960s with the release of Letraset sh
                   </Typography>
               </Grid>

            </Grid>
        </Grid>
            <br/>
            <Grid item>
                <Typography variant={"h5"}>
                    Further details
                </Typography>
            </Grid>

            <br/>
            <Grid item className={classes.widthSetter}>
                <img src={fdia1} width={"200px"} height={"200px"}/>
                <img src={fdia2} width={"200px"} height={"200px"}/>
            </Grid>


            <Grid item className={classes.widthSetter}>
               <Typography>
                   ndustry. Lorem Ipsum has been the industry's standard dummy text ever
                   since the 1500s, when an unknown printer took a galley of type and scrambled it
                   to make a type specimen book. It has survived not only five centuries, but also the
                   leap into electronic typesetting, remaining essentially unchanged. It was popularised
                   in the 1960s with the release of Letraset sh
               </Typography>
            </Grid>















        </Grid>
    )
}
