import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./payments.css";
import Form from "./Form";
const data = require("../data.json");

const Payments = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const destination = queryParams.get("d");
  const providerIndex = queryParams.get("p");
  const selectedTime = queryParams.get("t");
  const dest = data.destinations[parseInt(destination)].name;
  const prov =
    data.destinations[parseInt(destination)].providers[parseInt(providerIndex)]
      .name;
  const cost =
    data.destinations[parseInt(destination)].providers[parseInt(providerIndex)]
      .cost[selectedTime];

  const selectedProvider = {
    name: prov,
    price: cost,
    destination: dest,
  };

  // State for form fields (add more as needed)
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  // Handle form field changes
  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  // Handle payment submission (you can implement your payment logic here)
  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    // Implement payment processing logic here
    // For example, you can send payment details to a payment gateway
    console.log("Payment submitted:", cardNumber, expiryDate, cvv);
  };

  return (
    <div className="payments-container">
      <h1 className="payments-title">Payment Details</h1>
      <div className="payments-info">
        <h2>Destination: {selectedProvider.destination}</h2>
        <h2>Provider: {selectedProvider.name}</h2>
        <h2>Price: {selectedProvider.price}</h2>
      </div>
      <div className="payment-options">
        {/* Pay with Crypto Section */}
        <div className="crypto-payment">
          <h2>Pay with Crypto</h2>
          <Form />
          {/* Add your crypto payment form here */}
        </div>

        {/* Pay with Card Section */}
        <div className="card-payment">
          <h2>Pay with Card</h2>
          <form className="payments-form" onSubmit={handlePaymentSubmit}>
            <label className="payments-label">
              Card Number:
              <input
                className="payments-input"
                type="text"
                value={cardNumber}
                onChange={handleCardNumberChange}
                required
              />
            </label>
            <label className="payments-label">
              Expiry Date:
              <input
                className="payments-input"
                type="text"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                required
              />
            </label>
            <label className="payments-label">
              CVV:
              <input
                className="payments-input"
                type="text"
                value={cvv}
                onChange={handleCvvChange}
                required
              />
            </label>
            <button className="payments-button" type="submit">
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payments;
