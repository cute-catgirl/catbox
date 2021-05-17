var catNum = 0;

$("#Cat").click(function(){
  catNum = getRandomInt(1, 4);
  $(this).src = "images/cat" + catNum + ".png";
  console.log("cat")
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
