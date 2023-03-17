// Membuat array
const animals = [
    "Cat",
    "Dog",
    "Fish"
];

// Mengakses array
console.log(animals[0]);

// Looping array
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

// looping array using for of
for (const animal of animals) {
    console.log(animal);
}