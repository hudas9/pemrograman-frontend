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

// function main() {
//     download()
//     .then(function(result) {
//         console.log(result);
//         return verify();
//     })
//     .then(function(result) {
//         console.log(result);
//         notify();
//     })
//     .catch(function(error) {
//         console.log(error)
//     });
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

const main = () => {
    download()
    .then((result) => {
        console.log(result);
        return verify();
    })
    .then((result) => {
        console.log(result);
        return notify();
    })
    .catch((error) => {
        console.log(error)
    });

}

main();