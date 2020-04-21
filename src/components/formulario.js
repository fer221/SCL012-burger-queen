import React, { Fragment, Component} from "react";
import '../assets/css/App.css';
import Dialog from './dialog'



class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: [],
            alert: false,
            alertData: {}
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.enviarDatos = this.enviarDatos.bind(this);
    }
    // Mostrar una alerta cuando se envia el formulario
    showAlert(type, message) {
        this.setState({
            alert: true,
            alertData: { type, message }
        });
        setTimeout(() => {
            this.setState({ alert: false });
        }, 4000)
    }

    handleInputChange(event) {


        this.setState({
            ...this.state,
            name: event.target.value,
            password: event.target.value
        });
    }

    enviarDatos(event) {
        event.preventDefault()
      
    }
  
    render() {

        return (

            <Fragment className="clientID">
                {this.state.alert && <div className={`alert alert-${this.state.alertData.type}`} role='alert'>
                    <div className='container'>
                        {this.state.alertData.message}
                    </div>
                </div>}
                <div className="flex-column">
                    <Dialog title="Bienvenido a Burguer Queen" />
                    <form className="row"onSubmit={this.enviarDatos.bind(this)} ref='contactForm' >
                        <div className="col-md-3">
                            <input type="name"
                                placeholder="Nombre"
                                className="form-control"
                                id='name' 
                                name={this.state.name}
                                ref={name => this.inputName = name} 
                                onChange={this.handleInputChange}>

                            </input>
                        </div>
                        <div className="col-md-3">
                            <input type="password"
                                placeholder="Password"
                                className="form-control"
                                password={this.state.password}
                                onChange={this.handleInputChange} >

                            </input>
                        </div>

                        <button type="submit" onClick = {this.props.addTrip} className="btn btn-warning">Enviar</button>
                    </form>
                </div>

            </Fragment>
        )
    }
}

export default Formulario;