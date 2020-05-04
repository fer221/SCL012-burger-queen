import React, { Component } from 'react';
import ButtonGene from './buttonGene';
import Waiters from '../secctions/waiters';
import Dialog from './dialog';
import '../assets/css/formulario.css';

class ButtonsRol extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEmptyState: true,
            isEmptyStateCook: true,
        }
       
    }
  
    changeAddTripState = () => {
        this.setState({
            ...this.state,
            isEmptyState: false,
            isChangeStateCook : false,
            isEmptyStateCook: false,
            isChangeState: true
        })
    }

    changeAtCookState = () => {
        this.setState({
            ...this.state,
            isEmptyStateCook: false,
            isEmptyState : false,
            isChangeState: false,
            isChangeStateCook: true

        })
    }
 
    render() {

        return (

            <div>

                {this.state.isEmptyState && <ButtonGene title='Mesero' onClick={this.changeAddTripState} />}

                {this.state.isChangeState && <Waiters />  }  {' '}
               
                {this.state.isEmptyStateCook && <ButtonGene title='cocina'  onClick={this.changeAtCookState} />}

                {this.state.isChangeStateCook && <Dialog title = "sirve"/>} {' '}

     
            </div>
        )

    }
}

export default ButtonsRol;