document.addEventListener('DOMContentLoaded', function () {
    const dropdownButtons = document.querySelectorAll('.with-dropdown');

    dropdownButtons.forEach(button => {
        button.addEventListener('click', function () {
            this.querySelector('.dropdown-content').classList.toggle('show');
        });
    });

    window.addEventListener('click', function (event) {
        if (!event.target.matches('.with-dropdown')) {
            const dropdowns = document.getElementsByClassName('dropdown-content');
            for (const dropdown of dropdowns) {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            }
        }
    });
});
