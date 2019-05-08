import React, { useState } from 'react';
import './clickGuest.css'


const onGuest = props => {
  const [name, setName] = useState("apple")
  return (
    <div className="grid-35 grid-35-border">
      <div className = "trench trench-large no-background" >
        <div className = "grid-100 v-spacing-large" >
        </div>
        <div className = "grid-align-center v-spacing-large artreg-guestCheckoutSec" >
          <div className = "badge lowes" >
            <span className = "icon-check art-reg-signIcon">
            </span>
          </div >
          <div >
            <h3 className = "art-reg-guestCheckoutHeader" > Guest Checkout
            </h3>
          </div >
        </div>
        <div className = "grid-align-center v-spacing-jumbo" >
          <a href = "/checkout/payment"
            className = "btn btn-add btn-block js-checkout-redirect art-reg-guestCheckoutBtn" > Continue As Guest
          </a>
        </div >
        <div className = "grid-align-center v-spacing-small" >
          <p className = "art-reg-guestCheckoutPayWith" > Or pay with: < /p>
        </div>
        <div className = "grid-align-center v-spacing-small js-visa-data">
          <img
            className="v-button art-reg-visaCheckOutBtn"
            role = "button"
            alt = "Visa Checkout"
            src = "https://secure.checkout.visa.com/wallet-services-web/xo/button.png?cobrand=false"
             />
        </div>
      </div >
    </div>
  )
}

export default onGuest;
