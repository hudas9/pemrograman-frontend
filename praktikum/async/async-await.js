// function download() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve("Downloading...");
//         }, 3000);
//     });
// }

// function verify() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve("Verify...");
//         }, 2000);
//     });
// }

// function notify() {
//     console.log("Download selesai");
// }

// async function main() {
//     console.log(await download());
//     console.log(await verify());
//     notify();
// }

// main();

// arrow function
const download = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Downloading...");
        }, 3000);
    });
}

const verify = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Verify...");
        }, 2000);
    });

}

const notify = () => console.log("Download berhasil");

const main = async () => {
    console.log(await download());
    console.log(await verify());
    notify();
}

main();