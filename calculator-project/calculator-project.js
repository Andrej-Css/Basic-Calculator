//MAKING THE BASIC FUNCTIONS
// https://www.theodinproject.com/lessons/foundations-calculator


//Selecting the DOM elements 
const display = document.querySelector("p"); 
const numberButtons = document.querySelectorAll(".numero");
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector(".calculator-eqal");
const clear = document.querySelector(".calculator-clear"); 

// let previousValue = ''
// let currentValue = ''

let numOne = ''; 
let numTwo = ''; 
let selectedOperator = '';


// add
const addition = ((numOne,numTwo)=> numOne+numTwo)
// subtract
const subtraction = ((numOne,numTwo)=> numOne-numTwo)
// multiply
const mutiply = ((numOne,numTwo)=> numOne*numTwo)
// divide
const divide = ((numOne,numTwo)=> numOne/numTwo)

// Adding the Varibles 
 
//Basic Principle 
function operate(numOne, numTwo, operator) {
    switch (operator) {
        case "+":
            return addition(numOne, numTwo);
        case "-":
            return subtraction(numOne, numTwo);
        case "*":
            return mutiply(numOne, numTwo);
        case "/":
            return divide(numOne, numTwo);
        default:
            return null;
    }
};

// Populate the display 
numberButtons.forEach(btn=> {
    btn.addEventListener("click", () => {
        display.innerHTML += btn.value;
        if (!selectedOperator) {
            // Build the first number if no operator is selected
            numOne += btn.value;
        } else {
            // Build the second number if operator is selected
            numTwo += btn.value;
        }
        console.log("numOne:", numOne, "numTwo:", numTwo);
    });


    // btn.addEventListener("click", ()=> {
    //     console.log("button clicked", btn);
    //     display.innerHTML += btn.value;
    //     console.log("value of button:", btn.value);
    //     currentValue = parseInt(display.innerText);
    //     numOne = parseInt(display.innerText);
    //     console.log("currentValues is:", currentValue);
    //     console.log("first number is:", numOne);

    // })
})

operators.forEach(op => {
    op.addEventListener("click", () => {
        if (numOne) {
            selectedOperator = op.value;
            display.innerHTML = ""; // Clear the display for the second number
            console.log("Operator selected:", selectedOperator);
        }
    });
});

// (function(numberButton) {
    // numberButton.addEventListener("click", function() {
    //   display.textContent += numberButton.value;
    //   currentValue = parseInt(display.innerText)
    // })
  

    equal.addEventListener("click", () => {
        // Ensure numOne and numTwo are converted to numbers for calculations
        const parsedNumOne = parseFloat(numOne);
        const parsedNumTwo = parseFloat(numTwo);
        if (parsedNumTwo === 0 && selectedOperator === "/") {
            display.innerHTML = "Cheeky! No division by 0";
            console.log("Cheeky! No division by 0")
        }
    
        // Check for valid input and prevent division by zero
        if (parsedNumOne && parsedNumTwo && selectedOperator) {
                // Perform the operation and display the result
                const result = operate(parsedNumOne, parsedNumTwo, selectedOperator);
                display.innerHTML = result;
                console.log("Result:", result);
    
                // Prepare for the next calculation
                numOne = result.toString(); // Store result as string for future input
                numTwo = ''; // Reset second number
                selectedOperator = ''; // Reset operator
        }
    });
    

clear.addEventListener("click", () => {
    display.innerHTML = '';
    numOne = ''; 
    numTwo= ''; 
    selectedOperator = ''; 
    console.log("calculator has been reset")
    
});