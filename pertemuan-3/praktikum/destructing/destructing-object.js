// Array of object
const req = {
    body: {
        name: "Huda",
        age: 21,
        major: "Informatics"
    },
};

// Destructing object berdasarkan key
const { name, age, major } = req.body;

console.log(name, age, major);