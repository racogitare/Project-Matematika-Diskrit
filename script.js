function addInput() {
    const inputContainer = document.getElementById('counting-inputs');
    const newInputDiv = document.createElement('div');
    const newInput = document.createElement('input');
    const deleteButton = document.createElement('button');

    newInput.type = 'number';
    newInput.placeholder = 'Enter a number';

    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function() {
        deleteInput(deleteButton);
    };

    newInputDiv.appendChild(newInput);
    newInputDiv.appendChild(deleteButton);
    inputContainer.appendChild(newInputDiv);
}

function addSortingInput() {
    const inputContainer = document.getElementById('sorting-inputs');
    const newInputDiv = document.createElement('div');
    const newInput = document.createElement('input');
    const deleteButton = document.createElement('button');

    newInput.type = 'number';
    newInput.placeholder = 'Enter a number';

    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function() {
        deleteInput(deleteButton);
    };

    newInputDiv.appendChild(newInput);
    newInputDiv.appendChild(deleteButton);
    inputContainer.appendChild(newInputDiv);
}

function deleteInput(button) {
    const inputDiv = button.parentElement;
    inputDiv.remove();
}

function getInputValues(inputId) {
    const inputs = document.querySelectorAll(`#${inputId} input`);
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
    const values = getInputValues('counting-inputs');
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
               
        }
    }
}
