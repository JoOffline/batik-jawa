document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.batik-text, .batik-image, .batik-title');

    const isInViewport = el => {
        const rect = el.getBoundingClientRect();
        const offset = 200; // Offset for extended visibility
        return (
            rect.top >= -offset &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset
        );
    };

    const runAnimation = () => {
        elements.forEach(el => {
            if (isInViewport(el)) {
                el.classList.add('is-visible');
            } else {
                el.classList.remove('is-visible');
            }
        });
    };

    runAnimation();
    window.addEventListener('scroll', runAnimation);
});
