document.addEventListener("DOMContentLoaded", function() {
var mainElements = document.querySelector('#menu > ul').children;
for (i = 0; i < mainElements.length; i++) {
  mainElements[i].addEventListener('mouseover', function() {
      var innerUl = this.querySelector('ul');
      if (innerUl !== null) {
        innerUl.style.display = "block";
      }

  });

  mainElements[i].addEventListener('mouseout', function() {
    var innerUl = this.querySelector('ul');
   if (innerUl !== null) {
      innerUl.style.display = "none";
  }

});
}

var img1=document.querySelector("#photoFirst");
var img2=document.querySelector("#photoSecond");

img1.addEventListener("mouseover", function(){
  var divT1=document.querySelector("#divT1");
  divT1.style.visibility = "hidden";
  img1.addEventListener("mouseout", function(){
    var divT1=document.querySelector("#divT1");
    divT1.style.visibility = "visible";

    img2.addEventListener("mouseover", function(){
      var divT2=document.querySelector("#divT2");
        divT2.style.visibility = "hidden";
        img2.addEventListener("mouseout", function(){
          var divT2=document.querySelector("#divT2");
            divT2.style.visibility = "visible";
    });
  });
});
});

var arrow=querySelectorAll(".arrow");
for (var i=0; i<img.length; i++);
arrow[i].addEventListener("click",function(){
  var imgs=querySelectorAll("#leftSide img");
  for (var j=0; j<imgs.length; j++);
  var currentImg=imgs[j];
  var length=imgs.length;

});



});
