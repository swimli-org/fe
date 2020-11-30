import React, {useEffect} from 'react';
import StripeCheckout from 'react-stripe-checkout';

// Components
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';


export default function Checkout() {
    function handleToken(token, addresses){
        console.log(token, addresses)
    }
    
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Checkout | Swimli"
    });
    
    return (
        <div className="container">
            <NavBar />
            <div className="content-wrap">
            <StripeCheckout stripeKey="pk_test_51HIs8rLCiGJS3b8yYqo7wJJ1WS4I0DzlQQkM4PwlwNzhwAgWITlircHnSPUYlQ85A1bizrWwaRoldiwEz5e5Xq3M00C5Lqwden" token={handleToken} billingAddress shippingAddress amount={10000}/>
            </div>
            <Footer />
        </div>
    )
}
