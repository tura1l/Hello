let row = document.querySelector('#mobiles .row');



axios.get('https://fakestoreapi.com/products').then(res => {
    for (let i = 0; i < 8; i++) {
        row.innerHTML += `
        <div class="col-3">
            <div class="card" style="he: 18rem;">
            <img src="${res.data[i].image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${res.data[i].title}</h5>
                <p class="card-text">${res.data[i].description.length > 50 ? res.data[i].description.substring(0, 50) + " ..." : res.data[i].description}</p>
                <a href="#" class="btn btn-success w-100 add-basket">Səbətə əlavə et</a>
            </div>
            </div>
        </div>
        `
        const addBasket = document.querySelectorAll('.add-basket');
    
        addBasket.forEach((el, j)=> {
            
            el.addEventListener('click', e => {
                let addObj = {
                    image: res.data[j].image,
                    name: res.data[j].title,
                    description: res.data[j].description
                }
                let stored = localStorage.getItem("basketItems");
                let basketItems = stored ? JSON.parse(stored) : [];
                basketItems.push(addObj);
                localStorage.setItem("basketItems", JSON.stringify(basketItems))
            })
        })
    }
})

