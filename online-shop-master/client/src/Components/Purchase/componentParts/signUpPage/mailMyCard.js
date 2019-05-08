import React from 'react';

const mailMyCard =(props)=>{
  return(
    <div>

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
            onChange={props.onMailMyCard}
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
            onChange={props.onMailMyCard}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group grid-50 mobile-grid-100">
          <label
            id="ada-City"
            htmlFor="email-input">City:
          </label>
          <input
            name="City"
            type="text"
            className="form-control ctHidden"
            id="form-control ctHidden"
            placeholder="City"
            onChange={props.onMailMyCard}
          />
        </div>
        <div className="form-group grid-50 mobile-grid-100">
          <label
            id="ada-State"
            htmlFor="State-input">State:
          </label>
          <input
            name="State"
            type="text"
            className="form-control ctHidden"
            id="form-control ctHidden"
            placeholder="State"
            onChange={props.onMailMyCard}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group grid-50 mobile-grid-100">
          <label
            id="ada-zip-code"
            htmlFor="zip-code-input">Zip Code:
          </label>
          <input
            name="zip-code"
            type="zip-code"
            className="form-control ctHidden"
            id="form-control ctHidden"
            placeholder="Zip Code"
            onChange={props.onMailMyCard}
          />
        </div>
      </div>

    </div>
  )
}

export default mailMyCard;
