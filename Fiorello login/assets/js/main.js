const username = document.getElementById("username")
const password = document.getElementById("password")
const submit = document.getElementById("login-btn")
submit.addEventListener('click',()=>{

    let obj = {
        username : username.value,
        password:password.value
    }
    createUsers();
    let users = JSON.parse(localStorage.getItem('users'));
    checkTural()
    users.push(obj);
    localStorage.setItem('users',JSON.stringify(users))
})
function createUsers() {
    if (localStorage.getItem('users') == null) {
        localStorage.setItem('users', '[]')
    }
}
function checkTural() {
    if (username.value == users[1].username && password.value == users[1].password) {
        alert("Xos gelmisen urem qurvan")
    }
    else{
        alert("Gozler o gozler deyl")
    }
}