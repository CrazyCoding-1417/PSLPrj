import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

const PayPalButton = () => {
  const onSuccess = (payment) => {
    console.log("Payment Successful", payment);
  }

  const onCancel = (data) => {
    console.log('Payment Cancelled', data);
  }

  const onError = (error) => {
    console.log('Error', error);
  }

  let currency = 'USD';
  let total = 1.00;

  const client = {
    sandbox: 'AZFIOb6VCajNF5tNoS5cZtoaaYC4OKLsw2QE6W3yPBZ5W-h5nwNXE1hrVAbpFtk06oksWpBcIBligR6Q'
  }

  return (
    <div style={{marginTop: '10' + 'px'}}>
      <PaypalExpressBtn
      client={client}
      currency={currency}
      total={total}
      onSuccess={onSuccess}
      onCancel={onCancel}
      onError={onError}
      />
    </div>
  )
}

export default PayPalButton;
