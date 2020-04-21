import React, { Component, Fragment } from 'react';


export default class Dialog extends Component {
    constructor(props) {
        super(props);
        this.props = {
            title: this.props.title,
            message: this.props.message
           
        }
    }
    

 render(){
    return (
       <Fragment>

        <h1>
          {this.props.title}
        </h1>
        <p>
          {this.props.message}
        </p>
    
       </Fragment>

    )
} 
    
}
