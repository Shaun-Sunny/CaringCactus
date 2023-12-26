// Replace 'YOUR_API_KEY' with your Google API key
const API_KEY = 'YOUR_API_KEY';
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID';

function initClient() {
    gapi.client.init({
        'apiKey': API_KEY,
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function() {
        console.log('Google Sheets API initialized');
    }).catch(function(error) {
        console.log('Error initializing Google Sheets API: ' + error);
    });
}

function handleFormSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('footer-email').value;

    // Call the Google Sheets API to append the data
    gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: 'Sheet1',  // Update with your sheet name
        valueInputOption: 'USER_ENTERED',
        resource: {
            values: [[email]],
        },
    }).then(function(response) {
        console.log('Data appended successfully:', response.result);
        // You can add further actions here if needed
    }, function(error) {
        console.error('Error appending data:', error.result.error.message);
    });
}

document.getElementById('emailForm').addEventListener('submit', handleFormSubmit);

// Load the Google Sheets API client
gapi.load('client', initClient);
