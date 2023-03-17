const users = [
    {
        name: "Ahmad",
        age: 21,
        major: "Informatics"
    },
    {
        name: "Huda",
        age: 21,
        major: "Informatics"
    },
    {
        name: "Delia",
        age: 21,
        major: "Accounting"
    }
];

// const findUser = users.find(function(user) {
//     user.age > 18;
// });

// arrow function
const findUser = users.find((user) => user.age > 17);