/**
 * TODO 2.
 * Import variable users dari file data/users.js
 */
import users from "../data/users"

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 3.
 * Buat function formatUser: Format nama user.
 * Fungsi membutuhkan waktu 3 detik.
 * Hint:
 * - Gunakan method map untuk format user.
 * - Gunakan promise untuk handle asynchronous.
 */

// Old Function
// function formatUser(title) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       const formattedUsers = users.map(function (user) {
//         return {
//           ...user,
//           name: `${title} ${user.name}`
//         }
//       })
//       resolve(formattedUsers)
//     }, 3000)
//   })
// }

// Arrow Function without Promise
// const formatUser = (title) => {
//   const formattedUsers = users.map((user) => {
//     return {
//       ...user,
//       name: `${title} ${user.name}`
//     }
//   })
//   return formattedUsers
// }

// Arrow Function with Promise
const formatUser = (title) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const formattedUsers = users.map((user) => {
        return {
          ...user,
          name: `${title} ${user.name}`
        }
      })
      resolve(formattedUsers)
    }, 3000)
  })
}

/**
 * TODO 4.
 * Buat function findByName: Mencari 1 user by name.
 * Fungsi membutuhkan waktu 2 detik.
 * Hint:
 * - Gunakan method find untuk mencari 1 user.
 * - Gunakan promise untuk handle asynchronous.
 */

// Old Function
// function findByName(name) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       const user = users.find(function (user) {
//         return user.name === name
//       })
//       resolve(user)
//     }, 2000)
//   })
// }

// Arrow Function without Promise
// const findByName = (name) => {
//   const user = users.find((user) => user.name === name)
//   return user
// }

// Arrow Function with Promise
const findByName = (name) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find((user) => user.name === name)
      resolve(user)
    }, 2000)
  })
}

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 5.
 * Buat function filterByMajor: Mencari semua user by major.
 * Fungsi membutuhkan waktu 4 detik.
 * Hint:
 * - Gunakan method filter untuk mencari semua user.
 * - Gunakan promise untuk handle asynchronous.
 */

// Old Function
// function filterByMajor(major) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       const filteredUsers = users.filter(function (user) {
//         return user.major === major
//       })
//       resolve(filteredUsers)
//     }, 4000)
//   })
// }

// Arrow Function without Promise
// const filterByMajor = (major) => {
//   const filteredUsers = users.filter((user) => user.major === major)
//   return filteredUsers
// }

// Arrow Function with Promise
const filterByMajor = (major) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredUsers = users.filter((user) => user.major === major)
      resolve(filteredUsers)
    }, 4000)
  })
}

/**
 * TODO 6.
 * Export fungsi: formatUser, findByName, filterByMajor
 */
export { formatUser, findByName, filterByMajor }
