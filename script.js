function convertDecimalToBinary() {
    const decimalInput = document.getElementById("decimalInput").value;
    const resultElement = document.getElementById("decimalResult");
    
    if (decimalInput === "") {
        resultElement.innerText = "Please enter a decimal number.";
        return;
    }

    const decimalNumber = parseInt(decimalInput, 10);
    if (isNaN(decimalNumber) || decimalNumber < 0) {
        resultElement.innerText = "Please enter a valid non-negative integer.";
    } else {
        const binaryNumber = decimalNumber.toString(2);
        resultElement.innerText = `The binary equivalent of ${decimalNumber} is ${binaryNumber}.`;
    }
}

function convertBinaryToDecimal() {
    const binaryInput = document.getElementById("binaryInput").value;
    const resultElement = document.getElementById("binaryResult");
    
    if (binaryInput === "") {
        resultElement.innerText = "Please enter a binary number.";
        return;
    }

    const decimalNumber = parseInt(binaryInput, 2);
    if (isNaN(decimalNumber) || binaryInput.match(/[^01]/)) {
        resultElement.innerText = "Invalid binary number.";
    } else {
        resultElement.innerText = `The decimal equivalent of ${binaryInput} is ${decimalNumber}.`;
    }
}
