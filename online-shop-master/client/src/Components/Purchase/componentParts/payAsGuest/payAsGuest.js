import React, { useState } from 'react';
import PayAsGuest from './paymentMethod'
import BillingAddress from './billingAddress'
import ContactInfo from './contactInfo'
import AddGiftCard from './addGiftCard'
import SubmitOrderBlock from './submitOrderBlock'
import "./payAsGuest.css";

import { Link } from 'react-router-dom'

const payAsGuest =props=>{
  const [activeGiftCard, setActiveGiftCard] = useState(false);

  return(
    <div>
      <div className="grid-60 payasguess-container fl-left">
        <h2>Payment & Review</h2>
        <h3>Gift Card</h3>
          <p onClick={()=>setActiveGiftCard(!activeGiftCard)}>Add Lowe's Gift Card(s)</p>
          {activeGiftCard?<AddGiftCard />:null}
        <h3>Payment Method</h3>
          <PayAsGuest />

        <h3>Billing Address</h3>
          <BillingAddress />

        <div className="store-location-container">
          <div>
          <h3>Store Location</h3>
            <div>
              <p><b>Chamblee Lowe's</b></p>
              <p>4950 Peachtree Industrial Blvd</p>
              <p>Chamblee, GA 30341</p>
              <p>(770) 220-0153</p>
            </div>
          </div>
        </div>
          <b>Contact Information</b>
          <p>Please enter your contact information.</p>
          <ContactInfo />
      </div>
      <div className="grid-25 payasguess-container fl-left">
        <SubmitOrderBlock />
        <Link to={'/'}>
          <p style={{ color: "#0471AF", fontWeight: "bold", marginBottom: 10 }}><b> &lt; Return to cart </b></p>
        </Link>

      </div>
    </div>
  )
}

export default payAsGuest;
