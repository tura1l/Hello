const flagImg = document.querySelector("#flag")
const input = document.querySelector("#exampleInputEmail1")
const btn = document.querySelector("#btn")
const div = document.querySelector("#location")
fetch('https://restcountries.com/v3.1/all/')
.then(res=>res.json())
.then(data=>{
    data.forEach(el => {
        div.innerHTML +=` <img src="${el.flags.svg}" class="w-100" alt="">`
    });
})