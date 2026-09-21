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

## Référencement (SEO)

Déjà en place dans la page :

- `title` et `description` calibrés pour la longueur affichée par Google
- URL canonique, `robots` en index/follow, `lang="fr"`
- Open Graph + Twitter Card complets, avec image de partage `assets/og-image.png` (1200×630)
- Données structurées JSON-LD : `Person`, `WebSite`, `ProfilePage` et 3 `Service`
- `robots.txt` et `sitemap.xml` à la racine du site
- `404.html` servi par GitHub Pages, en `noindex`
- Favicons réels (`favicon.ico`, `favicon.svg`, `apple-touch-icon.png`) — un favicon en
  `data:` n'est pas exploité par le robot de Google
- Polices auto-hébergées et préchargées : pas de requête tierce, affichage rapide

Étapes qui restent à faire côté Google (nécessitent le compte de Fares) :

1. Search Console → Ajouter une propriété → *Préfixe d'URL* :
   `https://faresamiar.github.io/FaresAmiar/`
2. Vérification par fichier HTML ou balise `<meta>` (l'emplacement de la balise est
   commenté dans `index.html`) → donner le fichier ou la balise pour qu'elle soit poussée
3. Soumettre `sitemap.xml` dans l'onglet Sitemaps
4. Ajouter l'URL du site dans *Settings → Public profile → Website* de GitHub (lien
   depuis un domaine très autoritaire) et dans les profils Malt / LinkedIn / Free-Work

## Modifier

Tout est en HTML lisible : un `<li class="row">` par service ou projet, le schéma
de la chaîne de données est un SVG en clair dans le hero. On édite, on pousse, la page
se met à jour — pas de build, rien à installer.
