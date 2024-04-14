// never resolving promise – all time in pending state
const promise1 = new Promise(() => {});
console.log(promise1);
promise1.then((value) => {
	console.log("promise1 then callback", value);
});
promise1.catch((error) => {
	console.log("promise1 catch callback", error);
});
