const form = document.getElementById('form');
const container = document.getElementById('container');
const btn = document.getElementById('btn');
const select = document.getElementById('select');
const input = document.getElementById('input');



const toRome = (integer) => {
    let out = '';
    do {
        if (integer >= 1000) {
            out += 'M';
            integer -= 1000;
        } else if (integer >= 900 && integer <= 999) {
            out += 'CM';
            integer -= 900;
        } else if (integer >= 500 && integer <= 899) {
            out += 'D';
            integer -= 500;
        } else if (integer >= 400 && integer <= 499) {
            out += 'CD';
            integer -= 400;
        } else if (integer >= 100 && integer <= 399) {
            out += 'C';
            integer -= 100;
        } else if (integer >= 90 && integer <= 99) {
            out += 'XC';
            integer -= 90;
        } else if (integer >= 50 && integer <= 89) {
            out += 'L';
            integer -= 50;
        } else if (integer >= 40 && integer <= 49) {
            out += 'XL';
            integer -= 40;
        } else if (integer >= 10 && integer <= 39) {
            out += 'X';
            integer -= 10;
        } else if (integer > 8 && integer < 10) {
            out += 'IX';
            integer -= 9;
        } else if (integer >= 5 && integer <= 8) {
            out += 'V';
            integer -= 5;
        } else if (integer > 3 && integer < 5) {
            out += 'IV';
            integer -= 4;
        } else if (integer <= 3) {
            out += 'I';
            integer -= 1;
        } else {
            return '';
        }
    } while (integer > 0);
    return out;
};

const fromRome = (romanNum) => {
    const obj = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    };

    return romanNum.split('').reduce((acc, curr, idx) => obj[curr] < obj[romanNum[idx + 1]] ? acc - obj[curr] : acc + obj[curr], 0);
};

console.log(fromRome('MMXXIV')); //outputs 2024


form.addEventListener('submit', (e) => {
    e.preventDefault();
    container.innerHTML = `${toRome(input.value)}`
});
