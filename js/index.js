var calculator = document.getElementById("calculator");

function ins(val) {
    calculator.value += val;   
}

function equals() { 
    calculator.value = eval(calculator.value)
}

function clear_All() {
    calculator.value = ""; 
}

function delete_num() {
    calculator.value = calculator.value.slice(0, -1);
}

function calc_clear() {
    var operators = calculator.value.split(/([+\-×÷])/);

    if (operators.length > 1) {
        operators.pop();
        calculator.value = operators.join('');
    }

    else {
        calculator.value = "";
    }
}

function root() {
    calculator.value = Math.sqrt(calculator.value)
}

function random_sign() {
    if (calculator.value) {
        calculator.value = Number(calculator.value) * - 1
    }
}

function inverse() {
    if (calculator.value && Number(1 / calculator.value)) {
        calculator.value = 1 / Number (calculator.value)
    }
}