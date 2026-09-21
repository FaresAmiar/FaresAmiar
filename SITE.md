# Site portfolio — Fares Amiar (freelance data & MLOps)

Site statique d'une page : HTML + CSS + JS, aucune dépendance, aucun tracker, aucun cookie.

## Fichiers

- `index.html` — la page entière (sections ancrées : Services, Réalisation, Projets, Stack, Méthode, Contact)
- `assets/styles.css` — mise en forme ; thème sombre par défaut, thème clair disponible
- `assets/fonts.css` + `assets/fonts/` — polices auto-hébergées (Fraunces, IBM Plex Sans, IBM Plex Mono, sous-ensembles latin)
- `assets/main.js` — bascule de thème mémorisée, sommaire actif, apparitions douces

Aucune requête vers un domaine tiers : ni Google Fonts, ni CDN, ni analytics.

## Mise en ligne (GitHub Pages)

1. Settings → Pages
2. Source : `Deploy from a branch`
3. Branch : `main` (après fusion) ou `site-perso`, dossier `/ (root)`
4. Enregistrer → la page sort sur `https://faresamiar.github.io/FaresAmiar/`

Pour une URL à la racine (`https://faresamiar.github.io/`), créer un dépôt nommé
`FaresAmiar.github.io` et y copier ces fichiers.

## À compléter avant publication

- **Adresse e-mail** : dans `index.html`, section Contact, décommenter le bloc
  `<!-- À COMPLÉTER ... -->` et remplacer `adresse@exemple.fr`.
- **Textes** : la présentation du hero, la liste des services et la section Méthode
  décrivent une pratique de freelance. À relire pour que tout soit exact.
- **Tarifs / disponibilité** : volontairement absents. Les formats de mission
  (« Forfait projet », « Audit express », « Jours par mois ») sont indicatifs.

## Modifier

Tout est en HTML lisible : un `<li class="row">` par service ou projet, le schéma
de la chaîne de données est un SVG en clair dans le hero. On édite, on pousse, la page
se met à jour — pas de build, rien à installer.
