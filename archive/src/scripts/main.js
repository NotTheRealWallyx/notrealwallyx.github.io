document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('header').addEventListener('click', function (event) {
        if (event.target.classList.contains('menu-btn')) {
            if (document.querySelector('header').classList.contains('active')) {
                document.querySelector('header').classList.remove('active');
                document.body.classList.add('loaded');
            } else {
                document.querySelector('header').classList.add('active');
                document.body.classList.remove('loaded');
            }

            event.preventDefault();
        }
    });
});
