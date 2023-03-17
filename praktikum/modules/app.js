// export function index, store
import { index, store } from "./controller.js";

function main() {
    const user = {
        name: "Anggraeni",
        age: 21,
        major: "Accounting"
    };

    index();
    store(user);
}

main();