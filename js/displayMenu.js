
class Menu {
   createCard(data, selector){
  selector.innerHTML = '';
    data.forEach(el => {
    return selector.innerHTML += `
        <div data-aos="zoom-in" class="menu__item"  id=${el.id} data-category=${el.category}>
                <div class="menu__img image-container">
                    <img src="${el.img}" alt="${el.name}">
                </div>
                <div class="menu__price">
                    <h6 class="heading-small name">${el.name}</h6>
                    <p class="price">${el.price}</p>
                </div>
            </div>
        `
    })
   }
}
export let displayMenu = new Menu();