import React from 'react';
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap';



const ButtonGene = ({title, onClick}) => {
    return (
        <Button variant="warning text-white" onClick = {onClick}>
            {title}
        </Button>
    )
}

Button.propTypes = {
    title: PropTypes.string,
  
    onClick: PropTypes.func

}

export default ButtonGene;