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

    // Linking API key
    const apiKey = 'ed0eb48796238f93e5ee33bc';
    
    // API endpoint for fetching exchange rates based on the selected 'fromCurrency'
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    try {
        // Fetch the exchange rates from the API
        const response = await fetch(url);
        
        // Check if the API request was successful
        if (!response.ok) throw new Error('API Error: Unable to fetch exchange rates.');

        const data = await response.json();

        // Check if the 'toCurrency' exists in the response data
        if (!data.conversion_rates[toCurrency]) {
            throw new Error(`Conversion rate for ${toCurrency} not found.`);
        }

        // Perform the conversion
        const conversionRate = data.conversion_rates[toCurrency];
        const convertedAmount = (amount * conversionRate).toFixed(2);

        // Display the result
        document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } catch (error) {
        // Handle any errors that occur during the API request
        document.getElementById('result').innerText = error.message;
    }
}

// Add event listener for the convert button
document.getElementById('convertButton').addEventListener('click', convertCurrency);
