# Tests @ Trusk

Ceci est un projet exemple pour l'utilisation de [Cypress](https://www.cypress.io/)

## Installer les dépendences

- Avoir [Node.js](https://nodejs.org/en/) d'installé
- Être sur une version de Node.js qui permet l'utilisation de [yarn](https://yarnpkg.com/)
- Ouvrir un terminal de commandes
- Se déplacer dans le répertoire
- Lancer `yarn` pour installer les dépendances du projet

## Architecture

### Applicatif

Une application très simple écrite en Javascript avec le framework [Express](https://expressjs.com/fr/)

- [index.js](index.js) le fichier de lancement du serveur [Express](https://expressjs.com/fr/)
- [public](public) fichiers servis de manière statique
- [index.html](public/index.html) le point d'entrée de l'appli

L'application est un formulaire semblable a une connexion. Pour se "connecter" il faut saisir deux foix adrian@trusk.com sinon des messages d'erreur apparaissent.

### Tests

Les tests sont écris en [Cypress](https://www.cypress.io/) et se trouvent dans [ce fichier](cypress/integration/trusk-test/test.spec.js)

## Lancer les tests

### Avec UI Cypress

- Ouvrir un terminal de commandes
- Se déplacer dans le répertoire
- Lancer le server avec `yarn start`
- Dans un autre terminal
- Lancer `yarn cypress open` pour lancer l'interface graphique de [Cypress](https://www.cypress.io/)

### En ligne de commandes

- Ouvrir un terminal de commandes
- Se déplacer dans le répertoire
- Lancer le server avec `yarn start`
- Dans un autre terminal
- Lancer `yarn cypress run` pour lancer les tests sans l'interface graphique de [Cypress](https://www.cypress.io/)