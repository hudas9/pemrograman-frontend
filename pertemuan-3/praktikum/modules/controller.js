// import data users
import users from "./data.js";

function index() {
    console.log(users);
}

function store(user) {
    users.push(user);
}

// export function index, store
export { index, store };