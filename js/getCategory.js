
class Category{
    getCategory(target, data){
   if(target){
      let type = target.getAttribute('data-category');
      const filtred = data.filter(el => {
         return el.category === type;
      })
      return filtred
   } 
    }
}

export let filteredByCategory = new Category();
