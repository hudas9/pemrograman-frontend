const names = ["Ahmad", "Huda", "Delia"];

// const formattedName = names.map(function(name) {
//     return `Mr/Mrs ${name}`; 
// });

// arrow function
const formattedName = names.map((name) => `Mr/Mrs. ${name}`);

console.log(hasilFormat);