// script.js for simple currency conversion
document.getElementById('convertButton').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    
    // For now, I used a fixed rate as a placeholder
    const conversionRate = 0.85; // Example conversion rate USD to EUR
    
    if (amount && !isNaN(amount)) {
        const result = (amount * conversionRate).toFixed(2);
        document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
    } else {
        document.getElementById('result').innerText = "Please enter a valid amount.";
    }
});
