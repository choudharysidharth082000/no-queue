import React from 'react';
import Navbar from "../Navbar";
import Footer from "../footer/Footer"
import AmulProduct from "../Products/AmulProduct"
import { amulData } from '../Products/AmulData';
function Amul() {
    return (
        <div>
            <Navbar />
            <AmulProduct heading="Welcome to Amul" data={amulData}/>


            <Footer />
        </div>
    )
}

export default Amul
