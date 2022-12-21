import React, { Component } from "react";
import { Link } from "react-router-dom";


class Barcos extends Component{

    render(){
        return(
            <React.Fragment>
                <h1>Barcos</h1>
                
                <div className = "container">
                <table className ="table mt-5 table-primary table table-hover">
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Propietario</th>
                        <th>Nombre de embarcación</th>
                        <th>Correo</th>
                        <th>Categoria</th>
                        
                        <th>Imagen</th>
                        <th>Acciones</th>
                        </tr>                
                    </thead>
                    <tbody>
                        {
                                        <tr>
                                            <td>625gkglbb25ff222</td>
                                            <td>Peter Jackson</td>
                                            <td>peter@gmail.com</td>
                                            <td>Lujo</td>
                                            <td>photo</td>
                                            <td>
                                                <Link to = {"/editarBarco/"} className ="btn btn-success">
                                                    Editar
                                                </Link>
                                                <button className ="btn btn-danger ms-3" onClick={
                                                    () => {
                                                        this.borrarbarco()
                                                    }
                                                }>
                                                    Eliminar
                                                </button>
                                            </td>
                                        </tr>
    }
                    </tbody>
                </table>
                </div>
                
            </React.Fragment>
        );
    }
}

export default Barcos;