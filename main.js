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
      }else if(num >= 8 && num <= 10){
        out += 'IX';
        num -= 9;
      }else if(num >= 5 && num <= 8){
        out += 'V';
        num -= 5;
      }else if(num >= 3 && num <= 5){
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

form.addEventListener('submit', (e) => {
 e.preventDefault();
 container.innerHTML = `${toRome(input.value)}`
})
