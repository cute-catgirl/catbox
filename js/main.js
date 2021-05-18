var catNum = 0;
var creditsList = ['Photo by <a href="https://unsplash.com/@e_d_g_a_r?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Edgar</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>','Photo by <a href="https://unsplash.com/@remino?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rémi Rémino</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>','Photo by <a href="https://unsplash.com/@michaelsum1228?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Michael Sum</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>','Photo by <a href="https://unsplash.com/@mimvafa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marzie Vafa</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'];

$(function () {
  animateFloat();
});


$("#Cat").click(function(){
  catNum = getRandomInt(1, 4);
  if ($(this).attr('src') == 'images/box.png') {
    $(this).attr("src","images/cat" + catNum + ".png");
    $("#Credits").html(creditsList[catNum-1]);
  }
});

function animateFloat() {
  $("#Container").animate({height: '110vh'},1000);
  $("#Container").animate({height: '90vh'},1000,animateBack);
}

function animateBack() {
  if ($('#Cat').attr('src') == 'images/box.png') {
    animateFloat();
  }
  else {
    $("#Container").animate({height: '100vh'},500);
  }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
