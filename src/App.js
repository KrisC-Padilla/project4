import React from 'react'
import Data from './components/Data.js';
import Header from './components/Header.js';
import Routers from './components/Routers.js';
import { useState} from 'react';
import CartItem from './components/CartItem.js';


const App = () => {
 
  const {productItems} = Data;
  const [cartItems, setCartItems] = useState([]); 
 

  const handleAddProduct = (product) =>{
  const productExist = cartItems.find((item)=>item.id === product.id);

    if(productExist){
      setCartItems(cartItems.map((item) => item.id === product.id ?
      {...productExist, quantity: productExist.quantity + 1 } : item));
    } else{
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  };

  const handleRemoveProduct =(product) =>{
  const productExist = cartItems.find((item)=>item.id === product.id);
  if (productExist === 1){
    setCartItems(cartItems.filter((item)=> item.id !== product.id));
  }else {
    setCartItems(cartItems.map((item)=>item.id === product.id
    ? {...productExist, quantity: productExist.quantity - 1 }: item));
  }
  };

  const clearCart =() =>{
    setCartItems([]);
  }


  return (
    <div>
      
       <Header cartItems={cartItems}/>
       <Routers productItems={productItems} 
                cartItems={cartItems}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct = {handleRemoveProduct}
                clearCart ={clearCart}
        />
     
    </div>
  )
}

export default App;