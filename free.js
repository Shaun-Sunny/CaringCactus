function submitForm() {
    // Extract form data
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var location = document.getElementById('location').value;
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var medicalConcern = document.getElementById('medical-concern').value;
    var contactNumber = document.getElementById('contact-number').value;
    var whatsappNumber = document.getElementById('whatsapp-number').value;
    var email = document.getElementById('email').value;
    var dateTime = document.getElementById('date-time').value;

    // Prepare form data as JSON
    var formData = {
        name: name,
        age: age,
        location: location,
        weight: weight,
        height: height,
        'medical-concern': medicalConcern,
        'contact-number': contactNumber,
        'whatsapp-number': whatsappNumber,
        email: email,
        'date-time': dateTime
    };

    // Send the form data to Google Sheets
    fetch('AKfycbwukL-RlwBFx6IMbLND3kPqfGkDZMRrh2_3TPRwsOgiUOhcxzkz__57vvYjy9kkNbP8', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.text())
    .then(data => {
        console.log('Success:', data);
        // Add any success handling code here
    })
    .catch((error) => {
        console.error('Error:', error);
        // Add any error handling code here
    });
}
