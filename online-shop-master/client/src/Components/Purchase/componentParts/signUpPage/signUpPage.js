import React, { useState, useEffect } from 'react';
import './signUpPage.css';
import MailMyCard from './mailMyCard'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const signUpPage = props =>{

  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [email, setemail] = useState("")
  const [phonenumber, setphonenumber] = useState("")
  const [password, setpassword] = useState("")
  const [confirmpassword, setconfirmpassword] = useState("")
  const [subscript, setSubscript] = useState(true)
  const [lowesCard, setLowesCard] = useState("1")

  const [myLowesForm, setMyLowesForm] = useState(null)

  useEffect(()=>{
    setMyLowesForm({
      firstName,
      lastName,
      email,
      phonenumber,
      password,
      confirmpassword,
      subscript,
    })
  })

  const changeSubscript=()=>{
    // setSubscript((subscript === true )? false: true)
        setSubscript(!subscript)
  }

  return(
    <div>
        <div className="grid-65 signintolowes-container">
        <div className="js-account-registration met-mylowes-registration">
          <div className="form-row">
            <div className="form-group grid-50 mobile-grid-100">
              <label
                id="ada-firstname"
                htmlFor="firstname-input">First Name:
              </label>
              <input
                name="firstName"
                type="text"
                className="form-control ctHidden"
                id="form-control ctHidden"
                placeholder="First Name"
                onChange={(e)=>setfirstName(e.target.value)}
              />
            </div>
            <div className="form-group grid-50 mobile-grid-100">
              <label
                id="ada-lastname"
                htmlFor="lastName-input">Last Name:
              </label>
              <input
                name="lastName"
                type="text"
                className="form-control ctHidden"
                id="form-control ctHidden"
                placeholder="Last Name"
                onChange={(e)=>setlastName(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group grid-50 mobile-grid-100">
              <label
                id="ada-email"
                htmlFor="email-input">Email Address:
              </label>
              <input
                name="email"
                type="text"
                className="form-control ctHidden"
                id="form-control ctHidden"
                placeholder="E-Mail"
                onChange={(e)=>setemail(e.target.value)}
              />
            </div>
            <div className="form-group grid-50 mobile-grid-100">
              <label
                id="ada-phone-number"
                htmlFor="phone-number-input">Phone Number:
              </label>
              <input
                name="phone-number"
                type="text"
                className="form-control ctHidden"
                id="form-control ctHidden"
                placeholder="Phone Number"
                onChange={(e)=>setphonenumber(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group grid-50 mobile-grid-100">
              <label
                id="ada-password"
                htmlFor="password-input">Password:
              </label>
              <input
                name="password"
                type="password"
                className="form-control ctHidden"
                id="form-control ctHidden"
                placeholder="Password"
                onChange={(e)=>setpassword(e.target.value)}
              />
            </div>
            <div className="form-group grid-50 mobile-grid-100">
              <label
                id="ada-confirm-password"
                htmlFor="confirm-password-input">Confirm Password:
              </label>
              <input
                name="confirm-password"
                type="password"
                className="form-control ctHidden"
                id="form-control ctHidden"
                placeholder="Confirm Password"
                onChange={(e)=>setconfirmpassword(e.target.value)}
              />
            </div>
          </div>

          <label>
          <input
              name="subscript"
              type="checkbox"
              checked={subscript}
              onChange={changeSubscript}
              />
              I'd like to receive exclusive email offers, special promotions and project inspiration.
          </label>

          <div>
            <p><b>Select a mylowes Card Option</b></p>
            <div className="select-a-mylowes-card-option">
              <div className="radio">
                <label>
                <input
                    name="1"
                    type="checkbox"
                    checked={(lowesCard === "1")? true: false}
                    onChange={()=>setLowesCard("1")}
                    />
                  I'll use my phone number to track my in-store purchases. I don't want a physical MyLowe's card.
                </label>
              </div>
              {(lowesCard==="1")?<p>Note: You'll still be assigned a MyLowe's card number.</p>:""}


              <div className="radio">
                <label>
                <input
                    name="2"
                    type="checkbox"
                    checked={(lowesCard === "2")? true: false}
                    onChange={()=>setLowesCard("2")}
                    />
                  I already have a MyLowe's card.
                </label>
              </div>
              {(lowesCard==="2")?<input type="text" placeholder="Your MyLowe's Card Number" />:""}


              <div className="radio">
                <label>
                <input
                    name="3"
                    type="checkbox"
                    checked={(lowesCard === "3")? true: false}
                    onChange={()=>setLowesCard("3")}
                    />
                  Mail me a MyLowe's card.
                </label>
              </div>
              {(lowesCard==="3")?
                <MailMyCard
                 onMailMyCard={(e)=>console.log(e.target.name)}/>:""}
            </div>
          </div>
          <p>By clicking Create Account, you agree to the Terms and Conditions.</p>

          <div className="grid-33 prefix-33 suffix-33 tablet-grid-50 tablet-prefix-25 tablet-suffix-25">
            <button
              className="btn btn-block btn-primary js-register-submit met-create-account art-signIn-createAccount-btn"
              onClick={()=> {
                props.history.push("/checkout/payment")
                console.log(myLowesForm)}}>
              CREATE ACCOUNT
            </button>
          </div>
        </div>
      </div>

      <div className="grid-35">
        <img
          className="img-fluid"
          src="https://www.lowes.com/images/mylowes/account/promotions/customer_view_signUp.png"
          alt="What Can MyLowe's Do For You? Make returns easier. Track your in-store purchases with your MyLowe's card or phone number. Remind you to buy things like filters. Keep an online inventory of your home. Save your shopping lists for easy mobile access." />
      </div>


    </div>
  )
}

export default withRouter(connect()(signUpPage));
