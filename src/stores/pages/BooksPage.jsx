import React, { useState } from 'react'
import { booksData } from '../data/books'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const BooksPage = () => {  
    const [selectedProduct , setSelectedProduct]= useState([])
    const companyHandler =(mango)=>{
        if(selectedProduct.includes(mango)){
            setSelectedProduct(selectedProduct.filter(item=> item !== mango))
        }else{
            setSelectedProduct([...selectedProduct, mango])
        }
    }
    const filteredProduct = selectedProduct.length === 0 ?
    booksData : booksData.filter((orange)=>selectedProduct.includes(orange.title))

  return (
    <>
    <Navbar />
 <div className="fullpage">
    <div className="pro-selected">
        {booksData.map((phone)=>{
            return(
                <div>
                    <label>
                        <input type="checkbox"
                        checked={selectedProduct.includes(phone.title)}
                        onChange={()=>companyHandler(phone.title)} />
                        {phone.title}
                    </label>
                </div>
            )
        })}
    </div>

    <div className='pageSection'>
        {filteredProduct.map((item)=>{
            return(
                <div>
                    <Link to={`/books/${item.id}`}>
                    <div className="pageImg">
                        <img src={item.image} alt="Image" />
                    </div></Link> <br /><br /><br /><br /><br /><br /><br /><br />
                    <div className="proModel">
                        {item.title},{item.author}
                    </div>
                </div>
            )
        })}
        </div>
        </div>
    </>
  )
}

export default BooksPage