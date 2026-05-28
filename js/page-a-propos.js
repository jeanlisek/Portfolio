/* AUTO-GENERATED from src/page-a-propos.jsx by build.js — edit the .jsx, then re-run `node build.js` */
(function () {
/* global React, ReactDOM */
const D = window.JL;
const {
  Shell,
  SectionHead,
  TravelCard,
  SkillIcon
} = window;
function AboutApp() {
  return /*#__PURE__*/React.createElement(Shell, {
    page: "a-propos"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 8,
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: 32,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "4 / 5",
      borderRadius: 12,
      background: "linear-gradient(135deg, #2a3a32 0%, #4a6a58 100%)",
      overflow: "hidden",
      position: "relative"
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
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "jl-eyebrow"
  }, window.t("about.eyebrow"), " \xB7 ", D.about.titleLine.split(" · ")[0]), /*#__PURE__*/React.createElement("h1", {
    className: "jl-page-title",
    style: {
      fontSize: 72
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "jl-italic"
  }, "Jean-Li"), " Sek."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "20px 0 0",
      fontSize: 17,
      color: "var(--jl-ink-2)",
      maxWidth: 540,
      lineHeight: 1.5,
      letterSpacing: "-0.005em"
    }
  }, D.about.titleLine), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "jl-btn jl-btn-primary"
  }, window.t("about.contactMe")), /*#__PURE__*/React.createElement("a", {
    href: "collab.html",
    className: "jl-btn jl-btn-ghost"
  }, window.t("about.collabSpace"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 40,
      borderRadius: 12,
      background: "linear-gradient(135deg, #1a201a 0%, #1a201a 50%, #0f140e 100%)",
      border: "1px solid rgba(177,234,163,0.12)",
      padding: "48px 60px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 20,
      left: 30,
      fontSize: 100,
      color: "var(--jl-mint)",
      fontFamily: "var(--font-italic)",
      lineHeight: 0.6,
      opacity: 0.7
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      paddingLeft: 56,
      fontFamily: "var(--font-italic)",
      fontStyle: "italic",
      fontSize: 36,
      fontWeight: 600,
      color: "#fff",
      letterSpacing: "-0.015em",
      lineHeight: 1.2,
      maxWidth: 880,
      textWrap: "balance"
    }
  }, D.about.quote), /*#__PURE__*/React.createElement("cite", {
    style: {
      display: "block",
      marginTop: 18,
      paddingLeft: 56,
      fontSize: 12,
      color: "var(--jl-mint)",
      fontWeight: 600,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      fontStyle: "normal"
    }
  }, D.about.cite)), /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: window.t("about.whySite"),
    title: window.t("about.howGetHere1"),
    italic: window.t("about.howGetHere2")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, D.about.longBio.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: 0,
      fontSize: 16.5,
      lineHeight: 1.65,
      color: i === 0 ? "rgba(255,255,255,0.92)" : "var(--jl-ink-2)",
      letterSpacing: "-0.005em"
    }
  }, p))), /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: window.t("about.journey"),
    title: window.t("about.experiences1"),
    italic: window.t("about.experiences2")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, [{
    title: window.t("about.formationLbl"),
    items: D.about.formation
  }, {
    title: window.t("about.experiencesLbl"),
    items: D.about.experiences
  }].map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
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
      marginBottom: 18
    }
  }, col.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, col.items.map(item => /*#__PURE__*/React.createElement("div", {
    key: item.period,
    style: {
      display: "flex",
      gap: 14,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      marginTop: 6,
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: item.faint ? "rgba(177,234,163,0.25)" : "var(--jl-mint)",
      boxShadow: item.faint ? "none" : "0 0 8px rgba(177,234,163,0.4)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--jl-ink-3)",
      fontWeight: 500,
      letterSpacing: "0.04em",
      fontFamily: "var(--font-mono)"
    }
  }, item.period), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: 14.5,
      fontWeight: 500,
      color: item.faint ? "var(--jl-ink-2)" : "#fff",
      letterSpacing: "-0.005em",
      lineHeight: 1.4
    }
  }, item.body)))))))), /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: window.t("about.inParallel"),
    title: window.t("about.whatInterests1"),
    italic: window.t("about.whatInterests2")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, [{
    title: window.t("about.interestsLbl"),
    items: D.about.interests
  }, {
    title: window.t("about.currentlyLbl"),
    items: D.about.currently
  }].map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
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
      marginBottom: 14
    }
  }, col.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18,
      display: "flex",
      flexDirection: "column",
      gap: 9,
      fontSize: 14,
      lineHeight: 1.5,
      color: "var(--jl-ink-2)",
      letterSpacing: "-0.005em"
    }
  }, col.items.map(item => /*#__PURE__*/React.createElement("li", {
    key: item
  }, item)))))), /*#__PURE__*/React.createElement(SectionHead, {
    id: "stack",
    eyebrow: window.t("about.skills"),
    title: window.t("about.whatMaster1"),
    italic: window.t("about.whatMaster2")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 14,
      alignItems: "start"
    }
  }, D.skillsGroups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.cat,
    className: "jl-card jl-card-noh",
    style: {
      padding: "22px 20px 20px",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      cursor: "default"
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
      flexDirection: "column",
      gap: 14
    }
  }, g.skills.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: "-0.01em",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(SkillIcon, {
    kind: s.k
  }), s.l), s.note && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      marginLeft: 24,
      fontSize: 11.5,
      color: "var(--jl-ink-3)",
      lineHeight: 1.4,
      letterSpacing: "-0.005em"
    }
  }, s.note))))))), /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: window.t("about.languages"),
    title: window.t("about.spoken")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 14
    }
  }, D.languages.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.code,
    className: "jl-card jl-card-noh",
    style: {
      padding: 22,
      cursor: "default"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-italic)",
      fontStyle: "italic",
      fontWeight: 700,
      fontSize: 36,
      color: "var(--jl-mint)",
      letterSpacing: "-0.03em",
      lineHeight: 0.9
    }
  }, l.code), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 15,
      fontWeight: 700,
      letterSpacing: "-0.015em"
    }
  }, l.name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: 12.5,
      color: "var(--jl-ink-2)",
      letterSpacing: "-0.005em"
    }
  }, l.level)))), /*#__PURE__*/React.createElement(SectionHead, {
    id: "recos",
    eyebrow: window.t("about.recos"),
    title: window.t("about.whatThey1"),
    italic: window.t("about.whatThey2")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 14
    }
  }, D.testimonials.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    className: "jl-card jl-card-noh",
    style: {
      padding: 26,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      minHeight: 230,
      cursor: "default"
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
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.85)",
      letterSpacing: "-0.005em",
      flex: 1
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
      width: 36,
      height: 36,
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
      width: 36,
      height: 36,
      borderRadius: "50%",
      background: "rgba(177,234,163,0.15)",
      color: "var(--jl-mint)",
      display: "grid",
      placeItems: "center",
      fontSize: 12,
      fontWeight: 700,
      flexShrink: 0
    }
  }, t.initials), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: "-0.005em"
    }
  }, t.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--jl-ink-3)",
      marginTop: 2
    }
  }, t.r)))))), /*#__PURE__*/React.createElement(SectionHead, {
    id: "voyage",
    eyebrow: window.t("about.travelEyebrow"),
    title: window.t("about.travelTitle"),
    italic: window.t("about.travelItalic"),
    sub: window.t("about.travelSub")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 14
    }
  }, D.travelStops.map(s => /*#__PURE__*/React.createElement(TravelCard, {
    key: s.id,
    stop: s
  }))), /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: window.t("about.support"),
    title: window.t("about.twoAssocs")
  }), D.about.supportDesc && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8,
      fontSize: 14.5,
      color: "var(--jl-ink-2)",
      letterSpacing: "-0.005em",
      lineHeight: 1.55,
      maxWidth: 720
    }
  }, D.about.supportDesc), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 14
    }
  }, D.about.associations.map(a => /*#__PURE__*/React.createElement("a", {
    key: a.name,
    href: a.href,
    target: "_blank",
    rel: "noopener",
    className: "jl-card",
    style: {
      padding: 24,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      textDecoration: "none",
      color: "inherit"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: "-0.015em"
    }
  }, a.name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: 13,
      color: "var(--jl-ink-2)",
      letterSpacing: "-0.005em"
    }
  }, a.desc)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--jl-mint)",
      fontSize: 18
    }
  }, "\u2197")))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 32,
      borderRadius: 12,
      background: "var(--jl-card-2)",
      border: "1px solid var(--jl-line)",
      padding: "32px 36px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "jl-eyebrow",
    style: {
      color: "var(--jl-mint)"
    }
  }, window.t("about.contactEyebrow")), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "8px 0 0",
      fontSize: 32,
      fontWeight: 700,
      letterSpacing: "-0.03em",
      lineHeight: 1
    }
  }, window.t("about.letsTalk1"), " ", /*#__PURE__*/React.createElement("span", {
    className: "jl-italic"
  }, window.t("about.letsTalk2")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: `mailto:${D.brand.email}`,
    className: "jl-btn jl-btn-primary"
  }, D.brand.email), /*#__PURE__*/React.createElement("a", {
    href: "collab.html",
    className: "jl-btn jl-btn-ghost"
  }, window.t("about.collabSpace"), " \u2192"))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(AboutApp, null));
})();
