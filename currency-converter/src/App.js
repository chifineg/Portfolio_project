import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store user input values
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState('');

  // Event handlers for the inputs
  const handleAmountChange = (e) => setAmount(e.target.value);
  const handleFromCurrencyChange = (e) => setFromCurrency(e.target.value);
  const handleToCurrencyChange = (e) => setToCurrency(e.target.value);

  return (
    <div className="container">
      <h1>Currency Converter</h1>

      {/* Input amount */}
      <input
        type="number"
        value={amount}
        onChange={handleAmountChange}
        placeholder="Enter amount"
      />

      {/* Currency dropdowns */}
      <div className="currency-selection">
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
          <option value="USD">USD (United States Dollar)</option>
          <option value="EUR">EUR (Euro)</option>
          <option value="GBP">GBP (British Pound)</option>
        </select>

        <select value={toCurrency} onChange={handleToCurrencyChange}>
          <option value="USD">USD (United States Dollar)</option>
          <option value="EUR">EUR (Euro)</option>
          <option value="GBP">GBP (British Pound)</option>
        </select>
      </div>

      {/* Convert button (No functionality yet) */}
      <button>Convert</button>

      {/* Display result */}
      <div id="result">{result}</div>
    </div>
  );
}

export default App;

