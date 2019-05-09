import React, { useState } from 'react';
import './payAsGuest.css'

const submitOrderBlock =()=>{

  return(
    <div className=" tablet-grid-40 submitorderblock mobile-grid-100 v-spacing-desktop-large pull-right grid-parent js-position-sticky position-sticky position-top">
      <div className="v-spacing-large trench trench-small art-co-rp-orderSummary-sec">

        <div className="v-spacing-small order-summary">
          <div className="order-sum-copy grid-100">
            <span className="cm-grid-60 grid-60">Order Summary</span>
            <span className="cm-grid-40 grid-40">1 Item</span>
          </div>
        </div>

        <div className="order-summ-detail trench trench-small no-border">
          <hr />

          <div className="v-spacing-large">
            <div className="cm-grid-100 grid-parent grid-100 v-spacing-medium total-grid">
              <div className="cm-grid-60 grid-60 strong art-co-rp-itemsTotalLbl">Item Total</div>
              <div className="cm-grid-40 grid-40 align-right strong art-co-rp-itemsTotal">$3.00</div>
            </div>

            <div className="cm-grid-100 grid-parent grid-100 v-spacing-medium">
              <div className="cm-grid-60 grid-60 strong art-co-rp-itemsTotalLbl">Estimated Tax</div>
              <div className="cm-grid-40 grid-40 align-right strong art-co-rp-itemsTotal">$0.24</div>
            </div>

            <hr />

            <div className="cm-grid-100 grid-parent grid-100 v-spacing-medium estimate-total">
              <div className="cm-grid-60 grid-60"><h5>Estimated Total</h5></div>
              <div className="cm-grid-40 grid-40"><h5>$3.24</h5></div>
            </div>
          </div>

          <div className="grid-100  v-spacing-large">
            <a className="js-order-submit met-order-submit btn btn-block btn-add art-co-rp-submitOrderBtn cb-hidden" data-blocked="true" data-enable-submit-order="true" href="/checkout/confirmation" data-submittoken="">
              <i aria-hidden="true" className="icon-secure"></i> submit order
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default submitOrderBlock;
