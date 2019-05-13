import React, { useState, useEffect } from 'react';
import './payAsGuest.css';

const paymentMethod =()=>{
  const [cardNum, setCardNum] = useState("")
  const [cvv, setCvv] = useState("")
  const [expMonth, setExpMonth] = useState("Jan")
  const [expYear, setExpYear] = useState("2019")
  const [cardForm, setCardForm] = useState({})
  const [btnActive, setBtnActive] = useState(true)


  useEffect(()=>
    setCardForm({
      cardNum,
      cvv,
      expMonth,
      expYear
    })
  )

  useEffect(()=>{
     checkInput()
  },[cardNum, cvv, expMonth, expYear])

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"
  ]
  const years = [
    2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028
  ]

  const checkInput =(props)=>{
    const info = [cardNum, cvv, expMonth, expYear];
    const result = info.filter((str)=> str.length > 0);
    return (result.length >= 4)? setBtnActive(false): setBtnActive(true);
  }

  return(
    <div className="card card-primary brd-none v-spacing-jumbo">
    <div className="card-body card-default">
      <div className="new-cc">
        <label>
          <input
              name="payment-method"
              type="checkbox"
              checked
              onChange={()=>null}
              />
          Use Card
        </label>

        <div className="card-info">
          <div className="form-row">
            <div className="form-group grid-70 auto-cc-input mobile-grid-100 ">
              <label id="ada-cardNumber">
                Card Number
              </label>
              <input
                name="cardNumber"
                type="text"
                className="form-control ctHidden"
                id="form-control ctHidden"
                placeholder="Card Number"
                onChange={(e)=>setCardNum(e.target.value)}
              />
            </div>
            <div className="form-group grid-30 mobile-grid-100">
              <label id="ada-cvv">
                CVV
              </label>
              <input
                name="cvv"
                type="text"
                className="form-control ctHidden"
                id="form-control ctHidden"
                placeholder="CVV"
                onChange={(e)=>setCvv(e.target.value)}
              />
            </div>
          </div>

          <p className="expP">
            Expiration Date
          </p>
          <div className="form-row">
            <div className="form-group select inverse">
              <select className="form-control selectInp" value={expMonth} onChange={(e)=>setExpMonth(e.target.value)}>
                {
                  months.map(month=>{
                    return <option
                              key={month}
                              value={month}>
                                {month}
                           </option>
                  })
                }
              </select>

              <select className="form-control selectInp" value={expYear} onChange={(e)=>setExpYear(e.target.value)}>
                {
                  years.map(year=>{
                    return <option
                              key={year}
                              value={year}>
                                {year}
                           </option>
                  })
                }
              </select>
            </div>
          </div>

          <button
            className="btn btn-block btn-primary js-submit-credit-card-button art-co-rp-newCC-useCreditCard card-btn"
            disabled={btnActive}
            onClick={()=>console.log(cardForm)}
          >
           USE CARD
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default paymentMethod
