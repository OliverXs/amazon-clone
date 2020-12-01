import React from 'react'
import "./Product.css"

function Product({product}) {
    return (
        <div id="Product">
            <p>{product.title}</p>
            <p id="product_style">
                <small>R$</small>
                <span>{product.price}</span>
            </p>
            <div id="product_rating">
                {Array(product.rating).fill().map((_)=>(
                    <p>⭐</p>
                ))}
            </div>
            <div id="product_image">
                <img src={product.image} alt="product image"/>
            </div>
            <div id="button_to_kart">
                    <button>Add to kart</button>
            </div>
        </div>
    )
}

export default Product
