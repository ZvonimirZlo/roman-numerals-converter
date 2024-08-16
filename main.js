const form = document.getElementById('form');
const container = document.getElementById('container');
const btn = document.getElementById('btn');
const select = document.getElementById('select');
const input = document.getElementById('input');



const toRome = (num) => {
    let out = '';
    do{ if(num >= 1000){
        out += 'M';
        num -= 1000;
      }else if(num >= 900 && num <= 999){
        out += 'CM';
        num -= 900;
      }else if(num >= 500 && num <= 899){
        out += 'D';
        num -= 500;
      }else if(num >= 400 && num <= 499){
        out += 'CD';
        num -= 400;
      }else if(num >= 100 && num <= 399){
        out += 'C';
        num -= 100;
      }else if(num >= 90 && num <= 99){
        out += 'XC';
        num -= 90;
      }else if(num >= 50 && num <= 89){
        out += 'L';
        num -= 50;
      }else if(num >= 40 && num <= 49){
        out += 'XL';
        num -= 40;
      }else if(num >= 10 && num <= 39){
        out += 'X';
        num -= 10;
      }else if(num > 8 && num < 10){
        out += 'IX';
        num -= 9;
      }else if(num >= 5 && num <= 8){
        out += 'V';
        num -= 5;
      }else if(num > 3 && num < 5){
        out += 'IV';
        num -= 4;
      }else if(num <= 3){
        out += 'I';
        num -= 1;
      }else{
         return '';
        }
      } while(num > 0);
      return out;
};

const fromRome = (str) => {
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
 
     return str.split('').reduce((a, b, idx) => obj[b] < obj[str[idx + 1]] ? a - obj[b] : a + obj[b], 0);
   };

   console.log(fromRome('MMXXIV')); //outputs 2024
   

form.addEventListener('submit', (e) => {
 e.preventDefault();
 container.innerHTML = `${toRome(input.value)}`
})
