const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


const charAmountRange = document.getElementById('charAmountRange')
const charAmountNumber = document.getElementById('charAmountNumber')

let passGenBtn = document.getElementById('genPassword')
let passOne = document.getElementById('leftText')
let passTwo = document.getElementById('rightText')

let passLimit = ''

charAmountNumber.addEventListener('input', syncCharamount)
charAmountRange.addEventListener('input', syncCharamount)

function syncCharamount(e) {
    const value = e.target.value
    charAmountNumber.value = value
    charAmountRange.value = value
}


passGenBtn.addEventListener('click', function () {
    passOne.textContent = ''
    passTwo.textContent = ''
    passLimit = charAmountNumber.value
    passOne.value = randomPassGen()
    passTwo.value = randomPassGen()
})

function randomPassGen() {
    let newPassword = ''
    for (let i = 0; i < passLimit; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length)
        newPassword += characters[randomNumber]
    }
    return newPassword
}