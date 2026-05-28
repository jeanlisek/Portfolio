/* AUTO-GENERATED from src/page-home.jsx by build.js — edit the .jsx, then re-run `node build.js` */
(function () {
/* global React, ReactDOM */

const D = window.JL;
const {
  Shell,
  SectionHead,
  ProjectCard,
  TravelCard,
  ArticleCard,
  ProjectSigil,
  ArticleSigil,
  SkillIcon,
  LaurelIcon,
  Logo
} = window;
const {
  useState,
  useEffect
} = React;
function Hero() {
  const photos = [{
    id: "hero-mirror",
    src: "media/photos/01-mirror-reflet.jpeg"
  }, {
    id: "hero-iridescent",
    src: "media/photos/02-iridescent-glass.jpeg"
  }, {
    id: "hero-byheart",
    src: "media/photos/03-copenhagen-by-heart.jpeg"
  }, {
    id: "hero-diamond",
    src: "media/photos/04-black-diamond.jpeg"
  }, {
    id: "hero-spheres",
    src: "media/photos/05-spheres-copenhagen.jpeg"
  }, {
    id: "hero-rijks",
    src: "media/photos/06-rijksmuseum.jpeg"
  }, {
    id: "hero-spire",
    src: "media/photos/07-spire-frame.jpeg"
  }];
  const [ix, setIx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIx(i => (i + 1) % photos.length), 6000);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "jl-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jl-hero-photos"
  }, photos.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    className: i === ix ? "on" : ""
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: p.id,
    src: p.src,
    placeholder: "Photo voyage"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "jl-hero-scrim-full"
  }), /*#__PURE__*/React.createElement("div", {
    className: "jl-hero-inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "jl-hero-eyebrow"
  }, D.brand.mantra), /*#__PURE__*/React.createElement("h1", {
    className: "jl-hero-title"
  }, "By\xA0", /*#__PURE__*/React.createElement("span", {
    className: "jl-italic"
  }, "Joliment"), "."), /*#__PURE__*/React.createElement("p", {
    className: "jl-hero-tagline",
    dangerouslySetInnerHTML: {
      __html: window.t("home.tagline")
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "projets.html",
    className: "jl-btn jl-btn-primary"
  }, window.t("home.seeProjects")), /*#__PURE__*/React.createElement("a", {
    href: "blog.html",
    className: "jl-btn jl-btn-ghost"
  }, window.t("home.readBlog"))), /*#__PURE__*/React.createElement("a", {
    href: "collab.html",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      marginTop: 16,
      fontSize: 13,
      color: "var(--jl-ink-2)",
      fontWeight: 500,
      letterSpacing: "-0.005em"
    }
  }, window.t("home.exploreCollab"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--jl-mint)"
    }
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 16,
      left: 40,
      zIndex: 3
    },
    className: "jl-scroll-cue"
  }, /*#__PURE__*/React.createElement("span", null, window.t("home.scroll")), /*#__PURE__*/React.createElement("span", {
    className: "line"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--jl-mint)"
    }
  }, "\u2193")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 16,
      right: 18,
      zIndex: 3,
      display: "flex",
      gap: 6,
      alignItems: "center",
      padding: "6px 12px",
      background: "rgba(0,0,0,0.4)",
      backdropFilter: "blur(6px)",
      borderRadius: 999
    }
  }, photos.map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: p.id,
    style: {
      width: i === ix ? 14 : 5,
      height: 5,
      borderRadius: 999,
      background: i === ix ? "var(--jl-mint)" : "rgba(255,255,255,0.35)",
      transition: "all 0.4s ease"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 10,
      fontSize: 10.5,
      color: "var(--jl-ink-3)",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      fontWeight: 500
    }
  }, window.t("home.photos"))));
}
function AboutTeaser() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: window.t("home.whoSpeaks"),
    title: "Jean-Li."
  }), /*#__PURE__*/React.createElement("div", {
    className: "jl-card jl-card-noh",
    style: {
      marginTop: 12,
      padding: 14,
      display: "grid",
      gridTemplateColumns: "140px 1fr auto",
      gap: 24,
      alignItems: "center",
      cursor: "default"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 140,
      height: 140,
      borderRadius: 8,
      overflow: "hidden",
      background: "linear-gradient(135deg, #2a3a32 0%, #4a6a58 100%)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "media/about-photo.JPG",
    alt: "Portrait de Jean-Li Sek",
    loading: "lazy",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingRight: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--jl-ink-3)",
      fontWeight: 500,
      letterSpacing: "-0.005em",
      marginBottom: 6
    }
  }, D.about.titleLine), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.85)",
      letterSpacing: "-0.005em"
    }
  }, D.about.intro), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: 12,
      color: "var(--jl-ink-3)",
      fontStyle: "italic",
      fontFamily: "var(--font-italic)"
    }
  }, "\xAB ", D.about.quote, " \xBB ", D.about.cite)), /*#__PURE__*/React.createElement("a", {
    href: "a-propos.html",
    className: "jl-btn jl-btn-quiet"
  }, window.t("home.readAbout"))));
}
function ProjectsRow() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: window.t("home.recent"),
    title: window.t("projets.title1"),
    italic: window.t("home.building"),
    right: {
      label: window.t("act.seeAll"),
      href: "projets.html"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 14,
      marginTop: 12
    }
  }, D.projets.slice(0, 4).map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.slug,
    p: p
  }))));
}
function TravelRow() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: window.t("about.travelEyebrow"),
    title: window.t("home.travelTitle"),
    sub: window.t("home.travelSub"),
    right: {
      label: window.t("home.travelAll"),
      href: "a-propos.html#voyage"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: 14,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(TravelCard, {
    stop: D.travelStops[0],
    big: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateRows: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(TravelCard, {
    stop: D.travelStops[1]
  }), /*#__PURE__*/React.createElement(TravelCard, {
    stop: D.travelStops[2]
  }))));
}
function BlogRow() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: window.t("home.blogEyebrow"),
    title: window.t("home.discover"),
    italic: window.t("home.transmit"),
    sub: window.t("home.blogSub"),
    right: {
      label: window.t("home.readArticles"),
      href: "blog.html"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 14,
      marginTop: 12
    }
  }, D.articles.slice(0, 3).map(a => /*#__PURE__*/React.createElement(ArticleCard, {
    key: a.slug,
    a: a
  }))));
}
function SkillsRow() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: window.t("home.skills"),
    title: window.t("home.stackTitle") || "Stack.",
    right: {
      label: window.t("act.seeAll"),
      href: "a-propos.html#stack"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 14,
      marginTop: 12
    }
  }, D.skillsGroups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.cat,
    className: "jl-card jl-card-noh",
    style: {
      padding: "18px 18px 16px",
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--jl-mint)",
      fontWeight: 600,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 1,
      background: "var(--jl-mint)",
      opacity: 0.6
    }
  }), g.cat), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, g.skills.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.l,
    className: "jl-tag"
  }, /*#__PURE__*/React.createElement(SkillIcon, {
    kind: s.k
  }), s.l)))))));
}
function Testimonials() {
  // Featured: Matthieu L. (ml) + Thomas Escot (te)
  const FEATURED_IDS = ["ml", "te"];
  const visible = FEATURED_IDS.map(id => D.testimonials.find(t => t.id === id)).filter(Boolean);
  const others = D.testimonials.filter(t => !FEATURED_IDS.includes(t.id));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: window.t("home.recos"),
    title: window.t("home.whatThey"),
    italic: window.t("home.saying"),
    right: {
      label: `‹ ${visible.length}/${D.testimonials.length} ›`,
      href: "a-propos.html#recos"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 0.55fr",
      gap: 14,
      marginTop: 12
    }
  }, visible.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    className: "jl-card jl-card-noh",
    style: {
      padding: 22,
      display: "flex",
      flexDirection: "column",
      gap: 14,
      minHeight: 170
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      color: "var(--jl-mint)",
      fontFamily: "var(--font-italic)",
      lineHeight: 0.6,
      height: 14
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.85)",
      letterSpacing: "-0.005em",
      flex: 1,
      display: "-webkit-box",
      WebkitLineClamp: 4,
      WebkitBoxOrient: "vertical",
      overflow: "hidden"
    }
  }, t.q), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      paddingTop: 10,
      borderTop: "1px solid var(--jl-line)"
    }
  }, t.src ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: "50%",
      overflow: "hidden",
      flexShrink: 0,
      border: "1px solid rgba(177,234,163,0.3)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: t.src,
    alt: t.n,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: "rgba(177,234,163,0.15)",
      color: "var(--jl-mint)",
      display: "grid",
      placeItems: "center",
      fontSize: 11,
      fontWeight: 700,
      flexShrink: 0
    }
  }, t.initials), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      letterSpacing: "-0.005em",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, t.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--jl-ink-3)",
      marginTop: 2,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, t.r))))), /*#__PURE__*/React.createElement("div", {
    className: "jl-card jl-card-noh",
    style: {
      padding: 22,
      minHeight: 170,
      background: "linear-gradient(135deg, #1a1a1a 0%, #16201a 100%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      borderColor: "rgba(177,234,163,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--jl-mint)",
      fontWeight: 600,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      marginBottom: 14
    }
  }, "+ ", others.length, " ", others.length > 1 ? window.t("home.moreReviews") : window.t("home.oneMoreReview")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, others.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, t.src ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 24,
      height: 24,
      borderRadius: "50%",
      overflow: "hidden",
      flexShrink: 0,
      border: "1px solid rgba(177,234,163,0.3)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: t.src,
    alt: t.n,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: 24,
      height: 24,
      borderRadius: "50%",
      background: "rgba(177,234,163,0.15)",
      color: "var(--jl-mint)",
      display: "grid",
      placeItems: "center",
      fontSize: 9.5,
      fontWeight: 700,
      flexShrink: 0
    }
  }, t.initials), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      letterSpacing: "-0.005em",
      lineHeight: 1.2,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, t.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--jl-ink-3)",
      marginTop: 2,
      lineHeight: 1.3,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, t.r)))))), /*#__PURE__*/React.createElement("a", {
    href: "a-propos.html#recos",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 12.5,
      color: "var(--jl-mint)",
      fontWeight: 600,
      letterSpacing: "-0.005em",
      marginTop: 14
    }
  }, window.t("act.readAll"), " ", /*#__PURE__*/React.createElement("span", null, "\u2192")))));
}
function CollabCTA() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 24,
      borderRadius: 12,
      padding: "64px 40px",
      position: "relative",
      overflow: "hidden",
      textAlign: "center",
      background: "linear-gradient(135deg, #1a1f1a 0%, #16241a 100%)",
      border: "1px solid rgba(177,234,163,0.15)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      maxWidth: 720,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontSize: 10.5,
      color: "var(--jl-ink-2)",
      fontWeight: 600,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: "3px 9px",
      background: "var(--jl-mint)",
      color: "#0a0a0a",
      borderRadius: 4
    }
  }, window.t("home.collabNew")), /*#__PURE__*/React.createElement("span", null, window.t("home.collabSpace"))), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 54,
      fontWeight: 700,
      letterSpacing: "-0.04em",
      lineHeight: 0.95,
      color: "#fff",
      textShadow: "0 4px 32px rgba(0,0,0,0.5)",
      textWrap: "balance"
    }
  }, window.t("home.gotProject"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "jl-italic"
  }, window.t("home.buildTogether"))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "22px auto 0",
      fontSize: 16,
      color: "var(--jl-ink-2)",
      maxWidth: 540,
      lineHeight: 1.5,
      letterSpacing: "-0.005em"
    }
  }, window.t("home.collabDesc")), /*#__PURE__*/React.createElement("a", {
    href: "collab.html",
    className: "jl-btn jl-btn-primary",
    style: {
      marginTop: 32,
      padding: "14px 28px",
      fontWeight: 700,
      boxShadow: "0 8px 24px rgba(177,234,163,0.32)"
    }
  }, window.t("home.discoverCollab"), " \u2192")));
}
function HomeApp() {
  return /*#__PURE__*/React.createElement(Shell, {
    page: "accueil"
  }, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(AboutTeaser, null), /*#__PURE__*/React.createElement(ProjectsRow, null), /*#__PURE__*/React.createElement(BlogRow, null), /*#__PURE__*/React.createElement(SkillsRow, null), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(CollabCTA, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(HomeApp, null));
})();
