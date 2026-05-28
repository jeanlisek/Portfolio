# By Joliment — joliment.fr

Portfolio Data & IA de **Jean-Li Sek**. Site statique multi-pages propulsé par React (sans bundler), entièrement bilingue FR/EN, avec chatbot IA, formulaires connectés à Supabase, analytics RGPD-friendly et SEO complet.

---

## 1. Stack technique

| Élément | Choix | Pourquoi |
|--------|-------|----------|
| Rendu | **React 18.3.1** (UMD, build *production*) chargé via CDN unpkg avec SRI | Pas de framework lourd, pas de serveur |
| Compilation | **build.js** précompile le JSX → JS (Babel) | Le navigateur ne télécharge plus Babel ni ne transpile à chaque visite |
| Données | `data.js` → `window.JL` | Une seule source pour tout le contenu |
| i18n | `i18n.js` → `window.t`, `window.resolveI18n` | Bilingue FR/EN au chargement |
| Styles | `site.css` (variables CSS, pas de framework CSS) | Léger, cohérent |
| Backend | **Supabase** (edge functions + tables) | Chatbot + formulaires |
| Analytics | **Google Analytics 4** + Consent Mode | Mesure d'audience anonyme |

> ⚠️ **Pas de build obligatoire pour déployer** : les `.js` compilés sont déjà dans le repo. On ne relance `build.js` que si on modifie un `.jsx`.

---

## 2. Structure des fichiers

```
/                              ← racine = le site déployable
├── index.html                 page d'accueil
├── projets.html               liste des 12 projets
├── projet-*.html (×12)        pages projet (mirakl, synapse, payfit, dust,
│                              zigzag, dashboard, sql, discogs, make, kitchy,
│                              dataiku, tableau)
├── blog.html  collab.html  a-propos.html  contact.html
├── 404.html                   page d'erreur (bilingue, inline)
├── favicon.svg
├── robots.txt  sitemap.xml    SEO
├── og-card.html               gabarit de la carte de partage
├── build.js                   compile src/*.jsx → js/*.js
├── README.md
│
├── css/
│   └── site.css
├── js/                        tout le JavaScript servi au navigateur
│   ├── i18n.js                moteur bilingue (FR/EN)
│   ├── data.js                tout le contenu (window.JL), bilingue {fr,en}
│   ├── shell.js               topbar, sidebar, footer, cartes, submitForm()  (compilé)
│   ├── page-*.js              logique de chaque page                          (compilé)
│   ├── image-slot.js          custom element <image-slot> (photos hero)
│   ├── chatbot.js             widget chatbot IA (partagé toutes pages)
│   └── analytics.js           Google Analytics + bannière cookies
├── src/                       SOURCES JSX (à éditer)
│   ├── shell.jsx
│   └── page-*.jsx
├── media/                     toutes les images
│   ├── about-photo.JPG  og-image.jpg  *.png  *.jpeg
│   └── photos/  mirakl-photos/  payfit-photos/
├── decks/                     decks embarqués (iframes)
│   ├── mirakl-presentation.html
│   └── dataiku-presentation.html
└── supabase/functions/        edge functions (chat, tts)
```

**Règle d'or :** on édite les **`src/*.jsx`** (sources), puis `node build.js` régénère les **`js/*.js`** correspondants. Ne jamais éditer un `js/shell.js` ou `js/page-*.js` à la main (écrasé au prochain build). En revanche `js/i18n.js`, `js/data.js`, `js/chatbot.js`, `js/analytics.js`, `js/image-slot.js` sont du **JS pur** → s'éditent directement.

---

## 3. Lancer en local

```bash
python3 -m http.server 8080
# → http://localhost:8080/index.html
```
Tout est statique : n'importe quel serveur de fichiers fonctionne.

## 4. Modifier le code & recompiler

1. Éditer un fichier **`src/*.jsx`** (ex. `src/page-home.jsx`) ou `js/data.js` / `js/i18n.js`.
2. Si tu as touché un `.jsx`, recompiler :
   ```bash
   npm install @babel/standalone   # une seule fois
   node build.js                   # régénère js/shell.js, js/page-*.js
   ```
3. `js/data.js`, `js/i18n.js`, `js/chatbot.js`, `js/analytics.js`, `js/image-slot.js` sont du JS pur → **pas de compilation**.
4. Incrémenter `?v=N` sur les `<script>` des HTML si besoin de casser le cache navigateur (actuellement `?v=5`).

## 5. Déployer

Le **dossier racine entier** est le site (Netlify, Vercel, GitHub Pages, OVH, n'importe quel hébergeur statique). Configurer `404.html` comme page d'erreur si l'hébergeur le permet. Domaine de prod : **https://joliment.fr**.

---

## 6. Fonctionnalités — détail complet

### 6.1 Bilingue FR / EN
- **`i18n.js`** détecte la langue : `localStorage["jl-lang"]` → langue du navigateur → `fr` par défaut.
- `window.resolveI18n(node)` résout récursivement toutes les feuilles `{fr, en}` de `data.js` vers la langue active.
- `window.t("clé")` renvoie une chaîne d'interface depuis un dictionnaire (~200 clés).
- **Bouton FR/EN** dans la topbar (à gauche de « Me contacter ») → `window.setLang()` enregistre le choix et recharge.
- Le `<html lang>` est mis à jour dynamiquement.
- Couvre **tout** : pages, contenu, chatbot, bannière cookies, page 404.

### 6.2 Chatbot IA (`js/chatbot.js`)
Widget flottant présent sur **toutes** les pages. Modèle : **Mistral** (`mistral-small-latest`) via l'edge function — la clé API Mistral reste **côté serveur**.
- **Connaissance ancrée sur `data.js`** : le prompt système est recomposé à chaque message (`getSystem()`). Le profil/expériences/garde-fous sont écrits à la main (`SYSTEM_BASE`), mais **la liste des projets, les compétences et les langues sont générées en direct depuis `window.JL`** (`buildKnowledge()`). → le bot reste **toujours synchro** avec le contenu réel du site, jamais de copie figée. (Pas de RAG/embeddings : inutile à cette échelle, tout tient dans le contexte.)
- **Conversation** : appelle l'edge function Supabase `functions/v1/chat` (garde-fous anti-injection, messages tronqués/limités, CORS verrouillé sur joliment.fr).
- **Synthèse vocale (TTS)** : voix via **Cartesia** (`functions/v1/tts`) — bouton mute.
- **Reconnaissance vocale (STT)** : micro via l'API Web Speech (`SpeechRecognition`) — masqué si non supporté ; langue auto (`fr-FR` / `en-US`).
- **Prise de rendez-vous** : bouton → **Google Calendar** (`calendar.app.google/...`), exposé globalement via `window.openCalendly()`.
- **Bilingue** : libellés, message d'accueil, erreurs, et le bot répond par défaut dans la langue du site.
- Retry automatique sur erreur 5xx (cold start), nettoyage du markdown dans les réponses.

### 6.3 Google Analytics + cookies (`analytics.js`)
- **GA4**, ID `G-T3NNT40K1W`, IP anonymisée.
- **Consent Mode** : analytics refusé par défaut, activé seulement après acceptation.
- **Bannière cookies** bilingue (Accepter / Refuser), choix mémorisé dans `localStorage`.
- Lien **« Gérer les cookies »** (réinjecté) pour rouvrir la bannière et changer d'avis.

### 6.4 Formulaires → Supabase
Helper partagé `window.submitForm(table, row)` dans `shell.js` (insert REST avec la clé anon publique).
- **Contact** (`contact.html`) → table `contacts` (prenom, email, sujet, message).
- **Collab** (`collab.html`) → table `collab_submissions` (l'email est extrait automatiquement du champ « prénom + email »).
- **Newsletter** (`blog.html`) → table `contacts` avec `sujet = "Newsletter"`.
- États gérés : *Envoi en cours…* → *Envoyé ✓* / *Erreur — réessaye*.

### 6.5 SEO & partage social
- **Meta description** unique et courte sur chaque page.
- **Open Graph + Twitter Card** sur chaque page → aperçu riche au partage (LinkedIn, WhatsApp, iMessage, Slack…).
- **`og-image.jpg`** : carte 1200×630 brandée, générée depuis `og-card.html` (rendu navigateur → capture).
- **`<link rel="canonical">`** sur chaque page.
- **`robots.txt`** (autorise tout + pointe le sitemap) et **`sitemap.xml`** (18 pages publiques).

### 6.6 Barre de recherche (topbar)
Recherche en direct dans les **projets** (titre, description, tags, stack) et les **articles** du blog ; résultats cliquables avec badge Projet/Article ; bilingue.

### 6.7 Responsive
Adapté à tous les écrans : menu **hamburger** + tiroir latéral sur mobile, grilles qui se replient, typographies fluides (breakpoints 1024 / 900 / 480 px). Vérifié 0 débordement horizontal desktop + mobile.

### 6.8 Pages projet & médias embarqués
Chaque page projet (`projet-*.html`) affiche : contexte/objectif/résultat, **architecture en couches**, feature signature, résultats chiffrés, galerie « moments », et un carrousel média. Types d'embed gérés :
- **YouTube** (`youtube-nocookie`) — démos vidéo (Mirakl, Synapse, Dust).
- **iframes** — decks **Canva**, **Google Slides**, dashboards **Tableau Public**, sites **live** (zig-zag.fun, Vercel), et decks locaux (`mirakl-presentation.html`, `dataiku-presentation.html`).

### 6.9 Carrousel photo du hero (`image-slot.js`)
Custom element `<image-slot>` qui affiche les photos de voyage du hero (accueil), avec rotation auto toutes les 6 s et indicateur de points. La persistance « sidecar » (`.image-slots.state.json`) est **désactivée en production** (réservée à l'éditeur) pour éviter tout 404 inutile.

### 6.10 Globe 3D (page Collab)
Graphe de connaissances 3D interactif (cliquer-glisser) propulsé par **Three.js** (CDN), illustrant les projets et collaborations comme un réseau de nœuds.

### 6.11 Widgets & sections diverses
- **« Cette semaine »** : fil d'updates dans la sidebar — **données de démo**, marqué d'un badge `DÉMO`.
- **Témoignages / recommandations** : grille de cartes (page d'accueil + à propos).
- **Carnet de voyage** : galerie de photos (accueil + à propos).
- **Stack & compétences**, **langues parlées**, **associations soutenues**.
- **Page 404** sur-mesure, bilingue (détection de langue inline).
- **Favicon** SVG.
- **Cache-busting** via `?v=5` sur les scripts.

---

## 7. Backend Supabase

- **Projet** : `wpfsrkzhakyumepusmke` (`https://wpfsrkzhakyumepusmke.supabase.co`). Clé **anon** publique utilisée côté client (chatbot + formulaires) — c'est une clé publique, pas un secret.
- **Edge functions** (`supabase/functions/`) :
  - `chat` — relais vers le LLM du chatbot.
  - `tts` — synthèse vocale Cartesia.
- **Tables** : `contacts`, `collab_submissions` (RLS autorisant l'insert anonyme — déjà en place et testée en prod).

## 8. Liens & contact
- Email : `jean-li.sek@joliment.fr`
- LinkedIn : `linkedin.com/in/jeanlisek` · GitHub : `github.com/jeanlisek` · Instagram : `instagram.com/byjoliment`

## 9. Points de maintenance / à savoir
- Les **decks de présentation** (`mirakl-presentation.html`, `dataiku-presentation.html`) sont des mini-apps autonomes (React + Babel inline) embarquées en iframe — indépendantes du build principal.
- Les **embeds tiers** (Canva, Google Slides, Tableau, Vercel) dépendent de liens publics : si un partage est révoqué, l'embed casse.
- Pour une vraie carte sociale custom, remplacer `og-image.jpg` (garder 1200×630).
- Les inscriptions newsletter arrivent dans la table `contacts` (filtrer `sujet = "Newsletter"`).
