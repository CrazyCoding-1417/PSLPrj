import React, { useEffect } from 'react';
import Banner from './componentParts/banner/banner';
import SignInToLowes from './componentParts/signInToLowes/sign_in_to_lowes'
// import SubmitOrderBlock from './componentParts/payAsGuest/submitOrderBlock'
import {discount} from '../../discount'

const PurchaseIndex = props=>{

  useEffect(()=>{
    discount()
  })

  return(
    <>
      <Banner />
      <SignInToLowes />
    </>
  )
}

export default PurchaseIndex;
