function bubbleSort(arr) {
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        var swapped = false;
        for (var j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
    return arr;
}

function generateRandomArray(size, min, max) {
    var arr = [];
    for (var i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}

document.addEventListener('DOMContentLoaded', function () {
    var size = 10;
    var minValue = 1;
    var maxValue = 100;
    
    var randomArray = generateRandomArray(size, minValue, maxValue);
    
    document.getElementById('originalArray').textContent = randomArray.join(', ');
    
    var sortedArray = bubbleSort(randomArray.slice());
    
    document.getElementById('sortedArray').textContent = sortedArray.join(', ');
});
