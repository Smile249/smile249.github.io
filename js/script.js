document.addEventListener('DOMContentLoaded', function () {
    var scrollPosition = window.scrollY;
    var scrlArrow = document.querySelector('.scroll-arrow');
    window.addEventListener('scroll', function() {

        scrollPosition = window.scrollY;
        console.log(scrollPosition);

        if (scrollPosition >= 100) {
            scrlArrow.classList.remove('arrow-hide');
        } else {
            scrlArrow.classList.add('arrow-hide');
        }
    });



});