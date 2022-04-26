const add = function(a,b){
    return a + b
}

const subtract = function(a,b){
    return a - b;
}

const multiply = function(a,b){
    return a * b;
}

const divide = function(a,b){
    return a / b;
}

const operate = function(operator,a,b){
    switch (operator) {
        case "add":
            return add(a,b)
            break;
        case "subt":
            return subtract(a,b)
            break;
        case "mult":
            return multiply(a,b)
            break;
        case "div":
            return divide(a,b)
    }
}

let displayNumber = document.querySelector('.display__number');
let firstArgument = ''
let secondArgument = ''
let operatorUsed = ''

const getFirstArgument = function(e){
    firstArgument += e.target.textContent;
    displayNumber.textContent = firstArgument;
}

const getSecondArgument = function(e){
    secondArgument += e.target.textContent;
    displayNumber.textContent = secondArgument;
}

const convertArgsToNumbers = function(){
    firstArgument = Math.round(firstArgument);
    secondArgument = Math.round(secondArgument);
}

const resetCalculator = function(){
    firstArgument = '';
    secondArgument = '';
    operatorUsed = '';
    displayNumber.textContent = '';
}

const numButtons = document.querySelectorAll('.btn-num');
numButtons.forEach(function(numButton){
    numButton.addEventListener('click', (e) => {
        if(operatorUsed === ''){
            getFirstArgument(e)
        } else {
            getSecondArgument(e)
        }
    })
})




const operators = document.querySelectorAll('.btn-operator')
operators.forEach(function(operator){
    operator.addEventListener('click', (e) =>{
        if (secondArgument !== ''){
            convertArgsToNumbers();
            firstArgument = operate(operatorUsed,firstArgument,secondArgument);
            secondArgument = ''
        }

        operatorUsed = e.target.textContent
        displayNumber.textContent = ''
    })
})

const clearButton = document.querySelector('.btn-clear')
clearButton.addEventListener('click', function(){
    resetCalculator();
})

const operateButton = document.querySelector('.btn-operate');
operateButton.addEventListener('click', function(){
    if (firstArgument !== '' && secondArgument !== '' & operatorUsed !== ''){
        convertArgsToNumbers();
        firstArgument = operate(operatorUsed,firstArgument,secondArgument)
        secondArgument = ''
        displayNumber.textContent = firstArgument
    } else {
        alert('Please enter your calculation')
    }
})


// if all three of these arguments are not longer empty strings, then use the operate function to get the result
    // after this the result should become the first argument and the operator used should be reset to an empty string
    // do not yet display the result
