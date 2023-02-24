// Membuat object
const user = {
    name: "Ahmad Huda",
    age: 21,
    major: "Informatics"
}

// mengakses object
console.log(user["age"]);
console.log(user.name);

// mengakses object menggunakan for in
for (const key in user) {
    console.log(user[key]);
}