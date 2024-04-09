setTimeout(() => {
	console.log("inside setTimeout");
	setTimeout(() => {
		console.log("inside second setTimeout");
	}, 0);

	setTimeout(() => {
        
		console.log("inside third setTimeout");
	}, 0);
}, 0);

console.log("outside of setTimeout");

// asynchronicznosc polega na tym, ze JS zleca wykonanie kodu funkcji setTimeout przeglądarce a przejmuje wtedy kiedy watek nie jest zajety , jego call stack.
