function bubbleSort(arr) {
    var n = arr.length;
    var swapped = true;

    while (swapped) {
        swapped = false;
        for (var i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    }

    return arr;
}

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    var inputElement = document.querySelector('input[name="inputArray"]');
    var inputValue = inputElement.value.trim();

    if (inputValue === "") {
        alert("Please enter values separated by spaces.");
        return;
    }

    var inputArray = inputValue.split(' ').map(Number);
    var sortedArray = bubbleSort(inputArray.slice());

    var outputElement = document.getElementById('output');
    outputElement.innerHTML = "<h2>Original Array:</h2>" + inputArray.join(" ") +
        "<h2>Sorted Array:</h2>" + sortedArray.join(" ");
});
