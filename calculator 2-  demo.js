const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

const historyDisplay = document.getElementById("history");
const outDisplay = document.getElementById("output");

let CurrentValue = "";
let previousValue = "";
let operator = "";

numbers.forEach(button => {
    button.addEventListener("click", () => {
        CurrentValue += button.innerText;
        outputDisplay.innerText = CurrentValue;
     });
});

operator.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "c") {
            clearALL();
        }
        else if (value === "CE"){
            CurrentValue =CurrentValue.slice(0, -1);
            outputDisplay.innerText = CurrentValue;
        }
        else if (value === "=") {
            calculate();
        }
        else {
            setOperator(value);
        }
    });
});

function setOperator(op) {
  if (currentValue === "") return;

  previousValue = currentValue;
  operator = op;
  currentValue = "";

  historyDisplay.innerText= '${previousValue} ${operator}';
}

function calculate() {
  const prev = parseFloat(previousValue);
  const current = parseFloat(currentValue);

  if (isNaN(prev) || isNaN(current)) return;

  let result;

  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "−":
      result = prev - current;
      break;
    case "×":
      result = prev * current;
      break;
    case "÷":
      result = prev / current;
      break;
    case "%":
      result = prev % current;
      break;
    default:
      return;
  }

  outputDisplay.innerText = result;
  historyDisplay.innerText = "";

  currentValue = result.toString();
  previousValue = "";
  operator = "";
}

function clearAll() {
  currentValue = "";
  previousValue = "";
  operator = "";
  historyDisplay.innerText = "";
  outputDisplay.innerText = "";
}





