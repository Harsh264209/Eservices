


import React, { useState, useEffect } from 'react';

const CountryStateSelector = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');

  useEffect(() => {
    // Fetch countries from the restcountries API
    fetch('https://restcountries.com/v2/all')
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => console.error('Error fetching countries:', error));
  }, []);

  const handleCountryChange = async (event) => {
    const selectedCountryCode = event.target.value;
    setSelectedCountry(selectedCountryCode);

    // Fetch states for the selected country from another API (replace with the actual API endpoint)
    try {
      const response = await fetch(`https://countries-api.example.com/states/${selectedCountryCode}`);
      const data = await response.json();
      setStates(data);
    } catch (error) {
      console.error('Error fetching states:', error);
      setStates([]); // Reset states if there's an error
    }

    setSelectedState(''); // Reset selected state
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <div>
      <label htmlFor="country">Select Country:</label>
      <select id="country" value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country.alpha2Code} value={country.alpha2Code}>
            {country.name}
          </option>
        ))}
      </select>

      <label htmlFor="state">Select State/Territory:</label>
      <select id="state" value={selectedState} onChange={handleStateChange} disabled={!selectedCountry}>
        <option value="">Select a state</option>
        {states.map((state) => (
          <option key={state.code} value={state.code}>
            {state.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryStateSelector;
