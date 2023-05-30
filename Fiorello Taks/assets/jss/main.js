const images = document.querySelectorAll(".product1")
const lists = document.querySelectorAll(".list .flowers-type")
lists.forEach(clck => {
    clck.addEventListener('click', () => {
      const atribute = clck.getAttribute('cart-item');
      images.forEach(flower => {
        if (flower.getAttribute('class').includes(atribute)) {
          flower.style.display = 'block';
        } else {
          flower.style.display = 'none';
        }
      });
    });
  });