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

function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function operate(operator, a, b) {  
    const values = document.getElementById("result").value;
    console.log(values);

    if (values.includes("+")) {
        const numbers = document.getElementById("result").value.split(/[+]/);
        console.log(numbers);
        a = Number(numbers[0]);
        b = Number(numbers[1]);
        clearScreen();
        display(add(a, b));
    }
    else if (values.includes("-")) {
        const numbers = document.getElementById("result").value.split(/[-]/);
        a = Number(numbers[0]);
        b = Number(numbers[1]);
        clearScreen();
        display(subtract(a, b));        
    }
    else if (values.includes("*")) {
        const numbers = document.getElementById("result").value.split(/[*]/);
        a = Number(numbers[0]);
        b = Number(numbers[1]);
        clearScreen();
        display(multiply(a, b));
    }
    else if (values.includes("/")) {
        const numbers = document.getElementById("result").value.split(/[/]/);
        a = Number(numbers[0]);
        b = Number(numbers[1]);
        clearScreen();
        display(divide(a, b));
    }
    else {
        console.log(operator + " is not an operator...");
        return;
    }
}