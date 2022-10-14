import React from 'react';
import '../styles/Items.css';


const Items = ({ productItems, handleAddProduct, handleRemoveProduct }) => {
  return (
    <div className='products'>

       {productItems.map((productItem) => (
        <div className='card'>
            <div>
                <img className='product-image'
                     src={productItem.image} 
                     alt={productItem.name} 
                />
            </div>
            <div className='product-name'>
                <h3>
                    {productItem.name} 
                </h3>    
                <p className='product-description'>{productItem.description}</p>  
                <p className='product-price'>{productItem.price}</p>    
                
            </div>
           <div>
                <button 
                  className='product-addbttn'
                  onClick={() => handleAddProduct(productItem)}
                >ADD TO CART</button>
           </div>
        </div>
       ))}
    </div>
  )
}

export default Items;