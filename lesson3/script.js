const button = document.createElement('button');
button.textContent = 'Click me';
document.body.appendChild(button);

button.addEventListener('click', () => {
    console.log('button clicked');
})

console.log('Click me');

/* The `setTimeout(() =)` code snippet is attempting to use the `setTimeout` function in JavaScript to
schedule a function to be executed after a specified delay. */

setTimeout(() =>{
    console.log('button clicked');
},5000)