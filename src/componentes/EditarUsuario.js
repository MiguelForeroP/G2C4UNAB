import axios from "axios";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";


class EditarUsuario extends Component{
    path = null;
    url =[];
    usuarioId = null;
    nombre = React.createRef();
    apellido = React.createRef();
    correo = React.createRef();
    pass = React.createRef();


    state = {
        usuario:[],
        status:null
    }

    componentWillMount(){
        this.path = window.location.pathname;
        this.url = this.path.split("/");
        this.usuarioId = this.url[2];
        this.getUsuario(this.usuarioId);
    }

    getUsuario = (id) => {
        axios.get("http://localhost:8080/api/usuarios/"+id)
            .then(res =>{
                this.setState({
                    usuario:res.data.usuario
                })
            })
            .catch(function(error){
                console.log(error)
            })
    }

    actualizarUsuario = (e) => {
        e.preventDefault();
        var usuario = {
            nombre: this.nombre.current.value,
            surname: this.apellido.current.value,
            email: this.correo.current.value,
            pass: this.correo.current.value,
        }

        axios.put("http://localhost:8080/api/actualizar/"+this.usuarioId,usuario)
            .then(res =>{
                this.setState({
                    status: "success"
                })
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
                <h1>Editar Usuario</h1>
                <form onSubmit={this.actualizarUsuario}>
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombre" defaultValue={this.state.usuario.name} ref={this.nombre}/>
                </div>
                <div class="mb-3">
                    <label for="apellido" class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="apellido" defaultValue={this.state.usuario.surname} ref={this.apellido}/>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Correo</label>
                    <input type="email" class="form-control" id="email" defaultValue={this.state.usuario.email} ref={this.correo}/>
                </div>
                <div class="mb-3">
                    <label for="pass" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="pass" defaultValue={this.state.usuario.password} ref={this.pass}/>
                </div>
                <button type="submit" class="btn btn-primary">Actualizar</button>
                </form>
                </div>
            </React.Fragment>
        );
    }
}

export default EditarUsuario;