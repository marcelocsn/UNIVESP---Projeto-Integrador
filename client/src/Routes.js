import React from "react";
import { Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import Home from './pages/home';
import Cadastro from "./pages/formulario";
import Admin from "./pages/admin";

export default function mainRoutes()  {

    return (
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/login" element = {<Login/>}/>
            <Route path="/cadastro/:id?" element = {<Cadastro/>}/>
            <Route path="/admin" element = {<Admin/>}/>
        </Routes>
    );
}