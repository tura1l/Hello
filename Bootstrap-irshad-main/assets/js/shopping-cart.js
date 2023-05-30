let row = document.querySelector('#mobiles .row')

let basketItems = JSON.parse(localStorage.getItem('basketItems'));

for (let i = 0; i < basketItems.length; i++) {
    row.innerHTML += `
    <div class="col-3">
        <div class="card" style="he: 18rem;">
            <div class=""card-head">
                <img src="${basketItems[i].image}" class="card-img-top" alt="...">
                <div class="card-delete">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title">${basketItems[i].name}</h5>
                <p class="card-text">${basketItems[i].description}</p>
            </div>
        </div>
    </div>
    `;

}

const deleteItem = document.querySelectorAll(".card-delete");
deleteItem.forEach((elem, i)=> {
    elem.addEventListener('click', e => {
        let element = elem.parentElement.parentElement.parentElement;
        element.remove();

        let store = localStorage.getItem('basketItems');
        let basketItems = store ? JSON.parse(store) : [];
        basketItems.splice (i, 1);

        localStorage.setItem('basketItems', JSON.stringify(basketItems))
    })
})
