function getRandomColor() {
    return "#"+((1<<24)*Math.random()|0).toString(16);
}

document.documentElement.style.setProperty('--main-bg-color-1', getRandomColor());
document.documentElement.style.setProperty('--main-bg-color-2', getRandomColor()); 

function getRandomNumber() {
    return Math.floor(Math.random() * 361);
}

document.documentElement.style.setProperty('--rotation-degree', getRandomNumber() + "deg");