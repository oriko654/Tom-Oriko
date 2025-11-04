async function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const from = document.getElementById("fromCurrency").value;
    const to = document.getElementById("toCurrency").value;

    if (isNaN(amount) || amount <= 0) {
        document.getElementById("result").innerText = "Please enter a valid amount.";
        return;
    }

    try {
        const response = await fetch(`https://open.er-api.com/v6/latest/${from}`);
        const data = await response.json();

        if (data.result !== "success") {
            document.getElementById("result").innerText = "Error fetching exchange rates.";
            return;
        }

        const rate = data.rates[to];
        const converted = (amount * rate).toFixed(2);

        document.getElementById("result").innerText =
            `${amount} ${from} = ${converted} ${to}`;

    } catch (error) {
        console.error("Error:", error);
        document.getElementById("result").innerText = "Conversion failed. Try again.";
    }
}
// ...existing code...
const rates = {
    USD: 1,
    EUR: 0.93,
    TSH: 2500,
    INR: 83,
    GBP: 0.79,
    JPY: 150,
    KSH: 145 // Example rate for Kenyan Shilling
};
// ...existing code...
