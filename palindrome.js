// palindrome.js

// Prompt the user for two words
let word1 = prompt("Enter the first word (e.g., RACECAR):");
let word2 = prompt("Enter the second word (e.g., RECORDER):");

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Reverse the strings
let reversedWord1 = reverseString(word1);
let reversedWord2 = reverseString(word2);

// Log the original and reversed strings
console.log("Original String 1: " + word1);
console.log("Reversed String 1: " + reversedWord1);
console.log("Original String 2: " + word2);
console.log("Reversed String 2: " + reversedWord2);

// Check if the original strings are equivalent to the reversed strings
let isPalindrome1 = word1 === reversedWord1;
let isPalindrome2 = word2 === reversedWord2;

// Log the truth values
console.log("Is the first word a palindrome? " + isPalindrome1);
console.log("Is the second word a palindrome? " + isPalindrome2);