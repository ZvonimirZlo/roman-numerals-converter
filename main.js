//Variables
const form = document.getElementById('form');
const container = document.getElementById('container');
const btn = document.getElementById('btn');
const input = document.getElementById('input');
const label = document.getElementById('label');

//Number to roman handler
const toRomeHandler = (integer) => {
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
        } else if (integer <= 3 && integer > 0) {
            output += 'I';
            integer -= 1;
        } else {
            output += 'Invalid input!'; //Handles edge cases, when input <= 0 or input is a mix of roman and arabic numbers...
        }
    } while (integer > 0);
    return output;
};

//Roman to arabic number handler
const fromRomeHandler = (romanNum) => {
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

//Label handler, changes the label text depending of input data type, shows what action will be triggered on button click, 
//and also cleans output container if the input is empty 
input.addEventListener('input', () => {
    if (input.value.match(/[0-9]/g)) {
        label.innerHTML = 'Integer to roman';
    } else if (input.value.match(/[MDCLXVI]/g)) {
        label.innerHTML = 'Roman to integer';
    } else if (input.value === '') {
        label.innerHTML = 'Convert your number';
        container.innerHTML = '';
    }
});

//Output handler
const handleOutput = () => {
    if (input.value.match(/[0-9]/g)) {
        container.innerHTML = `${toRomeHandler(input.value)}`;
    } else if (input.value.match(/[MDCLXVI]/g)) {
        container.innerHTML = `${fromRomeHandler(input.value)}`;
    } else if (!input.value.match(/[MDCLXVI0-9]/g)) {
        alert('Only letters M,D,C,L,X,V,I and numbers 0-9 are allowed!')
    } else {
        return null;
    }
};

//Executes conversion on 'Enter' press
input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      btn.click();
    }
  });

//On form submit handler
form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleOutput();
});


