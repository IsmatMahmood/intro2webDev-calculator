const calculator = document.querySelector(".calculator_container");
const display = document.querySelector(".display");
calculator.addEventListener("click", (e) => getClickValue(e));

let num1 = "";
let num2 = "";
let operator;
let answer;
let onNum1 = true;

function getClickValue(event) {
    let input = event.target.innerText;
    switch (input) {
        case "C":   num1 = ""; num2 = ""; operator = ""; answer = ""; onNum1 = true;
                    reRender("0");
                    break;
        case "←":   if(onNum1){
                        num1 = num1.slice(0, num1.length-1);
                        reRender(num1);
                    }
                    else {
                        num2 = num2.slice(0, num2.length-1);
                        reRender(num2);   
                    }
                    break;
        case "+":   if (num1 && num2 && !operator) {
                        answer = +num1 + +num2;
                        midCalc(answer);
                    } else if (num1 && num2 && operator){
                        answer = calcAnswer(operator, num1, num2);
                        midCalc(answer);
                    }
                    operator = "+";
                    onNum1 = false;
                    break;
        case "-":   if (num1 && num2 && !operator) {
                        answer = +num1 - +num2;
                        midCalc(answer);
                    } else if (num1 && num2 && operator){
                        answer = calcAnswer(operator, num1, num2);
                        midCalc(answer);
                    }
                    operator = "-";
                    onNum1 = false;
                    break;
        case "×":   if (num1 && num2 && !operator) {
                        answer = +num1 * +num2;
                        midCalc(answer);
                    } else if (num1 && num2 && operator){
                        answer = calcAnswer(operator, num1, num2);
                        midCalc(answer);
                    }
                    operator = "×";
                    onNum1 = false;
                    break;
        case "÷":   if (num1 && num2 && !operator) {
                        answer = +num1 / +num2;
                        midCalc(answer);
                    } else if (num1 && num2 && operator){
                        answer = calcAnswer(operator, num1, num2);
                        midCalc(answer);
                    } 
                    operator = "÷";
                    onNum1 = false;
                    break; 
        case "=":   if (num1 && num2 && operator) {
                    answer = calcAnswer(operator, num1, num2)
                    reRender(answer);
                    num1=""; num2=""; operator="";
                    }
                    break; 
        default:    if (onNum1) {
                        num1 += input;
                        reRender(num1);
                    } else {
                        num2 += input;
                        reRender(num2);
                    }
    }
}

function midCalc(answer) {
    reRender(answer);
    num1 = answer;
    num2 = "";
    operator = undefined;
    onNum1 = false;
}

function calcAnswer(operator, num1, num2) {
    let answer;
    switch (operator) {
        case "+": answer = +num1 + +num2; break;
        case "-": answer = +num1 - +num2; break;
        case "×": answer = +num1 * +num2; break;
        case "÷": answer = +num1 / +num2; break;
        default: answer = "can't compute";
    }
    return answer;
}

function reRender(value) {
    display.innerText = value;
}
