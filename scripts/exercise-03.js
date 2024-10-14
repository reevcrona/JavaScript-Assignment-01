const firstInput = document.querySelector(".first-number");
const operationOption = document.querySelector("#operation");
const secondInput = document.querySelector(".second-number");
const calcButton = document.querySelector(".calc-button");
const resultText = document.querySelector(".result-text");


function calculate(firstNum,secondNum,operation){

    switch(operation){
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "*":
            return firstNum * secondNum;
        case "/":
            return firstNum / secondNum;
    }

}


calcButton.addEventListener("click", () => {
    const result = calculate(Number(firstInput.value),Number(secondInput.value),operationOption.value)
    resultText.textContent = result
})
