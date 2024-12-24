let display = document.getElementById('display');
let historyList = document.getElementById('historyList');

function appendToDisplay(value) {
    display.innerText += value;
}

function clearDisplay() {
    display.innerText = '';
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
}

function calculateResult() {
    try {
        let result = eval(display.innerText);
        if (!isNaN(result)) {
            addToHistory(display.innerText + ' = ' + result);
            display.innerText = result;
        }
    } catch (e) {
        display.innerText = 'Error';
    }
}

function addToHistory(entry) {
    let listItem = document.createElement('li');
    listItem.innerText = entry;
    historyList.appendChild(listItem);
}