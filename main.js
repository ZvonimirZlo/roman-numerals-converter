const hello = document.getElementById('hello');

const check = () => {
    hello.style.color = 'red';
}

hello.onmouseenter = check;