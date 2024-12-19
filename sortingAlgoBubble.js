// bubbleSort.js

let numbers = [42, 25, 12, 63, 48, 10, 16, 5, 30, 78];

function addNumbers() {
    for (let i = 0; i < 5; i++) { 
        const input = prompt("Enter a number to add to the array (or type 'done' to finish):");
        if (input.toLowerCase() === 'done') {
            break; 
        }
        const number = parseFloat(input); 
        if (!isNaN(number)) {
            numbers.push(number); 
        } else {
            console.log("Invalid input. Please enter a valid number.");
            i--; 
        }
    }
}

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false; 
        for (let i = 0; i < n - 1; i++) {
            console.log(`Comparing ${arr[i]} and ${arr[i + 1]}`); 
            if (arr[i] > arr[i + 1]) {
                
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true; 
                console.log(`Swapped: ${arr[i]} and ${arr[i + 1]}`);
            }
        }
        n--; 
    } while (swapped);

    return arr;
}

function main() {
    addNumbers(); 
    console.log("Original Array:", numbers); 
    const sortedArray = bubbleSort(numbers); 
    console.log("Sorted Array:", sortedArray); 
}

main();