import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


export default function Checkout() {
    function handleToken(token, addresses){
        console.log(token, addresses)
    }
    return (
        <div>
            <StripeCheckout stripeKey="pk_test_51HIs8rLCiGJS3b8yYqo7wJJ1WS4I0DzlQQkM4PwlwNzhwAgWITlircHnSPUYlQ85A1bizrWwaRoldiwEz5e5Xq3M00C5Lqwden" token={handleToken} billingAddress shippingAddress amount={10000}/>
        </div>
    )
}
