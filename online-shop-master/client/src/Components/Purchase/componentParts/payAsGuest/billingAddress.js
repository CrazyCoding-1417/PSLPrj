import React, { useState, useEffect } from 'react';
import './payAsGuest.css';

const billingAddress =()=>{
  const [companyName, setcompanyName] = useState('')
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [address1, setaddress1] = useState('')
  const [address2, setaddress2] = useState('')
  const [city, setcity] = useState('')
  const [state, setstate] = useState('')
  const [zip, setzip] = useState('')
  const [billingForm, setBillingForm] = useState({})
  const [btnActive, setBtnActive] = useState(true)
  const [showSubmit, setShowSubmit] = useState(false)

  useEffect(()=>{
    setBillingForm({
      companyName, firstName, lastName, address1, address2, city, state, zip
    })
  }, [companyName, firstName, lastName, address1, address2, city, state, zip])

  useEffect(()=>{
    checkAddressInput()
  }, [companyName, firstName, lastName, address1, address2, city, state, zip])


  const checkAddressInput =()=>{
    const info = [ companyName, firstName, lastName, address1, address2, city, state, zip];
    const result = info.filter((str)=> str.length > 0);
    return (result.length >= 7)? setBtnActive(false): setBtnActive(true);
  }

  const states = [ "AK","AL","AR","AS","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"]

  const BillingAddressSubmit=(props)=>{
    return(
      <div className="card card-primary brd-none v-spacing-jumbo">
        <div className="card-body card-default">
          <div>
            <p>{props.companyName}</p>
            <p>{props.firstName} {props.lastName}</p>
            <p>{props.address1}</p>
            <p>{props.address2}</p>
            <p>{props.city}, {props.state} {props.zip}</p>
          </div>
          <button
            className="btn btn-block btn-primary js-submit-credit-card-button art-co-rp-newCC-useCreditCard card-btn"
            disabled={btnActive}
            onClick={()=>setShowSubmit(false)}>
           Edit
          </button>
        </div>
      </div>
    )
  }



  return (showSubmit)?<BillingAddressSubmit {...billingForm}/>:
    (
      <div className="card card-primary brd-none v-spacing-jumbo">
      <div className="card-body card-default">
        <div className="new-shipping-address">
          <label>
            <input
                name="Shipping-Address"
                type="checkbox"
                checked
                onChange={()=>null}
                />
            Use a New Address
          </label>
        </div>


          <div className="address-info">
            <div className="form-group grid-100 auto-cc-input mobile-grid-100 ">
              <label id="ada-company-name">
                Company Name
              </label>
              <input
                name="Company-Name"
                type="text"
                value={companyName}
                className="form-control ctHidden"
                id="form-control ctHidden"
                placeholder="Company Name"
                onChange={(e)=>setcompanyName(e.target.value)}
              />
            </div>

            <div className="form-row">
              <div className="form-group grid-50 auto-cc-input mobile-grid-100 ">
                <label id="ada-first-name">
                  First Name
                </label>
                <input
                  name="first-name"
                  type="text"
                  value={firstName}
                  className="form-control ctHidden"
                  id="form-control ctHidden"
                  placeholder="First Name"
                  onChange={(e)=>setfirstName(e.target.value)}
                />
              </div>
              <div className="form-group grid-50 mobile-grid-100">
                <label id="ada-last-name">
                  Last Name
                </label>
                <input
                  name="last-name"
                  type="text"
                  value={lastName}
                  className="form-control ctHidden"
                  id="form-control ctHidden"
                  placeholder="Last Name"
                  onChange={(e)=>setlastName(e.target.value)}
                />
              </div>
            </div>

              <div className="form-row">
                <div className="form-group grid-50 auto-cc-input mobile-grid-100 ">
                  <label id="ada-address1">
                    Address Line 1
                  </label>
                  <input
                    name="address1"
                    type="text"
                    value={address1}
                    className="form-control ctHidden"
                    id="form-control ctHidden"
                    placeholder="Address 1"
                    onChange={(e)=>setaddress1(e.target.value)}
                  />
                </div>
                <div className="form-group grid-50 mobile-grid-100">
                  <label id="ada-address2">
                    Address Line 2
                  </label>
                  <input
                    name="address2"
                    type="text"
                    value={address2}
                    className="form-control ctHidden"
                    id="form-control ctHidden"
                    placeholder="Address 2"
                    onChange={(e)=>setaddress2(e.target.value)}
                  />
                </div>
              </div>

                <div className="form-row">
                  <div className="form-group grid-50 auto-cc-input mobile-grid-100 ">
                    <label id="ada-city">
                      City
                    </label>
                    <input
                      name="city"
                      type="text"
                      value={city}
                      className="form-control ctHidden"
                      id="form-control ctHidden"
                      placeholder="City"
                      onChange={(e)=>setcity(e.target.value)}
                    />
                  </div>
                  <div className="form-group grid-50 mobile-grid-100">
                    <label id="ada-state">
                      State
                    </label>
                    <select className="form-control ctHidden" value={state} onChange={(e)=>setstate(e.target.value)}>
                      {
                        states.map(st=>{
                          return <option
                                    key={st}
                                    value={st}>
                                      {st}
                                 </option>
                        })
                      }
                    </select>
                  </div>
                </div>

                <div className="card-info">
                  <div className="form-row">
                    <div className="form-group grid-50 auto-cc-input mobile-grid-100 ">
                      <label id="ada-zip-code">
                        ZIP Code
                      </label>
                      <input
                        name="zip-code"
                        type="text"
                        value={zip}
                        className="form-control ctHidden"
                        id="form-control ctHidden"
                        placeholder="ZIP code"
                        onChange={(e)=>setzip(e.target.value)}
                      />
                    </div>
                  </div>

            <button
              className="btn btn-block btn-primary js-submit-credit-card-button art-co-rp-newCC-useCreditCard card-btn"
              disabled={btnActive}
              onClick={()=>setShowSubmit(true)}>
             USE THIS ADDRESS
            </button>
          </div>
        </div>
      </div>
      </div>
    )
  ;
}

export default billingAddress
