document.getElementById('prospectForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Logique pour ajouter les données du formulaire à Google Sheets
    console.log('Ajouter les informations du prospect...');
});

document.getElementById('search').addEventListener('click', function() {
    // Logique pour rechercher les données dans Google Sheets
    console.log('Rechercher des informations...');
});

document.getElementById('update').addEventListener('click', function() {
    // Logique pour mettre à jour les données dans Google Sheets
    console.log('Mettre à jour les informations du prospect...');
});

document.getElementById('delete').addEventListener('click', function() {
    // Logique pour supprimer les données de Google Sheets
    console.log('Supprimer les informations du prospect...');
});

// Ajoutez plus de gestionnaires d'événements et de logique selon les besoins spécif
