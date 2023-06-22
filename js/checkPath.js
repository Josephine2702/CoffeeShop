export const checkPath = function(arrItems){
    let currentPath = window.location.pathname;
    let nameOfPage = currentPath.split('/').pop().replace('.html', '');
    arrItems.forEach(item => {
        if(item.id === nameOfPage){
         item.classList.add('active');
        }
    });
}