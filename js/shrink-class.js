// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
	var element = document.getElementsByClassName("header-img")[0];
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    element.classList.add("shrink");
  }
  /*
  else{
	element.classList.remove("shrink");
  }
  */
}