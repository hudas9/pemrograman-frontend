// function download(callbackVerify) {
//     setTimeout(function() {
//         console.log("Downloading...");
//         callbackVerify();
//     }, 3000);
// }

// function verify(callbackNotify) {
//     setTimeout(function() {
//         console.log("Verify...");
//         callbackNotify();
//     }, 2000);
// }

// function notify() {
//     console.log("Download selesai");
// }

// function main() {
//     download(function() {
//         verify(function() {
//             notify();
//         });
//     });
// }

// main();



// arrow function
const download = (callbackVerify) => {
    setTimeout(() => {
        console.log("Downloading...");
        callbackVerify();
    }, 3000);
}

const verify = (callbackNotify) => {
    setTimeout(() => {
        console.log("Verify...");
        callbackNotify();
    }, 2000);
}

const notify = () => console.log("Download berhasil");

const main = () => {
    download(() => {
        verify(() => {
            notify();
        });
    });
}

main();