class UI {
    changeOpacity(target, array){
        array.forEach(inactive => inactive.style.opacity = 0.7);
        target.style.opacity = 1;
    }
}
export let changeStyle = new UI();