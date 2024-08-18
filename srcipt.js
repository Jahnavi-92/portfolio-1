document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Here you would normally handle form submission, e.g., send the data to a server
        document.getElementById('contact-form').reset(); // Optionally reset the form
    } else {
        alert('Please fill out all fields.');
    }
});
