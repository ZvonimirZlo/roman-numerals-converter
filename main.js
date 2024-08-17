//Variables
const form = document.getElementById('form');
const container = document.getElementById('container');
const btn = document.getElementById('btn');
const input = document.getElementById('input');
const optionOne = document.getElementById('option-one');
const optionTwo = document.getElementById('option-two');
const label = document.getElementById('label');
let select = document.getElementById('select');

//Number to roman handler
const toRome = (integer) => {
    let output = '';
    do {
        if (integer >= 1000) {
            output += 'M';
            integer -= 1000;
        } else if (integer >= 900 && integer <= 999) {
            output += 'CM';
            integer -= 900;
        } else if (integer >= 500 && integer <= 899) {
            output += 'D';
            integer -= 500;
        } else if (integer >= 400 && integer <= 499) {
            output += 'CD';
            integer -= 400;
        } else if (integer >= 100 && integer <= 399) {
            output += 'C';
            integer -= 100;
        } else if (integer >= 90 && integer <= 99) {
            output += 'XC';
            integer -= 90;
        } else if (integer >= 50 && integer <= 89) {
            output += 'L';
            integer -= 50;
        } else if (integer >= 40 && integer <= 49) {
            output += 'XL';
            integer -= 40;
        } else if (integer >= 10 && integer <= 39) {
            output += 'X';
            integer -= 10;
        } else if (integer > 8 && integer < 10) {
            output += 'IX';
            integer -= 9;
        } else if (integer >= 5 && integer <= 8) {
            output += 'V';
            integer -= 5;
        } else if (integer > 3 && integer < 5) {
            output += 'IV';
            integer -= 4;
        } else if (integer <= 3) {
            output += 'I';
            integer -= 1;
        } else {
            return '';
        }
    } while (integer > 0);
    return output;
};

//Roman to number handler
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

// console.log(fromRome('MMXXIV')); //outputs 2024

input.addEventListener('input', () => {
    if(input.value.match(/[0-9]/g)){
        label.innerHTML = 'Integer to roman';
    }else if(input.value.match(/[MDCLXVI]/g)){
        label.innerHTML = 'Roman to integer';
    }else if(input.value === ''){
            label.innerHTML = 'Convert your number';
    }
})


form.addEventListener('submit', (e) => {
    e.preventDefault();

if(input.value.match(/[0-9]/g)){
    container.innerHTML = `${toRome(input.value)}`;
    // label.innerHTML = 'Integer to roman';
}else if(input.value.match(/[MDCLXVI]/g)){
    container.innerHTML = `${fromRome(input.value)}`;
    // label.innerHTML = 'Roman to integer';
 }else{
    alert('Invalid input or some other shit!');
 }
 });


