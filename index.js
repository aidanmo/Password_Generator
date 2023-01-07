const alphas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const specials = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"]

const slider = document.querySelector('input[type="range"]');
const button = document.querySelector('.create-pass');
const toggleSwitchDigit = document.querySelector('#toggle-checkbox1');
const toggleSwitchSpecial = document.querySelector('#toggle-checkbox2');
const password1 = document.getElementById('password-1');
const tooltip = document.getElementById('mytooltip');



toggleSwitchDigit.addEventListener('change', function () {
    const value = this.checked;
});

toggleSwitchSpecial.addEventListener('change', function () {
    const value = this.checked;

});

slider.addEventListener('input', function () {
    const value = this.value;
});

function combineChars() {

    let userChoice = []
    userChoice = userChoice.concat(alphas)

    if (toggleSwitchDigit.checked === true) {
        userChoice = userChoice.concat(nums)
    }
    if (toggleSwitchSpecial.checked === true) {
        userChoice = userChoice.concat(specials)
    }
    return userChoice
}

function generatePassword(list, length) {

    let password = ''
    for (let i = 0; i < length; i++) {
        password += list[Math.floor(Math.random() * list.length)]
    }
    return password
}

button.addEventListener('click', function () {
    //Super ugly unreadable mess. textContent function was deleteing the nested span that the
    //tool tip pop up relied on to active the hover action in styles.css
    password1.innerHTML = '<span class="tooltiptext" id="mytooltip">copy to clipboard</span>' + generatePassword(combineChars(), slider.value)
});

password1.addEventListener('click', function () {

    navigator.clipboard.writeText(password1.textContent)
});


