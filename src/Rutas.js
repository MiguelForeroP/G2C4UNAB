import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Usuarios from "./componentes/Usuarios";
import AgregarUsuario from "./componentes/AgregarUsuario";
import Menu from "./componentes/Menu"
import EditarUsuario from "./componentes/EditarUsuario";


class Rutas extends Component{
    render(){
        return(
             <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<div>HOME</div>} />
                    <Route path="/usuarios" element= {<Usuarios />} />
                    <Route path="/agregarUsuario" element = {<AgregarUsuario />} />
                    <Route path="/editarUsuario/:id" element = {<EditarUsuario />} />
                </Routes>
             </BrowserRouter>
        );
    }
}

export default Rutas;