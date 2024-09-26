import React, { useState } from 'react';
import './App.css';

function App() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState('');

  const convertCurrency = async () => {
    const apiKey = 'ed0eb48796238f93e5ee33bc';
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Error fetching exchange rates');
      const data = await response.json();

      const conversionRate = data.conversion_rates[toCurrency];
      const convertedAmount = (amount * conversionRate).toFixed(2);
      setResult(`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
    } catch (error) {
      setResult('Error: Could not fetch conversion rate');
    }
  };

  return (
    <div className="container">
      <h1>Currency Converter</h1>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />

      <div className="currency-selection">
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          <option value="USD">USD (United States Dollar)</option>
          <option value="EUR">EUR (Euro)</option>
          <option value="GBP">GBP (British Pound)</option>
          <option value="ZAR">ZAR (South African Rand)</option>
          <option value="NGN">NGN (Nigerian Naira)</option>
          <option value="KES">KES (Kenyan Shilling)</option>
          <option value="GHS">GHS (Ghanaian Cedi)</option>
        </select>

        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          <option value="USD">USD (United States Dollar)</option>
          <option value="EUR">EUR (Euro)</option>
          <option value="GBP">GBP (British Pound)</option>
          <option value="ZAR">ZAR (South African Rand)</option>
          <option value="NGN">NGN (Nigerian Naira)</option>
          <option value="KES">KES (Kenyan Shilling)</option>
          <option value="GHS">GHS (Ghanaian Cedi)</option>
        </select>
      </div>

      <button onClick={convertCurrency}>Convert</button>

      <div id="result">{result}</div>
    </div>
  );
}

export default App;
