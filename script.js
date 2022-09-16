// Display values on screen
const showVal = (val) => {
    document.getElementById("screen").value += val;
}

//Function for evaluating
const evaluateExp = () => {
    let a = document.getElementById("screen").value;
    let b = eval(a);
    document.getElementById("screen").value = b;
}

//Function for clearing screen
const clearScreen = () => {
    document.getElementById("screen").value = "";
}

//Function for backspacing
const backspace = () => {
    let screen = document.getElementById("screen").value;
    document.getElementById("screen").value = screen.substring(0, screen.length - 1);
}

