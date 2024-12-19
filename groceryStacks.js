// groceryStacks.js

let groceryStack = [];

function peek() {
    if (groceryStack.length === 0) {
        console.log("The stack is empty.");
        return null;
    } else {
        console.log("Top item:", groceryStack[groceryStack.length - 1]);
        return groceryStack[groceryStack.length - 1];
    }
}

function push(item) {
    groceryStack.push(item);
    console.log(`Added: ${item}`);
    peek(); 
    printStack(); 
}

function pop() {
    if (groceryStack.length === 0) {
        console.log("Cannot pop from an empty stack.");
    } else {
        const removedItem = groceryStack.pop(); 
        console.log(`Removed: ${removedItem}`);
        peek();
        printStack(); 
    }
}

function printStack() {
    console.log("Current Stack:", groceryStack);
}

function main() {
    for (let i = 0; i < 5; i++) {
        const item = prompt("Enter a grocery item:"); 
        push(item); 
    }

    let continuePopping = true;
    while (continuePopping) {
        const action = prompt("Do you want to pop an item from the stack? (yes/no)");
        if (action.toLowerCase() === 'yes') {
            pop(); // Pop an item from the stack
        } else {
            continuePopping = false; // Exit the loop
        }
    }
}

main();