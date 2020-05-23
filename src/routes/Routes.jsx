import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";

import {ThemeProvider} from "@material-ui/styles";
import theme from "../theme";
import RoutesWithLayout from "./RoutesWithLayout";
import {ProductList, ProductDetails, Cart} from "../pages";
import {Footer,NavBar} from "../components";

export default  props=>{
    return(
        <ThemeProvider theme={theme}>

            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <RoutesWithLayout exact path={"/cart"} Component={Cart}/>
                    <RoutesWithLayout exact path={"/product-details/:id"} Component={ProductDetails}/>
                    <RoutesWithLayout  path={"/"} Component={ProductList}/>
                </Switch>
                <Footer/>

            </BrowserRouter>

        </ThemeProvider>
    )
}

