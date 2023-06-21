import { menuItems} from "./js/db";
import { containerMenu, containerCategories, categories, popularMenu, popupOverlay, videoLink, videoIframe, navList } from "./js/DOM";
import { displayMenu } from "./js/displayMenu";
import { filteredByCategory } from "./js/getCategory";
import { dispayPopular } from "./js/showPopular";
import { changeStyle } from "./js/UI";
import { showVideo } from "./js/showVideo";
import {checkPath} from "./js/checkPath";
import {setMap} from "./js/showMap";

window.addEventListener('popstate', () => {
    let currentPath = window.location.pathname;
     
  console.log(currentPath);
});


document.addEventListener('DOMContentLoaded', async () => {
   if(!containerMenu) return;
   displayMenu.createCard(menuItems, containerMenu);
   setMap.createMap();

   if (popularMenu) {
      const popular = dispayPopular.showPopular(menuItems);
      displayMenu.createCard(popular, popularMenu)
   }

});


navList.addEventListener('click', e => {
   const target = e.target;
   console.log(target);
   // if (target.classList.contains('nav__item')) {
   //    const linkElement = target.querySelector('a');
   //    let href = linkElement.getAttribute('href');
   // }
})


if (containerCategories) {
   containerCategories.addEventListener('click', e => {
      e.preventDefault();
      const target = e.target;

      changeStyle.changeOpacity(target, categories)

      if (target.classList.contains('all')) {
         displayMenu.createCard(menuItems, containerMenu);
      }

      if (!target.classList.contains('all')) {
         const filteredCategories = filteredByCategory.getCategory(target, menuItems);
         displayMenu.createCard(filteredCategories, containerMenu);
      }

      if (!target.classList.contains('menu__category')) {
         console.log('stop');
         e.stopPropagation();
      }
   });
}

videoLink.addEventListener('click', (e) => {
   e.preventDefault();
   showVideo(videoLink, videoIframe, popupOverlay)
});

if (popupOverlay) {
   popupOverlay.addEventListener('click', () => {
      videoIframe.src = '';
      popupOverlay.style.display = 'none';
   });
};

