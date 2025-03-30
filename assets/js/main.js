/**
 * Animation on scroll function and init
 */
function aosInit() {
    AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
}
window.addEventListener('load', aosInit);

/**
* Init typed.js
*/
const selectTyped = document.querySelector('.typed');
if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}

/**
 * Animate the skills items on reveal
 */
let skillsAnimation = document.querySelectorAll('.skills-animation');
skillsAnimation.forEach((item) => {
    new Waypoint({
        element: item,
        offset: '80%',
        handler: function (direction) {
            let progress = item.querySelectorAll('.progress .progress-bar');
            progress.forEach(el => {
                el.style.width = el.getAttribute('aria-valuenow') + '%';
            });
        }
    });
});

/**
 * Init swiper sliders
*/
function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
        let config = JSON.parse(
            swiperElement.querySelector(".swiper-config").innerHTML.trim()
        );

        if (swiperElement.classList.contains("swiper-tab")) {
            initSwiperWithCustomPagination(swiperElement, config);
        } else {
            new Swiper(swiperElement, config);
        }
    });
}