import axios from "axios";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class AgregarUsuario extends Component{
    nombre = React.createRef();
    apellido = React.createRef();
    correo = React.createRef();
    pass = React.createRef();

    state = {
        usuario:{},
        state:null,
    }

    changeState = () =>{
        this.setState({
            name: this.nombre.current.value,
            surname: this.apellido.current.value,
            email: this.correo.current.value,
            pass: this.pass.current.value,
        })

        console.log(this.state);
    }

    guardarUsuario = (e) =>{
        e.preventDefault();
        console.log(this.nombre.current.value);
        console.log(this.apellido.current.value);
        console.log(this.correo.current.value);
        console.log(this.pass.current.value);
        this.changeState();

        var usuario = {
            nombre: this.nombre.current.value,
            surname: this.apellido.current.value,
            email: this.correo.current.value,
            pass: this.pass.current.value,
        }

        axios.post("http://localhost:8080/api/guardarUsuario", usuario)
            .then(res=>{
                this.setState({
                    status: "success",
                    usuario:res.data
                });
            })
            .catch(function(error){
                console.log(error)
            })
    }

    render(){
        if(this.state.status === "success"){
            return <Navigate to = "/usuarios" />
        }
        return(
            <React.Fragment>
                <div className = "container">
                <h1>Agregar Usuario</h1>
                <form onSubmit={this.guardarUsuario}>
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombre" name = "nombre" ref = {this.nombre} onChange={this.changeState}/>
                </div>
                <div class="mb-3">
                    <label for="apellido" class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="apellido" name = "apellido" ref = {this.apellido} onChange={this.changeState}/>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Correo</label>
                    <input type="email" class="form-control" id="email" name = "email" ref = {this.correo} onChange={this.changeState}/>
                </div>
                <div class="mb-3">
                    <label for="pass" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="pass" name = "pass" ref = {this.pass} onChange={this.changeState}/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                </div>
            </React.Fragment>
        );
    }
}

export default AgregarUsuario;

