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

// const filteredUser = users.filter(function(user) {
//     user.age > 18;
// });

// arrow function
const filteredUser = users.filter((user) => user.age > 21);