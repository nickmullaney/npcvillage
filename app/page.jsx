// pages/index.js
'use client'
import React, { useState } from 'react';

const Home = () => {
  const [campaignDescription, setCampaignDescription] = useState({
    campaignStyle: '',
    campaignFeel: '',
    magicLevel: '',
    // Add more prompts as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCampaignDescription((prevDescription) => ({
      ...prevDescription,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the campaign description to your backend or perform actions based on the user's input
  };

  return (
    <div>
      <h1>Campaign Description</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="campaignStyle">Campaign Style:</label>
          <select
            name="campaignStyle"
            id="campaignStyle"
            value={campaignDescription.campaignStyle}
            onChange={handleInputChange}
          >
            <option value="">Select a style</option>
            <option value="High Fantasy">High Fantasy</option>
            <option value="Steampunk">Steampunk</option>
            {/* Add more style options */}
          </select>
        </div>

        <div>
          <label htmlFor="campaignFeel">Campaign Feel:</label>
          <select
            name="campaignFeel"
            id="campaignFeel"
            value={campaignDescription.campaignFeel}
            onChange={handleInputChange}
          >
            <option value="">Select a feel</option>
            <option value="Epic">Epic</option>
            <option value="Mysterious">Mysterious</option>
            {/* Add more feel options */}
          </select>
        </div>

        <div>
          <label htmlFor="magicLevel">Magic Level:</label>
          <select
            name="magicLevel"
            id="magicLevel"
            value={campaignDescription.magicLevel}
            onChange={handleInputChange}
          >
            <option value="">Select a magic level</option>
            <option value="High">High</option>
            <option value="Low">Low</option>
            {/* Add more magic level options */}
          </select>
        </div>

        {/* Add more prompts as needed */}
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
