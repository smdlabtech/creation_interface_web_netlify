
// Charger l'API : Utilisez le SDK JavaScript de Google pour charger l'API Google Sheets dans votre application.
function loadSheetsAPI() {
  gapi.load('client', () => {
    // Initialiser le client gapi ici
    gapi.client.init({
      'apiKey': '7302575656-73b2f9glhvep3rg8go38oflrmj2ie7ea.apps.googleusercontent.com',
      'discoveryDocs': ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    }).then(function () {
      // API chargée et prête à être utilisée
    });
  });
}




// Lire des données : Fonction pour lire les données depuis Google Sheets.
function readData() {
  var params = {
    // ID de votre feuille de calcul
    spreadsheetId: 'SPREADSHEET_ID', 
    // Plage des cellules à lire
    range: 'Sheet1!A1:D5', 
  };
  var request = gapi.client.sheets.spreadsheets.values.get(params);
  request.then(function(response) {
    // Traitez ici les données reçues
    console.log(response.result.values);
  }, function(reason) {
    console.error('error: ' + reason.result.error.message);
  });
}


// Écrire des données : Fonction pour écrire des données dans Google Sheets.
function writeData() {
  var params = {
    // ID de votre feuille de calcul
    spreadsheetId: 'SPREADSHEET_ID', 
  };
  var valueRangeBody = {
    // Données à écrire
    "values": [
      ["Donnée 1", "Donnée 2", "Donnée 3"]
    ]
  };
  var request = gapi.client.sheets.spreadsheets.values.update({
    spreadsheetId: params.spreadsheetId,
    range: 'Sheet1!A1',
    valueInputOption: 'RAW',
    resource: valueRangeBody
  });
  request.then(function(response) {
    // Les données ont été écrites
    console.log(response.result);
  }, function(reason) {
    console.error('error: ' + reason.result.error.message);
  });
}
