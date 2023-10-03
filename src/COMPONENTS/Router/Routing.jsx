import React from "react";
import FirstPage from "../PAGES/UserFirstPage/Xpage";
import {Routes,Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import SideBar from "../DashBoard/SideBar";
import DashBoard from "../DashBoard/Dashboard";

export default function Router()
{
    return(
        <div>
        <BrowserRouter>
        <Routes>
            <Route exact path={"/"} element={<FirstPage/>}/>
            <Route exact path={"/dashboard"} element={<DashBoard/>}/>
        </Routes>
        </BrowserRouter>
    </div>
    )
}