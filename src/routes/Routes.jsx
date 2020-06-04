import React from "react";
import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom";

import {ThemeProvider} from "@material-ui/styles";
import theme from "../theme";
import RoutesWithLayout from "./RoutesWithLayout";
import {ProductList, ProductDetails, Cart, LogIn, SignUp, ShippingAddress} from "../pages";
import {Footer,NavBar} from "../components";

export default  props=>{
    return(
        <div>
        <ThemeProvider theme={theme}>

            <BrowserRouter>
                <NavBar/>

                <Switch>

                    <RoutesWithLayout exact path={"/cart"} Component={Cart}/>
                    <RoutesWithLayout exact path={"/product-details/:id"} Component={ProductDetails}/>
                    <RoutesWithLayout exact path={"/login"} Component={LogIn}/>
                    <RoutesWithLayout exact path={"/sign-up"} Component={SignUp}/>
                    <RoutesWithLayout exact path={"/shipping-address"} Component={ShippingAddress}/>

                    <RoutesWithLayout path={"/"} Component={ProductList}/>
                </Switch>
                <Footer/>

            </BrowserRouter>

        </ThemeProvider>
        </div>
    )
}

