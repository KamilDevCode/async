const script = document.createElement("script");
script.src = "./add.js";
document.body.appendChild(script);

script.addEventListener("load", () => {
	console.log("add.js loaded");
	console.log(add(1, 2));
});

console.log('first ');