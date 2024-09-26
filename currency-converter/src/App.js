import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store user input values
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState('');

  // List of African and global currencies
  const currencies = [
    { code: 'USD', name: 'United States Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'British Pound' },
    { code: 'ZAR', name: 'South African Rand' },
    { code: 'NGN', name: 'Nigerian Naira' },
    { code: 'KES', name: 'Kenyan Shilling' },
    { code: 'GHS', name: 'Ghanaian Cedi' },
    { code: 'EGP', name: 'Egyptian Pound' },
    { code: 'MAD', name: 'Moroccan Dirham' },
    { code: 'TZS', name: 'Tanzanian Shilling' },
    { code: 'UGX', name: 'Ugandan Shilling' },
  ];

  // Function to handle currency conversion
  const convertCurrency = async () => {
    const apiKey = 'ed0eb48796238f93e5ee33bc';
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Error fetching exchange rates');
      const data = await response.json();

      // Calculate the conversion
      const conversionRate = data.conversion_rates[toCurrency];
      const convertedAmount = (amount * conversionRate).toFixed(2);
      setResult(`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
    } catch (error) {
      setResult('Error: Could not fetch conversion rate');
    }
  };

  // Function to switch fromCurrency and toCurrency
  const switchCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  return (
    <div className="container">
      <h1>Currency Converter</h1>

      {/* Input for the amount */}
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />

      {/* Dropdown for selecting currencies */}
      <div className="currency-selection">
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name} ({currency.code})
            </option>
          ))}
        </select>

        {/* Switch button to swap currencies */}
        <button className="switch-btn" onClick={switchCurrencies}>⇄</button>

        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name} ({currency.code})
            </option>
          ))}
        </select>
      </div>

      {/* Convert button */}
      <button onClick={convertCurrency}>Convert</button>

      {/* Display the conversion result */}
      <div id="result">{result}</div>
    </div>
  );
}

export default App;
