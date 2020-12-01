import './Home.css';
import React from 'react'
import Product from './Product'
import {Demain,Deserto,Iphone,xiaomi,alexa} from "./Setproducts"


function Home() {
    return (
        <div className="home">        
            <img id="Home_banner" src="https://images-na.ssl-images-amazon.com/images/G/32/br-events/2020/PeaskSeason/CyberMonday/Merchandising/756_CM_tallhero_1500x600._CB414622577_.jpg" alt="banner"/>
        
        <div id="products">
            <div id="Products_banner">
                    <Product product={Demain} /> 
                    <Product product={Deserto} /> 
                </div>
            <div id="Products_init">
                    <Product product={alexa} /> 
                    <Product product={Iphone} /> 
                    <Product product={xiaomi} /> 
                </div>
        </div>
        </div>
    )
}

export default Home
