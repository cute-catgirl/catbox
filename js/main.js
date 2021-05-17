var catNum = getRandomInt(1, 3);
console.log(catNum);

function openBox() {

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
