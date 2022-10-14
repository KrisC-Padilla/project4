import '../styles/SignUp.css'

const Checkout = ({cartItems, totalPrice}) => {
  return (
    <div className='signup2'>
        <h1>Choose Payment Method</h1>
        {totalPrice}
        <img src='https://kitchen.besthomescebu.com/uploads/1/2/7/7/12775571/payment-options-icons-visa_orig.png'></img>
        <br></br>
        <div className='proceed'>
          <button className='proceed-button'>PROCEED WITH PAYMENT</button>
        </div>
        
    </div>

    
  )
}

export default Checkout;