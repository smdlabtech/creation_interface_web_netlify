## Création d'interface web et tester sur Netlify

Etapes pour créer un dépôt GitHub pour votre projet d'interface qui interagit avec Google Sheets, ainsi que pour organiser et écrire le code nécessaire.   
Voici comment procéder :  

### Étape 1 : Création du Dépôt GitHub

1. Créer un compte GitHub (si ce n'est pas déjà fait) sur github.com.
2. Créer un nouveau dépôt :
    - Cliquez sur votre profil en haut à droite et sélectionnez *"Your repositories"*.
    - Cliquez sur *"New"* pour créer un nouveau dépôt.
    - Donnez un nom à votre dépôt, ajoutez une description, choisissez si vous voulez que le dépôt soit public ou privé, et initialisez-le avec un README si vous le souhaitez.
    - Vous pouvez également ajouter un.gitignore file pour exclure les fichiers et dossiers spécifiques de votre dépôt (par exemple, node_modules/).
    - Cliquez sur *"Create repository"*.


### Étape 2 : Structuration de Votre Projet

Voici une structure de dossier recommandée pour votre projet :

```md
/nom_du_projet
|-- /css
|   |-- style.css
|-- /js
|   |-- app.js
|-- /images
|   |-- logo.png
|-- index.html
|-- README.md
```

```index.html``` : Votre fichier HTML principal.    
```/css/style.css ```  : Vos styles CSS.  
```/js/app.js``` : Votre code JavaScript pour la logique métier, y compris l'intégration avec l'API Google Sheets.  
```/images``` : Dossier pour stocker les images utilisées dans le projet.


### Étape 3 : Rédaction du Code

```index.html``` : Vous avez déjà la structure de base, ajoutez simplement les liens vers vos fichiers CSS et JS :

```html
    html

    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Interface de gestion</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <!-- Votre code HTML ici -->
        <script src="js/app.js"></script>
    </body>
    </html>
```

```app.js``` : Commencez par le script que nous avons discuté pour interagir avec Google Sheets.
Assurez-vous d'inclure l'initialisation de l'API, les fonctions pour envoyer et rechercher des données.  
Vous devrez manipuler le DOM pour lire les entrées du formulaire et afficher les résultats.

```style.css``` : Ajoutez vos styles CSS pour personnaliser l'apparence de votre interface.

### Étape 4 : Tester Localement

Testez votre application localement comme expliqué précédemment en utilisant Python, Node.js, ou un autre serveur HTTP local.
Assurez-vous que tout fonctionne correctement, en particulier l'intégration avec Google Sheets.  

- **Naviguez dans le dossier de votre projet où se trouve votre fichier index.html. Utilisez la commande cd pour changer de répertoire.**   
Par exemple :

```bash
cd chemin_vers_votre_dossier

```

- **Une fois dans le bon dossier, lancez le serveur. Si vous avez Python 3.x, utilisez la commande suivante**

```python
python -m http.server
```  
Cette commande démarrera un serveur web sur le port 8000 par défaut.



- **Accéder à votre application (sous gitbash winbdows)**  

Ouvrez votre navigateur web et allez à l'adresse http://localhost:8000. Vous devriez voir la page d'accueil de votre application web. Si votre fichier HTML n'est pas nommé index.html, vous devrez spécifier le nom du fichier dans l'URL, par exemple http://localhost:8000/index.html.


- **Tester votre application** 

Testez toutes les fonctionnalités de votre site, notamment les interactions avec Google Sheets. Assurez-vous que le formulaire soumet les données correctement et que toutes les autres interactions fonctionnent comme prévu.
Utilisez les outils de développement (DevTools) de votre navigateur pour inspecter les éléments, surveiller les requêtes réseau, et consulter les messages de la console JavaScript pour toute erreur ou avertissement.

- **Apporter des modifications**

Si vous constatez des problèmes ou des erreurs, apportez les modifications nécessaires dans vos fichiers HTML, CSS ou JavaScript.
Après chaque modification, rafraîchissez votre navigateur pour voir les changements. Vous pouvez aussi devoir vider le cache du navigateur si les changements ne sont pas immédiatement visibles


- **Arrêter le serveur**

Lorsque vous avez terminé vos tests, vous pouvez arrêter le serveur en retournant à l'invite de commande et en appuyant sur ```Ctrl+C```. Cela interrompra le processus du serveur.
En suivant ces étapes, vous serez en mesure de tester efficacement votre application localement sur votre machine Windows. Si vous avez des questions ou si vous rencontrez des problèmes lors de ce processus, n'hésitez pas à demander de l'aide.



### Étape 5 : Pousser sur GitHub

Initialisez Git dans votre dossier de projet si ce n'est pas déjà fait :

    
```git
git init
```

Ajoutez votre dépôt distant :


```git
git remote add origin https://github.com/username/nom_du_projet.git
```


Ajoutez vos fichiers :

```git
git add .
```

Committez vos changements :


```git
git commit -m "Initial commit"
```

Poussez vos changements sur GitHub :


```git
git push -u origin master
```

### Étape 6 : Déployer sur Netlify

Connectez votre dépôt GitHub à Netlify pour le déploiement automatique.

**Conclusion :**

En suivant ces étapes, vous pouvez non seulement créer une interface efficace qui interagit avec Google Sheets, mais aussi gérer votre code de manière professionnelle via GitHub et le déployer facilement sur Netlify. 
Si vous avez besoin d'aide sur des aspects spécifiques du code ou d'autres détails, n'hésitez pas à demander.
