import React, { Component } from 'react';
import '../App.css';
import './nameClient.css'



class NameClient extends Component {
 
    handleChange = (e) => {
    
        const cliente = e.target.value
        console.log(cliente)  
        //aqui puede ir un setState
    }


    render() {
        return (
            <div className='clientID'>
                <div className='client'>

                <label className='titleClient'>Nombre del Cliente:</label>
                
                <input 
                onChange={(e) => this.handleChange(e)} 
                className='inputClient'
                type='text'
                name='client'
                value={''}
                />


                <p className='titleClient'>Mesa:</p>

                <select className='mesa'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                   
                </select>

                </div>
               
                </div>
               
        )
    }

}

export default NameClient;