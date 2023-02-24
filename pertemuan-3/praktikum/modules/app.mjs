// export function index, store
import { index, store } from "./controller.mjs";

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