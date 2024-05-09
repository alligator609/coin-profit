function validateAndCalculate() {
    let buyRateInput = document.getElementById("buyRate");
    let sellRateInput = document.getElementById("sellRate");
    let quantityInput = document.getElementById("quantity");
    let buyRateError = document.getElementById("buyRateError");
    let sellRateError = document.getElementById("sellRateError");
    let quantityError = document.getElementById("quantityError");

    // Validate buy rate
    if (!buyRateInput.checkValidity() || isNaN(parseFloat(buyRateInput.value))) {
        buyRateError.innerText = "Please enter a valid buy rate.";
        return;
    }

    // Validate sell rate
    if (!sellRateInput.checkValidity() || isNaN(parseFloat(sellRateInput.value))) {
        sellRateError.innerText = "Please enter a valid sell rate.";
        return;
    }

    // Validate pencil quantity
    if (!quantityInput.checkValidity() || isNaN(parseFloat(quantityInput.value) <= 0)) {
        quantityError.innerText = "Please enter a valid pencil quantity.";
        return;
    }

    // Clear all error messages
    buyRateError.innerText = "";
    sellRateError.innerText = "";
    quantityError.innerText = "";
    // If all inputs are valid, proceed with calculation
    calculate();
}
function calculateTotalEarnings(buyRate, sellRate, quantity) {

    // Calculate profit from pencils
    let pencilProfitPerUnit = sellRate - buyRate;
    let totalPencilProfit = pencilProfitPerUnit * quantity;
    // Calculate total earnings including pencil
    let totalEarnings = totalPencilProfit;
    return totalEarnings.toFixed(2); // Return total earnings rounded to 2 decimal places
}

function calculateTotalProfitPercentage(buyRate, sellRate) {
    // Calculate profit percentage
    let profitPercentage = ((sellRate - buyRate) / buyRate) * 100;
    return profitPercentage.toFixed(2); // Return profit percentage rounded to 2 decimal places
}

function calculate() {
let buyRate = parseFloat(document.getElementById("buyRate").value);
let sellRate = parseFloat(document.getElementById("sellRate").value);
let quantity = parseInt(document.getElementById("quantity").value);


let totalEarnings = calculateTotalEarnings(buyRate, sellRate, quantity);
let profitPercentage = calculateTotalProfitPercentage(buyRate, sellRate);
// Display results
document.getElementById("totalEarnings").innerText = totalEarnings;
document.getElementById("totalProfitPercentage").innerText = profitPercentage + "%";

}
function reset() {
    document.getElementById("buyRate").value = "";
    document.getElementById("sellRate").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("totalEarnings").innerText = "";
    document.getElementById("totalProfitPercentage").innerText = "";
    document.getElementById("buyRateError").innerText = "";
    document.getElementById("sellRateError").innerText = "";
    document.getElementById("quantityError").innerText = "";
}