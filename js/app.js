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
});
