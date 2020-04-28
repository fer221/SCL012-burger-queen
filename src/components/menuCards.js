import React , { Component } from 'react'
import "./menuCards.css";

class MenuCards extends Component{
    render(){
        return <button className="cardMenu">

            <img src={this.props.img} alt='icon' className="imgMenu"></img>
            <h1 className="name">{this.props.name}</h1>
            <h1 className="price">{this.props.price}</h1>

        </button>
    }
}
export default MenuCards