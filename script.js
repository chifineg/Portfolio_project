// script.js simple currency conversion script

// Function to fetch exchange rates and perform the conversion
async function convertCurrency() {
    // Get input values from the DOM
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    // Validate the amount entered by the user
    if (!amount || isNaN(amount) || amount <= 0) {
        document.getElementById('result').innerText = "Please enter a valid amount.";
        return;
    }

   
    const apiKey = 'ed0eb48796238f93e5ee33bc';
    
    // API endpoint for fetching exchange rates based on the selected 'fromCurrency'
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    try {
        // Fetch the exchange rates from the API
        const response = await fetch(url);
        
        // Check if the API request was successful
        if (!response.ok) throw new Error('API Error: Unable to fetch exchange rates.');
        
        // Parse the JSON data from the API response
        const data = await response.json();
        
        // Get the conversion rate for the 'toCurrency' from the API response
        const rate = data.conversion_rates[toCurrency];
        
        // Calculate the converted amount
        const result = (amount * rate).toFixed(2);

        // Display the result in the DOM
        document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
    } catch (error) {
        // Handle errors and display a user-friendly message
        console.error("Error fetching exchange rates:", error);
        document.getElementById('result').innerText = "Error: Unable to fetch exchange rates. Please try again.";
    }
}

// Event listener for the Convert button
document.getElementById('convertButton').addEventListener('click', convertCurrency);
