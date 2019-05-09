import React from 'react';

const submitOrderBlock =()=>{
  return(
    <div>
      <div>
          <div>
              <div>
                <span>Order Summary</span>
                <span>1 Item</span>
              </div>
          </div>
      <div>


      <div>
              <hr>
      </div>

            <div>
                <div>
                    <div>Item Total</div>
                    <div>$3.00</div>
                </div>

                <div>
                    <div>Estimated Tax
                        <a tabindex="0" className="link-secondary" data-toggle="popover" data-trigger="focus" data-placement="bottom auto" data-content="Your order may be subject to state and local sales or use taxes (including special fees where required), depending on the shipping address or store location you requested. For further assistance, contact Lowe's Customer Care at 1.800.445.6937 or Lowe's ProServices at 1.844.569.4776." href="#tax-info" data-original-title="" title="">
                          <span className="info-wrap">
                            <i className="icon-info" aria-hidden="true"></i>
                            <span className="ada screen-reader-only">Your order may be subject to state and local sales or use taxes (including special fees where required), depending on the shipping address or store location you requested. For further assistance, contact Lowe's Customer Care at 1.800.445.6937 or Lowe's ProServices at 1.844.569.4776.</span>
                          </span>
                        </a>
                    </div>
                    <div className="grid-40 align-right art-co-rp-taxes">$0.24</div>
                </div>
                <div className="grid-parent grid-100 v-spacing-medium">
                    <hr>
                </div>
                <div className="grid-parent grid-100 v-spacing-medium">
                    <div className="grid-60">
                        <h5 className="art-co-rp-estTotalLbl-below">Estimated Total</h5>
                    </div>
                    <div className="grid-40 align-right">
                        <h5 className="art-co-rp-estTotal-below">
                                    $3.24
                        </h5>
                    </div>
                </div>
            </div>

            <div className="grid-100  v-spacing-large">
                <a className="js-order-submit met-order-submit btn btn-block btn-add art-co-rp-submitOrderBtn cb-hidden" data-blocked="true" data-enable-submit-order="true" href="/checkout/confirmation" data-submittoken=""><i aria-hidden="true" className="icon-secure"></i> submit order</a>
            </div>


          <div className="grid-100 align-center v-spacing-large">

              <a href="/cart" className="royalBlue art-returnToCartLnk"><i aria-hidden="true" className="icon-arrow-left"></i> Return to cart</a>

    </div>
  )
}

export default submitOrderBlock;
