// console.log('test'); --> this test shows you are linked to your index.html 

const track = document.querySelector('.carousel__track');
// Definiing each individial slide - assigning constant
const slides = Array.from(track.children);
// defining right button
const nextButton = document.querySelector('.carousel_button--right');
// defining left button
const prevButton = document.querySelector('.carousel_button--left');
// defining the navigation bars 
const barsNav = document.querySelector('.carousel__nav');
const bars = Array.from(barsNav.children);

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;


// arrange slides next to one another
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';
// slides[3].style.left = slideWidth * 3 + 'px';
const setSlidePosition = (slide, index) => {
	slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
	track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
	currentSlide.classList.remove('current_slide');
	targetSlide.classList.add('current_slide');
}

const updateBars = (currentBar, targetBar) => {
	currentBar.classList.remove('current_slide');
	targetBar.classList.add('current_slide');
} 

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
	if (targetIndex === 0) {
		prevButton.classList.add('is-hidden');
		nextButton.classList.remove('is-hidden');
	} else if (targetIndex === slides.length - 1) {
		prevButton.classList.remove('is-hidden');
		nextButton.classList.add('is-hidden');
	} else {
		prevButton.classList.remove('is-hidden');
		nextButton.classList.remove('is-hidden');
	}
}

// when I click right, move slides to the right
nextButton.addEventListener('click', e => {
	const currentSlide = track.querySelector('.current_slide');
	const nextSlide = currentSlide.nextElementSibling;
	const currentBar = barsNav.querySelector('.current_slide');
	const nextBar =currentBar.nextElementSibling;
	const nextIndex = slides.findIndex(slide => slide === nextSlide);

	moveToSlide(track, currentSlide, nextSlide);
	updateBars(currentBar, nextBar);
	hideShowArrows(slides, prevButton, nextButton, nextIndex);
})

// when I click left, move slides to the left
prevButton.addEventListener('click', e => {
	const currentSlide = track.querySelector('.current_slide');
	const prevSlide = currentSlide.previousElementSibling;
	const currentBar = barsNav.querySelector('.current_slide');
	const prevBar = currentBar.previousElementSibling;
	const prevIndex = slides.findIndex(slide => slide === prevSlide);

	moveToSlide(track, currentSlide, prevSlide);
	updateBars(currentBar, prevBar);
	hideShowArrows(slides, prevButton, nextButton, prevIndex);

})


// when I click nav indicators, move to that slide

barsNav.addEventListener('click', e => {
	// what indicator was clicked on?
	const targetBar = e.target.closest('button');

	if (!targetBar) return;

	const currentSlide = track.querySelector('.current_slide');
	const currentBar = barsNav.querySelector('.current_slide');
	const targetIndex = bars.findIndex(bar => bar === targetBar);
	const targetSlide = slides[targetIndex];

	moveToSlide(track, currentSlide, targetSlide);
	updateBars(currentBar, targetBar);

	hideShowArrows(slides, prevButton, nextButton, targetIndex);

})