import React, { Fragment, Component } from 'react';
import{Row}  from 'react-bootstrap'
import ButtonGene from './buttonGene';
import Waiters from './waiters';
import Dialog from './dialog';

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

            <Fragment>

                <Row>

                {this.state.isEmptyState && <ButtonGene title='Mesero' onClick={this.changeAddTripState} />}

                {this.state.isChangeState && <Waiters  />  }  {' '}
               
                {this.state.isEmptyStateCook && <ButtonGene title='cocina'  onClick={this.changeAtCookState} />}

                {this.state.isChangeStateCook && <Dialog title = "sirve"/>} {' '}

                </Row>
            </Fragment>
        )

    }
}

export default ButtonsRol

