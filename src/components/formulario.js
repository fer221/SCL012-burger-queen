import React, { Component} from "react";
import '../assets/css/App.css';
import logo from "../assets/images/burgerQueen.png";
// import firebase from 'firebase';



class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: [],
            name:'',

        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.enviarDatos = this.enviarDatos.bind(this);
    }
  

    handleInputChange(event) {
        this.setState({
            ...this.state,
            name: event.target.value,
            password: event.target.value
        });
    }

    enviarDatos(event) {
        
        alert(`welcome, ${this.state.name}`);
        console.log(this.state.name)

        event.preventDefault()
    }


    render() {

        return (
<>
        <img 
		    alt="logo" 
			src={logo} 
        />
<form onSubmit={this.enviarDatos}>
    <div className="field">
        <p className="control has-icons-left has-icons-right">
            <input type="name"
                placeholder="Nombre"
                className="form-control"
                id='name' 
                name={this.state.name}
                onChange={this.handleInputChange}>
            </input>
            <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
            </span>
        </p>
    </div>
    <div className="field">
        <p className="control has-icons-left">
            <input type="password"
                placeholder="Password"
                className="form-control"
                password={this.state.password}
                onChange={this.handleInputChange} >
            </input>
            <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
            </span>
        </p>
    </div>
    <div className="field">
        <p className="control">
          
            <button 
            type="submit"
            onClick= {this.props.addTrip} 
            className="btn btn-warning text-white"
            >Entrar</button>
          
        </p>
    </div>
</form>     
</>

          
        )
    }
}

export default Formulario;