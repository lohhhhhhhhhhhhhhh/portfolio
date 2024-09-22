/*const hamburger = document.getElementById('hamburger');
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
        menu.style.display = >"block"
    }
}); */
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    
    if (hamIcon.style.display === "none") {
        hamIcon.style.display = "inline-block";
        crossIcon.style.display = "none";
        menu.style.display = "none";
    } else {
        crossIcon.style.display = "inline-block";
        hamIcon.style.display = "none";
        menu.style.display = "block";
    }
});

// Close the menu when a menu item is clicked
const menuItems = document.querySelectorAll('.menu-list-items a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        hamIcon.style.display = "inline-block";
        crossIcon.style.display = "none";
        menu.style.display = "none";
    });
});
// Include the EmailJS SDK
(function() {
    emailjs.init("I4Js0RLFB9i3LtKy-"); // Replace with your EmailJS User ID
})();

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    emailjs.sendForm('service_kkaacj2', 'template_7vz0rlp', this)
        .then(() => {
            alert('Message sent!');
            contactForm.reset(); // Reset the form after submission
        }, (error) => {
            alert('Oops! Something went wrong. Please try again.');
            console.error('Error:', error);
        });
});

