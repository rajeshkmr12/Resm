const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
	const hamIcon = this.querySelector('.hamburger-icon'); 
	const crossIcon = this.querySelector('.cross-icon'); 
	if (hamIcon.style.display === "none") { 
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	} 
	else { 
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	} 
});

document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.my-card.port-card');

    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            var targetId = card.getAttribute('data-target');
            var popup = document.getElementById(targetId);
            popup.style.display = 'block';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // ... previous code ...

    var closeButtons = document.querySelectorAll('.popup .close');

    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var popup = button.closest('.popup');
            popup.style.display = 'none';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.static-image');

    images.forEach(function(image) {
        image.addEventListener('mouseover', function() {
            image.src = image.getAttribute('data-gif');
        });
        image.addEventListener('mouseout', function() {
            image.src = "images/icons8-pencil.png";
        });
    });
});
