import React from 'react';
import Navbar from "../Navbar";
import Footer from "../footer/Footer"
import AmulProduct from "../Products/AmulProduct"
import { NescafeData } from '../Products/NescafeData';
function Nescafe() {
    return (
        <div>
            <Navbar />
            <AmulProduct heading="Welcome to Nescafe" data={NescafeData}/>


            <Footer />
        </div>
    )
}

export default Nescafe
