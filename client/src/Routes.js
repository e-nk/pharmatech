import { Route, Switch } from "react-router-dom";
import Home from './Pages/Home'
import React from "react";

export const Routes =() => (
    <Switch>
        <Route path="/">
            <Home/>
        </Route>
        {/* <Route path="/addproduct">
            <AddProduct/>
        </Route> */}
    </Switch>
);