const passWord = document.querySelector('#password');
const copyBtn = document.querySelector('#copy');
const generateBtn = document.querySelector('#generate-btn');

const lowerBox = document.querySelector('#lower');
const upperBox = document.querySelector('#upper');
const numberBox = document.querySelector('#numbers');
const symbolsBox = document.querySelector('#symbols');

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function lowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function upperCase() {
    return upperLetters[Math.floor(Math.random() * (upperLetters.length + 2))];
}

function numberCase() {
    return numbers[Math.floor(Math.random() * (numbers.length))];
}

function symbolsCase() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatedPassword() {
    let password = "";

    if(upperBox.checked) {
        password += upperCase()
    }

    if(lowerBox.checked) {
        password += lowerCase()
    }

    if(symbolsBox.checked) {
        password += symbolsCase()
    }

    if(numberBox.checked) {
        password += numberCase()
    }

    passWord.innerHTML = password
}

generateBtn.addEventListener('click', () => {
    generatedPassword();
});

copyBtn.addEventListener('click', () => {
    let copyText = "";

    copyText = document.execCommand('copy');
    console.log(copyText.value);

});
