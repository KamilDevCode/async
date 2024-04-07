// hierarchy of the execution code:
// 1. script
// 2. document
// 3. window
// 4. globalThis
console.log("1. script");
console.log("2.", document);
console.log("3.", window);
console.log("4.", globalThis);
// code is executed from top to bottom,and from left to right like in previous example, but not always, it all depends on the type of operator and operands being executed : operator precedence:
const x = parseInt(5 + 5 + " !") // js calculate first right side and assign to left side into variable
console.log(typeof x)

const h1 = document.querySelector('h1')
console.log(h1) // returns h1 element because script is loaded 