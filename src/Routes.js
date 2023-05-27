import { Route, Switch } from "react-router-dom";
import Home from './Pages/Home'
import Login from "./Pages/Login";
import React from "react";
import Wishlist from "./Pages/Wishlist";

export const Routes =() => (
    <Switch>
        <Route path="/">
            <Home/>
        </Route>
        <Route path="/auth">
            <Login/>
        </Route> 
        <Route path="/wishlist">
            <Wishlist/>
        </Route> 
    </Switch>
);