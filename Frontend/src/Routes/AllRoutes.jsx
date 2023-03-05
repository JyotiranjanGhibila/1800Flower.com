import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Admin from "../Admin/Admin";
import AdminSignin from "../Admin/AdminSignin"


export default function AllRoutes() {

    return (
        <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/admin' element={<Admin />} ></Route>
            <Route path='/adminsignin' element={<AdminSignin />} ></Route>

        </Routes>
    )

}
