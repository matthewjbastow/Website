var collapsibles = document.querySelectorAll("button.collapsible");

for (var i = 0; i < collapsibles.length; i++) {
  collapsibles[i].onclick = function() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
    hideAll(this);
  };
}

function hideAll(exceptThis) {
	for (var i = 0; i < collapsibles.length; i++) {
		if (collapsibles[i] !== exceptThis) {
			collapsibles[i].classList.remove("active");
			collapsibles[i].nextElementSibling.classList.remove("show");
		}
	}
}