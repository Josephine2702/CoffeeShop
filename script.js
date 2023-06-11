import { menuItems } from "./js/db";
import { containerMenu, containerCategories, categories, popularMenu} from "./js/DOM";
import {displayMenu} from "./js/displayMenu";
import {filteredByCategory} from "./js/getCategory";
import {dispayPopular} from "./js/showPopular";
import {changeStyle} from "./js/UI";


document.addEventListener('DOMContentLoaded', () =>  {
   displayMenu.createCard(menuItems, containerMenu)
});

if(popularMenu){
   document.addEventListener('DOMContentLoaded', () => {
   const popular = dispayPopular.showPopular(menuItems);
   displayMenu.createCard(popular, popularMenu)
})
}



if(containerCategories){
containerCategories.addEventListener('click', e => {
   e.preventDefault();
   const target = e.target;

   changeStyle.changeOpacity(target, categories)

   if(target.classList.contains('all')){
      displayMenu.createCard(menuItems, containerMenu);
   } 
    if(!target.classList.contains('all')){
      const filteredCategories = filteredByCategory.getCategory(target, menuItems);
      displayMenu.createCard(filteredCategories, containerMenu);
   }

   if(!target.classList.contains('menu__category')){
      console.log('stop');
     e.stopPropagation();
   }
});

}




