function validateAndCalculate() {
    let buyRateInput = document.getElementById("buyRate");
    let sellRateInput = document.getElementById("sellRate");
    let pencilQuantityInput = document.getElementById("pencilQuantity");

    // Validate buy rate
    if (!buyRateInput.checkValidity() || isNaN(parseFloat(buyRateInput.value))) {
        alert("Please enter a valid buy rate.");
        return;
    }

    // Validate sell rate
    if (!sellRateInput.checkValidity() || isNaN(parseFloat(sellRateInput.value))) {
        alert("Please enter a valid sell rate.");
        return;
    }

    // Validate pencil quantity
    if (!pencilQuantityInput.checkValidity() || isNaN(parseFloat(pencilQuantityInput.value) <= 0)) {
        alert("Please enter a valid pencil quantity.");
        return;
    }

    // If all inputs are valid, proceed with calculation
    calculate();
}
function calculateTotalEarnings(buyRate, sellRate, pencilQuantity) {

    // Calculate profit from pencils
    let pencilProfitPerUnit = sellRate - buyRate;
    let totalPencilProfit = pencilProfitPerUnit * pencilQuantity;
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
let pencilQuantity = parseInt(document.getElementById("pencilQuantity").value);


let totalEarnings = calculateTotalEarnings(buyRate, sellRate, pencilQuantity);
let profitPercentage = calculateTotalProfitPercentage(buyRate, sellRate);
// Display results
document.getElementById("totalEarnings").innerText = totalEarnings;
document.getElementById("totalProfitPercentage").innerText = profitPercentage + "%";

}