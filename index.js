var slideIndex = 1;
showSlide(slideIndex);
function plusSlide(n) {
  showSlide((slideIndex += n));
}
function showSlide(n) {
  var i;
  var numSlides = document.getElementsByClassName("slides");
  if (n > numSlides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = numSlides.length;
  }
  for (i = 0; i < numSlides.length; i++) {
    numSlides[i].style.display = "none";
  }
  numSlides[slideIndex - 1].style.display = "block";
}
