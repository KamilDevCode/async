// scripts in head tag are executed before scripts in script tag, they can block web browser during execution of script until the script is loaded
console.log('1. header in js file from head tag');

const header = document.querySelector('h1');
// header.textContent = 'Header from header.js file';
console.log(header) // null because header is not loaded yet, DOM is not built and rendered yet