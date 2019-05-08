import React, { useState, useEffect } from 'react';
import './payAsGuest.css';

const paymentMethod =()=>{
  const [cardNum, setCardNum] = useState(null)
  const [cvv, setCvv] = useState(null)
  const [expMonth, setExpMonth] = useState("Month")
  const [expYear, setExpYear] = useState("Year")
  const [cardForm, setCardForm] = useState({})

  useEffect(()=>
    setCardForm({
      cardNum,
      cvv,
      expMonth,
      expYear
    })
  )

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"
  ]
  const years = [
    2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028
  ]

  return(
    <div className="card card-primary brd-none v-spacing-jumbo">
    <div className="card-body card-default">
      <div className="new-cc">
        <label>
          <input
              name="payment-method"
              type="checkbox"
              checked="true"
              />
          Use Card
        </label>

        <div className="card-info">
          <div className="form-row">
            <div className="form-group grid-50 mobile-grid-100">
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
            <div className="form-group grid-50 mobile-grid-100">
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

          <div className="form-row">
            <div className="form-group select inverse">
              <select className="form-control art-co-rp-newCC-expMonthDrpdown cb-hidden ctHidden" value={expMonth}>
                {
                  months.map(month=>{
                    return <option value={month}>{month}</option>
                  })
                }
              </select>
            </div>
            <div className="form-group select inverse">
              <select className="form-control art-co-rp-newCC-expMonthDrpdown cb-hidden ctHidden" value={expYear}>
                {
                  years.map(year=>{
                    return <option value={year}>{year}</option>
                  })
                }
              </select>
            </div>
          </div>

          <button
            className="btn btn-block btn-primary disabled js-submit-credit-card-button art-co-rp-newCC-useCreditCard card-btn"
            disabled
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
