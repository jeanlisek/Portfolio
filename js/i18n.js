/* ── i18n engine — FR/EN bilingual support ───────────────────────────────────
   Loaded BEFORE data.js. Exposes:
     window.JL_LANG      → "fr" | "en" (detected once)
     window.resolveI18n  → deep-resolve {fr,en} leaves to active lang
     window.t            → UI string lookup by key
     window.setLang      → persist + reload
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  function detectLang() {
    try {
      const saved = localStorage.getItem("jl-lang");
      if (saved === "fr" || saved === "en") return saved;
    } catch (_) {}
    const nav = (navigator.language || navigator.userLanguage || "fr").toLowerCase();
    return nav.startsWith("en") ? "en" : "fr";
  }

  window.JL_LANG = detectLang();
  if (document.documentElement) document.documentElement.lang = window.JL_LANG;

  // Recursively resolve any { fr, en } leaf to the active language.
  // A node is a "bilingual leaf" iff its only keys are fr and/or en.
  window.resolveI18n = function resolveI18n(node, lang) {
    lang = lang || window.JL_LANG;
    if (node == null) return node;
    if (Array.isArray(node)) return node.map(function (n) { return resolveI18n(n, lang); });
    if (typeof node === "object") {
      var keys = Object.keys(node);
      var isLeaf = keys.length > 0 && keys.every(function (k) { return k === "fr" || k === "en"; });
      if (isLeaf) {
        return node[lang] != null ? node[lang] : (node.fr != null ? node.fr : node.en);
      }
      var out = {};
      for (var i = 0; i < keys.length; i++) out[keys[i]] = resolveI18n(node[keys[i]], lang);
      return out;
    }
    return node;
  };

  // ── UI strings (chrome / labels not in data.js) ──────────────────────────
  var UI = {
    // nav
    "nav.accueil":   { fr: "Accueil", en: "Home" },
    "nav.projets":   { fr: "Projets", en: "Projects" },
    "nav.blog":      { fr: "Blog", en: "Blog" },
    "nav.collab":    { fr: "Collab", en: "Collab" },
    "nav.apropos":   { fr: "À propos", en: "About" },

    // topbar
    "search.placeholder": { fr: "Chercher un projet, un article…", en: "Search a project, an article…" },
    "search.none":   { fr: "Aucun résultat pour", en: "No results for" },
    "cta.contact":   { fr: "Me contacter →", en: "Get in touch →" },
    "kind.projet":   { fr: "Projet", en: "Project" },
    "kind.article":  { fr: "Article", en: "Article" },

    // sidebar widget
    "week.title":    { fr: "Cette semaine", en: "This week" },
    "week.all":      { fr: "Tout l'historique →", en: "Full history →" },
    "week.demo":     { fr: "DÉMO", en: "DEMO" },

    // footer
    "footer.mantra": { fr: "build · learn · collab", en: "build · learn · collab" },
    "footer.intention": { fr: "intention.", en: "intention." },
    "footer.made":   { fr: "Fait avec", en: "Made with" },
    "footer.copyright": { fr: "© 2026 By Joliment", en: "© 2026 By Joliment" },
    "footer.cookies": { fr: "Gérer les cookies", en: "Manage cookies" },

    // form states
    "form.sending":  { fr: "Envoi en cours…", en: "Sending…" },
    "form.error":    { fr: "Erreur — réessaye", en: "Error — try again" },

    // filter chips
    "filter.all":      { fr: "tout", en: "all" },
    "filter.hackathon":{ fr: "hackathon", en: "hackathon" },
    "filter.agentsIa": { fr: "agents ia", en: "ai agents" },
    "filter.rag":      { fr: "rag", en: "rag" },
    "filter.data":     { fr: "data", en: "data" },
    "filter.web":      { fr: "web", en: "web" },
    "filter.infra":    { fr: "infrastructure", en: "infrastructure" },
    "filter.automation": { fr: "automatisation", en: "automation" },
    "filter.iaAgents": { fr: "ia & agents", en: "ai & agents" },
    "filter.finance":  { fr: "finance", en: "finance" },
    "filter.python":   { fr: "python", en: "python" },

    // generic section actions
    "act.seeAll":    { fr: "Tout voir", en: "See all" },
    "act.readAll":   { fr: "Lire tout", en: "Read all" },
    "act.read":      { fr: "Lire →", en: "Read →" },
    "act.readDetail":{ fr: "Lire le détail →", en: "Read more →" },

    // HOME
    "home.tagline":  { fr: "Un endroit pour partager ce qui se construit ici, ce qu'on apprend,<br/>et pour rencontrer des gens qui ont envie de faire des trucs ensemble.", en: "A place to share what's being built here, what we learn,<br/>and to meet people who want to make things together." },
    "home.travelTitle": { fr: "Photos en reflet.", en: "Photos in reflection." },
    "home.travelSub": { fr: "Une partie de ce qui se construit ici se pense ailleurs. Une collection de moments — verre, miroir, lumière qui rebondit.", en: "Part of what's built here is dreamt up elsewhere. A collection of moments — glass, mirror, bouncing light." },
    "home.travelAll": { fr: "Tout le carnet", en: "Full log" },
    "home.blogSub":  { fr: "Des articles pour ceux qui veulent comprendre et reproduire. Docker, n8n, IA, automatisation — ce qu'on apprend, on le documente.", en: "Articles for those who want to understand and reproduce. Docker, n8n, AI, automation — what we learn, we document." },
    "home.recent":   { fr: "projets récents", en: "recent projects" },
    "home.building": { fr: "se construit", en: "being built" },
    "home.whoSpeaks":{ fr: "qui parle", en: "who's speaking" },
    "home.blogEyebrow": { fr: "blog & découvertes", en: "blog & discoveries" },
    "home.discover": { fr: "Découvrir,", en: "Discover," },
    "home.transmit": { fr: "transmettre", en: "share" },
    "home.skills":   { fr: "compétences", en: "skills" },
    "home.recos":    { fr: "recommandations", en: "recommendations" },
    "home.whatThey": { fr: "Ce qu'ils", en: "What they" },
    "home.saying":   { fr: "en disent", en: "say" },
    "home.readArticles": { fr: "Lire les articles", en: "Read the articles" },
    "home.seeProjects":  { fr: "Voir les projets →", en: "See the projects →" },
    "home.readBlog":     { fr: "Lire le blog", en: "Read the blog" },
    "home.exploreCollab":{ fr: "ou explorer l'espace collab", en: "or explore the collab space" },
    "home.readAbout":    { fr: "Lire l'à propos →", en: "Read the about →" },
    "home.scroll":   { fr: "Dérouler", en: "Scroll" },
    "home.photos":   { fr: "Photos · J.L.", en: "Photos · J.L." },
    "home.moreReviews": { fr: "autres avis", en: "more reviews" },
    "home.oneMoreReview": { fr: "autre avis", en: "more review" },
    "home.collabNew":{ fr: "nouveau", en: "new" },
    "home.collabSpace": { fr: "espace collab", en: "collab space" },
    "home.gotProject":  { fr: "Tu as un projet ?", en: "Got a project?" },
    "home.buildTogether": { fr: "Construisons ensemble.", en: "Let's build it together." },
    "home.collabDesc": { fr: "Un espace pour connecter des builders, des idées, et des gens qui veulent créer quelque chose de concret.", en: "A space to connect builders, ideas, and people who want to create something real." },
    "home.discoverCollab": { fr: "Découvrir l'espace collab", en: "Discover the collab space" },

    // PROJETS list
    "projets.portfolio": { fr: "portfolio", en: "portfolio" },
    "projets.count":     { fr: "projets", en: "projects" },
    "projets.title1":    { fr: "Ce qui", en: "What's" },
    "projets.title2":    { fr: "se construit.", en: "being built." },
    "projets.intro":     { fr: "projets data & IA, du hackathon au side-project longue durée.", en: "data & AI projects, from hackathon to long-running side-project." },
    "projets.intro2":    { fr: "Chacun documenté. Clique sur l'un d'eux pour voir le détail technique.", en: "Each one documented. Click any of them for the technical breakdown." },
    "projets.featured":  { fr: "à la une", en: "featured" },
    "projets.finalists": { fr: "Finalistes.", en: "Finalists." },
    "projets.others1":   { fr: "Side projects", en: "Side projects" },
    "projets.others2":   { fr: "& explorations.", en: "& explorations." },
    "projets.otherTag":  { fr: "les autres", en: "the others" },
    "projets.note":      { fr: "note", en: "note" },
    "projets.noteText":  { fr: "Trois de ces projets cherchent encore des bras pour aller plus loin.", en: "Three of these projects are still looking for hands to go further." },
    "projets.seeCollab": { fr: "Voir l'espace collab →", en: "See the collab space →" },

    // PROJET detail
    "projet.breadcrumb": { fr: "Projets", en: "Projects" },
    "projet.allProjects":{ fr: "← Tous les projets", en: "← All projects" },
    "projet.ctxEyebrow": { fr: "01 · contexte", en: "01 · context" },
    "projet.challenge":  { fr: "Le défi.", en: "The challenge." },
    "projet.brief":      { fr: "Le brief", en: "The brief" },
    "projet.archEyebrow":{ fr: "02 · architecture", en: "02 · architecture" },
    "projet.signature":  { fr: "Feature signature", en: "Signature feature" },
    "projet.resEyebrow": { fr: "03 · résultat", en: "03 · result" },
    "projet.delivered1": { fr: "Ce qu'on", en: "What we" },
    "projet.delivered2": { fr: "a livré.", en: "shipped." },
    "projet.mediaEyebrow": { fr: "média", en: "media" },
    "projet.demo1":      { fr: "La démo", en: "The demo" },
    "projet.demo2":      { fr: "et le deck.", en: "& the deck." },
    "projet.momentsEyebrow": { fr: "04 · moments", en: "04 · moments" },
    "projet.moments":    { fr: "Moments.", en: "Moments." },
    "projet.continue":   { fr: "continuer à explorer", en: "keep exploring" },
    "projet.otherProjects": { fr: "Autres projets.", en: "Other projects." },
    "projet.seeDeck":    { fr: "Voir le deck ↓", en: "View the deck ↓" },
    "projet.seeDemo":    { fr: "▶ Voir la démo", en: "▶ Watch the demo" },
    "projet.live":       { fr: "▶ Live", en: "▶ Live" },
    "projet.github":     { fr: "GitHub ↗", en: "GitHub ↗" },
    "projet.lblRole":    { fr: "Rôle", en: "Role" },
    "projet.lblDuration":{ fr: "Durée", en: "Duration" },
    "projet.lblPhase":   { fr: "Phase", en: "Phase" },
    "projet.lblYear":    { fr: "Année", en: "Year" },
    "projet.lblStatus":  { fr: "Statut", en: "Status" },
    "projet.statusDone": { fr: "Livré", en: "Shipped" },

    // BLOG
    "blog.eyebrow":   { fr: "blog & découvertes", en: "blog & discoveries" },
    "blog.title1":    { fr: "Découvrir,", en: "Discover," },
    "blog.title2":    { fr: "transmettre.", en: "share." },
    "blog.intro":     { fr: "Des articles pour ceux qui veulent comprendre et reproduire. Docker, n8n, IA, scraping — ce qu'on apprend, on le documente.", en: "Articles for those who want to understand and reproduce. Docker, n8n, AI, scraping — what we learn, we document." },
    "blog.principles":{ fr: "trois principes", en: "three principles" },
    "blog.howWrite1": { fr: "Comment on", en: "How we" },
    "blog.howWrite2": { fr: "écrit.", en: "write." },
    "blog.featured":  { fr: "à la une", en: "featured" },
    "blog.next":      { fr: "Le prochain.", en: "Up next." },
    "blog.allTag":    { fr: "les", en: "the" },
    "blog.allOthers": { fr: "autres", en: "others" },
    "blog.allArticles": { fr: "Tous les articles.", en: "All articles." },
    "blog.soon":      { fr: "Bientôt", en: "Soon" },
    "blog.comingSoon":{ fr: "À venir", en: "Coming soon" },
    "blog.newsletter":{ fr: "newsletter", en: "newsletter" },
    "blog.notified1": { fr: "Prévenu·e", en: "Notified" },
    "blog.notified2": { fr: "à chaque sortie.", en: "on every release." },
    "blog.newsletterDesc": { fr: "Un email tous les 15 jours, quand un article ou un projet sort.", en: "One email every two weeks, when an article or project ships." },
    "blog.subscribe": { fr: "S'inscrire →", en: "Subscribe →" },
    "blog.subscribed": { fr: "Inscrit·e ✓", en: "Subscribed ✓" },
    "blog.emailPlaceholder": { fr: "ton@email.com", en: "you@email.com" },
    "blog.readTime":  { fr: "min de lecture", en: "min read" },
    "blog.pillar":    { fr: "Pilier", en: "Pillar" },
    "blog.readArticle": { fr: "Lire l'article →", en: "Read the article →" },
    "blog.tag":       { fr: "blog", en: "blog" },
    "blog.inPrep":    { fr: "articles en préparation", en: "articles in the works" },
    "blog.sentAlert": { fr: "Merci ! À très vite.", en: "Thanks! See you soon." },

    // COLLAB
    "collab.eyebrow": { fr: "espace collaboratif", en: "collaborative space" },
    "collab.positions": { fr: "positions ouvertes", en: "open positions" },
    "collab.build1":  { fr: "Construire", en: "Build" },
    "collab.build2":  { fr: "ensemble.", en: "together." },
    "collab.heroDesc1": { fr: "Une idée ? Un projet ? L'envie de construire avec d'autres ?", en: "An idea? A project? The urge to build with others?" },
    "collab.heroDesc2": { fr: "Ici on liste des projets ouverts à contribution — et un formulaire pour proposer le tien.", en: "Here we list projects open to contribution — and a form to pitch yours." },
    "collab.network": { fr: "réseau actif", en: "active network" },
    "collab.nodesLine": { fr: "11 nœuds.", en: "11 nodes." },
    "collab.collabsItalic": { fr: "13 collaborations", en: "13 collaborations" },
    "collab.collabsRest": { fr: "en cours.", en: "ongoing." },
    "collab.badgeOpen": { fr: "Ouvert", en: "Open" },
    "collab.badgeSoon": { fr: "Bientôt", en: "Soon" },
    "collab.networkDesc": { fr: "Chaque projet est un nœud, chaque collaboration une arête. Le réseau grandit à chaque personne qui rejoint un projet ou en propose un nouveau. Cliquer-glisser pour explorer.", en: "Each project is a node, each collaboration an edge. The network grows with every person who joins a project or proposes a new one. Click-drag to explore." },
    "collab.seePositions": { fr: "Voir les positions ouvertes →", en: "See open positions →" },
    "collab.proposeProject": { fr: "Proposer un projet", en: "Pitch a project" },
    "collab.openTag": { fr: "positions ouvertes", en: "open positions" },
    "collab.lookingForBras": { fr: "qui cherchent des bras", en: "looking for hands" },
    "collab.whatBuilds": { fr: "Ce qui se construit", en: "What's being built" },
    "collab.seeking": { fr: "On cherche :", en: "Looking for:" },
    "collab.join":    { fr: "Rejoindre →", en: "Join →" },
    "collab.contactBtn": { fr: "Me contacter →", en: "Get in touch →" },
    "collab.how":     { fr: "comment ça marche", en: "how it works" },
    "collab.threeSteps": { fr: "Trois étapes.", en: "Three steps." },
    "collab.step1t":  { fr: "Tu envoies", en: "You send" },
    "collab.step1d":  { fr: "Décris ton projet en quelques lignes. Pas besoin d'un pitch deck.", en: "Describe your project in a few lines. No pitch deck needed." },
    "collab.step2t":  { fr: "On échange", en: "We talk" },
    "collab.step2d":  { fr: "On se parle 30 min. On clarifie l'idée, les bras qui manquent, le scope.", en: "We chat for 30 min. We clarify the idea, the missing hands, the scope." },
    "collab.step3t":  { fr: "On démarre", en: "We start" },
    "collab.step3d":  { fr: "Si ça matche, on lance. Sinon on garde le contact pour la prochaine.", en: "If it's a match, we launch. If not, we stay in touch for next time." },
    "collab.proposeYours": { fr: "propose ton projet", en: "pitch yours" },
    "collab.gotIdea": { fr: "Tu as une idée ?", en: "Got an idea?" },
    "collab.letsTalk":{ fr: "On en parle.", en: "Let's talk." },
    "collab.formDesc":{ fr: "Décris ton idée en quelques lignes. On te répond dans les 48 heures. Pas de promesse — juste un vrai retour.", en: "Describe your idea in a few lines. We reply within 48 hours. No promises — just honest feedback." },
    "collab.orEmail": { fr: "ou par email :", en: "or by email:" },
    "collab.fName":   { fr: "Toi (prénom + email)", en: "You (first name + email)" },
    "collab.fProject":{ fr: "Ton projet en une phrase", en: "Your project in one sentence" },
    "collab.fContext":{ fr: "Le contexte (3-4 lignes)", en: "The context (3-4 lines)" },
    "collab.fSeeking":{ fr: "Tu cherches quoi ?", en: "What are you looking for?" },
    "collab.send":    { fr: "Envoyer →", en: "Send →" },
    "collab.sentLabel": { fr: "Proposition envoyée ✓", en: "Proposal sent ✓" },
    "collab.phName":  { fr: "Claire · claire@email.com", en: "Claire · claire@email.com" },
    "collab.phProject": { fr: "Outil pour…", en: "A tool for…" },
    "collab.phContext": { fr: "C'est quoi le problème, pourquoi maintenant, ce que tu cherches…", en: "What's the problem, why now, what you're looking for…" },
    "collab.phSeeking": { fr: "Designer, dev, data, just-someone-to-talk-to…", en: "Designer, dev, data, just-someone-to-talk-to…" },
    "collab.sentAlert": { fr: "Merci ! On revient vers toi dans 48h.", en: "Thanks! We'll get back to you within 48h." },
    "collab.statusOpen": { fr: "ouvert", en: "open" },
    "collab.statusSoon": { fr: "bientôt", en: "soon" },

    // ABOUT
    "about.eyebrow":  { fr: "à propos", en: "about" },
    "about.whySite":  { fr: "pourquoi ce site", en: "why this site" },
    "about.howGetHere1": { fr: "Comment on", en: "How you" },
    "about.howGetHere2": { fr: "en arrive là.", en: "get here." },
    "about.journey":  { fr: "parcours", en: "journey" },
    "about.formation":{ fr: "Formation", en: "Education" },
    "about.experiences1": { fr: "Formation", en: "Education" },
    "about.experiences2": { fr: "& expériences.", en: "& experience." },
    "about.formationLbl": { fr: "Formation", en: "Education" },
    "about.experiencesLbl": { fr: "Expériences", en: "Experience" },
    "about.inParallel": { fr: "en parallèle", en: "in parallel" },
    "about.whatInterests1": { fr: "Ce qui", en: "What" },
    "about.whatInterests2": { fr: "m'intéresse.", en: "I'm into." },
    "about.interestsLbl": { fr: "Ce qui m'intéresse", en: "What I'm into" },
    "about.currentlyLbl": { fr: "Actuellement", en: "Currently" },
    "about.skills":   { fr: "compétences", en: "skills" },
    "about.whatMaster1": { fr: "Ce que", en: "What" },
    "about.whatMaster2": { fr: "je maîtrise.", en: "I do." },
    "about.languages":{ fr: "langues", en: "languages" },
    "about.spoken":   { fr: "Parlées.", en: "Spoken." },
    "about.recos":    { fr: "recommandations", en: "recommendations" },
    "about.whatThey1":{ fr: "Ce qu'ils", en: "What they" },
    "about.whatThey2":{ fr: "en disent.", en: "say." },
    "about.support":  { fr: "on soutient", en: "we support" },
    "about.twoAssocs":{ fr: "Deux associations.", en: "Two charities." },
    "about.travelEyebrow": { fr: "carnet de voyage", en: "travel log" },
    "about.travelTitle": { fr: "Photos en", en: "Photos in" },
    "about.travelItalic": { fr: "reflet.", en: "reflection." },
    "about.travelSub":{ fr: "Une partie de ce qui se construit ici se pense ailleurs.", en: "Part of what's built here is dreamt up elsewhere." },
    "about.contactMe":{ fr: "Me contacter →", en: "Get in touch →" },
    "about.collabSpace": { fr: "Espace collab", en: "Collab space" },
    "about.contactEyebrow": { fr: "contact", en: "contact" },
    "about.letsTalk1":{ fr: "On", en: "Let's" },
    "about.letsTalk2":{ fr: "se parle ?", en: "talk?" },

    // CONTACT
    "contact.eyebrow":{ fr: "contact", en: "contact" },
    "contact.title1": { fr: "On se", en: "Let's" },
    "contact.title2": { fr: "parle ?", en: "talk?" },
    "contact.heroDesc": { fr: "Une idée, une proposition, une question, ou juste l'envie d'échanger.<br/>Je réponds à tout.", en: "An idea, a proposal, a question, or just the urge to chat.<br/>I answer everything." },
    "contact.reasons1": { fr: "Quelques raisons", en: "A few reasons" },
    "contact.reasons2": { fr: "de m'écrire", en: "to write me" },
    "contact.reasonsDesc": { fr: "Tu veux collaborer sur un projet, parler IA ou data, proposer une mission, ou simplement discuter de ce que tu construis ? Je suis là.", en: "Want to collaborate on a project, talk AI or data, pitch a mission, or just discuss what you're building? I'm here." },
    "contact.available": { fr: "Disponible", en: "Available" },
    "contact.availableDesc": { fr: "Ouvert à des missions freelance, des collaborations sur des projets IA/data, et des échanges avec des builders curieux.", en: "Open to freelance missions, collaborations on AI/data projects, and chats with curious builders." },
    "contact.book":   { fr: "Prendre rendez-vous (30 min)", en: "Book a call (30 min)" },
    "contact.sendMsg":{ fr: "Envoie un message", en: "Send a message" },
    "contact.replyTime": { fr: "Je réponds en général sous 24-48h.", en: "I usually reply within 24-48h." },
    "contact.fName":  { fr: "Ton prénom", en: "First name" },
    "contact.fEmail": { fr: "Ton email", en: "Your email" },
    "contact.fSubject": { fr: "Sujet", en: "Subject" },
    "contact.fMessage": { fr: "Message", en: "Message" },
    "contact.choose": { fr: "Choisir…", en: "Choose…" },
    "contact.send":   { fr: "Envoyer →", en: "Send →" },
    "contact.phName": { fr: "Alex", en: "Alex" },
    "contact.phEmail":{ fr: "alex@email.com", en: "alex@email.com" },
    "contact.phMessage": { fr: "Dis-moi tout…", en: "Tell me everything…" },
    "contact.sentLabel": { fr: "Message envoyé ✓", en: "Message sent ✓" },
    "contact.subjects": {
      fr: ["Collaboration / Projet", "Mission freelance", "Question sur un article", "Espace collab", "Autre"],
      en: ["Collaboration / Project", "Freelance mission", "Question about an article", "Collab space", "Other"],
    },
  };

  window.t = function (key) {
    var e = UI[key];
    if (!e) return key;
    var v = e[window.JL_LANG];
    return v != null ? v : e.fr;
  };

  window.setLang = function (lang) {
    if (lang !== "fr" && lang !== "en") return;
    try { localStorage.setItem("jl-lang", lang); } catch (_) {}
    window.location.reload();
  };
})();
