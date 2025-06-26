document.addEventListener('DOMContentLoaded', () => {
    const animatedText = document.querySelector('.animated-text');
    const texts = ['Head of Engineering and Developer.', 'Based in London.'];

    let currentIndex = 0;
    let isDeleting = false;
    let currentText = '';
    let charIndex = 0;
    let delay = 2000;

    function type() {
        const fullText = texts[currentIndex];

        if (isDeleting) {
            charIndex--;
            currentText = fullText.substring(0, charIndex);
        } else {
            charIndex++;
            currentText = fullText.substring(0, charIndex);
        }

        animatedText.textContent = currentText;

        if (!isDeleting && charIndex === fullText.length) {
            setTimeout(() => {
                isDeleting = true;
                type();
            }, delay);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % texts.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }
    type();
});
