import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import '../App.css';
import LunchMenu from './lunch'
import Breackfast from './breakfast'
import NameClient from './nameClient'
import db from '../components/confg/firebase';



class Waiters extends Component{
  constructor(props){
    super(props);
    this.menuBreackfastClick = this.menuBreackfastClick.bind(this);
    this.menuLunchClick = this.menuLunchClick.bind(this);
    this.state = {
      client: "",
      table: "",
      order: [],
      breakfast:false,
      lunch:false
    };
  }
   //Función que actualiza el estado de Cliente
   inputClient(clientName) {
    this.setState({
      client: clientName
    });
   
  }
// Función que actualiza el estado de la mesa
  selectTable(tableNumber) {
    this.setState({
      table: tableNumber
    });
  }

  // Actualiza el estado global
  addOrder(item) {
    this.setState(previousState => ({
      order: [...previousState.order, item]
    }));
    console.log(this.state.order);
  }
  // Función que elimina el pedido y actualiza el state
  deleteOrder = index => {
    let currentOrder = [...this.state.order];
    currentOrder.splice(index, 1);
    this.setState({
      order: currentOrder
    });
  };

  resetState() {
    this.setState({
      client: "",
      table: "",
      order: []
    });
  }
  //Función que guarda los datos de la colección en firebase
  saveOrder() {
    console.log('este es el console ' + this.state.client);
    console.log('esta es la mesa' + this.state.table);
    db.collection('orders').add({
      client: this.state.client,
      table: this.state.table,
      order: this.state.order,
      time: new Date(),
      cooked: 'PREPARANDO',
      delivered: 'NO',
    })
    .then((docRef) => {
      this.resetState();
      console.log(docRef);
    })
    .catch((error) => {
      console.log('Error ', error);
    });

  };


  menuBreackfastClick(){
    this.setState({
      breakfast:true,
      lunch:false
    })
  }
  menuLunchClick(){
    this.setState({
      lunch:true,
      breakfast:false

    })
  }

render(){

  return(


  <div className="tile is-vertical is-12">
    <div className="tile">
      <div className="tile is-parent is-vertical">
        <article className="tile is-child notification is-warning">        
          <ul>
          <NameClient 
          inputClient={this.inputClient.bind(this)}
          client={this.state.client}
          selectTable={this.selectTable.bind(this)}
          onClick={this.saveOrder.bind(this)}/>
            <button onClick={this.menuBreackfastClick}className="btn btn-warning text-white">Desayuno</button>
            <button onClick={this.menuLunchClick}className="btn btn-warning text-white">Almuerzo/Cena</button>
            <button className="btn btn-warning text-white">Comandas</button>
          </ul>
     
        </article>

      </div>
      <div className="tile is-parent">
      <article className="tile is-child notification is-primary">
        <p classname="subtitle">Mesa: {this.selectTable}</p>
        <p className="subtitle">Cliente: {this.inputClient}</p>
        <div className="content">
     
        </div>
      </article>
    </div>
    </div>
      
      <div className="tile is-parent is vertical">
        <article className="tile is-child notification ">
         
         {this.state.breakfast
          ?<Breackfast/>
          :" "}
          {this.state.lunch
          ? <LunchMenu/>
          : " "}
    
        </article>
      </div>

  </div>





 


  )
}
}


export default Waiters