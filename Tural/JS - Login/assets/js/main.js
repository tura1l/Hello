const email = document.getElementById("email")
const password = document.getElementById("password")
const btn = document.querySelector("button")
var pvalue = password.value
function checkingOfEmPas() {
    if (email.value.includes("@")) {
         email.style.border = ("1px solid green")
    }
    else {
        email.style.border = ("1px solid red")
    }
    if (password.value.length == 6 && checkOfUpper() && checkOfEded() && checkOfSmall()) {
        password.style.border = ("1px solid green")
    }
    else{
        password.style.border = ("1px solid red")
    }
}
function checkOfUpper() {
    for (let i = 0; i < pvalue.length; i++) {
        if (pvalue[i] == pvalue[i].toUpperCase()) {
            return true
        }
    }
}
function checkOfEded() {
    for (let i = 0; i < pvalue.length; i++) {
        if (pvalue[i] !== isNaN){
            return true
        }
    }
}
function checkOfSmall() {
    for (let i = 0; i < pvalue.length; i++) {
        if (pvalue[i] == pvalue[i].toLowerCase()) {
            return true
        }
    }
}