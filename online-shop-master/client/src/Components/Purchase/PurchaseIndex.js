import React from 'react';
import Banner from './componentParts/banner/banner';
import SignInToLowes from './componentParts/signInToLowes/sign_in_to_lowes'
// import SubmitOrderBlock from './componentParts/payAsGuest/submitOrderBlock'


const PurchaseIndex = props=>{

  return(
    <>
      <Banner />
      <SignInToLowes />
    </>
  )
}

export default PurchaseIndex;
