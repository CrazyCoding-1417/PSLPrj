import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import './payAsGuest.css'


const submitOrderBlock =(props)=>{


  const [cartItems] = useState((state)=> props.cartItems)
  const [subTotal, setSubTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [grandTotal, setGrandTotal]= useState(0)

  useEffect(()=>{
    ItemTotal()
  }, [subTotal, tax, grandTotal])

  const ItemTotal=()=>{
    if(cartItems.length <= 0){
      setSubTotal(0);
      setTax(0);
      setGrandTotal(0);
    } else {
      const price = [];
      cartItems.map((item)=>{
        price.push(item.price)
      })
      const total = price.reduce((a,b)=> a+b)
      const taxAmount = total*0.07;
      const grandAmount = total+taxAmount;
      setSubTotal(total.toFixed(2));
      setTax(taxAmount.toFixed(2));
      setGrandTotal(grandAmount.toFixed(2));
    }
  }


  return(
    <div className=" tablet-grid-40 submitorderblock mobile-grid-100 v-spacing-desktop-large pull-right grid-parent js-position-sticky position-sticky position-top">
      <div className="v-spacing-large trench trench-small art-co-rp-orderSummary-sec">

        <div className="v-spacing-small order-summary">
          <div className="order-sum-copy grid-100">
            <span className="cm-grid-60 grid-60">Order Summary</span>
            <span className="cm-grid-40 grid-40">{cartItems.length} Item</span>
          </div>
        </div>

        <div className="order-summ-detail trench trench-small no-border">
          <hr />

          <div className="v-spacing-large">
            <div className="cm-grid-100 grid-parent grid-100 v-spacing-medium total-grid">
              <div className="cm-grid-60 grid-60 strong art-co-rp-itemsTotalLbl">Item Total</div>
              <div className="cm-grid-40 grid-40 align-right strong art-co-rp-itemsTotal">${subTotal}</div>
            </div>

            <div className="cm-grid-100 grid-parent grid-100 v-spacing-medium">
              <div className="cm-grid-60 grid-60 strong art-co-rp-itemsTotalLbl">Estimated Tax</div>
              <div className="cm-grid-40 grid-40 align-right strong art-co-rp-itemsTotal">${tax}</div>
            </div>

            <hr />

            <div className="cm-grid-100 grid-parent grid-100 v-spacing-medium estimate-total">
              <div className="cm-grid-60 grid-60"><h5>Estimated Total</h5></div>
              <div className="cm-grid-40 grid-40"><h5>${grandTotal}</h5></div>
            </div>
          </div>

          <div className="grid-100  v-spacing-large">
            <a className="js-order-submit met-order-submit btn btn-block btn-add art-co-rp-submitOrderBtn cb-hidden" data-blocked="true" data-enable-submit-order="true" data-submittoken=""
            onClick={()=> console.log("Purchase successful!")}
            >
              <i aria-hidden="true" className="icon-secure"></i> submit order
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

const mapStateToProps=state=>{
  return({
    cartItems: state.cartItems
  })
}

export default withRouter(connect(mapStateToProps)(submitOrderBlock));

//======REACT REDUX 7.0
//
// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux'
// import './payAsGuest.css'
//
// const submitOrderBlock =(props)=>{
//   const cartItems = useSelector((state)=> state.cartItems)
//   const [subTotal, setSubTotal] = useState(0);
//   const [tax, setTax] = useState(0);
//   const [grandTotal, setGrandTotal]= useState(0)
//
//   useEffect(()=>{
//     ItemTotal()
//   }, [subTotal, tax, grandTotal])
//
//   const ItemTotal=()=>{
//     if(cartItems.length <= 0){
//       setSubTotal(0);
//       setTax(0);
//       setGrandTotal(0);
//     } else {
//       const price = [];
//       cartItems.map((item)=>{
//         price.push(item.price)
//       })
//       const total = price.reduce((a,b)=> a+b)
//       const taxAmount = total*0.07;
//       const grandAmount = total+taxAmount;
//       setSubTotal(total.toFixed(2));
//       setTax(taxAmount.toFixed(2));
//       setGrandTotal(grandAmount.toFixed(2));
//     }
//   }
//
//
//
//   return(
//     <div className=" tablet-grid-40 submitorderblock mobile-grid-100 v-spacing-desktop-large pull-right grid-parent js-position-sticky position-sticky position-top">
//       <div className="v-spacing-large trench trench-small art-co-rp-orderSummary-sec">
//
//         <div className="v-spacing-small order-summary">
//           <div className="order-sum-copy grid-100">
//             <span className="cm-grid-60 grid-60">Order Summary</span>
//             <span className="cm-grid-40 grid-40">{cartItems.length} Item</span>
//           </div>
//         </div>
//
//         <div className="order-summ-detail trench trench-small no-border">
//           <hr />
//
//           <div className="v-spacing-large">
//             <div className="cm-grid-100 grid-parent grid-100 v-spacing-medium total-grid">
//               <div className="cm-grid-60 grid-60 strong art-co-rp-itemsTotalLbl">Item Total</div>
//               <div className="cm-grid-40 grid-40 align-right strong art-co-rp-itemsTotal">${subTotal}</div>
//             </div>
//
//             <div className="cm-grid-100 grid-parent grid-100 v-spacing-medium">
//               <div className="cm-grid-60 grid-60 strong art-co-rp-itemsTotalLbl">Estimated Tax</div>
//               <div className="cm-grid-40 grid-40 align-right strong art-co-rp-itemsTotal">${tax}</div>
//             </div>
//
//             <hr />
//
//             <div className="cm-grid-100 grid-parent grid-100 v-spacing-medium estimate-total">
//               <div className="cm-grid-60 grid-60"><h5>Estimated Total</h5></div>
//               <div className="cm-grid-40 grid-40"><h5>${grandTotal}</h5></div>
//             </div>
//           </div>
//
//           <div className="grid-100  v-spacing-large">
//             <a className="js-order-submit met-order-submit btn btn-block btn-add art-co-rp-submitOrderBtn cb-hidden" data-blocked="true" data-enable-submit-order="true" href="/checkout/confirmation" data-submittoken="">
//               <i aria-hidden="true" className="icon-secure"></i> submit order
//             </a>
//           </div>
//         </div>
//
//       </div>
//     </div>
//   )
// }
//
// export default submitOrderBlock;
