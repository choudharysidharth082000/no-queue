
import bootstrap from 'bootstrap'
import './cart.css'
import {useEffect, useState} from 'react'
import Navbar from '../Navbar'
import Card from './cardCart'

const Cart = () =>
{
    
    return(
        <div className="containor_main">
            <Navbar />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            
            
            <div className="final_buttons">
                <div className="buttons_main">
                <button className="proceed">Go Back</button>
                <button className="Back">Proceed</button>
                </div>
            </div>



           
        </div>
    )
}
export default Cart;