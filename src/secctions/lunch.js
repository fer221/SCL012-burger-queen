import React, { Component } from 'react';
import MenuCards from '../components/menuCards.js'
import Data from "../data/menu.json";
//import db from './confg/firebase';




class LunchMenu extends Component {
  constructor() {
    super() ;
    this.state = {menu: Data.Lunch} 
    console.log()
  }


   /* constructor() {
      super();
      this.state = {
        menuA: []
      }
    }
    
    componentDidMount(){
      db.collection('Menualmuerzo').get().then((querySnapshot) => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({
          menuA:data
        })
      
        console.log("STATE:", this.state);
      })
          
    }*/
    render(){
      return (      
        this.state.menu.map((e =>
          <MenuCards
          key = {e.id}
          img = {e.img}
          name = {e.name}
          price = {e.price}
          />)
          )
      )
   }    
      
    }
  
    export default LunchMenu;