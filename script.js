const calcScreen = document.querySelector(".calc_screen");
const calTyped = calcScreen.querySelector(".cal_typed");
// const calTypedV = calTyped.querySelector(".cal_typed").innerHTML;
const calOperation = calcScreen.querySelector(".cal_operation");
const buttons = document.querySelectorAll(".button");

let result = "";
let operation = "";
let operand1 = "";
let operand2 = "";

function clear() {
    result = "";
    operation = "";
    operand1 = "";
    operand2 = "";
    calTyped.textContent = "0";
    calOperation.textContent = "";
}

function add() {
    operation = "+";
    operand1 = result;
    result = "";
    calTyped.textContent = operand1;
    calOperation.textContent = operand1 + " " + operation;
}

function subtract() {
    operation = "-";
    operand1 = result;
    result = "";
    calTyped.textContent = "";
    calOperation.textContent = operand1 + " " + operation;
}

function multiply() {
    operation = "*";
    operand1 = result;
    result = "";
    calTyped.textContent = "";
    calOperation.textContent = operand1 + " " + operation;
}

function divide() {
    operation = "/";
    operand1 = result;
    result = "";
    calTyped.textContent = "";
    calOperation.textContent = operand1 + " " + operation;
}

function calculate() {
    operand2 = result;
    switch (operation) {
        case "+":
            result = parseFloat(operand1) + parseFloat(operand2);
            break;
        case "-":
            result = parseFloat(operand1) - parseFloat(operand2);
            break;
        case "*":
            result = parseFloat(operand1) * parseFloat(operand2);
            break;
        case "/":
            result = parseFloat(operand1) / parseFloat(operand2);
            break;
        default:
            break;
    }
    calTyped.textContent = result;
    calOperation.textContent = operand1 + " " + operation + " " + operand2 + " =";
}

function updateResult(e) {
    const buttonValue = e.target.textContent;
    if (!isNaN(buttonValue) || buttonValue === ".") {
        result += buttonValue;
        calTyped.textContent = result;
    } else if (buttonValue === "+") {
        add();
    } else if (buttonValue === "-") {
        subtract();
    } else if (buttonValue === "*") {
        multiply();
    } else if (buttonValue === "/") {
        divide();
    } else if (buttonValue === "C") {
        clear();
    } else if (buttonValue === "=") {
        calculate();
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", updateResult);
});