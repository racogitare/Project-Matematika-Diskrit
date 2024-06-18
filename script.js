function tambahInput() {
    const inputContainer = document.getElementById('counting-inputs');
    const newInputDiv = document.createElement('div');
    const newInput = document.createElement('input');
    const deleteButton = document.createElement('button');

    newInput.type = 'number';
    newInput.placeholder = 'Masukkan angka';

    deleteButton.innerText = 'Hapus';
    deleteButton.onclick = function() {
        hapusInput(deleteButton);
    };

    newInputDiv.appendChild(newInput);
    newInputDiv.appendChild(deleteButton);
    inputContainer.appendChild(newInputDiv);
}

function tambahInputSorting() {
    const inputContainer = document.getElementById('sorting-inputs');
    const newInputDiv = document.createElement('div');
    const newInput = document.createElement('input');
    const deleteButton = document.createElement('button');

    newInput.type = 'number';
    newInput.placeholder = 'Masukkan angka';

    deleteButton.innerText = 'Hapus';
    deleteButton.onclick = function() {
        hapusInput(deleteButton);
    };

    newInputDiv.appendChild(newInput);
    newInputDiv.appendChild(deleteButton);
    inputContainer.appendChild(newInputDiv);
}

function hapusInput(button) {
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

function hitung() {
    const values = getInputValues('counting-inputs');
    const operation = document.getElementById("counting-operation").value;
    let result;

    if (values.length === 0) {
        result = "Silakan masukkan setidaknya satu angka.";
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
        }
    }

    document.getElementById("counting-result").innerText = `Hasil: ${result}`;
}

function pigeonhole() {
    const n = parseInt(document.getElementById('pigeonhole-n').value);
    const m = parseInt(document.getElementById('pigeonhole-m').value);
    let result;

    if (isNaN(n) || isNaN(m)) {
        result = "Silakan masukkan nilai n dan m.";
    } else if (n < 0 || m <= 0) {
        result = "Nilai n harus >= 0 dan m harus > 0.";
    } else {
        const k = Math.ceil(n / m);
        result = `Paling sedikit ada ${k} elemen dalam satu lubang.`;
    }

    document.getElementById('pigeonhole-result').innerText = result;
}

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

function permutasi() {
    const n = parseInt(document.getElementById('permutasi-n').value);
    const r = parseInt(document.getElementById('permutasi-r').value);
    let result;

    if (isNaN(n) || isNaN(r)) {
        result = "Silakan masukkan nilai n dan r.";
    } else if (n < 0 || r < 0 || r > n) {
        result = "Nilai n dan r harus >= 0 dan r harus <= n.";
    } else {
        result = factorial(n) / factorial(n - r);
    }

    document.getElementById('permutasi-result').innerText = `Hasil: ${result}`;
}

function kombinasi() {
    const n = parseInt(document.getElementById('kombinasi-n').value);
    const r = parseInt(document.getElementById('kombinasi-r').value);
    let result;

    if (isNaN(n) || isNaN(r)) {
        result = "Silakan masukkan nilai n dan r.";
    } else if (n < 0 || r < 0 || r > n) {
        result = "Nilai n dan r harus >= 0 dan r harus <= n.";
    } else {
        result = factorial(n) / (factorial(r) * factorial(n - r));
    }

    document.getElementById('kombinasi-result').innerText = `Hasil: ${result}`;
}

function binomial() {
    const n = parseInt(document.getElementById('binomial-n').value);
    const k = parseInt(document.getElementById('binomial-k').value);
    let result;

    if (isNaN(n) || isNaN(k)) {
        result = "Silakan masukkan nilai n dan k.";
    } else if (n < 0 || k < 0 || k > n) {
        result = "Nilai n dan k harus >= 0 dan k harus <= n.";
    } else {
        result = factorial(n) / (factorial(k) * factorial(n - k));
    }

    document.getElementById('binomial-result').innerText = `Hasil: ${result}`;
}

function urutkan() {
    const values = getInputValues('sorting-inputs');
    const algorithm = document.getElementById('sorting-algorithm').value;

    if (values.length === 0) {
        document.getElementById('sorting-result').innerText = "Silakan masukkan setidaknya satu angka.";
        return;
    }

    let result;
    let steps = [];

    switch (algorithm) {
        case "bubbleSort":
            result = bubbleSort(values, steps);
            break;
        case "insertionSort":
            result = insertionSort(values, steps);
            break;
        case "mergeSort":
            result = mergeSort(values, steps);
            break;
        case "quickSort":
            result = quickSort(values, steps);
            break;
        case "pigeonholeSort":
            result = pigeonholeSort(values, steps); // Tambahkan fungsi pigeonholeSort
            break;
    }

    document.getElementById('sorting-steps').innerText = steps.join('\n');
    document.getElementById('sorting-result').innerText = `Hasil: ${result.join(', ')}`;
}

function bubbleSort(arr, steps) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                steps.push(`Menukar ${arr[j]} dengan ${arr[j + 1]}: [${arr.join(', ')}]`);
            }
        }
    }
    return arr;
}

function insertionSort(arr, steps) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
            steps.push(`Memindahkan ${arr[j + 1]} ke posisi ${j + 1}: [${arr.join(', ')}]`);
        }
        arr[j + 1] = key;
        steps.push(`Menempatkan ${key} di posisi ${j + 1}: [${arr.join(', ')}]`);
    }
    return arr;
}

function mergeSort(arr, steps) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid), steps);
    const right = mergeSort(arr.slice(mid), steps);

    return merge(left, right, steps);
}

function merge(left, right, steps) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    steps.push(`Menggabungkan [${left.join(', ')}] dan [${right.join(', ')}] menjadi [${result.concat(left.slice(i)).concat(right.slice(j)).join(', ')}]`);

    return result.concat(left.slice(i)).concat(right.slice(j));
}

function quickSort(arr, steps) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    steps.push(`Pivot ${pivot}: [${left.join(', ')}], [${pivot}], [${right.join(', ')}]`);

    return quickSort(left, steps).concat([pivot], quickSort(right, steps));
}

function pigeonholeSort(arr, steps) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let size = max - min + 1;
    let holes = new Array(size).fill(0);

    arr.forEach(num => {
        holes[num - min]++;
        steps.push(`Menempatkan ${num} pada pigeonhole index ${num - min}: [${holes.join(', ')}]`);
    });

    let sortedArr = [];
    for (let i = 0; i < size; i++) {
        while (holes[i]-- > 0) {
            sortedArr.push(i + min);
            steps.push(`Mengeluarkan ${i + min} dari pigeonhole: [${sortedArr.join(', ')}]`);
        }
    }

    return sortedArr;
}
