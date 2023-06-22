import { menuItems} from "./js/db";
import { containerMenu, containerCategories, categories, popularMenu, popupOverlay, videoLink, videoIframe, navItems} from "./js/DOM";
import { displayMenu } from "./js/displayMenu";
import { filteredByCategory } from "./js/getCategory";
import { dispayPopular } from "./js/showPopular";
import { changeStyle } from "./js/UI";
import { showVideo } from "./js/showVideo";
import {checkPath} from "./js/checkPath";
import {setMap} from "./js/showMap";

document.addEventListener('DOMContentLoaded', async () => {
   setMap.createMap();
   checkPath(navItems);
   if(!containerMenu) return;
   displayMenu.createCard(menuItems, containerMenu);

   if (popularMenu) {
      const popular = dispayPopular.showPopular(menuItems);
      displayMenu.createCard(popular, popularMenu)
   }


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

if(!videoLink) return;
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

});