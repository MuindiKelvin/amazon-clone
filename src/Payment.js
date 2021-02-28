import React, { useState, useEffect }from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements, response } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from './axios';

function Payment() {
 const [{basket, user}, dispatch] = useStateValue();
 const history = useHistory();
 const stripe = useStripe();
 const elements =useElements();

 const [succeeded, setSucceeded] = useState(false);
 const [processing, setProcessing] = useState("");
 const [error, setError] = useState(null);
 const [disabled, setDisabled] = useState(true);
 const [clientSecret, setClientSecret] = useState(true);

 useEffect(() => {
   //generate the special stripe secret which allows us to charge a customer
   
   const getClientSecret = async () => {
       const reponse = await axios ({ //axios is kinda a request
       method: 'post',  
       //Stripe expects the total in a currencies subunits 
      url: '/payments/create?total=${getBasketTotal(basket) * 100}' 

       });
       setClientSecret(response.data.clientSecret)
   }
    
     getClientSecret();

    }, [basket])

    console.log('THE SECRET IS >>>', clientSecret)

 const handleSubmit = async (event) => {
     //do all the fancy stripe stuff...
     event.preventDefault();
     setProcessing(true);

     const payload = await stripe.confirmCardPayment(clientSecret, {
       payment_method: {
         card: elements.getElement(CardElement)
       }
     }).then(({ paymentIntent }) => {
     // paymentIntent = payment confirmation

       setSucceeded(true);
       setError(null)
       setProcessing(false)

       history.replace('/orders')
     
     })

     }
 const handleChange = event=> {
     //Listen for changes in the CardElement
     // and display any errors as the customer types card details
      setDisabled(event.empty);
      setError(event.error ? event.error.message : "");
 }
 
 return (
    <div className="payment">
      <div className='payment__container'> 
        <h1>
            Checkout (
                <Link to='/checkout'>{basket?.length} items</Link>
                )
        </h1>


       {/*Payment section - delivery address */}
        <div className='payment__section'>
          <div className='payment__title'>
             <h3>Delivery Address </h3>
          </div>
          <div className='payment__address'>
             <p>{user?.email}</p>
             <p>30017, EMBAKASI LANE </p>
             <p>Nairobi, Kenya</p>
          </div>
         </div>
       {/*Payment section -Review items */}
        <div className='payment__section'>
           <div className='payment__title'>
             <h3>Review items and Delivery</h3>
           </div>
           <div className="payment__items">
            {basket.map(item => (
                <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
            ))}
           </div>
          </div>
       {/*Payment section - Payment method */}
      </div>
      <div className='payment__section'>
        <div className="payment__title">
              <h3>Payment Method</h3>
          </div>
        <div className="payment__details">
            {/*Stripe magic will go here */}
             <form onSubmit={handleSubmit}>
                  <CardElement onChange={handleChange}/>
                  <div className='payment__priceContainer'>
                    <CurrencyFormat renderText={(value) => (
                       <h3>Order Total: {value}</h3>
                    )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                            />
                        <button disabled={processing || disabled || succeeded}>
                            <span> {processing ? <p>Processing </p> : "Buy Now"}</span>
                        </button>
                  </div>
                  {/* Errors */}
                  {error && <div>{error}</div>}
             </form>
        </div>

        </div>
    </div>
  );
}

export default Payment;
