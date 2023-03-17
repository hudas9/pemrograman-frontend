// Spread in array
const family = ["Ahmad", "Huda"];
const newFamily = [...family, "Salam", "Ahmad Huda"];
console.log(newFamily);

// Spread in object
const user = {
    name: "Huda",
    major: "Informatics"
}
const newUser = {
    ...user,
    age: 21
}
console.log(newUser);