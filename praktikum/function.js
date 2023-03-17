// function declaration
function hitungUmur(bod) {
    const hasil = new Date().getFullYear() - bod;
    return hasil;
}

// function expression
const hitungUmur = function (bod) {
    const hasil = new Date().getFullYear() - bod;
    return hasil;
}

// arrow function
const hitungUmur = (bod) => {
    const hasil = new Date().getFullYear() - bod;
    return hasil;
}

// arrow function one statement
const hitungUmur = (bod) => new Date().getFullYear() - bod;

console.log(hitungUmur(2002));

// default parameter
function hitungUmur(bod = 2002) {
    const hasil = new Date().getFullYear() - bod;
    return hasil;
}