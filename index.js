const sheetName = 'Free Consultation'; // Replace with the name of your sheet

function intialSetup() {
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if (!activeSpreadsheet.getSheetByName(sheetName)) {
    activeSpreadsheet.insertSheet(sheetName);
  }
}

function doPost(e) {
  try {
    const lock = LockService.getScriptLock();
    lock.tryLock(10000);

    const doc = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = doc.getSheetByName(sheetName);

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const nextRow = sheet.getLastRow() + 1;

    const newRow = headers.map(function (header) {
      if (header === 'Date') {
        // Use the current date without time
        const currentDate = new Date();
        return new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
      } else {
        return e.parameter[header];
      }
    });

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    // Return an empty response
    return ContentService.createTextOutput('')
      .setMimeType(ContentService.MimeType.TEXT);
  } catch (e) {
    // Log the error, you can customize this part based on your needs
    console.error(e);
    // Return an empty response
    return ContentService.createTextOutput('')
      .setMimeType(ContentService.MimeType.TEXT);
  } finally {
    lock.releaseLock();
  }
}
