import React, { Component } from 'react';
import MenuCards from '../components/menuCards.js'
import Data from "../data/menu.json";
//import db from './confg/firebase';


class Breackfast extends Component {
  constructor() {
    super() ;
    this.state = {menu: Data.Breakfast} 
    console.log()
  }

    /*constructor(props) {
      super(props);
      this.state = {
        menuA: []
      }
    }
    
    /*componentDidMount(){
      db.collection('MenuDesayuno').get().then((querySnapshot) => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({
          menuA:data
        })
      
        console.log("STATE:", this.state.menuA);
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
  
export default Breackfast