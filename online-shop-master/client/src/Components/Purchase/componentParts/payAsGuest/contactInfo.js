import React, { useState } from 'react';
import './payAsGuest.css'

const contactInfo =()=>{
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('')
  const [subscript, setSubscript] = useState(false)
  const [signUpAccount, setSignUpAccount] = useState(false)

  return(
    <div className="card card-two card-primary brd-none v-spacing-jumbo">
      <div className="form-group grid-70 auto-cc-input mobile-grid-100 ">
        <label id="ada-email">
          Email
        </label>
        <input
          name="email"
          type="text"
          value={email}
          className="form-control ctHidden"
          id="form-control ctHidden"
          placeholder="Enter Email Address"
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div className="form-group grid-70 mobile-grid-100">
        <label id="ada-phone-number">
          Phone Number
        </label>
        <input
          name="phone-number"
          type="text"
          value={phoneNumber}
          className="form-control ctHidden"
          id="form-control ctHidden"
          placeholder="Phone Number"
          onChange={(e)=>setPhoneNumber(e.target.value)}
        />
      </div>


      <label>
      <input
          name="subscript"
          type="checkbox"
          checked={subscript}
          onChange={()=>setSubscript(!subscript)}
          />
          I'd like to receive exclusive email offers, special promotions and project inspiration.
      </label>
      <hr />
      <label>
      <input
          name="signUpAccount"
          type="checkbox"
          checked={signUpAccount}
          onChange={()=>setSignUpAccount(!signUpAccount)}
          />
          I'd like to receive exclusive email offers, special promotions and project inspiration.
      </label>
    </div>
  )
}

export default contactInfo;
