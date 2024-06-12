function addInput() {
    const inputContainer = document.getElementById('counting-inputs');
    const newInput = document.createElement('input');
    newInput.type = 'number';
    newInput.placeholder = 'Enter a number';
    inputContainer.appendChild(newInput);
}

function getInputValues() {
    const inputs = document.querySelectorAll('#counting-inputs input');
    const values = [];
    inputs.forEach(input => {
        const value = parseFloat(input.value);
        if (!isNaN(value)) {
            values.push(value);
        }
    });
    return values;
}

function count() {
    const values = getInputValues();
    const operation = document.getElementById("counting-operation").value;
    let result;

    if (values.length === 0) {
        result = "Please enter at least one number.";
    } else {
        switch (operation) {
            case "multiply":
                result = values.reduce((acc, val) => acc * val, 1);
                break;
            case "add":
                result = values.reduce((acc, val) => acc + val, 0);
                break;
            case "subtract":
                result = values.reduce((acc, val) => acc - val);
                break;
            case "divide":
                result = values.reduce((acc, val) => acc / val);
                break;
            default:
                result = "Please select an operation.";
        }
    }

    document.getElementById("counting-result").innerText = `Result: ${result}`;
}

function pigeonhole() {
    const n = parseFloat(document.getElementById("pigeonhole-n").value);
    const m = parseFloat(document.getElementById("pigeonhole-m").value);
    let result;

    if (isNaN(n) || isNaN(m) || m <= 0) {
        result = "Please enter valid numbers for n and a positive number for m.";
    } else {
        result = Math.ceil(n / m);
    }

    document.getElementById("pigeonhole-result").innerText = `Pigeonhole Principle Result: ${result}`;
}

function permutasi() {
    const n = parseFloat(document.getElementById("permutasi-n").value);
    const r = parseFloat(document.getElementById("permutasi-r").value);
    let result;

    if (isNaN(n) || isNaN(r) || n < r || r < 0) {
        result = "Please enter valid values for n and r (n >= r and r >= 0).";
    } else {
        result = factorial(n) / factorial(n - r);
    }

    document.getElementById("permutasi-result").innerText = `Permutasi Result: ${result}`;
}

function kombinasi() {
    const n = parseFloat(document.getElementById("kombinasi-n").value);
    const r = parseFloat(document.getElementById("kombinasi-r").value);
    let result;

    if (isNaN(n) || isNaN(r) || n < r || r < 0) {
        result = "Please enter valid values for n and r (n >= r and r >= 0).";
    } else {
        result = factorial(n) / (factorial(r) * factorial(n - r));
    }

    document.getElementById("kombinasi-result").innerText = `Kombinasi Result: ${result}`;
}

function binomial() {
    const n = parseFloat(document.getElementById("binomial-n").value);
    const k = parseFloat(document.getElementById("binomial-k").value);
    let result;

    if (isNaN(n) || isNaN(k) || n < k || k < 0) {
        result = "Please enter valid values for n and k (n >= k and k >= 0).";
    } else {
        result = factorial(n) / (factorial(k) * factorial(n - k));
    }

    document.getElementById("binomial-result").innerText = `Koefisien Binomial Result: ${result}`;
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
    