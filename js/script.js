document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active-tab'));
            tabContents.forEach(content => content.classList.add('hidden'));

            // Add active class to clicked button and show corresponding content
            button.classList.add('active-tab');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.remove('hidden');
        });
    });
});