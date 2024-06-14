document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const phoneInput = document.getElementById('phone').value;
    const phonePattern = /^[0-9]{10}$/; // Assuming a 10-digit phone number
    
    if (!phonePattern.test(phoneInput)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    alert('Your message has been sent successfully!');
    document.getElementById('contactForm').reset();
});
