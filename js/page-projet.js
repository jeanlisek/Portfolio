/* AUTO-GENERATED from src/page-projet.jsx by build.js — edit the .jsx, then re-run `node build.js` */
(function () {
/* global React, ReactDOM */
const D = window.JL;
const {
  Shell,
  SectionHead,
  ProjectCard,
  ProjectSigil,
  LaurelIcon
} = window;

// Read slug from a global var set by the HTML file (e.g. <script>window.JL_PROJECT_SLUG="mirakl";</script>)
const slug = window.JL_PROJECT_SLUG || "mirakl";
const p = D.projets.find(x => x.slug === slug) || D.projets[0];
const otherProjects = D.projets.filter(x => x.slug !== slug).slice(0, 3);

// Project-specific deep content (the verifier asked for 6 real pages). Mirakl has the full
// breakdown; the others get a "Challenge / Approche / Résultat" generic structure that still
// reads as a real case study.
const DEEP = window.resolveI18n({
  mirakl: {
    blocks: [{
      label: {
        fr: "Contexte",
        en: "Context"
      },
      html: {
        fr: "Hackathon Mirakl : <strong>piloter une marketplace cross-canaux</strong> sans rupture, sans surstock, et conforme à la <strong>CSRD 2026</strong>. Cas d'usage : Nordika Studio, marque de mobilier fictive, 200 SKUs vendus simultanément sur Amazon FR/IT/DE et Google Shopping FR/IT/DE avec un stock partagé.",
        en: "Mirakl Hackathon: <strong>steering a cross-channel marketplace</strong> with no stockouts, no overstock, and <strong>CSRD 2026 compliant</strong>. Use case: Nordika Studio, a fictional furniture brand, 200 SKUs sold simultaneously across Amazon FR/IT/DE and Google Shopping FR/IT/DE with shared stock."
      }
    }, {
      label: {
        fr: "Objectif",
        en: "Goal"
      },
      html: {
        fr: "Concevoir <strong>Mirakl Connect · Supply Brain</strong>, une plateforme d'orchestration où la <strong>CSR devient une contrainte d'exécution</strong> (runtime constraint) et où l'allocation stock obéit à un <strong>barycentre supply</strong>. L'équilibre optimal entre canaux, entrepôts et marges. Six agents IA simulent en continu coût, délai et CO₂ ; l'humain garde l'arbitrage final.",
        en: "Design <strong>Mirakl Connect · Supply Brain</strong>, an orchestration platform where <strong>CSR becomes a runtime constraint</strong> and stock allocation follows a <strong>supply barycenter</strong>. The optimal balance between channels, warehouses and margins. Six AI agents continuously simulate cost, lead time and CO₂; the human keeps the final call."
      }
    }, {
      label: {
        fr: "Résultat",
        en: "Result"
      },
      html: {
        fr: "<strong>Stack full opérationnelle en 72h</strong>. Six agents Dust orchestrés, n8n exposant cinq outils MCP, Supabase avec 21 tables et 12 vues SQL temps réel, <strong>dashboard React 19 dynamique et personnalisable</strong> par profil (finance, ops, marketing, éco). Pitch livré devant les équipes Mirakl, architecture validée bout-en-bout sur des données simulées réalistes.",
        en: "<strong>Fully operational stack in 72h</strong>. Six orchestrated Dust agents, n8n exposing five MCP tools, Supabase with 21 tables and 12 real-time SQL views, <strong>a dynamic, customizable React 19 dashboard</strong> per role (finance, ops, marketing, eco). Pitched to the Mirakl teams, architecture validated end-to-end on realistic simulated data."
      }
    }],
    archTitle: {
      fr: "Une stack",
      en: "A stack"
    },
    archItalic: {
      fr: "en 4 couches.",
      en: "in 4 layers."
    },
    signature: {
      fr: "Le dashboard est <strong>intent-driven</strong>. Il se reconfigure en temps réel selon ce que l'utilisateur veut voir. <strong>Pas une UI figée à 4 profils</strong> : finance, ops, marketing, éco sont des points de départ, mais n'importe quelle vue (financière sur la supply, marketing sur la CSR, ad hoc…) est générée à la volée. <em>« Not a chatbot. A UI that listens. »</em>",
      en: "The dashboard is <strong>intent-driven</strong>. It reconfigures in real time based on what the user wants to see. <strong>Not a fixed 4-profile UI</strong>: finance, ops, marketing, eco are starting points, but any view (financial on supply, marketing on CSR, ad hoc…) is generated on the fly. <em>« Not a chatbot. A UI that listens. »</em>"
    },
    signatureImage: {
      src: "media/mirakl-architecture.png",
      caption: {
        fr: "Aperçu — Nordika Pulse, le dashboard en action",
        en: "Preview — Nordika Pulse, the dashboard in action"
      }
    },
    quotes: {
      afterContext: {
        text: "Anticipate, don't react.",
        source: "Mirakl Pitch Deck"
      },
      afterResults: {
        text: "Fewer clicks. More decisions.",
        source: "Mirakl Pitch Deck"
      }
    },
    layers: [{
      tier: "UI",
      platform: "React 19 · intent-driven",
      items: ["finance", "ops", "marketing", {
        fr: "éco",
        en: "eco"
      }, {
        fr: "+ vue ad hoc",
        en: "+ ad hoc view"
      }],
      note: {
        fr: "Le dashboard se reconfigure en temps réel selon ce que l'utilisateur veut voir. N'importe quelle vue, pas seulement les 4 profils par défaut",
        en: "The dashboard reconfigures in real time based on what the user wants to see. Any view, not just the 4 default profiles"
      },
      highlight: true
    }, {
      tier: "Agents",
      platform: "Dust",
      items: [{
        fr: "6 agents orchestrés",
        en: "6 orchestrated agents"
      }],
      note: {
        fr: "Simulent en continu coût × délai × CO₂",
        en: "Continuously simulate cost × lead time × CO₂"
      }
    }, {
      tier: {
        fr: "Outils",
        en: "Tools"
      },
      platform: "n8n",
      items: [{
        fr: "5 outils MCP",
        en: "5 MCP tools"
      }],
      note: {
        fr: "Couche d'exécution exposée aux agents",
        en: "Execution layer exposed to the agents"
      }
    }, {
      tier: "Data",
      platform: "Supabase",
      items: [{
        fr: "21 tables",
        en: "21 tables"
      }, {
        fr: "12 vues SQL temps réel",
        en: "12 real-time SQL views"
      }],
      note: {
        fr: "Schéma full event-driven",
        en: "Fully event-driven schema"
      }
    }],
    results: [{
      n: "6",
      l: {
        fr: "agents Dust orchestrés",
        en: "orchestrated Dust agents"
      }
    }, {
      n: "72h",
      l: {
        fr: "stack full opérationnelle",
        en: "fully operational stack"
      }
    }, {
      n: "laurel",
      l: {
        fr: "Finaliste hackathon",
        en: "Hackathon finalist"
      }
    }]
  },
  synapse: {
    blocks: [{
      label: {
        fr: "Contexte",
        en: "Context"
      },
      html: {
        fr: "thèses.fr recense des milliers de thèses académiques françaises. Mais leur moteur de recherche classique est limité. <strong>La recherche par mots-clés ne capture pas le sens</strong> : deux thèses sur le même sujet peuvent utiliser des vocabulaires totalement différents.",
        en: "thèses.fr lists thousands of French academic theses. But its classic search engine is limited. <strong>Keyword search doesn't capture meaning</strong>: two theses on the same topic may use completely different vocabularies."
      }
    }, {
      label: {
        fr: "Objectif",
        en: "Goal"
      },
      html: {
        fr: "Construire un <strong>chatbot RAG (Retrieval-Augmented Generation)</strong> connecté à thèses.fr. Sectoriser le corpus via embeddings, permettre une recherche sémantique précise et générer des réponses contextualisées à partir des sources réelles.",
        en: "Build a <strong>RAG (Retrieval-Augmented Generation) chatbot</strong> connected to thèses.fr. Sectorize the corpus via embeddings, enable precise semantic search and generate contextualized answers from the real sources."
      }
    }, {
      label: {
        fr: "Résultat",
        en: "Result"
      },
      html: {
        fr: "Chatbot <strong>opérationnel avec retrieval sémantique</strong>. Les requêtes en langage naturel trouvent les thèses pertinentes même sans correspondance exacte de mots. Pipeline complet : ingestion → embeddings → retrieval → génération.",
        en: "Chatbot <strong>operational with semantic retrieval</strong>. Natural-language queries find the relevant theses even without exact word matches. Full pipeline: ingestion → embeddings → retrieval → generation."
      }
    }],
    archTitle: {
      fr: "Un pipeline",
      en: "A pipeline"
    },
    archItalic: {
      fr: "RAG en 5 étapes.",
      en: "RAG in 5 steps."
    },
    signature: {
      fr: "Le <strong>retrieval sémantique</strong> : interroger des milliers de thèses en langage naturel, et trouver les bonnes. <strong>même sans correspondance exacte de mots-clés</strong>. Deux thèses sur le même sujet peuvent utiliser des vocabulaires opposés ; les embeddings capturent le sens, pas les chaînes de caractères.",
      en: "<strong>Semantic retrieval</strong>: query thousands of theses in natural language, and find the right ones. <strong>even without exact keyword matches</strong>. Two theses on the same topic may use opposite vocabularies; embeddings capture meaning, not character strings."
    },
    layers: [{
      tier: "Ingestion",
      platform: "thèses.fr",
      items: ["Crawl", {
        fr: "Métadonnées",
        en: "Metadata"
      }],
      note: {
        fr: "Récupération du corpus académique français",
        en: "Pulling the French academic corpus"
      }
    }, {
      tier: "Embeddings",
      platform: "OpenAI",
      items: ["text-embedding-ada-002"],
      note: {
        fr: "Vectorisation sémantique de chaque chunk de thèse",
        en: "Semantic vectorization of each thesis chunk"
      }
    }, {
      tier: "Vector store",
      platform: "FAISS",
      items: [{
        fr: "Index local",
        en: "Local index"
      }, "Top-k retrieval"],
      note: {
        fr: "Recherche par similarité cosine sur l'index vectoriel",
        en: "Cosine-similarity search over the vector index"
      }
    }, {
      tier: "Orchestration",
      platform: "LangChain",
      items: ["RAG chain", "Prompt template"],
      note: {
        fr: "Compose retrieval + génération en pipeline",
        en: "Composes retrieval + generation into a pipeline"
      },
      highlight: true
    }, {
      tier: {
        fr: "Génération",
        en: "Generation"
      },
      platform: "LLM",
      items: [{
        fr: "Réponse avec sources",
        en: "Answer with sources"
      }],
      note: {
        fr: "Réponse contextualisée à partir des thèses retournées",
        en: "Contextualized answer from the retrieved theses"
      }
    }],
    results: [{
      n: {
        fr: "milliers",
        en: "thousands"
      },
      l: {
        fr: "thèses indexées",
        en: "theses indexed"
      }
    }, {
      n: "RAG",
      l: {
        fr: "ingestion → retrieval → génération",
        en: "ingestion → retrieval → generation"
      }
    }, {
      n: "FR",
      l: {
        fr: "corpus académique français",
        en: "French academic corpus"
      }
    }]
  },
  dust: {
    blocks: [{
      label: {
        fr: "Contexte",
        en: "Context"
      },
      html: {
        fr: "Les LLMs seuls ont des limites sur des tâches complexes. L'idée : <strong>faire collaborer plusieurs agents spécialisés</strong> plutôt qu'un seul agent généraliste. Chacun expert dans son domaine, coordonnés par un orchestrateur.",
        en: "LLMs alone hit limits on complex tasks. The idea: <strong>have several specialized agents collaborate</strong> rather than one generalist agent. Each expert in its domain, coordinated by an orchestrator."
      }
    }, {
      label: {
        fr: "Objectif",
        en: "Goal"
      },
      html: {
        fr: "Construire sur Dust un <strong>hub agentique</strong> où des agents IA spécialisés se passent du contexte et collaborent autour d'une tâche centrale. En exploitant les capacités natives de la plateforme.",
        en: "Build on Dust an <strong>agentic hub</strong> where specialized AI agents pass context and collaborate around a central task. Leveraging the platform's native capabilities."
      }
    }, {
      label: {
        fr: "Résultat",
        en: "Result"
      },
      html: {
        fr: "Architecture <strong>multi-agents opérationnelle</strong>. Orchestration fluide, agents spécialisés autonomes, gain de qualité et de cohérence significatif par rapport à un agent unique. Base des projets IA suivants.",
        en: "<strong>Operational multi-agent architecture</strong>. Smooth orchestration, autonomous specialized agents, significant gain in quality and consistency over a single agent. Foundation for the AI projects that followed."
      }
    }],
    archTitle: {
      fr: "Un hub",
      en: "A hub"
    },
    archItalic: {
      fr: "multi-agents.",
      en: "multi-agent."
    },
    signature: {
      fr: "<strong>Spécialisation plutôt que généralisation</strong> : un agent par tâche, coordonné par un orchestrateur, qui se passent du contexte. Le résultat dépasse de loin un agent unique généraliste. Cette archi est devenue la <strong>base technique de Mirakl Supply Brain et du pipeline PayFit</strong>.",
      en: "<strong>Specialization over generalization</strong>: one agent per task, coordinated by an orchestrator, passing context to each other. The result far surpasses a single generalist agent. This architecture became the <strong>technical foundation of Mirakl Supply Brain and the PayFit pipeline</strong>."
    },
    layers: [{
      tier: {
        fr: "Orchestrateur",
        en: "Orchestrator"
      },
      platform: "Dust",
      items: [{
        fr: "Hub central",
        en: "Central hub"
      }, {
        fr: "Routage tâches",
        en: "Task routing"
      }],
      note: {
        fr: "Dispatche aux agents spécialisés selon l'intent",
        en: "Dispatches to specialized agents by intent"
      },
      highlight: true
    }, {
      tier: "Agents",
      platform: {
        fr: "Spécialisés",
        en: "Specialized"
      },
      items: [{
        fr: "Recherche",
        en: "Research"
      }, {
        fr: "Synthèse",
        en: "Synthesis"
      }, {
        fr: "Critique",
        en: "Critique"
      }, "Code"],
      note: {
        fr: "Chaque agent = un prompt + un domaine d'expertise",
        en: "Each agent = one prompt + one domain of expertise"
      }
    }, {
      tier: {
        fr: "Contexte",
        en: "Context"
      },
      platform: {
        fr: "Mémoire partagée",
        en: "Shared memory"
      },
      items: [{
        fr: "Passé entre agents",
        en: "Passed between agents"
      }],
      note: {
        fr: "Les agents se transmettent l'état pour collaborer",
        en: "Agents pass state to each other to collaborate"
      }
    }, {
      tier: "LLM",
      platform: "Claude",
      items: ["Backbone"],
      note: {
        fr: "Le modèle sous-jacent appelé par chaque agent",
        en: "The underlying model called by each agent"
      }
    }],
    results: [{
      n: "multi",
      l: {
        fr: "agents spécialisés",
        en: "specialized agents"
      }
    }, {
      n: "×N",
      l: {
        fr: "qualité vs agent unique",
        en: "quality vs single agent"
      }
    }, {
      n: "base",
      l: {
        fr: "des projets IA suivants",
        en: "of the AI projects that followed"
      }
    }]
  },
  payfit: {
    blocks: [{
      label: {
        fr: "Contexte",
        en: "Context"
      },
      html: {
        fr: "Hackathon PayFit. Défi : <strong>générer du contenu RH & Paie de qualité à grande échelle</strong>. PayFit publie des centaines d'articles légaux et techniques. Le faire manuellement est lent, coûteux, et non scalable.",
        en: "PayFit Hackathon. Challenge: <strong>generate quality HR & Payroll content at scale</strong>. PayFit publishes hundreds of legal and technical articles. Doing it manually is slow, costly, and not scalable."
      }
    }, {
      label: {
        fr: "Objectif",
        en: "Goal"
      },
      html: {
        fr: "Concevoir un <strong>pipeline de 9 agents IA</strong> sur Dust, chaque agent spécialisé dans une étape de production (recherche, rédaction, vérification légale, optimisation SEO) pour produire des articles publiables directement.",
        en: "Design a <strong>9 AI-agent pipeline</strong> on Dust, each agent specialized in one production step (research, writing, legal review, SEO optimization) to produce directly publishable articles."
      }
    }, {
      label: {
        fr: "Résultat",
        en: "Result"
      },
      html: {
        fr: "Pipeline <strong>opérationnel en moins de 24h</strong>. Articles RH & Paie générés, SEO-ready, légalement conformes et publiables sans retouche manuelle. <strong>Équipe finaliste</strong> du hackathon PayFit, architecture agentique distinguée par le jury.",
        en: "Pipeline <strong>operational in under 24h</strong>. HR & Payroll articles generated, SEO-ready, legally compliant and publishable with no manual edits. <strong>Finalist team</strong> at the PayFit hackathon, agentic architecture singled out by the jury."
      }
    }],
    archTitle: {
      fr: "Un pipeline",
      en: "A pipeline"
    },
    archItalic: {
      fr: "en 5 stages.",
      en: "in 5 stages."
    },
    signature: {
      fr: "Articles publiés <strong>direct, sans humain</strong>. Chaque article passe par <strong>3 passes de Garde-Fou</strong> (score QC ≥ 75/100 + PayFit-ness ≥ 14/20) avant publication. <strong>Anti-Doublon</strong> vérifie payfit.com pour éviter le contenu dupliqué (< 6 mois). <em>« Publiable sans retouche humaine. »</em>",
      en: "Articles published <strong>directly, no human in the loop</strong>. Each article goes through <strong>3 Guardrail passes</strong> (QC score ≥ 75/100 + PayFit-ness ≥ 14/20) before publishing. <strong>Anti-Duplicate</strong> checks payfit.com to avoid duplicate content (< 6 months). <em>« Publishable with no human edits. »</em>"
    },
    signatureImage: {
      src: "media/payfit-architecture.png",
      caption: {
        fr: "Architecture du pipeline — 9 agents IA orchestrés",
        en: "Pipeline architecture — 9 orchestrated AI agents"
      }
    },
    extraImages: [{
      src: "media/payfit-agents.png",
      caption: {
        fr: "Vue synthétique — rôle de chaque agent",
        en: "Synthetic view — each agent's role"
      }
    }],
    quotes: {
      afterContext: {
        text: {
          fr: "Publiable sans retouche humaine.",
          en: "Publishable with no human edits."
        },
        source: {
          fr: "Hackathon PayFit — Résultat",
          en: "PayFit Hackathon — Result"
        }
      }
    },
    layers: [{
      tier: "Orchestration",
      platform: {
        fr: "Chef d'Orchestre",
        en: "Conductor"
      },
      items: [{
        fr: "Coordonne",
        en: "Coordinates"
      }, {
        fr: "Priorise",
        en: "Prioritizes"
      }, {
        fr: "Valide",
        en: "Validates"
      }],
      note: {
        fr: "Lance les 9 agents puis collecte les signaux pour le Rédacteur",
        en: "Launches the 9 agents then collects signals for the Writer"
      }
    }, {
      tier: {
        fr: "Sources / Veille",
        en: "Sources / Watch"
      },
      platform: {
        fr: "3 agents",
        en: "3 agents"
      },
      items: ["VérificationPayFit", "VeilleConcurrentPayFit", "SocialListeningPayFit"],
      note: "Légifrance · URSSAF · gouv · Factorial · Lucca · Cegid · Sage · Reddit · LinkedIn · Google Trends"
    }, {
      tier: {
        fr: "Rédaction",
        en: "Writing"
      },
      platform: "RédacteurPayFit",
      items: [{
        fr: "Article 800–1200 mots",
        en: "800–1200 word article"
      }, {
        fr: "System Prompt Marque",
        en: "Brand system prompt"
      }],
      note: {
        fr: "Génère le draft à partir du brief et des signaux retournés par les agents Sources",
        en: "Generates the draft from the brief and signals returned by the Sources agents"
      }
    }, {
      tier: "Garde-Fou",
      platform: "Quality Loop",
      items: ["QC ≥ 75/100", "PayFit-ness ≥ 14/20", {
        fr: "3 passes max",
        en: "3 passes max"
      }],
      note: {
        fr: "Si score KO, CorrecteurPayFit réécrit les sections en échec. Jusqu'à 3 itérations avant validation",
        en: "If score fails, CorrecteurPayFit rewrites the failing sections. Up to 3 iterations before validation"
      },
      highlight: true
    }, {
      tier: "Distribution",
      platform: "DistributionPayFit",
      items: ["Payfit.com", "LinkedIn", "Newsletter", "Search Console"],
      note: {
        fr: "Anti-Doublon vérifie payfit.com (élimine sujets < 6 mois) · Tracking J+7 / J+30 / J+90",
        en: "Anti-Duplicate checks payfit.com (drops topics < 6 months) · Tracking D+7 / D+30 / D+90"
      }
    }],
    results: [{
      n: "9",
      l: {
        fr: "agents Dust orchestrés",
        en: "orchestrated Dust agents"
      }
    }, {
      n: "72h",
      l: {
        fr: "pipeline livré",
        en: "pipeline shipped"
      }
    }, {
      n: "laurel",
      l: {
        fr: "Finaliste hackathon",
        en: "Hackathon finalist"
      }
    }]
  },
  dashboard: {
    blocks: [{
      label: {
        fr: "Contexte",
        en: "Context"
      },
      html: {
        fr: "Intérêt pour la finance et l'investissement. Mais aucun outil existant ne correspondait à la vision voulue : <strong>simple, automatisé, et orienté données</strong>. Besoin d'un dashboard personnel construit sur mesure directement dans Google Sheets.",
        en: "An interest in finance and investing. But no existing tool matched the desired vision: <strong>simple, automated, and data-driven</strong>. The need for a personal dashboard built to measure directly in Google Sheets."
      }
    }, {
      label: {
        fr: "Objectif",
        en: "Goal"
      },
      html: {
        fr: "Créer un <strong>portefeuille financier automatisé</strong> via Google Sheets et Apps Script. Actualisation des données en temps réel, suivi des performances, et stratégie orientée pour surpasser le S&P500.",
        en: "Create an <strong>automated financial portfolio</strong> via Google Sheets and Apps Script. Real-time data refresh, performance tracking, and a strategy aimed at beating the S&P500."
      }
    }, {
      label: {
        fr: "Résultat",
        en: "Result"
      },
      html: {
        fr: "Un outil de pilotage <strong>opérationnel et automatisé</strong>. Données mises à jour sans intervention manuelle, visualisation claire des positions et performances, stratégie d'allocation data-driven.",
        en: "An <strong>operational, automated</strong> steering tool. Data updated with no manual intervention, clear visualization of positions and performance, a data-driven allocation strategy."
      }
    }],
    archTitle: {
      fr: "Une stack",
      en: "A stack"
    },
    archItalic: {
      fr: "maison.",
      en: "home-made."
    },
    signature: {
      fr: "<strong>Zéro outil payant, zéro intervention manuelle.</strong> Apps Script tire les cours via API toutes les heures, Sheets calcule positions et performances en live, et l'allocation est entièrement data-driven. Objectif assumé : <em>battre le S&P500</em>.",
      en: "<strong>Zero paid tools, zero manual intervention.</strong> Apps Script pulls prices via API every hour, Sheets computes positions and performance live, and allocation is fully data-driven. The stated goal: <em>beat the S&P500</em>."
    },
    layers: [{
      tier: "Sources",
      platform: {
        fr: "APIs financières",
        en: "Financial APIs"
      },
      items: [{
        fr: "Cours en temps réel",
        en: "Real-time prices"
      }],
      note: {
        fr: "Pull automatique via APIs externes",
        en: "Automatic pull via external APIs"
      }
    }, {
      tier: "Glue",
      platform: "Apps Script",
      items: [{
        fr: "Cron horaire",
        en: "Hourly cron"
      }, {
        fr: "ETL léger",
        en: "Lightweight ETL"
      }],
      note: {
        fr: "Récupère, normalise et écrit dans Sheets",
        en: "Fetches, normalizes and writes into Sheets"
      },
      highlight: true
    }, {
      tier: "Storage",
      platform: "Google Sheets",
      items: ["Positions", {
        fr: "Historique",
        en: "History"
      }, {
        fr: "Indicateurs",
        en: "Indicators"
      }],
      note: {
        fr: "La base de données ET le moteur de calcul",
        en: "Both the database AND the compute engine"
      }
    }, {
      tier: "UI",
      platform: "Sheets dashboards",
      items: ["Performance", "Allocation", "Benchmark S&P"],
      note: {
        fr: "Vues live, accessibles depuis n'importe quel device",
        en: "Live views, accessible from any device"
      }
    }],
    results: [{
      n: "0€",
      l: {
        fr: "coût mensuel",
        en: "monthly cost"
      }
    }, {
      n: "auto",
      l: {
        fr: "mise à jour sans intervention",
        en: "updates with no intervention"
      }
    }, {
      n: "S&P",
      l: {
        fr: "benchmark visé",
        en: "benchmark targeted"
      }
    }]
  },
  zigzag: {
    blocks: [{
      label: {
        fr: "Contexte",
        en: "Context"
      },
      html: {
        fr: "Avec des amis, on voulait créer quelque chose de concret ensemble. <strong>un jeu en ligne jouable</strong>, construit from scratch, sans expérience préalable en game dev. Zéro template, zéro framework dédié : juste du code.",
        en: "With friends, we wanted to create something real together. <strong>a playable online game</strong>, built from scratch, with no prior game-dev experience. Zero template, zero dedicated framework: just code."
      }
    }, {
      label: {
        fr: "Objectif",
        en: "Goal"
      },
      html: {
        fr: "Concevoir, développer et déployer un <strong>jeu multijoueur web</strong> en temps réel. De la mécanique de jeu à l'hébergement en production, en passant par les interactions en temps réel entre joueurs.",
        en: "Design, build and deploy a real-time <strong>multiplayer web game</strong>. From game mechanics to production hosting, including real-time interactions between players."
      }
    }, {
      label: {
        fr: "Résultat",
        en: "Result"
      },
      html: {
        fr: "Un jeu <strong>en ligne et jouable</strong> sur zig-zag.fun. Première vraie expérience de build en équipe. De l'idée à la mise en prod. Le projet qui a tout déclenché.",
        en: "A game <strong>online and playable</strong> at zig-zag.fun. The first real team-build experience. From idea to production. The project that started it all."
      }
    }],
    archTitle: {
      fr: "Une stack",
      en: "A stack"
    },
    archItalic: {
      fr: "web from scratch.",
      en: "web from scratch."
    },
    signature: {
      fr: "<strong>From scratch, zéro framework dédié.</strong> Pas de Phaser, pas d'Unity Web. Juste du JavaScript natif côté client, Node côté serveur, WebSocket pour synchroniser. Le projet qui a tout déclenché : première vraie expérience d'un cycle complet de build en équipe (idée → prod).",
      en: "<strong>From scratch, zero dedicated framework.</strong> No Phaser, no Unity Web. Just native JavaScript on the client, Node on the server, WebSocket to sync. The project that started it all: the first real experience of a full team-build cycle (idea → prod)."
    },
    quotes: {
      afterResults: {
        text: {
          fr: "Le projet qui a tout déclenché.",
          en: "The project that started it all."
        },
        source: "Vibe Coding — ZigZag"
      }
    },
    layers: [{
      tier: "Client",
      platform: "JavaScript",
      items: [{
        fr: "Canvas natif",
        en: "Native Canvas"
      }, "HTML/CSS"],
      note: {
        fr: "Rendu et input côté navigateur, mobile + desktop",
        en: "Rendering and input in the browser, mobile + desktop"
      }
    }, {
      tier: {
        fr: "Temps réel",
        en: "Real-time"
      },
      platform: "WebSocket",
      items: [{
        fr: "Sync joueurs",
        en: "Player sync"
      }, "Game state"],
      note: {
        fr: "Communication bidirectionnelle low-latency client ↔ serveur",
        en: "Low-latency bidirectional client ↔ server communication"
      },
      highlight: true
    }, {
      tier: {
        fr: "Serveur",
        en: "Server"
      },
      platform: "Node.js",
      items: ["Game loop", {
        fr: "Logique partagée",
        en: "Shared logic"
      }],
      note: {
        fr: "Source de vérité pour l'état de la partie",
        en: "Source of truth for the game state"
      }
    }, {
      tier: {
        fr: "Hébergement",
        en: "Hosting"
      },
      platform: "Production",
      items: ["zig-zag.fun"],
      note: {
        fr: "Mis en ligne et jouable publiquement",
        en: "Live and publicly playable"
      }
    }],
    results: [{
      n: "live",
      l: {
        fr: "sur zig-zag.fun",
        en: "on zig-zag.fun"
      }
    }, {
      n: "WS",
      l: {
        fr: "multijoueur temps réel",
        en: "real-time multiplayer"
      }
    }, {
      n: "1ᵉʳ",
      l: {
        fr: "build en équipe complet",
        en: "full team build"
      }
    }]
  },
  tableau: {
    blocks: [{
      label: {
        fr: "Contexte",
        en: "Context"
      },
      html: {
        fr: "Dataset public Olist. <strong>99 441 commandes e-commerce brésiliennes</strong> réparties sur 3 tables CSV (orders, customers, payments), couvrant la période 2016-2018.",
        en: "Public Olist dataset. <strong>99,441 Brazilian e-commerce orders</strong> spread across 3 CSV tables (orders, customers, payments), covering 2016-2018."
      }
    }, {
      label: {
        fr: "Objectif",
        en: "Goal"
      },
      html: {
        fr: "Concevoir un <strong>dashboard analytique complet sur Tableau Desktop</strong>. Jointure multi-tables, création de champs calculés, production de 8 vues distinctes (cartes, séries temporelles, bar charts) consolidées avec filtres liés cross-vues.",
        en: "Design a <strong>complete analytical dashboard in Tableau Desktop</strong>. Multi-table joins, calculated fields, 8 distinct views (maps, time series, bar charts) consolidated with cross-view linked filters."
      }
    }, {
      label: {
        fr: "Résultat",
        en: "Result"
      },
      html: {
        fr: "Dashboard interactif <strong>en 8 vues avec filtres liés</strong> par période, état et type de paiement. Insights clés : São Paulo = 42% des commandes, 97% livrées, pic Black Friday nov. 2017 (7 863 commandes), revenu total R$ 16 008 872.",
        en: "Interactive dashboard <strong>in 8 views with linked filters</strong> by period, state and payment type. Key insights: São Paulo = 42% of orders, 97% delivered, Black Friday peak Nov. 2017 (7,863 orders), total revenue R$ 16,008,872."
      }
    }],
    archTitle: {
      fr: "Une analyse",
      en: "A multi-table"
    },
    archItalic: {
      fr: "multi-tables.",
      en: "analysis."
    },
    signature: {
      fr: "<strong>3 CSV joints, 8 vues consolidées, filtres liés cross-vues.</strong> Pas juste un dashboard cosmétique : champs calculés (DATEDIFF, type de paiement, segmentation géo), carte choroplèthe sur le Brésil, et insights chiffrés qui sortent direct. São Paulo concentre 42% des commandes, 97% de taux de livraison, pic Black Friday novembre 2017.",
      en: "<strong>3 joined CSVs, 8 consolidated views, cross-view linked filters.</strong> Not just a cosmetic dashboard: calculated fields (DATEDIFF, payment type, geo segmentation), a choropleth map of Brazil, and hard numbers that come straight out. São Paulo holds 42% of orders, 97% delivery rate, Black Friday peak November 2017."
    },
    layers: [{
      tier: "Sources",
      platform: "Olist (3 CSV)",
      items: ["orders", "customers", "payments"],
      note: {
        fr: "99 441 commandes brésiliennes 2016-2018",
        en: "99,441 Brazilian orders 2016-2018"
      }
    }, {
      tier: {
        fr: "Modélisation",
        en: "Modeling"
      },
      platform: "Tableau Desktop",
      items: [{
        fr: "Jointures",
        en: "Joins"
      }, "DATEDIFF", {
        fr: "Champs calculés",
        en: "Calculated fields"
      }],
      note: {
        fr: "Jointures multi-tables + segmentation par paiement et géo",
        en: "Multi-table joins + segmentation by payment and geo"
      },
      highlight: true
    }, {
      tier: "Visualisation",
      platform: {
        fr: "8 vues",
        en: "8 views"
      },
      items: [{
        fr: "Carte choroplèthe",
        en: "Choropleth map"
      }, {
        fr: "Séries temporelles",
        en: "Time series"
      }, "Bar charts"],
      note: {
        fr: "Vues consolidées avec filtres liés cross-vues",
        en: "Consolidated views with cross-view linked filters"
      }
    }, {
      tier: "Distribution",
      platform: "Tableau Public",
      items: ["Embed iframe", {
        fr: "Lien public",
        en: "Public link"
      }],
      note: {
        fr: "Dashboard hébergé et partageable",
        en: "Hosted, shareable dashboard"
      }
    }],
    results: [{
      n: "99k",
      l: {
        fr: "commandes analysées",
        en: "orders analyzed"
      }
    }, {
      n: "8",
      l: {
        fr: "vues consolidées",
        en: "consolidated views"
      }
    }, {
      n: "R$ 16M",
      l: {
        fr: "revenu total mesuré",
        en: "total revenue measured"
      }
    }]
  },
  sql: {
    blocks: [{
      label: {
        fr: "Contexte",
        en: "Context"
      },
      html: {
        fr: "Projet d'analyse sur les <strong>données publiques data.gouv.fr</strong> relatives aux accidents de la route en France. Des milliers de lignes de données brutes, sans lecture claire ni outil de pilotage existant.",
        en: "Analysis project on <strong>public data.gouv.fr data</strong> about road accidents in France. Thousands of rows of raw data, with no clear reading nor existing steering tool."
      }
    }, {
      label: {
        fr: "Objectif",
        en: "Goal"
      },
      html: {
        fr: "Exploiter la base de données via SQL pour en extraire des <strong>insights actionnables</strong>. Identifier les zones, profils et conditions à risque, puis restituer les résultats dans un outil de pilotage interactif.",
        en: "Leverage the database via SQL to extract <strong>actionable insights</strong>. Identify high-risk zones, profiles and conditions, then deliver the results in an interactive steering tool."
      }
    }, {
      label: {
        fr: "Résultat",
        en: "Result"
      },
      html: {
        fr: "Dashboard interactif <strong>déployé sur Vercel</strong>. Visualisation des tendances par zone, période et type d'accident. Recommandations structurées prêtes à être transmises à des décideurs.",
        en: "Interactive dashboard <strong>deployed on Vercel</strong>. Visualization of trends by zone, period and accident type. Structured recommendations ready to hand to decision-makers."
      }
    }],
    archTitle: {
      fr: "Du SQL",
      en: "From SQL"
    },
    archItalic: {
      fr: "au dashboard.",
      en: "to dashboard."
    },
    signature: {
      fr: "<strong>De la donnée publique brute à un outil de pilotage déployé.</strong> SQL pour extraire les patterns (zones, profils, conditions), Python pour transformer, Vercel pour héberger. Bout-en-bout, depuis le CSV data.gouv.fr jusqu'au dashboard interactif accessible à un décideur.",
      en: "<strong>From raw public data to a deployed steering tool.</strong> SQL to extract the patterns (zones, profiles, conditions), Python to transform, Vercel to host. End-to-end, from the data.gouv.fr CSV to the interactive dashboard a decision-maker can use."
    },
    layers: [{
      tier: "Source",
      platform: "data.gouv.fr",
      items: ["Open data", {
        fr: "CSV bruts",
        en: "Raw CSV"
      }],
      note: {
        fr: "Base publique : accidents de la route France",
        en: "Public dataset: road accidents in France"
      }
    }, {
      tier: {
        fr: "Analyse",
        en: "Analysis"
      },
      platform: "SQL",
      items: [{
        fr: "Requêtes",
        en: "Queries"
      }, {
        fr: "Agrégations",
        en: "Aggregations"
      }, {
        fr: "Filtres",
        en: "Filters"
      }],
      note: {
        fr: "Extraction des patterns par zone / profil / condition",
        en: "Pattern extraction by zone / profile / condition"
      },
      highlight: true
    }, {
      tier: "Transformation",
      platform: "Python",
      items: [{
        fr: "Nettoyage",
        en: "Cleaning"
      }, {
        fr: "Mise en forme",
        en: "Shaping"
      }],
      note: {
        fr: "Pipeline avant restitution",
        en: "Pipeline before delivery"
      }
    }, {
      tier: "Distribution",
      platform: "Vercel",
      items: [{
        fr: "Dashboard live",
        en: "Live dashboard"
      }],
      note: {
        fr: "Outil de pilotage interactif déployé en prod",
        en: "Interactive steering tool deployed in prod"
      }
    }],
    results: [{
      n: "SQL",
      l: {
        fr: "extraction patterns risque",
        en: "risk pattern extraction"
      }
    }, {
      n: "live",
      l: {
        fr: "dashboard sur Vercel",
        en: "dashboard on Vercel"
      }
    }, {
      n: "FR",
      l: {
        fr: "données publiques nationales",
        en: "national open data"
      }
    }]
  },
  dataiku: {
    blocks: [{
      label: {
        fr: "Contexte",
        en: "Context"
      },
      html: {
        fr: "Projet d'analyse sur un <strong>dataset e-commerce réel fourni par Cdiscount</strong>. L'un des leaders français. Utilisation de Dataiku, plateforme de data science collaborative, pour mener l'analyse de bout en bout.",
        en: "Analysis project on a <strong>real e-commerce dataset provided by Cdiscount</strong>. One of France's leaders. Using Dataiku, the collaborative data science platform, to run the analysis end-to-end."
      }
    }, {
      label: {
        fr: "Objectif",
        en: "Goal"
      },
      html: {
        fr: "Explorer les données Cdiscount, construire des <strong>modèles d'analyse et de classification</strong>, et restituer des insights actionnables dans une logique métier orientée e-commerce. Compréhension des comportements d'achat et des performances produits.",
        en: "Explore the Cdiscount data, build <strong>analysis and classification models</strong>, and deliver actionable insights with an e-commerce business lens. Understanding buying behavior and product performance."
      }
    }, {
      label: {
        fr: "Résultat",
        en: "Result"
      },
      html: {
        fr: "<strong>Pipeline de données complet dans Dataiku</strong>. Exploration, nettoyage, modélisation et visualisation. Restitution structurée des insights avec recommandations orientées business pour optimiser les performances produits.",
        en: "<strong>Complete data pipeline in Dataiku</strong>. Exploration, cleaning, modeling and visualization. Structured delivery of insights with business-oriented recommendations to optimize product performance."
      }
    }],
    archTitle: {
      fr: "Un pipeline",
      en: "A Dataiku"
    },
    archItalic: {
      fr: "Dataiku.",
      en: "pipeline."
    },
    signature: {
      fr: "<strong>Bout-en-bout dans Dataiku</strong> : exploration, nettoyage, feature engineering, modélisation ML, visualisation. Sur un dataset e-commerce <strong>réel Cdiscount</strong>. Pas un kaggle synthétique, mais des données opérationnelles d'un leader français du e-commerce.",
      en: "<strong>End-to-end in Dataiku</strong>: exploration, cleaning, feature engineering, ML modeling, visualization. On a <strong>real Cdiscount</strong> e-commerce dataset. Not a synthetic Kaggle set, but operational data from a French e-commerce leader."
    },
    layers: [{
      tier: "Source",
      platform: "Cdiscount",
      items: [{
        fr: "Dataset e-commerce réel",
        en: "Real e-commerce dataset"
      }],
      note: {
        fr: "Données opérationnelles d'un leader FR du e-commerce",
        en: "Operational data from a French e-commerce leader"
      }
    }, {
      tier: "Exploration",
      platform: "Dataiku",
      items: ["EDA", {
        fr: "Nettoyage",
        en: "Cleaning"
      }],
      note: {
        fr: "Compréhension des distributions, détection d'outliers",
        en: "Understanding distributions, outlier detection"
      }
    }, {
      tier: {
        fr: "Modélisation",
        en: "Modeling"
      },
      platform: "ML",
      items: ["Classification", {
        fr: "Analyse de comportements",
        en: "Behavior analysis"
      }],
      note: {
        fr: "Modèles orientés performance produit et comportement d'achat",
        en: "Models oriented toward product performance and buying behavior"
      },
      highlight: true
    }, {
      tier: {
        fr: "Restitution",
        en: "Delivery"
      },
      platform: "Dashboard",
      items: ["Insights", {
        fr: "Recommandations business",
        en: "Business recommendations"
      }],
      note: {
        fr: "Sortie structurée orientée décisionnel",
        en: "Structured, decision-oriented output"
      }
    }],
    results: [{
      n: "Cdiscount",
      l: {
        fr: "dataset e-commerce réel",
        en: "real e-commerce dataset"
      }
    }, {
      n: "E2E",
      l: {
        fr: "pipeline dans Dataiku",
        en: "pipeline in Dataiku"
      }
    }, {
      n: "business",
      l: {
        fr: "recommandations orientées",
        en: "oriented recommendations"
      }
    }]
  },
  discogs: {
    blocks: [{
      label: {
        fr: "Contexte",
        en: "Context"
      },
      html: {
        fr: "Passion pour la musique et les vinyles. Et une question : <strong>est-ce que le format physique a une valeur objective sur le marché secondaire ?</strong> Discogs, la plus grande marketplace de vinyles, contenait la réponse dans ses données.",
        en: "A passion for music and vinyl. And a question: <strong>does physical format hold objective value on the resale market?</strong> Discogs, the largest vinyl marketplace, held the answer in its data."
      }
    }, {
      label: {
        fr: "Objectif",
        en: "Goal"
      },
      html: {
        fr: "<strong>Scraper Discogs via Python</strong> pour constituer un dataset sur les prix, formats et genres musicaux. Puis analyser les corrélations entre format physique, rareté et valeur perçue sur le marché.",
        en: "<strong>Scrape Discogs via Python</strong> to build a dataset on prices, formats and music genres. Then analyze the correlations between physical format, rarity and perceived market value."
      }
    }, {
      label: {
        fr: "Résultat",
        en: "Result"
      },
      html: {
        fr: "Dataset constitué, <strong>analyse de corrélation complète</strong>. Insights sur les formats les plus valorisés, les genres les plus côtés et les patterns de prix sur le marché du vinyle d'occasion.",
        en: "Dataset built, <strong>full correlation analysis</strong>. Insights on the most-valued formats, the most-rated genres and the price patterns on the second-hand vinyl market."
      }
    }],
    archTitle: {
      fr: "Du scraping",
      en: "From scraping"
    },
    archItalic: {
      fr: "à l'analyse.",
      en: "to analysis."
    },
    signature: {
      fr: "<strong>Curiosité personnelle → données → réponse.</strong> Une question naïve sur la valeur des vinyles, transformée en pipeline Python qui constitue un dataset de marché et le décrypte. La donnée vient prouver (ou réfuter) l'intuition.",
      en: "<strong>Personal curiosity → data → answer.</strong> A naive question about the value of vinyl, turned into a Python pipeline that builds a market dataset and decodes it. The data comes to prove (or disprove) the intuition."
    },
    layers: [{
      tier: "Source",
      platform: "Discogs",
      items: [{
        fr: "Marketplace vinyles",
        en: "Vinyl marketplace"
      }],
      note: {
        fr: "La plus grande base mondiale de vinyles et de prix",
        en: "The world's largest vinyl and price database"
      }
    }, {
      tier: "Scraping",
      platform: "Python",
      items: ["Requests", "BeautifulSoup"],
      note: {
        fr: "Récupération structurée des prix, formats, genres",
        en: "Structured collection of prices, formats, genres"
      },
      highlight: true
    }, {
      tier: "Storage",
      platform: "Pandas",
      items: ["DataFrame", "CSV"],
      note: {
        fr: "Structure tabulaire pour analyse",
        en: "Tabular structure for analysis"
      }
    }, {
      tier: {
        fr: "Analyse",
        en: "Analysis"
      },
      platform: "Matplotlib",
      items: [{
        fr: "Corrélations",
        en: "Correlations"
      }, "Visualisations"],
      note: {
        fr: "Patterns format ↔ rareté ↔ valeur",
        en: "Patterns format ↔ rarity ↔ value"
      }
    }],
    results: [{
      n: "Python",
      l: {
        fr: "scraping bout-en-bout",
        en: "end-to-end scraping"
      }
    }, {
      n: {
        fr: "corrélation",
        en: "correlation"
      },
      l: {
        fr: "format / rareté / prix",
        en: "format / rarity / price"
      }
    }, {
      n: {
        fr: "vinyle",
        en: "vinyl"
      },
      l: {
        fr: "marché secondaire décrypté",
        en: "resale market decoded"
      }
    }]
  },
  make: {
    blocks: [{
      label: {
        fr: "Contexte",
        en: "Context"
      },
      html: {
        fr: "Des tâches répétitives qui consomment du temps. Envois d'emails, synchronisation de données, notifications automatiques. <strong>Make permet de les automatiser visuellement, sans écrire une ligne de code.</strong>",
        en: "Repetitive tasks that eat up time. Email sends, data syncing, automatic notifications. <strong>Make lets you automate them visually, without writing a single line of code.</strong>"
      }
    }, {
      label: {
        fr: "Objectif",
        en: "Goal"
      },
      html: {
        fr: "Concevoir et déployer des <strong>workflows no-code sur Make (ex-Integromat)</strong> pour connecter des applications entre elles, déclencher des actions automatiques et gérer des flux de données de bout en bout.",
        en: "Design and deploy <strong>no-code workflows on Make (ex-Integromat)</strong> to connect apps together, trigger automatic actions and manage data flows end-to-end."
      }
    }, {
      label: {
        fr: "Résultat",
        en: "Result"
      },
      html: {
        fr: "Plusieurs <strong>workflows actifs en production</strong>. Gain de temps mesurable sur des processus manuels, zéro intervention humaine sur les tâches automatisées. Expérience directement transférable à n'importe quel contexte métier.",
        en: "Several <strong>workflows live in production</strong>. Measurable time saved on manual processes, zero human intervention on the automated tasks. Experience directly transferable to any business context."
      }
    }],
    archTitle: {
      fr: "Du no-code",
      en: "No-code"
    },
    archItalic: {
      fr: "en production.",
      en: "in production."
    },
    signature: {
      fr: "<strong>Zéro ligne de code, workflows en prod.</strong> Make connecte les apps entre elles via webhooks et APIs REST. Déclencheurs, transformations, conditions, branches. Une fois un workflow déployé, plus aucune intervention humaine sur la tâche.",
      en: "<strong>Zero lines of code, workflows in prod.</strong> Make connects apps together via webhooks and REST APIs. Triggers, transformations, conditions, branches. Once a workflow is deployed, no more human intervention on the task."
    },
    layers: [{
      tier: "Triggers",
      platform: "Webhooks",
      items: ["Schedule", "Event-driven"],
      note: {
        fr: "Démarrage automatique sur événement ou cron",
        en: "Automatic start on event or cron"
      }
    }, {
      tier: {
        fr: "Logique",
        en: "Logic"
      },
      platform: "Make",
      items: ["Routers", "Filters", "Iterators"],
      note: {
        fr: "Branches conditionnelles et transformations visuelles",
        en: "Conditional branches and visual transformations"
      },
      highlight: true
    }, {
      tier: {
        fr: "Intégrations",
        en: "Integrations"
      },
      platform: "APIs REST",
      items: [{
        fr: "Apps connectées",
        en: "Connected apps"
      }],
      note: {
        fr: "Lecture / écriture dans n'importe quel outil avec une API",
        en: "Read / write in any tool with an API"
      }
    }, {
      tier: {
        fr: "Résultat",
        en: "Result"
      },
      platform: "Production",
      items: [{
        fr: "Tâches automatisées",
        en: "Automated tasks"
      }],
      note: {
        fr: "Workflows actifs, zéro intervention humaine",
        en: "Active workflows, zero human intervention"
      }
    }],
    results: [{
      n: "0",
      l: {
        fr: "ligne de code écrite",
        en: "lines of code written"
      }
    }, {
      n: "auto",
      l: {
        fr: "workflows en production",
        en: "workflows in production"
      }
    }, {
      n: "REST",
      l: {
        fr: "intégrations multi-apps",
        en: "multi-app integrations"
      }
    }]
  },
  kitchy: {
    blocks: [{
      label: {
        fr: "Contexte",
        en: "Context"
      },
      html: {
        fr: "Hackathon startup en mode contraint. Imaginer, construire et pitcher un concept produit viable devant un jury. <strong>Kitchy est né de ce défi</strong> : trouver une idée, former une équipe, et aller au bout.",
        en: "Startup hackathon under constraint. Imagine, build and pitch a viable product concept to a jury. <strong>Kitchy was born from this challenge</strong>: find an idea, form a team, and see it through."
      }
    }, {
      label: {
        fr: "Objectif",
        en: "Goal"
      },
      html: {
        fr: "Concevoir le <strong>concept produit Kitchy de A à Z</strong>. Identifier un problème réel, définir la proposition de valeur, prototyper une solution et construire un pitch deck convaincant pour le jury.",
        en: "Design the <strong>Kitchy product concept from A to Z</strong>. Identify a real problem, define the value proposition, prototype a solution and build a convincing pitch deck for the jury."
      }
    }, {
      label: {
        fr: "Résultat",
        en: "Result"
      },
      html: {
        fr: "<strong>Pitch réalisé devant jury</strong>, deck produit complet. Expérience intense de build en équipe sous contrainte de temps. De l'idée brute à la présentation finale en moins de deux jours.",
        en: "<strong>Pitched to the jury</strong>, complete product deck. An intense team-build experience under time pressure. From raw idea to final presentation in under two days."
      }
    }],
    archTitle: {
      fr: "De l'idée",
      en: "From idea"
    },
    archItalic: {
      fr: "au pitch.",
      en: "to pitch."
    },
    signature: {
      fr: "<strong>Idée → pitch en moins de 48h.</strong> Sous contrainte de temps : identifier un problème réel, définir la proposition de valeur, prototyper, et défendre devant un jury. Pas de prod : juste de la clarté produit et un récit qui tient debout sous pression.",
      en: "<strong>Idea → pitch in under 48h.</strong> Under time pressure: identify a real problem, define the value proposition, prototype, and defend it before a jury. No prod: just product clarity and a story that holds up under pressure."
    },
    layers: [{
      tier: {
        fr: "Problème",
        en: "Problem"
      },
      platform: "Discovery",
      items: [{
        fr: "Identification besoin",
        en: "Need identification"
      }, "Validation"],
      note: {
        fr: "Trouver un vrai pain user, pas une solution en quête de problème",
        en: "Find a real user pain, not a solution in search of a problem"
      }
    }, {
      tier: "Concept",
      platform: "Product design",
      items: ["Value prop", "Personas"],
      note: {
        fr: "Articuler le quoi, le pourquoi, pour qui",
        en: "Articulate the what, the why, for whom"
      }
    }, {
      tier: "Prototype",
      platform: {
        fr: "Maquettes",
        en: "Mockups"
      },
      items: ["Wireframes", "Flows"],
      note: {
        fr: "Suffisant pour montrer comment ça marche",
        en: "Enough to show how it works"
      }
    }, {
      tier: "Pitch",
      platform: "Deck Canva",
      items: [{
        fr: "Récit",
        en: "Story"
      }, {
        fr: "Démo",
        en: "Demo"
      }, {
        fr: "Marché",
        en: "Market"
      }],
      note: {
        fr: "Le storytelling qui convainc le jury en 5 min",
        en: "The storytelling that wins over the jury in 5 min"
      },
      highlight: true
    }],
    results: [{
      n: "<72h",
      l: {
        fr: "idée → pitch jury",
        en: "idea → jury pitch"
      }
    }, {
      n: "team",
      l: {
        fr: "build en équipe contraint",
        en: "constrained team build"
      }
    }, {
      n: "deck",
      l: {
        fr: "produit complet livré",
        en: "full product delivered"
      }
    }]
  }
});
const deep = DEEP[slug] || DEEP.mirakl;
function ResultIcon({
  kind
}) {
  if (kind === "laurel") return /*#__PURE__*/React.createElement("div", {
    "aria-label": "Finaliste",
    style: {
      fontSize: 72,
      fontFamily: "var(--font-italic)",
      fontStyle: "italic",
      fontWeight: 400,
      color: "var(--jl-mint)",
      letterSpacing: "-0.04em",
      lineHeight: 0.9
    }
  }, "F.");
  return null;
}
function PullQuote({
  text,
  source
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      marginBottom: 8,
      padding: "32px 28px",
      borderLeft: "2px solid var(--jl-mint)",
      background: "rgba(177,234,163,0.04)"
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
      fontStyle: "italic",
      fontSize: 28,
      fontWeight: 400,
      lineHeight: 1.25,
      color: "rgba(255,255,255,0.92)",
      letterSpacing: "-0.01em"
    }
  }, "\xAB ", text, " \xBB"), source && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: 10.5,
      color: "var(--jl-mint)",
      fontWeight: 600,
      letterSpacing: "0.16em",
      textTransform: "uppercase"
    }
  }, "\u2014 ", source));
}
function MediaCarousel({
  slides
}) {
  const [i, setI] = React.useState(0);
  const cur = slides[i];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, slides.length > 1 && /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 10,
      flexWrap: "wrap"
    }
  }, slides.map((s, idx) => /*#__PURE__*/React.createElement("button", {
    key: s.k + idx,
    type: "button",
    role: "tab",
    "aria-selected": idx === i,
    onClick: () => setI(idx),
    style: {
      padding: "7px 14px",
      borderRadius: 999,
      background: idx === i ? "var(--jl-mint)" : "rgba(255,255,255,0.04)",
      color: idx === i ? "#0a0a0a" : "var(--jl-ink-2)",
      border: idx === i ? "1px solid var(--jl-mint)" : "1px solid var(--jl-line-2)",
      fontSize: 11.5,
      fontWeight: 600,
      letterSpacing: "-0.005em",
      cursor: "pointer"
    }
  }, s.label))), /*#__PURE__*/React.createElement("div", {
    className: "jl-card jl-card-noh",
    style: {
      padding: 0,
      cursor: "default",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: cur.aspect || "16 / 9",
      background: "#000"
    }
  }, cur.hint && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 12,
      right: 12,
      zIndex: 2,
      padding: "5px 11px",
      borderRadius: 999,
      background: "rgba(0,0,0,0.7)",
      backdropFilter: "blur(6px)",
      border: "1px solid rgba(177,234,163,0.35)",
      color: "var(--jl-mint)",
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: "0.04em",
      pointerEvents: "none"
    }
  }, cur.hint), cur.kind === "youtube" ? /*#__PURE__*/React.createElement("iframe", {
    src: `https://www.youtube-nocookie.com/embed/${cur.id}?rel=0`,
    title: cur.caption,
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    referrerPolicy: "strict-origin-when-cross-origin",
    allowFullScreen: true,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      border: 0
    }
  }) : /*#__PURE__*/React.createElement("iframe", {
    src: cur.src,
    title: cur.caption,
    loading: "lazy",
    allowFullScreen: true,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      border: 0
    }
  })), cur.caption && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 16px",
      fontSize: 11.5,
      color: "var(--jl-ink-3)",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      borderTop: "1px solid var(--jl-line)"
    }
  }, cur.caption)), slides.length > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: "flex",
      justifyContent: "center",
      gap: 8
    }
  }, slides.map((_, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    type: "button",
    "aria-label": `Slide ${idx + 1}`,
    onClick: () => setI(idx),
    style: {
      width: idx === i ? 24 : 8,
      height: 8,
      borderRadius: 999,
      background: idx === i ? "var(--jl-mint)" : "rgba(255,255,255,0.18)",
      border: 0,
      padding: 0,
      cursor: "pointer",
      transition: "width 0.2s"
    }
  }))));
}
function ProjetApp() {
  const [lightbox, setLightbox] = React.useState(null);
  React.useEffect(() => {
    if (!lightbox) return undefined;
    const onKey = e => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox]);
  return /*#__PURE__*/React.createElement(Shell, {
    page: "projets"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--jl-ink-3)",
      letterSpacing: "-0.005em",
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "projets.html",
    style: {
      color: "var(--jl-ink-2)"
    }
  }, window.t("projet.breadcrumb")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--jl-ink-4)"
    }
  }, "\u203A"), /*#__PURE__*/React.createElement("span", null, p.title)), /*#__PURE__*/React.createElement("a", {
    href: "projets.html",
    style: {
      fontSize: 12.5,
      color: "var(--jl-mint)",
      fontWeight: 500,
      letterSpacing: "-0.005em"
    }
  }, window.t("projet.allProjects"))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 18,
      background: p.gradient,
      borderRadius: 12,
      height: 460,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(ProjectSigil, {
    kind: p.sigil
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.55) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      padding: "36px 40px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, p.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "5px 12px 5px 9px",
      borderRadius: 999,
      background: "rgba(0,0,0,0.6)",
      backdropFilter: "blur(6px)",
      fontSize: 11,
      fontWeight: 500,
      color: "#fff",
      letterSpacing: "-0.005em"
    }
  }, /*#__PURE__*/React.createElement(LaurelIcon, null), " ", p.badge, " \xB7 Hackathon")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,0.7)",
      fontWeight: 500,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      padding: "5px 12px",
      borderRadius: 999,
      background: "rgba(0,0,0,0.4)",
      backdropFilter: "blur(6px)"
    }
  }, p.meta)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 92,
      fontWeight: 700,
      letterSpacing: "-0.05em",
      lineHeight: 0.9,
      textShadow: "0 4px 24px rgba(0,0,0,0.5)"
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "16px 0 0",
      fontSize: 19,
      fontWeight: 400,
      color: "rgba(255,255,255,0.9)",
      maxWidth: "min(1100px, 95%)",
      lineHeight: 1.4,
      letterSpacing: "-0.005em",
      textShadow: "0 2px 12px rgba(0,0,0,0.5)"
    }
  }, (() => {
    const first = p.desc.split(".")[0];
    const ci = first.indexOf(":");
    if (ci === -1) return `${p.sub} — ${first}.`;
    return /*#__PURE__*/React.createElement(React.Fragment, null, p.sub, " \u2014 ", first.slice(0, ci + 1).trim(), /*#__PURE__*/React.createElement("br", null), first.slice(ci + 1).trim(), ".");
  })()), p.media && (p.media.deck || p.media.deckLink || p.media.video || p.media.live || p.media.repoLink) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: "flex",
      gap: 10,
      flexWrap: "wrap"
    }
  }, (p.media.deck || p.media.deckLink) && /*#__PURE__*/React.createElement("a", {
    href: "#media",
    onClick: e => {
      e.preventDefault();
      const el = document.getElementById("media");
      if (el) el.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "10px 18px",
      borderRadius: 999,
      background: "rgba(255,255,255,0.94)",
      color: "#0a0a0a",
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: "-0.005em",
      textDecoration: "none"
    }
  }, window.t("projet.seeDeck")), p.media.video && /*#__PURE__*/React.createElement("a", {
    href: "#media",
    onClick: e => {
      e.preventDefault();
      const el = document.getElementById("media");
      if (el) el.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "10px 18px",
      borderRadius: 999,
      background: "rgba(0,0,0,0.55)",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.28)",
      backdropFilter: "blur(6px)",
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: "-0.005em",
      textDecoration: "none"
    }
  }, window.t("projet.seeDemo")), p.media.live && !p.media.video && !p.media.deck && /*#__PURE__*/React.createElement("a", {
    href: "#media",
    onClick: e => {
      e.preventDefault();
      const el = document.getElementById("media");
      if (el) el.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "10px 18px",
      borderRadius: 999,
      background: "rgba(0,0,0,0.55)",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.28)",
      backdropFilter: "blur(6px)",
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: "-0.005em",
      textDecoration: "none"
    }
  }, window.t("projet.live")), p.media.repoLink && /*#__PURE__*/React.createElement("a", {
    href: p.media.repoLink,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "10px 18px",
      borderRadius: 999,
      background: "rgba(0,0,0,0.55)",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.28)",
      backdropFilter: "blur(6px)",
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: "-0.005em",
      textDecoration: "none"
    }
  }, window.t("projet.github")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 14
    }
  }, (() => {
    const phase = p.meta.split(" · ")[1] || "—";
    const isDuration = /\d+\s*(h|jour|min|sem)/i.test(phase);
    return [{
      lbl: window.t("projet.lblRole"),
      v: p.role
    }, {
      lbl: isDuration ? window.t("projet.lblDuration") : window.t("projet.lblPhase"),
      v: phase,
      sub: p.durationNote
    }, {
      lbl: window.t("projet.lblYear"),
      v: String(p.year)
    }, {
      lbl: window.t("projet.lblStatus"),
      v: p.badge || window.t("projet.statusDone"),
      mint: !!p.badge
    }];
  })().map(m => /*#__PURE__*/React.createElement("div", {
    key: m.lbl,
    className: "jl-card jl-card-noh",
    style: {
      padding: 18,
      cursor: "default"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--jl-ink-3)",
      fontWeight: 600,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      marginBottom: 8
    }
  }, m.lbl), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: "-0.015em",
      color: m.mint ? "var(--jl-mint)" : "#fff"
    }
  }, m.v), m.sub && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: 11,
      color: "var(--jl-mint)",
      letterSpacing: "0.04em",
      fontFamily: "monospace"
    }
  }, m.sub)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, p.stack.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    className: "jl-tag jl-tag-mint"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), s))), /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: window.t("projet.ctxEyebrow"),
    title: window.t("projet.challenge")
  }), deep.blocks ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: 14
    }
  }, deep.blocks.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.label,
    className: "jl-card jl-card-noh",
    style: {
      padding: 28,
      cursor: "default"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--jl-mint)",
      fontWeight: 600,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, b.label), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.85)",
      letterSpacing: "-0.005em"
    },
    dangerouslySetInnerHTML: {
      __html: b.html
    }
  })))) : /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jl-card jl-card-noh",
    style: {
      padding: 28,
      cursor: "default"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.85)",
      letterSpacing: "-0.005em"
    }
  }, deep.challenge)), /*#__PURE__*/React.createElement("div", {
    className: "jl-card jl-card-noh",
    style: {
      padding: 24,
      cursor: "default",
      background: "linear-gradient(135deg, #1f2a1c 0%, #2a3a22 100%)",
      borderColor: "rgba(177,234,163,0.12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--jl-mint)",
      fontWeight: 600,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      marginBottom: 14
    }
  }, window.t("projet.brief")), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 20,
      fontSize: 14,
      lineHeight: 1.7,
      color: "var(--jl-ink-2)",
      letterSpacing: "-0.005em"
    }
  }, deep.brief.map(b => /*#__PURE__*/React.createElement("li", {
    key: b
  }, b))))), deep.quotes && deep.quotes.afterContext && /*#__PURE__*/React.createElement(PullQuote, {
    text: deep.quotes.afterContext.text,
    source: deep.quotes.afterContext.source
  }), /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: window.t("projet.archEyebrow"),
    title: deep.archTitle,
    italic: deep.archItalic
  }), deep.layers ? /*#__PURE__*/React.createElement(React.Fragment, null, deep.signature && /*#__PURE__*/React.createElement("div", {
    className: "jl-card jl-card-noh",
    style: {
      marginTop: 12,
      padding: "18px 24px",
      cursor: "default",
      background: "linear-gradient(135deg, #1f2a1c 0%, #2a3a22 100%)",
      borderColor: "rgba(177,234,163,0.22)",
      display: "flex",
      gap: 16,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      flexShrink: 0,
      width: 36,
      height: 36,
      borderRadius: 8,
      background: "rgba(177,234,163,0.18)",
      border: "1px solid var(--jl-mint)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--jl-mint)",
      fontSize: 18
    }
  }, "\u2605"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--jl-mint)",
      fontWeight: 600,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, window.t("projet.signature")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "rgba(255,255,255,0.92)",
      letterSpacing: "-0.005em",
      lineHeight: 1.45
    },
    dangerouslySetInnerHTML: {
      __html: deep.signature
    }
  }))), [deep.signatureImage, ...(deep.extraImages || [])].filter(Boolean).map((img, idx) => /*#__PURE__*/React.createElement("div", {
    key: img.src,
    className: "jl-card jl-card-noh",
    style: {
      marginTop: idx === 0 ? 14 : 12,
      padding: 0,
      cursor: "default",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setLightbox(img.src),
    style: {
      display: "block",
      width: "100%",
      padding: 0,
      border: 0,
      background: "transparent",
      cursor: "zoom-in"
    },
    "aria-label": img.caption
  }, /*#__PURE__*/React.createElement("img", {
    src: img.src,
    alt: img.caption,
    loading: "lazy",
    style: {
      width: "100%",
      display: "block"
    }
  })), img.caption && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 20px",
      fontSize: 11.5,
      color: "var(--jl-ink-3)",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      borderTop: "1px solid var(--jl-line)"
    }
  }, img.caption))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: "flex",
      flexDirection: "column",
      gap: 0
    }
  }, deep.layers.map((L, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: L.tier
  }, /*#__PURE__*/React.createElement("div", {
    className: "jl-card jl-card-noh",
    style: {
      padding: "22px 28px",
      cursor: "default",
      position: "relative",
      display: "flex",
      alignItems: "center",
      gap: 20,
      ...(L.highlight ? {
        borderColor: "rgba(177,234,163,0.45)",
        boxShadow: "0 0 0 1px rgba(177,234,163,0.15) inset",
        background: "linear-gradient(135deg, rgba(31,42,28,0.55) 0%, rgba(42,58,34,0.4) 100%)"
      } : {})
    }
  }, L.highlight && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 10,
      right: 14,
      padding: "2px 8px",
      borderRadius: 999,
      background: "rgba(177,234,163,0.18)",
      color: "var(--jl-mint)",
      fontSize: 9,
      letterSpacing: "0.14em",
      fontWeight: 600
    }
  }, "SIGNATURE"), /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      minWidth: 160,
      maxWidth: 220
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--jl-mint)",
      fontWeight: 600,
      letterSpacing: "0.16em",
      textTransform: "uppercase"
    }
  }, L.tier), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: "-0.02em",
      color: "#fff"
    }
  }, L.platform)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, L.items.map(it => /*#__PURE__*/React.createElement("span", {
    key: it,
    className: "jl-tag jl-tag-mint"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), it))), /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      fontSize: 12,
      color: "var(--jl-ink-3)",
      letterSpacing: "-0.005em",
      textAlign: "right",
      maxWidth: 280,
      lineHeight: 1.4
    }
  }, L.note)), i < deep.layers.length - 1 && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      height: 24,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "rgba(177,234,163,0.35)",
      fontSize: 14,
      fontFamily: "monospace"
    }
  }, "\u2193"))))) : /*#__PURE__*/React.createElement("div", {
    className: "jl-card jl-card-noh",
    style: {
      marginTop: 12,
      padding: 28,
      cursor: "default",
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 900 360",
    style: {
      width: "100%",
      maxWidth: 900,
      display: "block",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "450",
    cy: "180",
    r: "46",
    fill: "rgba(177,234,163,0.18)",
    stroke: "var(--jl-mint)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("text", {
    x: "450",
    y: "178",
    textAnchor: "middle",
    fill: "var(--jl-mint)",
    fontSize: "13",
    fontWeight: "700",
    style: {
      fontFamily: "var(--font-sans)"
    }
  }, deep.archHub.title), /*#__PURE__*/React.createElement("text", {
    x: "450",
    y: "194",
    textAnchor: "middle",
    fill: "rgba(255,255,255,0.7)",
    fontSize: "10",
    style: {
      fontFamily: "monospace",
      letterSpacing: "0.06em"
    }
  }, deep.archHub.sub), deep.agents.map((s, i) => {
    const rad = s.a * Math.PI / 180;
    const x = 450 + Math.cos(rad) * 180;
    const y = 180 + Math.sin(rad) * 130;
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("line", {
      x1: "450",
      y1: "180",
      x2: x,
      y2: y,
      stroke: "rgba(177,234,163,0.3)",
      strokeWidth: "0.7"
    }), /*#__PURE__*/React.createElement("rect", {
      x: x - 60,
      y: y - 26,
      width: "120",
      height: "52",
      rx: "6",
      fill: "rgba(255,255,255,0.04)",
      stroke: "rgba(255,255,255,0.18)",
      strokeWidth: "0.6"
    }), /*#__PURE__*/React.createElement("text", {
      x: x,
      y: y - 5,
      textAnchor: "middle",
      fill: "#fff",
      fontSize: "11",
      fontWeight: "700",
      style: {
        fontFamily: "var(--font-sans)",
        letterSpacing: "-0.01em"
      }
    }, s.name), /*#__PURE__*/React.createElement("text", {
      x: x,
      y: y + 12,
      textAnchor: "middle",
      fill: "rgba(255,255,255,0.5)",
      fontSize: "9",
      style: {
        fontFamily: "monospace",
        letterSpacing: "0.04em"
      }
    }, s.desc));
  }), /*#__PURE__*/React.createElement("rect", {
    x: "200",
    y: "320",
    width: "500",
    height: "28",
    rx: "4",
    fill: "rgba(177,234,163,0.06)",
    stroke: "rgba(177,234,163,0.2)",
    strokeWidth: "0.5",
    strokeDasharray: "4 2"
  }), /*#__PURE__*/React.createElement("text", {
    x: "450",
    y: "338",
    textAnchor: "middle",
    fill: "rgba(177,234,163,0.7)",
    fontSize: "10",
    style: {
      fontFamily: "monospace",
      letterSpacing: "0.16em"
    }
  }, deep.archData), [260, 360, 460, 560, 660].map(x => /*#__PURE__*/React.createElement("line", {
    key: x,
    x1: x,
    y1: "226",
    x2: x,
    y2: "320",
    stroke: "rgba(177,234,163,0.15)",
    strokeWidth: "0.4",
    strokeDasharray: "2 2"
  })))), /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: window.t("projet.resEyebrow"),
    title: window.t("projet.delivered1"),
    italic: window.t("projet.delivered2")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 14
    }
  }, deep.results.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "jl-card jl-card-noh",
    style: {
      padding: 28,
      cursor: "default",
      textAlign: "center",
      minHeight: 160,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  }, r.n === "laurel" ? /*#__PURE__*/React.createElement(ResultIcon, {
    kind: "laurel"
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 64,
      fontWeight: 800,
      letterSpacing: "-0.05em",
      lineHeight: 0.9,
      color: "var(--jl-mint)"
    }
  }, r.n), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: 13,
      color: "var(--jl-ink-2)",
      letterSpacing: "-0.005em"
    }
  }, r.l)))), deep.quotes && deep.quotes.afterResults && /*#__PURE__*/React.createElement(PullQuote, {
    text: deep.quotes.afterResults.text,
    source: deep.quotes.afterResults.source
  }), p.media && (() => {
    const slides = [];
    if (p.media.video) slides.push({
      k: "video",
      label: "Démo vidéo",
      ...p.media.video
    });
    if (p.media.deck) slides.push({
      k: "deck",
      label: "Pitch deck",
      ...p.media.deck
    });
    if (p.media.live) slides.push({
      k: "live",
      label: "Live",
      ...p.media.live
    });
    if (!slides.length && !p.media.deckLink) return null;
    return /*#__PURE__*/React.createElement("div", {
      id: "media",
      style: {
        scrollMarginTop: 24
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: window.t("projet.mediaEyebrow"),
      title: window.t("projet.demo1"),
      italic: window.t("projet.demo2")
    }), slides.length > 0 && /*#__PURE__*/React.createElement(MediaCarousel, {
      slides: slides
    }));
  })(), p.media && p.media.photos && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: window.t("projet.momentsEyebrow"),
    title: window.t("projet.moments")
  })), p.media && p.media.photos ? (() => {
    const photos = p.media.photos;
    const useWide = photos.length >= 7;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12,
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridAutoRows: 260,
        gap: 12
      }
    }, photos.map((src, i) => /*#__PURE__*/React.createElement("button", {
      key: src,
      type: "button",
      onClick: () => setLightbox(src),
      style: {
        border: "1px solid var(--jl-line)",
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        gridColumn: useWide && (i === 0 || i === 3) ? "span 2" : "span 1",
        padding: 0,
        background: "transparent",
        cursor: "zoom-in",
        display: "block"
      },
      "aria-label": `Photo ${i + 1}. ${p.title}`
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: `${p.title}. Moment ${i + 1}`,
      loading: "lazy",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
        transition: "transform 0.5s ease"
      }
    }))));
  })() : null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: window.t("projet.continue"),
    title: window.t("projet.otherProjects"),
    right: {
      label: window.t("act.seeAll"),
      href: "projets.html"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 14
    }
  }, otherProjects.map(o => /*#__PURE__*/React.createElement(ProjectCard, {
    key: o.slug,
    p: o
  }))), lightbox && /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Photo agrandie",
    onClick: () => setLightbox(null),
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 1000,
      background: "rgba(10, 10, 10, 0.95)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 32,
      cursor: "zoom-out"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: e => {
      e.stopPropagation();
      setLightbox(null);
    },
    "aria-label": "Fermer",
    style: {
      position: "absolute",
      top: 24,
      right: 32,
      background: "none",
      border: "none",
      color: "#fff",
      fontSize: 32,
      cursor: "pointer",
      lineHeight: 1
    }
  }, "\xD7"), /*#__PURE__*/React.createElement("img", {
    src: lightbox,
    alt: "",
    style: {
      maxWidth: "100%",
      maxHeight: "100%",
      objectFit: "contain"
    }
  })));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(ProjetApp, null));
})();
