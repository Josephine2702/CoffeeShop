class Popular {
    showPopular(data){
    const findPopular = data.filter((el) => el.status === "popular"
    );
    return findPopular;
  
}
}
export let dispayPopular = new Popular();