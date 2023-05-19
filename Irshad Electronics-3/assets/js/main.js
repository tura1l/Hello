const row = document.querySelector("#row")
fetch('https://fakestoreapi.com/products/')
.then(res=>res.json())
.then(data=>{
    data.forEach(el => {
        row.innerHTML +=`<div class="col-lg-3">
        <div class="card" data-id="${el.id}"style="width: 18rem;">
          <div class="main-image mt-2">
            <img src="${el.image}" class="card-img-top" alt="" >
          </div>
            <div class="card-body">
                <span class="mob">${el.category}</span>
              <h5 class="card-title">${el.title}</h5>
              <div class="colors mt-2">
                <div class="cblack"></div>
                <div class="cyellow"></div>
                <div class="cmilk"></div>
                <div class="cviolet"></div>
              </div>
              <div class="comment mt-3">
                <div class="stars">
                    <i class="las la-star"></i>
                    <i class="las la-star"></i>
                    <i class="las la-star"></i>
                    <i class="las la-star"></i>
                    <i class="las la-star"></i>
                </div>
                <i class="las la-comment-alt"></i>
              </div>
              <div class="buttonsss">
                <button class="faizsiz mt-2">Faizsiz təklif</button>
                <button class="cheap mt-2">Ucuz tapsan, endirimlə al</button>
                <button class="stok mt-2">
                  <i class="las la-home"></i> Stokda - Məhdud sayda
                </button>
              </div>
              <div class="price row mt-5 d-flex align-items-center">
                <div class="priceleft col-5">
                  <span class="oldprice">${el.price} AZN</span>
                  <h5 class="newprice">${el.price} AZN</h5>
                </div>
                <div class="credit col-6">
                  <button class="month">6 ay</button>
                  <button class="month">12 ay</button>
                  <button class="month">18 ay</button>
                </div>
              </div>
              <div class="submit">
                <button class="cartbutton mt-4">
                  <i class="las la-cart-plus"></i> Səbətə əlavə et
                </button>
              </div>
            </div>
          </div>
    </div>`
        
    const addBasket = document.querySelectorAll('.cartbutton');
    
    addBasket.forEach(el => {
        
        el.addEventListener('click', e => {
          let dataID = Number(this.parentNode.parentNode.parentNode.getAttribute("data-id"))
            let addObj = {
                id: dataID,
                image: el.image,
                name: el.title,
                description: el.description,
                price : el.price,
                count: 0
            }
            let stored = localStorage.getItem("basketItems");
            let basketItems = stored ? JSON.parse(stored) : [];
            basketItems.push(addObj);
            localStorage.setItem("basketItems", JSON.stringify(basketItems))
        })
    })

    });
})
