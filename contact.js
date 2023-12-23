function doPost(e) {
  try {
    const recipientEmail = 'macetheg@gmail.com';
    
    // Get form data
    const fullName = e.parameter['Full Name'];
    const mobileNumber = e.parameter['Mobile Number'];
    const userEmail = e.parameter['Your email'];
    const userLocation = e.parameter['Your location'];
    const userMessage = e.parameter['Your Message'];

    // Compose email body
    const emailBody = `
      Name: ${fullName}
      Mobile Number: ${mobileNumber}
      Email: ${userEmail}
      Location: ${userLocation}
      Message: ${userMessage}
    `;

    // Send email
    GmailApp.sendEmail({
      to: recipientEmail,
      subject: 'New Form Submission',
      body: emailBody,
    });

    // Return success message
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Return error message
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
