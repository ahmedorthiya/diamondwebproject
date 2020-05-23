import React from "react";
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import uniqueTansanite from "../../assets/images/Unique_Tansanite_14mm_++.jpg";
import MenuNoOfItems from "../ProductDetails/MenuNoOfItems";
import {useSelector} from "react-redux";

const useStyles = makeStyles(theme=>({
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
    const [noOfItems, setItems] = React.useState('');
    const cartItems = useSelector(state=>state.cart.items);



    const handleChange = (event) => {
        setItems(event.target.value);
    };
    return(
        <Grid container >
            {
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
                                    <Typography variant={"h4"}>{item.name}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant={"subtitle6"}> size- {item.size} | gemstone -  {item.gemstone.name}</Typography>

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
                            <img className={classes.img} src={uniqueTansanite} width={"150px"} height={"150px"}/>
                        </Grid>

                        <Grid item
                              xs={12}
                              sm={4}
                              md={4}
                              lg={4}
                              xl={4}
                        >
                            <Grid container direction={"column"}>
                                <MenuNoOfItems classes={classes} noOfItems={noOfItems} handleChange={handleChange}/>

                                    {item.noOfItems } x  {item.price}

                            </Grid>
                        </Grid>
                    </Grid>
                ))
            }


        </Grid>
    )
}


export default Cart;
