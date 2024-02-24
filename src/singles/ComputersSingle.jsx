import React from 'react'
import { computerData } from '../stores/data/computers'
import { useParams } from 'react-router-dom'
import Navbar from '../stores/components/Navbar'
import { useCart } from '../stores/context/CartContext'

const ComputersSingle = () => {
  
    const {id}= useParams()
    const {addToCart,cartItems}= useCart();

    const product = computerData.find((item)=>item.id === id)
    console.log(id)

    return(
        <>
        <Navbar />
        <div className="ind-section">
        <div className="ind-image">
            <img src={product.image} alt="Image" />
        </div>
        <div className="ind-details space">
            <div className="ind-company space">
                <h2>{product.company}</h2>
            </div>
        <div className="ind-model space">
            <h2>{product.model}</h2>
        </div>
        <div className="ind-price space">
            <h3>{product.price}</h3>
        </div>
        <div className="ind-desc space">
            <p>
                {product.description}
            </p>
        </div>
        <button onClick={()=>addToCart(product)}>Add To Card</button>
        </div>
    </div>
    </>
    )
}

export default ComputersSingle