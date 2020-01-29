import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

export const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_d04v2FEUuBNsGyDaBjku42TV00o5AClE8y";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(responce => {
        alert("Payment succesful");
      })
      .catch(error => {
        console.log("Payment error:", JSON.parse(error));
        alert(
          "There was an issue with your payemnt. Please try again with the provided credit card"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Yor total is £${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
