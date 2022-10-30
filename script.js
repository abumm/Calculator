
function add(a,b){
    let sum = a + b;
    return sum; 
}

function subtract(a,b){
    let sum = a - b;
    return sum;
}

function multiply(a,b){
    let sum = a * b;
    return sum; 
}

function divide(a,b){
    let sum = a / b;
    return sum; 
}

function operate(operation,a,b){
    switch (operation){
        case 'add':
            operand = add(a,b);
            console.log(operand);
            break;
        case 'subtract': 
            operand = subtract(a,b);
            console.log(operand);
            break;
        case 'multiply':
            operand = multiply(a,b);
            console.log(operand);
            break;
        case 'divide':
            operand = divide(a,b);
            console.log(operand);
            break; 
        default: 
            console.log('error');
            break;
    }
}