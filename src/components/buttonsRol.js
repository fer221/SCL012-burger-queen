import React, { Fragment, Component } from 'react';
import ButtonGene from './buttonGene';
import Waiters from './waiters';
import Dialog from './dialog';
import '../assets/css/formulario.css';

class ButtonsRol extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEmptyState: true,
            isEmptyStateCook: true
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
            <Fragment>
                {this.state.isEmptyState && <ButtonGene title='Mesero' className="btne"onClick={this.changeAddTripState} />}

                {this.state.isChangeState && <Waiters />}{' '}

                {this.state.isEmptyStateCook && <ButtonGene title='cocina' className="btnc" onClick={this.changeAtCookState} />}

                {this.state.isChangeStateCook && <Dialog title = "sirve"/>}

            </Fragment>
        )

    }
}

export default ButtonsRol;

