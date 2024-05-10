function handleCheck(myRadio) {
    if (myRadio.value === "sellRateField") {
        // Disable percentage field and enable sell rate field
        document.getElementById("sellRate").disabled = false;
        document.getElementById("percentage").disabled = true;
    } else {
        // Disable sell rate field and enable percentage field
        document.getElementById("sellRate").disabled = true;
        document.getElementById("percentage").disabled = false;
    }
}



function validateAndCalculate() {
    let buyRateInput = document.getElementById("buyRate");
    let sellRateInput = document.getElementById("sellRate");
    let quantityInput = document.getElementById("quantity");
    let percentageInput = document.getElementById("percentage");
    let buyRateError = document.getElementById("buyRateError");
    let sellRateError = document.getElementById("sellRateError");
    let quantityError = document.getElementById("quantityError");

    // Validate buy rate
    if (!buyRateInput.checkValidity() || isNaN(parseFloat(buyRateInput.value))) {
        buyRateError.innerText = "Please enter a valid buy rate.";
        return;
    }

    // Validate sell rate
    if ((!sellRateInput.checkValidity() || isNaN(parseFloat(sellRateInput.value))) && sellRateInput.disabled === false) {
        sellRateError.innerText = "Please enter a valid sell rate.";
        return;
    }

    // Validate pencil quantity
    if (!quantityInput.checkValidity() || isNaN(parseFloat(quantityInput.value))) {
        quantityError.innerText = "Please enter a valid pencil quantity.";
        return;
    }
     
    if ((!percentageInput.checkValidity() || isNaN(parseFloat(percentageInput.value))) && percentageInput.disabled === false) {
        sellRateError.innerText = "Please enter a valid sell rate.";
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
let quantity = parseFloat(document.getElementById("quantity").value);
let percentage = parseFloat(document.getElementById("percentage").value);

if (document.getElementById("sellRate").disabled === false) {
let totalEarnings = calculateTotalEarnings(buyRate, sellRate, quantity);
let profitPercentage = calculateTotalProfitPercentage(buyRate, sellRate);

document.getElementById("totalEarnings").innerText = totalEarnings;
document.getElementById("percentage").value = profitPercentage;
}
else {
let sell = buyRate + (buyRate * percentage / 100);
let totalEarnings = calculateTotalEarnings(buyRate, sell, quantity);
 document.getElementById("totalEarnings").innerText = totalEarnings;
document.getElementById("sellRate").value = sell;
}

}
function reset() {
    document.getElementById("buyRate").value = "";
    document.getElementById("sellRate").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("percentage").value = "";
    document.getElementById("totalEarnings").innerText = "";
    document.getElementById("buyRateError").innerText = "";
    document.getElementById("sellRateError").innerText = "";
    document.getElementById("quantityError").innerText = "";
}