let num = 0;
let stockedOperations = [];
let memorisedNumber;
textBox = document.getElementById('screen');
function display(num){
    textBox.value += num;
}
function clearScreen(){
    textBox.value = "";
    stockedOperations = [];
    num = 0;
}
function calculate(){
    stockedOperations.push(textBox.value); 
    textBox.value = eval(stockedOperations.join(''));
    num = 0;
    stockedOperations = [];
}
function deleteChar(){
    textBox.value = textBox.value.slice(0, -1);
}

function appendNumber(number) {
    if (num === 0) {
        textBox.value = number;
    } else {
        textBox.value += number;
        
    }
    num++;
}
function appendOperator(operator) {
    if (num > 0) {
        stockedOperations.push(textBox.value);
        stockedOperations.push(operator);
        textBox.value += operator;
        num = 0;
        console.log(stockedOperations)
    }
}
function memorise(){
    textBox.value = textBox.value.replace(/[\+\-\*\/]$/, '');
    memorisedNumber = textBox.value;
    textBox.value = "";
}

function recall(){
    textBox.value += memorisedNumber;
}