# 📊 ORa Pitch Deck

Pitch deck professionnel pour **ORa - Opérateur Télécom Augmenté**, une solution SaaS qui révolutionne la téléphonie d'entreprise avec l'IA.

![ORa Logo](public/assets/logo-ora.png)

## 🎯 À Propos

ORa est un opérateur télécom augmenté par l'IA qui brise 4 frontières :
- 🌍 **La langue** : Traduction instantanée dans 26 langues
- 🎤 **La complexité** : Contrôle total à la voix (zéro interface)
- 🚶 **La sédentarité** : Travail en mouvement (productivité + santé)
- 👥 **Le management** : IA coach qui forme sans surveiller

## 📑 Structure du Pitch Deck

**12 Slides Principales + Merci**

1. **Vision** - "L'IA réalise. L'humain supervise."
2. **Problem** - 4 problèmes majeurs avec stats sourcées
3. **Solution** - 4 frontières brisées
4. **Ora Translate** - Hero feature (traduction temps réel)
5. **Ora Copilot** - IA coach commercial (BETA)
6. **Ecosystem** - 6 agents IA interconnectés
7. **Market Size** - TAM $50Bn / SAM $8-12Bn / SOM $600M-1.5Bn
8. **Traction** - Pipeline 230-460k€ ARR (100% inbound)
9. **Business Model** - LTV/CAC 7-18:1, Margins 70-75%
10. **Go-to-Market** - 3 phases (Validation → Scale → Industrialisation)
11. **Team** - Ousama (CEO) + Bruno (CTO)
12. **Ask** - 400k€ pour 20% (pre-money 1.6M€)
13. **Merci** - Q&A

## 🚀 Installation Locale

```bash
# Cloner le repo
git clone https://github.com/genix-x/pitch-deck-ora.git
cd pitch-deck-ora

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le serveur démarre sur **http://localhost:8080**

**🔐 Identifiants :**
- Username: `genix`
- Password: `bouygues2025`

## 📝 Navigation

- **← →** : Slide précédente/suivante
- **Espace** : Slide suivante
- **Échap** : Vue d'ensemble
- **S** : Mode speaker notes (si configuré)
- **F** : Plein écran

## 🛠️ Technologies

- **Reveal.js** - Framework de présentation HTML/JS
- **Lucide Icons** - Iconographie moderne
- **Express.js** - Serveur web avec authentification
- **Google Fonts** - Typographie (Inter + Poppins)

## 📁 Structure du Projet

```
pitch-deck-ora/
├── public/
│   ├── index.html          # Pitch deck complet (13 slides)
│   ├── assets/
│   │   └── logo-ora.png    # Logo ORa
│   ├── css/
│   │   └── custom.css      # Styles personnalisés
│   └── js/
│       └── init.js         # Configuration Reveal.js
├── server.js               # Serveur Express avec auth
├── package.json            # Dépendances
└── README-PITCH.md         # Guide de modification
```

## ✏️ Modification du Contenu

Consultez **[README-PITCH.md](README-PITCH.md)** pour un guide détaillé des modifications.

**Modifications rapides :**
1. Ouvrir `public/index.html`
2. Chercher la slide par son breadcrumb (ex: `<span class="breadcrumb">Problem</span>`)
3. Modifier le contenu HTML
4. Sauvegarder (rechargement automatique)

**Modification des styles :**
1. Ouvrir `public/css/custom.css`
2. Modifier les variables CSS dans `:root`
3. Sauvegarder

## 🎨 Personnalisation des Couleurs

Dans `public/css/custom.css` :

```css
:root {
  --primary: #0066FF;        /* Bleu principal ORa */
  --secondary: #00B8D4;      /* Bleu secondaire */
  --accent: #FF4081;         /* Rose accent */
  --text-primary: #1A202C;   /* Texte principal */
}
```

## 🌐 Déploiement

### Netlify (Recommandé)

Le projet inclut une configuration Netlify prête à l'emploi :

```bash
# Déployer avec Netlify CLI
netlify deploy --prod
```

### Docker

```bash
# Build l'image
docker build -t ora-pitch-deck .

# Run le container
docker run -p 8080:8080 ora-pitch-deck
```

## 📊 Métriques Clés (Slide 9)

| Métrique | ORa | Benchmark SaaS | Status |
|----------|-----|----------------|--------|
| **LTV/CAC** | 7-18:1 | >3:1 | ✅ Excellent |
| **CAC Payback** | 3-5 mois | <12 mois | ✅ Top 10% |
| **Gross Margin** | 70-75% | 70%+ | ✅ Sain |
| **Churn annuel** | <15% | <20% | ✅ Bon |

## 📞 Contact

**Ousama Ben Younes** - CEO & Co-Founder
- Email: contact@ora.ai
- LinkedIn: [Ousama Ben Younes](https://linkedin.com)

## 📄 Licence

© 2024 ORa. Tous droits réservés. Document confidentiel.

---

**💡 Note :** Ce pitch deck est optimisé pour des présentations investisseurs. Pour toute question ou modification, consultez [README-PITCH.md](README-PITCH.md).
