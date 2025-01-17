// lloNodeListing.js

class Node {
    constructor(value) {
      this.value = value; 
      this.next = null; 
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null; 
      this.size = 0; 
    }
  
    
    append(value) {
      const newNode = new Node(value);
  
      if (!this.head) {
        
        this.head = newNode;
      } else {
        
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
  
      this.size++; 
      this.print(); 
    }
  
    print() {
      let current = this.head;
      const values = [];
      while (current) {
        values.push(current.value);
        current = current.next;
      }
      console.log("LinkedList:", values.join(" -> "));
    }
  }
  
  const linkedList = new LinkedList();
  
  // Append the given items
  linkedList.append("Data Structures-Array");
  linkedList.append("Variable Type-Integer");
  linkedList.append("Sorting Algorithm-Bubble Sort");