var currentNumberOnCalculatorScreen = '';
var previousNumber = '';
var plusButtonWasPressed = false;

function numberButtonPressed(numberAsString){
    currentNumberOnCalculatorScreen += numberAsString;
    calculator.display.value = currentNumberOnCalculatorScreen;
}

function plusButtonPressed(){
    previousNumber = currentNumberOnCalculatorScreen;
    currentNumberOnCalculatorScreen = '';
    calculator.display.value = currentNumberOnCalculatorScreen;
    plusButtonWasPressed = true;
}

function equalsButtonPressed(){
    if(plusButtonWasPressed){
        var answer = parseInt(currentNumberOnCalculatorScreen) + parseInt(previousNumber);
        currentNumberOnCalculatorScreen = answer;
        calculator.display.value = currentNumberOnCalculatorScreen;
    }
}