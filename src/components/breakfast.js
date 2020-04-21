import React, { Component } from 'react';
import db from './confg/firebase';
import "./centralWhite.css"

class Breackfast extends Component {
    constructor(props) {
      super(props);
      this.state = {
        menuA: []
      }
    }
    
    componentDidMount(){
      db.collection('MenuDesayuno').get().then((querySnapshot) => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({
          menuA:data
        })
      
        console.log("STATE:", this.state);
      })
          
    }
    render(){
      return (      
        <div className="containerButtonsMenu">
          
          {this.state.menuA.map((item, key) =>{
              return (
              
                <div  clasName="itemsMenu" key={key}>
              
                  <button className="btn btnMenu">
                    <img alt="foto" src={item.img}></img>
                    <p>{item.Name}</p><p>{item.Precio}</p>
                  </button>
                  
                </div>
              
              ) 
            })          
          }      
        </div>
      )
      }
    }
  
export default Breackfast