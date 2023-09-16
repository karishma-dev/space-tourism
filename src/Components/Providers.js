// Providers.js
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./providers.css";
const data = require("../data.json");

const Providers = () => {
  // Use the useLocation hook to access the query parameter
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const destination = queryParams.get("d");

  const providersData = data.destinations[parseInt(destination)].providers;

  const [selectedTime, setSelectedTime] = useState("now");

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className="providers-data">
    <div className="providers-container">
      {/* Large White Header */}
      <div className="header">
        <h1 className="header-title">
          Providers for {data.destinations[parseInt(destination)].name}
        </h1>

        {/* Dropdown to select the time */}
        <select value={selectedTime} onChange={handleTimeChange}>
          <option value="now">Now</option>
          <option value="in_50_years">In 50 Years</option>
          <option value="in_200_years">In 200 Years</option>
        </select>
      </div>

      {/* Provider Cards */}
      <div className="provider-cards">
        {providersData.map((provider, index) => (
          <div key={index} className="provider-card">
            <img
              src={process.env.PUBLIC_URL + "/" + provider.logo}
              alt={provider.name}
              className="provider-logo"
            />
            <h3>{provider.name}</h3>
            <p className="provider-description">{provider.description}</p>
            <div className="provider-cost-and-book">
              <p className="provider-cost">{provider.cost[selectedTime]}</p>
              <button className="provider-book-button">Book Travel</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="provider-ads">
        <img
              src={process.env.PUBLIC_URL + "/" + destination + ".png"}
              alt={destination}
              className="provider-ad"
            />
      </div>
</div>
  );
};

export default Providers;
