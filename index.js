// Write your code here!
/ index.js
// 1. Find and remove the <main> element
const mainElement = document.getElementById('main');
if (mainElement) {
  mainElement.remove();
}

// 2. Create a new <h1> element
const newHeader = document.createElement('h1');

// 3. Set the id to 'victory'
newHeader.id = 'victory';

// 4. Set the text content (make sure to replace 'Your Name')
newHeader.textContent = "Your Name is the champion"; 

// 5. Insert the newHeader into the DOM (You'll need to decide where)
const body = document.querySelector('body'); 
body.appendChild(newHeader); 