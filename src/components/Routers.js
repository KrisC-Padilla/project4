import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Items from './Items';
import SignUp from './SignUp';
import CartItem from './CartItem';
import Checkout from './Checkout';
import Header from './Header';


const Routers = ({productItems, cartItems, handleAddProduct, handleRemoveProduct, clearCart }) => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Items productItems={productItems} 
                                        handleAddProduct={handleAddProduct}/>}></Route>
{/*         
        <Route path='/header' element={<Header/>}>/Route</Route> */}

        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/cart' element={<CartItem cartItems={cartItems}
                                               handleAddProduct={handleAddProduct}
                                               handleRemoveProduct={handleRemoveProduct}
                                               clearCart={clearCart}/>}></Route>
        
        <Route path='/checkout' element={<Checkout cartItems={cartItems}/>}></Route>
    
    



      </Routes>



     

    </div>
  )
}

export default Routers;