import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import App from "./App";
import LifeCycleMethods from "./components/functional-components/LifeCycleMethods";
import LoginForm from "./LoginForm";

function MyAppRoutes(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/lifecycle" element={<LifeCycleMethods/>}/>
            <Route path="/login" element={<LoginForm/>}/>
        </Routes>
        </BrowserRouter>
    );
}
export default MyAppRoutes;