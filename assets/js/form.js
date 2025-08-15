document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;
        
        // Validate form
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Send email using EmailJS
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(function() {
                alert('Message sent successfully!');
                contactForm.reset();
            }, function(error) {
                alert('Failed to send message. Please try again later.');
                console.error('EmailJS Error:', error);
            });
    });
});