function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    let result;

    try {
        result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

