# Page perso — Fares Amiar

Site statique (HTML / CSS / JS, zéro dépendance, zéro tracker) publié depuis ce dépôt.

## Contenu

- `index.html` — la page (une seule page, sections ancrées)
- `assets/styles.css` — la mise en forme, thème sombre par défaut + thème clair
- `assets/main.js` — bascule de thème (mémorisée), sommaire actif, apparitions douces

## Mise en ligne (GitHub Pages)

1. Settings → Pages
2. *Source* : `Deploy from a branch`
3. *Branch* : `site-perso` (ou `main` après fusion), dossier `/ (root)`
4. Enregistrer — la page sort sur `https://faresamiar.github.io/FaresAmiar/`

Pour une URL à la racine (`https://faresamiar.github.io/`), créer un dépôt nommé
`FaresAmiar.github.io` et y copier ces fichiers.

## Modifier le contenu

Tout est en HTML lisible dans `index.html` :

- le texte de présentation : bloc `.hero__intro`
- les projets : liste `.rows` (un `<li class="row">` par projet)
- la stack : bloc `.stack` (4 colonnes)
- les archives : liste `.archive`

Aucun build, aucun outil à installer : on édite, on pousse, la page se met à jour.
