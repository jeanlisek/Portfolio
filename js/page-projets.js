/* AUTO-GENERATED from src/page-projets.jsx by build.js — edit the .jsx, then re-run `node build.js` */
(function () {
/* global React, ReactDOM */

const D = window.JL;
const {
  Shell,
  SectionHead,
  ProjectCard,
  LaurelIcon
} = window;
const {
  useState
} = React;
function FeaturedProject({
  p
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: "jl-card jl-card-noh",
    href: `projet-${p.slug}.html`,
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 0,
      padding: 0,
      overflow: "hidden",
      textDecoration: "none",
      color: "inherit",
      borderRadius: 12,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: p.gradient,
      position: "relative",
      minHeight: 320,
      overflow: "hidden"
    }
  }, window.ProjectSigil ? /*#__PURE__*/React.createElement(window.ProjectSigil, {
    kind: p.sigil
  }) : null, p.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 18,
      left: 18,
      padding: "5px 12px 5px 9px",
      borderRadius: 999,
      background: "rgba(0,0,0,0.7)",
      backdropFilter: "blur(6px)",
      fontSize: 11,
      fontWeight: 500,
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      letterSpacing: "-0.005em"
    }
  }, /*#__PURE__*/React.createElement(LaurelIcon, null), " ", p.badge, " \xB7 Hackathon")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--jl-mint)",
      fontWeight: 600,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      marginBottom: 14
    }
  }, p.meta), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 36,
      fontWeight: 700,
      letterSpacing: "-0.03em",
      lineHeight: 1.05
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "16px 0 0",
      fontSize: 14.5,
      lineHeight: 1.55,
      color: "var(--jl-ink-2)",
      maxWidth: 380,
      letterSpacing: "-0.005em"
    }
  }, p.desc)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap",
      marginBottom: 18
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "jl-tag"
  }, t))), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--jl-mint)",
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: "-0.005em"
    }
  }, window.t("act.readDetail")))));
}
function ProjectsApp() {
  const filters = [{
    value: "tout",
    label: window.t("filter.all")
  }, {
    value: "hackathon",
    label: window.t("filter.hackathon")
  }, {
    value: "agents ia",
    label: window.t("filter.agentsIa")
  }, {
    value: "rag",
    label: window.t("filter.rag")
  }, {
    value: "data",
    label: window.t("filter.data")
  }, {
    value: "web",
    label: window.t("filter.web")
  }];
  const [filter, setFilter] = useState("tout");
  const filtered = D.projets.filter(p => {
    if (filter === "tout") return true;
    if (filter === "hackathon") return p.tags.some(t => t.includes("hackathon"));
    if (filter === "agents ia") return p.tags.some(t => t.includes("agents"));
    if (filter === "rag") return p.tags.some(t => t.includes("rag") || t.includes("nlp"));
    if (filter === "data") return p.tags.some(t => t.includes("data") || t.includes("finance"));
    if (filter === "web") return p.tags.some(t => t.includes("web") || t.includes("game"));
    return true;
  });
  const featured = filtered.filter(p => p.featured);
  const rest = filtered.filter(p => !p.featured);
  return /*#__PURE__*/React.createElement(Shell, {
    page: "projets",
    chips: filters,
    activeChip: filter,
    onChip: setFilter
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jl-eyebrow"
  }, window.t("projets.portfolio"), " \xB7 ", D.projets.length, " ", window.t("projets.count")), /*#__PURE__*/React.createElement("h1", {
    className: "jl-page-title"
  }, window.t("projets.title1"), " ", /*#__PURE__*/React.createElement("span", {
    className: "jl-italic"
  }, window.t("home.building")), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "20px 0 0",
      fontSize: 17,
      color: "var(--jl-ink-2)",
      lineHeight: 1.5,
      letterSpacing: "-0.005em"
    }
  }, D.projets.length, " ", window.t("projets.intro"), /*#__PURE__*/React.createElement("br", null), window.t("projets.intro2"))), featured.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: window.t("projets.featured"),
    title: window.t("projets.finalists")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: featured.length === 1 ? "1fr" : "repeat(2, 1fr)",
      gap: 14,
      marginTop: 12
    }
  }, featured.map(p => /*#__PURE__*/React.createElement(FeaturedProject, {
    key: p.slug,
    p: p
  })))), /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: window.t("projets.otherTag"),
    title: window.t("projets.others1"),
    italic: window.t("projets.others2")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 14,
      marginTop: 12
    }
  }, rest.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.slug,
    p: p
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 32,
      background: "linear-gradient(135deg, #1a1f1a 0%, #16241a 100%)",
      border: "1px solid rgba(177,234,163,0.15)",
      borderRadius: 12,
      padding: "28px 36px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--jl-mint)",
      fontWeight: 600,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      marginBottom: 10
    }
  }, window.t("projets.note")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      lineHeight: 1.45,
      fontWeight: 600,
      letterSpacing: "-0.01em",
      maxWidth: 580
    }
  }, window.t("projets.noteText"))), /*#__PURE__*/React.createElement("a", {
    href: "collab.html",
    className: "jl-btn jl-btn-primary"
  }, window.t("projets.seeCollab"))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(ProjectsApp, null));
})();
