// sortArray.j

// Create two Single Dimensional Arrays
const numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
const names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

// Merge both arrays into a single array and log it to the console
const mergedArray = [...numbers, ...names];
console.log("Merged Array:", mergedArray);

// Sort numbers numerically in reverse and log it to the console
const sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("Sorted Numbers in Reverse:", sortedNumbers);

// Sort names alphabetically and log it to the console
const sortedNames = [...names].sort();
console.log("Sorted Names Alphabetically:", sortedNames);