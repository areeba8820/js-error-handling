document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (name === '' || email === '' || message === '') {
        document.getElementById('formMessage').innerText = 'Please fill out all fields.';
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('formMessage').innerText = 'Please enter a valid email address.';
        return;
    }

    // If all validation passes
    document.getElementById('formMessage').innerText = '';
    alert('Form submitted successfully!');
    document.getElementById('contactForm').reset(); // Optional: reset the form fields
});