import React from "react";
import Navbar from "./Navbar";
import Product from "./Products/Product"
import {productData} from "./Products/Data"
import Footer from "./footer/Footer"
function Home(){
    return(
        <div>
            <Navbar />
            <img src="/images/backgroundImage.webp" alt="new" height="700px" width="100%"></img>
            <Product heading="Choose Your Shop" data={productData}/>
            <Footer />
        </div>
    );
}
export default Home;