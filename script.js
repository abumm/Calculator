//global variables
let btnValue = 0 ;
let displayValue = 0;

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
        case '+':
            operand = add(a,b);
            console.log(operand);
            break;
        case '-': 
            operand = subtract(a,b);
            console.log(operand);
            break;
        case 'x':
            operand = multiply(a,b);
            console.log(operand);
            break;
        case '&#247':
            operand = divide(a,b);
            console.log(operand);
            break; 
        default: 
            console.log('error');
            break;
    }
}

//Constat document objects
const numberClass = document.querySelector(".numbers");
const numberBtns = numberClass.querySelectorAll('button');
const calcDisplay = document.querySelector(".display");
const clearBtn = document.querySelector("#clear");


//Btn Listenenrs
numberBtns.forEach(button => button.addEventListener("click",function(){
    numberFunction(button);
}));

clearBtn.addEventListener("click", function(){
    clearDisplay();
});


//Functions from btns
function clearDisplay(){
    displayValue = 0;
    calcDisplay.innerHTML = displayValue;
}

function updateDisplay(val){
    calcDisplay.innerHTML = val;
}

function numberFunction(button){
    btnValue = button.innerHTML;
    updateDisplay(btnValue)
    
}
