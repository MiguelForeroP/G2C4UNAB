import React, { Component } from "react";

class Menu extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">Renta de Barcos</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  
                  
                  <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Usuarios
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/usuarios">Listar Usuarios</a></li>
                        <li><a className="dropdown-item" href="/agregarUsuario">Agregar Usuario</a></li> 
                        </ul>
                  </li>
                  <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Barcos
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/usuarios">Listar Barcos</a></li>
                        <li><a className="dropdown-item" href="/agregarUsuario">Agregar Barcos</a></li> 
                        </ul>
                  </li>   
                  <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Reservas
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/usuarios">Listar Reservas</a></li>
                        <li><a className="dropdown-item" href="/agregarUsuario">Agregar Reservas</a></li> 
                        </ul>
                  </li>    

           
                </ul>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav> 
        );
    }
}

export default Menu;