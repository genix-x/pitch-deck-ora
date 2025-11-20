# 📊 ORa Pitch Deck - Guide de Modification

## 📁 Structure du Projet

```
ora-pitch-deck/
├── public/
│   ├── index.html              # Slides 1-9 (structure principale)
│   ├── slides-part2.html       # Slides 10-13 + Merci (à copier dans index.html)
│   ├── css/
│   │   └── custom.css          # Tous les styles du pitch deck
│   ├── js/
│   │   └── init.js             # Configuration Reveal.js
│   └── assets/
│       └── logo-ora.png        # Logo ORa
```

## 🎯 Comment Modifier une Slide

### Option 1 : Modifier directement dans index.html

1. Ouvrir `public/index.html`
2. Chercher la slide par son breadcrumb (ex: `<span class="breadcrumb">Problem</span>`)
3. Modifier le contenu HTML
4. Sauvegarder (le serveur recharge automatiquement)

### Option 2 : Modifier les styles

1. Ouvrir `public/css/custom.css`
2. Modifier les variables CSS dans `:root` pour changer les couleurs
3. Modifier les classes pour changer l'apparence

## 🔧 Les 4 Corrections Prioritaires

### 1. ✅ Slide 2 (Problem) - FAIT
- Statistiques sources ajoutées
- Liens cliquables vers sources
- Mise en évidence des chiffres clés

### 2. ✅ Slide 4 (Ora Translate) - FAIT
- Use cases enrichis avec contexte
- Tableau benchmark ajouté
- Sources ajoutées

### 3. ✅ Slide 9 (Business Model) - FAIT  
- Tableau benchmarks SaaS ajouté
- Sources OpenView et SaaS Capital
- Métriques clés en évidence

### 4. ❌ Appendix A3 (Sédentarité) - À AJOUTER

Contenu à ajouter après la slide 12 dans index.html :

```html
<!-- APPENDIX A3: TRAVAIL EN MOUVEMENT -->
<section>
  <span class="breadcrumb">Appendix</span>
  <h2>🚶 A3 — Travail en Mouvement</h2>
  <p class="subtitle">Sédentarité : La crise silencieuse des bureaux</p>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5em;">
    <div>
      <h3 style="font-size: 1.2em;">📊 Le Problème (WHO 2024)</h3>
      <div class="card">
        <h4>💔 Impact Santé</h4>
        <ul style="font-size: 0.8em;">
          <li><strong>86% employés assis >6h/jour</strong></li>
          <li>Risque cardiovasculaire : <strong>+147%</strong></li>
          <li>Risque diabète : <strong>+91%</strong></li>
          <li>Risque mortalité : <strong>+49%</strong></li>
        </ul>
        <p class="muted" style="font-size: 0.7em;">
          Sources: <a href="https://www.who.int" target="_blank">WHO 2024</a>, 
          <a href="https://www.heart.org" target="_blank">American Heart Association</a>
        </p>
      </div>

      <div class="card" style="margin-top: 1em;">
        <h4>📉 Impact Productivité</h4>
        <ul style="font-size: 0.8em;">
          <li>Concentration : <strong>–15-20%</strong></li>
          <li>Créativité : <strong>–30% vs en mouvement</strong></li>
          <li>Engagement : <strong>–25%</strong></li>
        </ul>
        <p class="muted" style="font-size: 0.7em;">Source: Stanford Study 2024</p>
      </div>

      <div class="card" style="margin-top: 1em;">
        <h4>💸 Impact Financier</h4>
        <ul style="font-size: 0.8em;">
          <li>Coût annuel USA : <strong>$67.5Bn</strong></li>
          <li>Arrêts maladie : <strong>+40%</strong></li>
          <li>Turnover : <strong>+15%</strong></li>
        </ul>
      </div>
    </div>

    <div>
      <h3 style="font-size: 1.2em;">✅ La Solution ORa</h3>
      <div class="highlight">
        <h4><i data-lucide="mic"></i> Contrôle Total à la Voix</h4>
        <ul style="font-size: 0.8em;">
          <li>Zéro écran nécessaire</li>
          <li>Créez, pilotez, analysez en marchant</li>
          <li>Ora Build : agents IA par voix</li>
          <li>Ora Copilot : coaching en marchant</li>
        </ul>
      </div>

      <div class="feature-box" style="margin-top: 1em;">
        <h4><i data-lucide="trending-up"></i> Résultats Mesurés</h4>
        <div class="stats" style="flex-direction: column; gap: 0.8em;">
          <div class="stat">
            <div class="stat-number" style="font-size: 1.5em;">+60%</div>
            <div class="stat-label">Créativité (Stanford)</div>
          </div>
          <div class="stat">
            <div class="stat-number" style="font-size: 1.5em;">+40%</div>
            <div class="stat-label">Humeur (endorphines)</div>
          </div>
          <div class="stat">
            <div class="stat-number" style="font-size: 1.5em;">–50%</div>
            <div class="stat-label">Réduction burn-out</div>
          </div>
        </div>
      </div>

      <div class="highlight" style="margin-top: 1em; background: linear-gradient(135deg, rgba(0, 204, 102, 0.08) 0%, rgba(0, 153, 255, 0.08) 100%); border-left-color: #00CC66;">
        <h4><i data-lucide="briefcase"></i> Intérêt RH/DRH</h4>
        <ul style="font-size: 0.8em;">
          <li>Marque employeur (QVT innovante)</li>
          <li>Réduction absentéisme</li>
          <li>Attractivité talents</li>
          <li>RSE (santé collaborateurs)</li>
          <li>Mesurable & non-intrusif</li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

## 🚀 Commandes Utiles

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Le serveur démarre sur http://localhost:8080
# Username: genix
# Password: bouygues2025
```

## 🎨 Personnalisation des Couleurs

Modifier les variables dans `public/css/custom.css` :

```css
:root {
  --primary: #0066FF;        /* Bleu principal */
  --secondary: #00B8D4;      /* Bleu secondaire */
  --accent: #FF4081;         /* Rose accent */
  --text-primary: #1A202C;   /* Texte principal */
}
```

## 📝 Navigation dans la Présentation

- **Flèches** ← → : Slide précédente/suivante
- **Espace** : Slide suivante
- **Échap** : Vue d'ensemble
- **S** : Mode speaker notes
- **F** : Plein écran

## 🔍 Checklist Avant Présentation

- [ ] Toutes les slides s'affichent correctement
- [ ] Logo Ora visible en haut à gauche
- [ ] Liens sources cliquables
- [ ] Tableaux bien formatés
- [ ] Navigation fluide entre slides
- [ ] Mode speaker notes fonctionne (touche S)

## 📊 Structure des 12 Slides + Appendix

### Slides Principales
1. Vision - "L'IA réalise. L'humain supervise."
2. Problem - 4 problèmes (langue, complexité, sédentarité, management)
3. Solution - 4 frontières brisées
4. Ora Translate - Hero feature
5. Ora Copilot - Feature #2
6. Ecosystem - 6 agents IA
7. Market Size - TAM/SAM/SOM
8. Traction - Pipeline 230-460k€
9. Business Model - Unit Economics
10. Go-to-Market - 3 phases
11. Team - Ousama + Bruno
12. Ask - 400k€ pour 20%
13. Merci - Q&A

### Appendix (Backup Slides)
- A1: Tech Stack
- A2: Pack Sécurité Voyageur
- A3: Travail en Mouvement (À AJOUTER)
- A4: Roadmap 18 mois
- A5: Compétition

## 💡 Conseils pour la Présentation

1. **Commencer par Slide 1** (Vision)
2. **Slide 2-3** : Poser le problème et la solution (3-4 min)
3. **Slide 4-6** : Démontrer les features (5-6 min)
4. **Slide 7-9** : Prouver le marché et l'économie (4-5 min)
5. **Slide 10-12** : Closer avec GTM, Team, Ask (3-4 min)
6. **Appendix** : Utiliser si questions techniques

**Durée totale : 15-20 minutes + Q&A**

## 🐛 Dépannage

### Le serveur ne démarre pas
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Les icônes Lucide ne s'affichent pas
- Vérifier la connexion internet (CDN)
- Recharger la page (F5)

### Les slides sont coupées
- Vérifier la résolution : 1920x1080 recommandée
- Ajuster avec les touches + et -

## 📞 Contact

Pour toute question :
- Ousama Ben Younes - CEO
- contact@ora.ai
