//global variables
let btnValue = 0 ;
let displayValue = 0;
let operation = '';
let operationActive = false;
let a = "";
let b = "";

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
            updateDisplay(operand);
            break;
        case '-': 
            operand = subtract(a,b);
            console.log(operand);
            updateDisplay(operand);
            break;
        case 'x':
            operand = multiply(a,b);
            console.log(operand);
            updateDisplay(operand);
            break;
        case "/" :
            console.log("here",a,b);
            if(b == 0){
                console.log("b is 0")
                alert("Can't divide by Zero!");
                clearDisplay();
            }
            else {
                operand = divide(a,b);
                console.log("this is happening")
                console.log(operand);
                updateDisplay(operand);
            }

            
            break; 
        default: 
            //clear btn
            //console.log('error');
            clearDisplay();
            break;
    }
}

//Constat document objects
const numberClass = document.querySelector(".numbers");
const numberBtns = numberClass.querySelectorAll('button');
const calcDisplay = document.querySelector(".display");
const clearBtn = document.querySelector("#clear");
const calculateBtn = document.querySelector("#equal");
const operationClass = document.querySelector(".operations");
const operationBtns = operationClass.querySelectorAll('button');


//Btn Listenenrs
numberBtns.forEach(button => button.addEventListener("click",function(){
    numberFunction(button);
}));

operationBtns.forEach(opButton => opButton.addEventListener("click", function(){
    operataionFunction(opButton);
}))

clearBtn.addEventListener("click", function(){
    clearDisplay();
});

//CALCULATE 
calculateBtn.addEventListener("click", function(){
    b = parseInt(b);
    console.log("math to do",a,operation,b);    
    console.log("a", typeof a, "b", typeof b)
    operate(operation,a,b);
    
});


//Functions from btns
function clearDisplay(){
    displayValue = 0;
    a = "";
    b = "";
    operationActive = false;
    calcDisplay.innerHTML = displayValue;
    console.log(a,b);
}

function updateDisplay(val){
    calcDisplay.innerHTML = val;
}

function numberFunction(button){
    btnValue = button.innerHTML;
    let temp = 0; 
    if(operationActive == false){
        a += btnValue;
        console.log("a",a);
        temp = a; 
    }
    else{
        b+= btnValue;
        console.log("b",b);
        temp = b
    }
    updateDisplay(temp);
    console.log(btnValue);
}

function operataionFunction(opButton){
    operation = opButton.innerHTML;
    operationActive = true;
    a = parseInt(a);
    console.log("a parsed =", a);
    console.log(operation);
}
