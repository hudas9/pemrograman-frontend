/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */

// Old JavaScript
// var users = [
//   { name: "Aufa", age: 22, major: "Informatics", },
//   { name: "Isfa", age: 22, major: "Informatics", },
//   { name: "Nurul", age: 21, major: "Information System",},
//   { name: "Ahmad", age: 21, major: "Informatics", },
//   { name: "Huda", age: 21, major: "Informatics", }
// ];

// Modern JavaScript
const users = [
  {
    name: "Aufa",
    age: 22,
    major: "Informatics",
  },
  {
    name: "Isfa",
    age: 22,
    major: "Informatics",
  },
  {
    name: "Nurul",
    age: 21,
    major: "Information System",
  },
  {
    name: "Ahmad",
    age: 21,
    major: "Informatics",
  },
  {
    name: "Huda",
    age: 21,
    major: "Informatics",
  },
];

/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */

// Function Declaration
// function all () {
//   for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
//   }
// }

// Function Expression
// const all = function () {
//   for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
//   }
// };

// Arrow Function
const all = () => {
  for (const user of users) {
    console.log(user);
  }
};

/**
 * TODO 3
 * Buat function store: Menambahkan user baru.
 * Hint: Gunakan method push.
 * Note: Ubah function menggunakan arrow function.
 */

// Function Declaration
// function store(user) {
//   users.push(user);
// }

// Function Expression
// const store = function (user) {
//   users.push(user);
// };

// Arrow Function
const store = (user) => {
  users.push(user);
};

/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */

// Function Declaration
// function update(index, user) {
//   users[index] = user;
// }

// Function Expression
// const update = function (index, user) {
//   users[index] = user;
// };

// Arrow Function
const update = (index, user) => {
  users[index] = user;
};

/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */

// Function Declaration
// function destroy(index) {
//   users.splice(index, 1);
// }

// Function Expression
// const destroy = function (index) {
//   users.splice(index, 1);
// };

// Arrow Function
const destroy = (index) => {
  users.splice(index, 1);
};

/**
 * Function main.
 * Jangan edit atau hapus function main.
 * Function ini untuk testing task.
 */

const main = () => {
  /**
   * Test function index
   */
  console.log("# Get All Users");
  all();

  /**
   * Test function store
   */
  console.log("# Add New User: Sabiq");
  const newUser = {
    name: "Sabiq",
    age: 20,
    major: "Informatics",
  };
  store(newUser);

  /**
   * Test function update
   */
  console.log("# Edit User: Isfa");
  const editedIndex = 1;
  const editedUser = {
    name: "Isfhani Ghiyath",
    age: 23,
    major: "English",
  };
  update(editedIndex, editedUser);

  /**
   * Test function destroy
   */
  console.log("# Delete User: Nurul");
  const deletedIndex = 2;
  destroy(deletedIndex);
};

main();

/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = { users, all, store, update, destroy };
