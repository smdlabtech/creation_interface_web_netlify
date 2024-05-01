document.addEventListener('DOMContentLoaded', function() {
  var prospectForm = document.getElementById('prospectForm');

  prospectForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Empêche le formulaire de soumettre de manière traditionnelle

      // Récupération des données du formulaire
      var formData = new FormData(prospectForm);

      // Ici, vous construirez l'objet avec les données
      var prospectData = {};
      formData.forEach(function(value, key) {
          prospectData[key] = value;
      });

      // Envoi des données à Google Sheets via l'API
      sendDataToGoogleSheets(prospectData);
  });
});


//----------------------------------------------------------------------------------------------//
// Vous devez inclure ici la logique pour envoyer des données à Google Sheets
// Cette partie du code dépendra de la manière dont vous avez configuré l'API Google Sheets.
function sendDataToGoogleSheets(data) {
  // Remplacez 'YOUR_SPREADSHEET_ID' par l'ID de votre feuille Google Sheets.
  const spreadsheetId = "1445130056"    //'YOUR_SPREADSHEET_ID';

  // Remplacez 'YOUR_ACCESS_TOKEN' par le token d'accès que vous avez obtenu.
  const accessToken = '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';

  fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1:append`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify({
          values: [
              // Transformez les données de l'objet 'data' en tableau de valeurs
              Object.values(data)
          ],
          range: 'ACTIVITÉS', // La plage où vous voulez que les données soient ajoutées.
          valueInputOption: 'USER_ENTERED', // Les données seront entrées telles que l'utilisateur les aurait saisies.
      })
  })
  .then(response => response.json())
  .then(responseData => {
      console.log('Success:', responseData);
      // Ici, mettez à jour l'UI pour afficher le succès de la soumission.
  })
  .catch((error) => {
      console.error('Error:', error);
      // Gérez les erreurs ici, mettez à jour l'UI en conséquence.
  });
}



