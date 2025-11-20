# 🚀 GENIX Pitch Deck – Bouygues Telecom Pro Edition

Présentation professionnelle [Reveal.js](https://revealjs.com/) dockerisée, conçue pour un pitch investisseur. Ce projet fournit un environnement de développement et de production complet pour créer et partager des présentations web interactives et élégantes.

---

## 📋 Table des matières

1.  [Prérequis](#-prérequis)
2.  [Installation](#-installation)
3.  [Commandes Utiles](#-commandes-utiles)
4.  [Raccourcis Reveal.js](#-raccourcis-revealjs)
5.  [Structure du Projet](#-structure-du-projet)
6.  [Génération des Visuels AI](#-génération-des-visuels-ai)
7.  [Personnalisation](#-personnalisation)
8.  [Export PDF](#-export-pdf)
9.  [Troubleshooting](#-troubleshooting)
10. [Licence & Crédits](#-licence--crédits)

---

## 🛠️ Prérequis

Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine :

-   [**Docker**](https://www.docker.com/get-started/) : Pour la conteneurisation de l'application.
-   [**Docker Compose**](https://docs.docker.com/compose/install/) : Pour orchestrer le conteneur Docker.
-   **(Optionnel)** [**Node.js 20+**](https://nodejs.org/) : Pour le développement local sans Docker.

## ⚙️ Installation

Suivez ces étapes pour lancer la présentation en quelques minutes.

1.  **Clonez ou créez le projet**
    Si vous n'avez pas encore le projet, clonez-le. Sinon, assurez-vous que tous les fichiers générés sont en place.

2.  **Naviguez vers le répertoire du projet**
    ```bash
    cd bouygues-genix-presentation
    ```

3.  **Lancez l'environnement Docker**
    Cette commande va construire l'image Docker (si elle n'existe pas), installer les dépendances `npm` et démarrer le serveur en arrière-plan.
    ```bash
    docker-compose up -d --build
    ```

4.  **Accédez à la présentation**
    Ouvrez votre navigateur et allez à l'adresse suivante :
    [**http://localhost:8080**](http://localhost:8080)

    La présentation devrait s'afficher, et le hot-reloading est activé pour le dossier `public/`. Toute modification sur `index.html` ou `custom.css` sera visible instantanément.

## ✨ Commandes Utiles

Voici les commandes à connaître pour gérer l'environnement.

| Commande | Description |
| :--- | :--- |
| `docker-compose up -d` | Démarre le conteneur en arrière-plan. |
| `docker-compose down` | Arrête et supprime le conteneur. |
| `docker-compose logs -f` | Affiche les logs du serveur en temps réel. |
| `docker-compose up -d --build` | Force la reconstruction de l'image avant de démarrer. |
| `npm run dev` | (Local) Démarre le serveur avec `nodemon` (sans Docker). |

## ⌨️ Raccourcis Reveal.js

Utilisez ces touches pour naviguer et interagir avec la présentation.

| Touche | Action |
| :--- | :--- |
| `F` | Passer en mode plein écran. |
| `S` | Afficher les notes du présentateur. |
| `ESC` ou `O` | Afficher la vue d'ensemble des slides. |
| `→` / `↓` | Slide suivante. |
| `←` / `↑` | Slide précédente. |
| `?` | Afficher l'aide et les raccourcis. |

## 📂 Structure du Projet

L'organisation des fichiers est conçue pour être simple et intuitive.

```
bouygues-genix-presentation/
├── docker-compose.yml     # Orchestration Docker
├── Dockerfile               # Définition de l'image Docker
├── package.json             # Dépendances et scripts Node.js
├── server.js                # Serveur Express minimaliste
├── .dockerignore            # Fichiers à ignorer par Docker
├── .gitignore               # Fichiers à ignorer par Git
├── README.md                # Ce fichier
└── public/                  # Dossier servi au client (hot-reload)
    ├── css/
    │   └── custom.css       # Votre thème CSS personnalisé
    ├── assets/              # Dossier pour vos images et médias
    │   └── ...
    └── index.html           # Le contenu de vos slides
```

## 🎨 Génération des Visuels AI

Dans `index.html`, vous trouverez des commentaires spéciaux pour guider la création des visuels manquants avec des IA génératives comme Midjourney ou DALL-E.

```html
<!-- AI: Generate image of two founders in a modern tech office brainstorming with voice assistant diagrams -->
```

**Comment les utiliser ?**

1.  Repérez un commentaire `<!-- AI: ... -->` sous une balise `<img>`.
2.  Copiez le prompt descriptif.
3.  Collez-le dans votre outil de génération d'images favori.
4.  Sauvegardez l'image générée dans le dossier `public/assets/` avec le nom correspondant.

**Exemple de prompt pour Midjourney/DALL-E :**
> `A bar chart visualizing AI Voice Market Growth from 2024 to 2026, with a subtle European flag accent, clean design, corporate style, blue and green palette --ar 16:9`

## 🖌️ Personnalisation

-   **Modifier le contenu** : Éditez le fichier `public/index.html` pour ajouter, supprimer ou modifier des slides (`<section>`).
-   **Modifier le style** : Le fichier `public/css/custom.css` contient tout le thème. Les couleurs principales sont définies en tant que variables CSS `:root` en haut du fichier pour un changement facile.

    ```css
    :root {
      --primary-blue: #00b5e2;
      --dark-blue: #0a2540;
      --accent-green: #10b981;
      /* ... */
    }
    ```

## 📄 Export PDF

Pour exporter votre présentation en PDF, suivez ces étapes :

1.  Ouvrez la présentation avec le paramètre `?print-pdf` : [http://localhost:8080?print-pdf](http://localhost:8080?print-pdf)
2.  Ouvrez le dialogue d'impression de votre navigateur (généralement `Ctrl+P` ou `Cmd+P`).
3.  Choisissez "Enregistrer en PDF" comme destination.
4.  Ajustez les options (mise en page paysage, pas de marges) et enregistrez.

## 🐛 Troubleshooting

-   **Le port 8080 est déjà utilisé** : Modifiez le port dans `docker-compose.yml`. Par exemple, changez `"8080:8080"` en `"8081:8080"` pour accéder à la présentation sur `http://localhost:8081`.
-   **Les images ne se chargent pas** : Vérifiez que le chemin dans les balises `<img>` de `index.html` correspond bien au nom du fichier présent dans `public/assets/`.
-   **Le hot-reload ne fonctionne pas** : Assurez-vous que le volume est correctement monté dans `docker-compose.yml` (`./public:/app/public`). Un redémarrage du conteneur (`docker-compose restart`) peut parfois aider.

## ⚖️ Licence & Crédits

-   **Licence** : Ce projet est sous licence [MIT](./LICENSE).
-   **Crédits** : Propulsé par [Reveal.js](https://revealjs.com), créé par [Hakim El Hattab](https://hakim.se/).

© 2024 Genix. Tous droits réservés.
