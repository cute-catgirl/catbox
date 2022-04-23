var catNum = 0;
var creditsList = ['Photo by <a href="https://unsplash.com/@e_d_g_a_r?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Edgar</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>','Photo by <a href="https://unsplash.com/@remino?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rémi Rémino</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>','Photo by <a href="https://unsplash.com/@michaelsum1228?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Michael Sum</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>','Photo by <a href="https://unsplash.com/@mimvafa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marzie Vafa</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>','Photo by <a href="https://unsplash.com/@milada_vigerova?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Milada Vigerova</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'];
var catsFound = [];
var boxesOpened = 0;
if (localStorage.getItem("catsSave") != null) {
  catsFound = JSON.parse(localStorage.getItem("catsSave"));
}
if (localStorage.getItem("boxSave") != null) {
  boxesOpened = JSON.parse(localStorage.getItem("boxSave"));
}
document.getElementById("amountFound").innerHTML = catsFound.length;
document.getElementById("amountOpened").innerHTML = boxesOpened;

$(function () {
  animateFloat();
});

$.modal.defaults = {
  closeExisting: true,    // Close existing modals. Set this to false if you need to stack multiple modal instances.
  escapeClose: true,      // Allows the user to close the modal by pressing `ESC`
  clickClose: true,       // Allows the user to close the modal by clicking the overlay
};

$("#Cat").click(function(){
  catNum = getRandomInt(1, 5);
  if ($(this).attr('src') == 'images/box.png') {
    boxesOpened++;
    localStorage.setItem("boxSave", JSON.stringify(boxesOpened));
    document.getElementById("amountOpened").innerHTML = boxesOpened;
    dataLayer.push({'event': 'box-opened'});
    conffetiBlast();
    $(this).attr("src","images/cat" + catNum + ".png");
    if (catsFound.includes("images/cat" + catNum + ".png") == false) {
      catsFound.push("images/cat" + catNum + ".png");
      localStorage.setItem("catsSave", JSON.stringify(catsFound));
      document.getElementById("amountFound").innerHTML = catsFound.length;
    }
    $("#Credits").html(creditsList[catNum-1]);
  }
});

$("#Reload").click(function(){
  $("#Cat").attr("src","images/box.png");
});

function animateFloat() {
  if ($('#Cat').attr('src') == 'images/box.png') {
    $("#Container").animate({height: '110vh'},1000);
  }
  else {
    $("#Container").animate({height: '100vh'},500);
  }
  if ($('#Cat').attr('src') == 'images/box.png') {
    $("#Container").animate({height: '90vh'},1000,animateFloat);
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
