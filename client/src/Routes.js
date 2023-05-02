import React from "react";
import { Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import Home from './pages/home';
import Cadastro from "./pages/formulario";
import Admin from "./pages/admin";
import Update from "./pages/update";

export default function mainRoutes()  {

    return (
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/login" element = {<Login/>}/>
            <Route path="/cadastro" element = {<Cadastro/>}/>
            <Route path="/admin" element = {<Admin/>}/>
            <Route path="/update/:email?" element = {<Update/>}/>
        </Routes>
    );
}