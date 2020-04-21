import React from 'react';
// import { Button } from 'react-bootstrap';
import ButtonsRol from './components/buttons';	


function WaiterView() {
  let vistaMesero = (
    <div className="waiterApp">
      <ButtonsRol />
    </div>
  )
  return vistaMesero;
}

export default WaiterView;