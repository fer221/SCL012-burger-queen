import React, { Fragment, useState } from "react";

import '../assets/css/formulario.css';


const Formulario = (props) => {

    const [datos, setDatos] = useState({
        nombre: '',
        password: ''
    })

    const handleInputChange = (event) => {

        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.password)
    }

    return (

        <Fragment>        
            <headers className="flex-column"class="title">
                <h1>Bienvenido {datos.nombre} <br></br>a Burger Queen</h1>

            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input type="name" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                </div>
                <div className="col-md-3">
                    <input type="password" placeholder="Password" className="form-control" onChange={handleInputChange} name="password"></input>
                </div>

                <button type="submit" onClick={props.addTrip} className="btnm">Ingresar</button>
            </form>
            </headers>

        </Fragment>
    );
}

export default Formulario;