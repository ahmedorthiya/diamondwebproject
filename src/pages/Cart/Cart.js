import React, {useEffect} from "react";
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import uniqueTansanite from "../../assets/images/Unique_Tansanite_14mm_++.jpg";
import MenuNoOfItems from "../ProductDetails/MenuNoOfItems";
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart} from "../../store/actions/cart";
import {priceResult, singleMedia} from "../../assets/selectFirstItemFromList";
import {baseUrl} from "../../assets/url";

const useStyles = makeStyles(theme=>({
    root:{
        backgroundColor:theme.palette.common.bgColor,

    },
    container:{
        width:"70%",
        textAlign:"center",


        margin:"40px auto"
    },
    img:{
        borderRadius:"50%",
    }
}));

const Cart = props=>{
    const classes = useStyles();

    const cartItems = useSelector(state=>state.cart.items);
      const includedData = useSelector(store=>store.products.includedData);
     const  dispatch = useDispatch();
     console.log("cart items is = ",cartItems);



    const handleChange = (e,cartItem) => {
       dispatch(addItemToCart({
           ...cartItem,
           noOfItems:e.target.value,
       }));
    };




    return(
        <Grid container className={classes.root} justify={"center"} alignItems={"center"} style={{height:cartItems.length > 2 ? undefined : "100vh"}}>
            {
                cartItems.length > 0 ?
                cartItems.map(item=>(
                    <Grid key={item.id} item container className={classes.container} alignItems={"center"}>
                        <Grid item
                              xs={12}
                              sm={4}
                              md={4}
                              lg={4}
                              xl={4}
                        >
                            <Grid container direction={"column"}>
                                <Grid item
                                >
                                    <Typography variant={"h4"}>{item.attributes['product.label']}</Typography>
                                </Grid>
                                <Grid item>
                                    {/*<Typography variant={"subtitle6"}> size- {item.size} | gemstone -  {item.gemstone.name}</Typography>*/}

                                </Grid>
                            </Grid>

                        </Grid>

                        <Grid item
                              xs={12}
                              sm={4}
                              md={4}
                              lg={4}
                              xl={4}
                        >
                            {
                                includedData.map((dataItem,i)=>(
                                  singleMedia(item,dataItem) ?   <img className={classes.img} key={i} src={   singleMedia(item,dataItem).includes("https://") ? singleMedia(item,dataItem) : baseUrl+singleMedia(item,dataItem)} width={"150px"} height={"150px"}/>: ""
                                ))

                            }

                        </Grid>

                        <Grid item

                        >
                            <Grid container direction={"column"}>
                                <MenuNoOfItems style={{width:120}}  classes={classes} noOfItems={item.noOfItems} handleChange={(e)=>handleChange(e,item)}/>

                                    {item.noOfItems } x   {
                                includedData.map((dataItem,i)=>(
                                    priceResult(item,dataItem)
                                ))

                            }

                            </Grid>
                        </Grid>
                    </Grid>
                ))
                    : <Typography variant={"h5"} >Pleases Add Something </Typography>
            }


        </Grid>
    )
}


export default Cart;
