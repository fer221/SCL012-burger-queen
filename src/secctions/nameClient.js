import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import '../App.css';
import './nameClient.css';





class NameClient extends Component {

    handleChanges = e => {
        const client = e.target.value;
        this.props.inputClient(client);
    };
  
    handleChange = e => {
        const table = e.target.value;
        this.props.selectTable(table);
    };
    send = e =>{ 
      
        this.props.saveOrder()

    }
    
  
    render() {
        return (
  
        <div className="field has-addons has-addons-right" >
            <p className="control">
                <span className="select" >
                <select onChange={e => this.handleChange(e)}>
                <option >Mesa </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </select>
                </span>
            </p>
            <p className="control">
                <input 
              className="input"
              placeholder="Nombre del cliente"
              onChange={e => this.handleChanges(e)}
              type="text"
              name="client"
              value={this.props.client}/>
            </p>
           
                <button
                 className="button is-primary" 
                 type="submit"
                 onClick={()=>this.send()}
                 title='Enviar a cocina'>
                    Iniciar
                </button>
           
            </div>

                
        )
    }

}

export default NameClient;