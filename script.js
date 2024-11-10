// Function to append clicked button values to the display
function appendValue(value) {
    const display = document.getElementById('display');
    if (display.value === "0" && value !== ".") {
        display.value = value; // Replace "0" with first number entered
    } else {
        display.value += value; // Append next values
    }
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = "0";
}

// Function to delete the last entered character
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    if (display.value === "") display.value = "0";
}

// Function to calculate and display the result
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Evaluate the expression in the display
    } catch (error) {
        display.value = "Error"; // Display error if the expression is invalid
    }
}
