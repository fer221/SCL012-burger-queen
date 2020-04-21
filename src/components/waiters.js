import React, { Component } from 'react'
import{Nav, Col, Row}  from 'react-bootstrap'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import '../App.css';
import './waiters.css';
import './centralWhite.css'
import Dialog from './dialog'
import LunchMenu from './lunch'
import Breackfast from './breakfast'
import NameClient from './nameClient'



class Waiters extends Component{
  state = {
    client: "",
    table: "",
    order: []
  };

  actualizarCliente(nombreCliente) {
    this.setState({
      client: nombreCliente
    });
  }

  actualizarMesa(numeroMesa) {
    this.setState({
      table: numeroMesa
    });
  }
 
  // Actualiza el estado global
  addOrder(item) {
    this.setState(previousState => ({
      order: [...previousState.order, item]
    }));
    console.log(this.state.order);
  }


render(){

  return(
  <div className='row' >
        <NameClient />
  <div className="menuDiv" >

    <div>
  
      <TabContainer defaultActiveKey="first">
        <Row>
            <Col sm={3} >
                <Nav variant = "pills" className="column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Desayuno</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second" >Almuerzo/Cena</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tercero">Comandas</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            <Col  className="menu">
             <TabContent  className="containerButtonsMenu" >
              <TabPane eventKey="first">
                <Breackfast />
              </TabPane>
              <TabPane clasName="itemsMenu" eventKey="second">
                <LunchMenu />
              </TabPane>
              <TabPane clasName="itemsMenu" eventKey="tercero">
                <Dialog title = 'aca va template de comandas listas' />
              </TabPane>
            </TabContent>
           </Col>
        </Row>
      </TabContainer>
    </div>
    
  </div>
  <div className="orderStatus">
   
  </div>

</div>

  )
}
}


export default Waiters