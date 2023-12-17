function doPost(e) {
    const lock = LockService.getScriptLock();
    lock.tryLock(10000);
  
    try {
      const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'));
      const sheet = doc.getSheetByName(sheetName);
  
      const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
      const nextRow = sheet.getLastRow() + 1;
  
      const newRow = headers.map(function (header) {
        return header === 'Date' ? new Date() : e.parameter[header];
      });
  
      sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);
  
      // Send email with form data
      sendEmail(
        e.parameter['Full Name'],
        e.parameter['Mobile Number'],
        e.parameter['Your email'],
        e.parameter['Your location'],
        e.parameter['Your Message']
      );
  
      // Return success message with row number
      return ContentService
        .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
        .setMimeType(ContentService.MimeType.JSON);
    } catch (e) {
      // Return error message
      return ContentService
        .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
        .setMimeType(ContentService.MimeType.JSON);
    } finally {
      lock.releaseLock();
    }
  }
  