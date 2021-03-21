// Current temperature in Kelvin degrees
const kelvin = 293;
// Converting Kelvin to Celsius
const celsius = kelvin - 273;
// Convert Celsius to Fahrenheit
let fahrenheit = celsius *(9/5) +32;
//Round down fahrenheit variable.
fahrenheight = Math.floor(fahrenheit);
console.log(`The temperature ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} dgrees in Newton.`);
