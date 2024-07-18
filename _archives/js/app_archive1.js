//--------------------------------------------------//
// Initialisation de l'API Google Sheets:
function loadSheetsAPI() {
  gapi.load('client', initClient);
}

function initClient() {
  gapi.client.init({
      'apiKey': 'YOUR_API_KEY',
      'discoveryDocs': ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  }).then(function () {
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
      updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
  });
}

function updateSignInStatus(isSignedIn) {
  if (isSignedIn) {
      // Prêt pour les requêtes API
  } else {
      // Gérer la connexion
  }
}


//--------------------------------------------------//
// Envoi de données à Google Sheets:
function submitData() {
  var data1 = document.getElementById('data1').value;
  var data2 = document.getElementById('data2').value;

  var params = {
      spreadsheetId: 'SPREADSHEET_ID',
      range: 'Sheet1',
      valueInputOption: 'USER_ENTERED'
  };
  var valueRangeBody = {
      "values": [
          [data1, data2]
      ]
  };

  var request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
  request.then(function(response) {
      console.log('Data written successfully:', response.result);
  }, function(reason) {
      console.error('error: ' + reason.result.error.message);
  });
}


//--------------------------------------------------//
// Recherche de données dans Google Sheets:
function searchData() {
  var query = document.getElementById('searchQuery').value;
  var params = {
      spreadsheetId: 'SPREADSHEET_ID',
      range: 'Sheet1'
  };
  var request = gapi.client.sheets.spreadsheets.values.get(params);
  request.then(function(response) {
      var rows = response.result.values;
      var results = rows.filter(row => row.includes(query));
      displayResults(results);
  }, function(reason) {
      console.error('error: ' + reason.result.error.message);
  });
}

function displayResults(results) {
  var html = results.map(result => `<div>${result.join(', ')}</div>`).join('');
  document.getElementById('searchResults').innerHTML = html;
}
