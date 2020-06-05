import React from "react";
import {Grid,Button, Typography,FormControl,InputLabel,Select,MenuItem} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

import MenuNoOfItems from "./MenuNoOfItems";
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart} from "../../store/actions/cart";
import dummyData from "../ProductList/dummydata";
import {btnTransition} from "../../theme/ButtonStyle";
import {priceResult, singleMedia, allMedia, shortText, longText} from "../../assets/selectFirstItemFromList";
import {baseUrl} from "../../assets/url";


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
    },
    addItemToCart:{
       ...btnTransition,
    }
}))
export default props =>{
    const classes = useStyles();
    const [noOfItems, setItems] = React.useState(1);
    const dispatch = useDispatch();
    const data = useSelector(store=>store.products.items.find(item=>item.id === props.match.params.id));
    const includedData= useSelector(store=>store.products.includedData);

  //  const data=dummyData.find(dData=> dData.id === parseInt(props.match.params.id));




    const handleChange = (event) => {
        setItems(event.target.value);
    };

    const addToCart  = ()=>{
        dispatch(addItemToCart({
            ...data,
            noOfItems:noOfItems ? noOfItems : 1,
        }));
    }

    return(
        <Grid container direction={"column"} className={classes.container} >

        <Grid item  container className={classes.widthSetter}
              alignItems={"center"}>

         <Grid item sm={12} xs={12} md={3} lg={3} xl={3}
            className={classes.productDes}

             >
              <Typography variant={"h5"}>
                  {
                      data.attributes['product.label']
                  }
              </Typography>
                 <Typography color={"secondary"} variant={"h6"}>
                 {/*    type | size | 10.57ct*/}
                     {
                         includedData.map((dataItem,i)=>    <div key={i}>{
                             priceResult(data,dataItem)


                         }</div>)
                     }
                 {/*    {data.gemstone.name} | {data.size} | {data.metal.name} | price- {data.price}*/}
                 </Typography>
                 <Typography color={"secondary"} variant={"subtitle6"}>
                     {/*{data.description}*/}
                 </Typography>
             </Grid>
            <Grid item

                  sm={12}
                  xs={12}
                  md={6}
                  lg={6}
                  style={{textAlign:"center"}}
                  xl={6} >
                {
                    includedData.map((dataItem,i)=>(
                        singleMedia(data,dataItem) ?
                            <img key={i} src={   singleMedia(data,dataItem).includes("https://") ? singleMedia(data,dataItem) : baseUrl+singleMedia(data,dataItem)}  className={classes.productMainImg}/>

                            : ""

                    ))

                }


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





                <Grid item>
                   <MenuNoOfItems noOfItems={noOfItems} handleChange={handleChange} classes={classes}/>
                 </Grid>


                <Grid item>
                    <Button variant={"contained"} className={classes.addItemToCart} color={"primary"} onClick={addToCart}>Add To Cart</Button>
                    </Grid>
                <br/>

               <Grid item>
                   <Typography color={"secondary"} variant={"subtitle6"}>
                       {
                           includedData.map(dataItem=>(
                               shortText(data,dataItem)
                           ))
                       }

                   </Typography>
               </Grid>

            </Grid>
        </Grid>
            <br/>



            <Grid item>
                <Grid container justify={"center"} >

            <Grid item style={{marginBottom:"30px"}}>
                <Typography variant={"h5"}>
                    Further details
                </Typography>
            </Grid>

            <br/>
                    <Grid item className={classes.widthSetter}>
                    {
                       includedData.map((dataItem,i)=>(
                           <img key={i} src={   allMedia(data,dataItem).includes("https://") ? allMedia(data,dataItem) : baseUrl+allMedia(data,dataItem)} alt="" width={"200px"} height={"200px"} />

                       ))

                    }
                    </Grid>


            <Grid item className={classes.widthSetter}>
               <Typography>
                   {
                       includedData.map(dataItem=>(
                           longText(data,dataItem)
                       ))
                   }
               </Typography>
            </Grid>
                </Grid>
            </Grid>

















        </Grid>
    )
}
