let displayValue = document.getElementById('display');

function appendToDisplay(value) {
    displayValue.value += value;
    
}

function clearDisplay() {
    displayValue.value = ""; 
}

function calculateResult() {
    try {
        let result = eval(displayValue.value);
        displayValue.value = result;
    } catch (error) {
        displayValue.value = "Input Error";
    }
}

function squareRoot() {
    try {
        displayValue.value = Math.sqrt(parseFloat(displayValue.value)); 
    } catch (error) {
        displayValue.value = "Error";
    }
}

function calculateSin() {
    try {
        displayValue.value = Math.sin(parseFloat(displayValue.value)); 
    } catch (error) {
        displayValue.value = "Error";
    }
}




