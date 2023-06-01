// Slideshow

var slideIndex = 0;
    var slides = document.querySelectorAll('.slideshow-container img');
    var prevButton = document.querySelector('.prev');
    var nextButton = document.querySelector('.next');

    showSlide(slideIndex);

    // Event listeners for navigation arrows
    prevButton.addEventListener('click', function () {
        showSlide(slideIndex -= 1);
    });

    nextButton.addEventListener('click', function () {
        showSlide(slideIndex += 1);
    });

    function showSlide(index) {
        if (index < 0) {
            slideIndex = slides.length - 1;
        } else if (index >= slides.length) {
            slideIndex = 0;
        }

        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        slides[slideIndex].style.display = 'block';
    }