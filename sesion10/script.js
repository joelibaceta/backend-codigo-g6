console.log("Primer log")

let a = 0;

setTimeout(() => {
  console.log("Segundo log")
  a = 1000

}, 2000);


let b = a + 1000

console.log("Tercer log: " + b)