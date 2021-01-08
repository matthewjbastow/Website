var collapsibles = document.querySelectorAll("button.collapsible");

for (var i = 0; i < collapsibles.length; i++) {
  collapsibles[i].onclick = function() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  };
}