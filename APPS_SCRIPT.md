Apps Script: receive form POSTs and append to Google Sheet

1) Create a Google Sheet to receive responses. Note the spreadsheet ID (the long token in the sheet URL).

2) In the sheet, open Extensions → Apps Script and paste the code below. Replace SPREADSHEET_ID with your sheet ID and (optionally) the sheet name.

----- CODE -----
function doPost(e) {
  const ss = SpreadsheetApp.openById('SPREADSHEET_ID');
  const sheet = ss.getSheetByName('Sheet1');
  const p = e.parameter;
  sheet.appendRow([new Date(), p.name || '', p.email || '']);
  return ContentService
    .createTextOutput('Submitted')
    .setMimeType(ContentService.MimeType.TEXT);
}
----- END CODE -----

3) Deploy the script as a Web App:
   - Click Deploy → New deployment
   - Select "Web app"
   - "Execute as": Me
   - "Who has access": Anyone (or Anyone with link)
   - Click Deploy and copy the Web App URL (the `exec` URL).

4) Update your site's form `action` to the Web App URL and keep `method="post"`.

5) Test: submit the form on your site — rows should append to the spreadsheet.

Notes:
- Deploying as `Me` means submissions run with your account permissions; be careful which access setting you choose.
- If you need CORS or JSON responses for AJAX, the script can be extended; this basic setup works for standard HTML form POSTs.
