import React, { useState, useEffect} from 'react';

const addGiftCard =props=>{
  const [giftcn, setGiftcn] = useState("");
  const [pinInfo, setPinInfo] = useState("");
  const [giftCardForm, setGiftCardForm] = useState({});

  useEffect(()=>{
    console.log(giftCardForm)
  }, [giftcn, pinInfo])

  const setGiftCardFormDetail=(props)=>{
      setGiftCardForm({giftcn, pinInfo})
  }



  return(
    <div className="card card-two card-primary brd-none v-spacing-jumbo">
      <div className="form-group grid-70 auto-cc-input mobile-grid-100 ">
        <label id="ada-GCN">
          Gift Card Number
        </label>
        <input
          name="GCN"
          type="text"
          value={giftcn}
          className="form-control ctHidden"
          id="form-control ctHidden"
          placeholder="Gift Card Number"
          onChange={(e)=>setGiftcn(e.target.value)}
        />
      </div>
      <div className="form-group grid-70 mobile-grid-100">
        <label id="ada-PIN">
          PIN
        </label>
        <input
          name="PIN"
          type="text"
          value={pinInfo}
          className="form-control ctHidden"
          id="form-control ctHidden"
          placeholder="PIN"
          onChange={(e)=>setPinInfo(e.target.value)}
        />
      </div>
      <button
        className="btn btn-block btn-primary js-submit-credit-card-button art-co-rp-newCC-useCreditCard card-btn"
        onClick={()=>setGiftCardFormDetail()}>
        APPLY
      </button>
    </div>

  )
}

export default addGiftCard;
