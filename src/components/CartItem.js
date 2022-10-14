import '../styles/CartItem.css';
import {useNavigate} from "react-router-dom";

const CartItem = ({cartItems,handleAddProduct,handleRemoveProduct,clearCart }) => {

  
  const navigate =useNavigate();
  const routeChange = () => {
    const path = '/checkout';
    navigate(path);
  }
   
  const totalPrice = cartItems.reduce((price, item)=>
        price + item.quantity * item.price, 0);

  return (
    
    <div className='cart-items'>
        <h2 className='cart-items-header'> 
             Checkout Cart Items 
        </h2>
        
        <div className='clear-cart'>
             {cartItems.length >= 1 &&(
              <button className='clear-cart-button'
              onClick={clearCart}>Clear Cart</button>
             )}
        </div>

        {cartItems.length === 0 && (
            <div className='cart-items-empty'>
                 No items are added in the cart.
            </div>
        )}  
              
        <div>
          {cartItems.map((item)=>(
            <div key={item.id} className='cart-items-list'>
              <img 
                   className='cart-items-image'
                   src={item.image} 
                   alt={item.name} 
              />
              <div className='cart-items-name'>{item.name}</div>
              <div className='cart-items-function'>
                <button className='cart-items-add'
                        onClick={()=>handleAddProduct(item)}>+</button>

                <button className='cart-items-remove'
                        onClick={()=> handleRemoveProduct(item)}>-</button>
              </div>

              <div className='cart-items-price'>
                  No. of items: {item.quantity}  <br></br>
                  Price: ₱ {item.price.toFixed(2)}
              </div>
            </div>
            
          ))}

           <div className='cart-items-total-price-name'>
                 Total Amount Due: 
                 <div className='cart-items-total-price'>
                     ₱ {totalPrice.toFixed(2)}
                 </div>
           </div>  
           <div className='checkout'>
            
           <button className='checkout-button' onClick={routeChange}>CHECK OUT ITEMS NOW</button>
           </div>
        </div>     
    </div>
  )
}

export default CartItem;