import React from 'react';
import Navbar from "../Navbar";
import Footer from "../footer/Footer"
import AmulProduct from "../Products/AmulProduct"
import { CanteenData } from '../Products/CanteenData';
function Canteen() {
    return (
        <div>
            <Navbar />
            <AmulProduct heading="Welcome to Canteen" data={CanteenData}/>


            <Footer />
        </div>
    )
}

export default Canteen
