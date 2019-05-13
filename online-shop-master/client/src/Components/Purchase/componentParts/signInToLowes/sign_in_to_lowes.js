import React, { useState } from 'react';
import './signintolowes.css';
import Guest from '../otherPayment/onGuest';
import SignUp from '../signUpPage/signUpPage';

const signInToLowes=props=>{
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [joinLowes, setJoinLowes] = useState(false)

  const onSignInSubmit=()=>{
    console.log(`fill this in API ${emailInput} and ${passwordInput}`)
  };

  return(
    (!joinLowes)?(
    <div>

      <div className="grid-65 signintolowes-container">
        <div className="signintoTitle">
          <div className="lowesBadge">
            <span className="lowesIcon"></span>
          </div>
          <div className="lowesTitle">
            <h3 className="">Sign in to MyLowe's</h3>
          </div>
        </div>

        <div className="inputContain">
          <input
            type="text"
            placeholder="E-Mail Address"
            onChange={e=> setEmailInput(e.target.value)}
            value={emailInput}
            name="email"
            className="inputBox"
            required
          />
        </div>
        <div className="inputContain">
          <input
            type="password"
            placeholder="Password"
            onChange={e=> setPasswordInput(e.target.value)}
            value={passwordInput}
            name="password"
            className="inputBox"
            required
          />
        </div>
        <button className="submitBtn" onClick={onSignInSubmit}>SIGN IN</button>
        <div className="forgotYourPass">
          <p className="forgotYourPass">Forgot your password?</p>
        </div>
        <div className="joinMyLowesNow">
          <p><b className="joinMyLowesNow-a" onClick={()=> setJoinLowes(true)}>Join MyLowe's Now</b></p>
          <p>Sign up for MyLowe's today and start saving.</p>
          <p>it's quick, easy and free</p>
        </div>
      </div>


      <Guest />

    </div>
  ): <SignUp />
  )
};

export default signInToLowes;
