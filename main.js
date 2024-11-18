    function numBtn(num) {
    if (display.textContent === "0") {
        display.textContent = num;
    } else {
        display.textContent += num;
    }
    currentInput += num;
}

function calculate1() {
    try {
        display.textContent = eval(display.innerText);
    } catch (error) {
        display.textContent = 'Error';
    }
}
function clear1() {
    display.textContent = '0';
}


