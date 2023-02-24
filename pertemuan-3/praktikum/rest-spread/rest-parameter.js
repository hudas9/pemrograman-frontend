/**
 * Membuat fungsi sum untuk menjumlahkan semua bilangan
 * Fungsi menerima rest parameter
 */
function sum(...numbers) {
    let hasil = 0;
    for (const number of numbers) {
        hasil += number;
    }
    console.log(hasil);
}

sum(1, 2, 3, 4, 5);