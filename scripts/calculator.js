function add(a, b) {
    const answer = a + b;
    console.log(answer);
    return answer; 
}

function subtract(a, b) {
    const answer = a - b;
    console.log(answer);
    return answer; }

function multiply(a, b) {
    const answer = a * b;
    console.log(answer);
    return answer; }

function divide(a, b) {
    const answer = a / b;
    console.log(answer);
    return answer; }

function operate(operator, a, b) {
    if (operator == "+") {
        add(a, b);
    }
    else if (operator == "-") {
        subtract(a, b);
    }
    else if (operator == "*") {
        multiply(a, b);
    }
    else if (operator == "/") {
        divide(a, b);
    }
    else {
        console.log(operator + " is not an operator...");
        return;
    }
}

operate('*', 51, 5);