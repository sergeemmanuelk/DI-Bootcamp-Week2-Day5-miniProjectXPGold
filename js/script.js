let display = document.getElementById('display');
let operation = "";

function number(num) {
    operation += num;
    display.textContent = operation;
}

function operator(op) {
    operation += op;
    display.textContent = operation;
}

function equal() {
    let result = eval(operation);
    display.textContent = result;
    operation ="";
}

function reset() {
    operation = "";
    display.textContent = "0";
}

function clear() {
    operation = operation.slice(0, -1);
    display.textContent = operation;
}

// let result = document.getElementById("result")

// function number(num) {
//     result.innerHTML += num
// }

// function operator(op) {
//     result.innerHTML += op
// }

// function equal() {
//     let operation = result.innerHTML;
//     result.innerHTML = eval(operation);
// }

// function reset() {
//     result.innerHTML = "";
// }

// function clear() {
//     result.innerHTML = result.innerHTML.slice(0, -1);
// }
