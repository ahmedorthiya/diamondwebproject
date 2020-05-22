import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";

import {ThemeProvider} from "@material-ui/styles";
import theme from "../theme";
import RoutesWithLayout from "./RoutesWithLayout";
import {ProductList,ProductDetails} from "../pages";
import {Footer} from "../components";

export default  props=>{
    return(
        <ThemeProvider theme={theme}>

            <BrowserRouter>
                <Switch>
                    <RoutesWithLayout exact path={"/product-details/:id"} Component={ProductDetails}/>
                    <RoutesWithLayout  path={"/"} Component={ProductList}/>
                </Switch>
                <Footer/>

            </BrowserRouter>

        </ThemeProvider>
    )
}

