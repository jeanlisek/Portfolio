/* AUTO-GENERATED from src/page-blog.jsx by build.js — edit the .jsx, then re-run `node build.js` */
(function () {
/* global React, ReactDOM */
const D = window.JL;
const {
  Shell,
  SectionHead,
  ArticleCard,
  ArticleSigil
} = window;
function PillarCard({
  p,
  ix
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "jl-card jl-card-noh",
    style: {
      padding: 28,
      cursor: "default"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--jl-mint)",
      fontWeight: 600,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      marginBottom: 16
    }
  }, window.t("blog.pillar"), " 0", ix + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 28,
      fontWeight: 700,
      letterSpacing: "-0.025em",
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "jl-italic"
  }, p.title, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "16px 0 0",
      fontSize: 14.5,
      color: "var(--jl-ink-2)",
      lineHeight: 1.5,
      letterSpacing: "-0.005em"
    }
  }, p.body));
}
function BigArticleCard({
  a,
  featured
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: "jl-card",
    href: `#${a.slug}`,
    style: {
      display: "flex",
      flexDirection: featured ? "row" : "column",
      gap: featured ? 24 : 14,
      padding: featured ? 0 : 14,
      textDecoration: "none",
      color: "inherit",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: featured ? "0 0 50%" : "auto",
      height: featured ? 280 : 120,
      borderRadius: featured ? "8px 0 0 8px" : 6,
      background: "linear-gradient(135deg, #20302a 0%, #16241f 100%)",
      position: "relative",
      overflow: "hidden",
      border: featured ? "none" : "1px solid var(--jl-line)"
    }
  }, /*#__PURE__*/React.createElement(ArticleSigil, {
    kind: a.sigil
  }), a.soon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 12,
      right: 12,
      padding: "3px 9px",
      borderRadius: 999,
      background: "rgba(177,234,163,0.18)",
      color: "var(--jl-mint)",
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: "-0.005em"
    }
  }, window.t("blog.comingSoon"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: featured ? "28px 32px 28px 0" : 0,
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--jl-ink-3)",
      fontWeight: 500,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      marginBottom: 6,
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, a.cat), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--jl-ink-4)"
    }
  }, "\xB7 ", a.read)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: featured ? 30 : 16,
      fontWeight: 700,
      letterSpacing: "-0.02em",
      lineHeight: 1.15
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "10px 0 0",
      fontSize: featured ? 15 : 12.5,
      color: "var(--jl-ink-2)",
      lineHeight: 1.5,
      letterSpacing: "-0.005em",
      display: featured ? "block" : "-webkit-box",
      WebkitLineClamp: featured ? "none" : 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden"
    }
  }, a.desc), featured && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 16,
      color: "var(--jl-mint)",
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: "-0.005em"
    }
  }, window.t("blog.readArticle"))));
}
function BlogApp() {
  const featured = D.articles[0];
  const rest = D.articles.slice(1);
  return /*#__PURE__*/React.createElement(Shell, {
    page: "blog",
    chips: [{
      value: "tout",
      label: window.t("filter.all")
    }, {
      value: "infrastructure",
      label: window.t("filter.infra")
    }, {
      value: "automatisation",
      label: window.t("filter.automation")
    }, {
      value: "ia & agents",
      label: window.t("filter.iaAgents")
    }, {
      value: "finance",
      label: window.t("filter.finance")
    }, {
      value: "python",
      label: window.t("filter.python")
    }],
    activeChip: "tout"
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jl-eyebrow"
  }, window.t("blog.tag"), " \xB7 ", D.articles.length, " ", window.t("blog.inPrep")), /*#__PURE__*/React.createElement("h1", {
    className: "jl-page-title"
  }, window.t("blog.title1"), " ", /*#__PURE__*/React.createElement("span", {
    className: "jl-italic"
  }, window.t("blog.title2"))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "20px 0 0",
      fontSize: 17,
      color: "var(--jl-ink-2)",
      lineHeight: 1.5,
      letterSpacing: "-0.005em"
    }
  }, window.t("blog.intro"))), /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: window.t("blog.principles"),
    title: window.t("blog.howWrite1"),
    italic: window.t("blog.howWrite2")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 14,
      marginTop: 12
    }
  }, D.pillars.map((p, i) => /*#__PURE__*/React.createElement(PillarCard, {
    key: p.title,
    p: p,
    ix: i
  }))), /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: window.t("blog.featured"),
    title: window.t("blog.next")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(BigArticleCard, {
    a: featured,
    featured: true
  })), /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: `${window.t("blog.allTag")} ${rest.length} ${window.t("blog.allOthers")}`,
    title: window.t("blog.allArticles")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 14
    }
  }, rest.map(a => /*#__PURE__*/React.createElement(ArticleCard, {
    key: a.slug,
    a: a
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 32,
      borderRadius: 12,
      background: "linear-gradient(135deg, #1a1f1a 0%, #14201a 100%)",
      border: "1px solid rgba(177,234,163,0.15)",
      padding: "32px 36px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "jl-eyebrow",
    style: {
      color: "var(--jl-mint)"
    }
  }, window.t("blog.newsletter")), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "8px 0 0",
      fontSize: 32,
      fontWeight: 700,
      letterSpacing: "-0.03em",
      lineHeight: 1
    }
  }, window.t("blog.notified1"), " ", /*#__PURE__*/React.createElement("span", {
    className: "jl-italic"
  }, window.t("blog.notified2"))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "10px 0 0",
      fontSize: 14,
      color: "var(--jl-ink-2)",
      lineHeight: 1.5,
      letterSpacing: "-0.005em"
    }
  }, window.t("blog.newsletterDesc"))), /*#__PURE__*/React.createElement(Newsletter, null)));
}
function Newsletter() {
  const [state, setState] = React.useState("idle"); // idle | sending | sent | error
  const onSubmit = async e => {
    e.preventDefault();
    if (state === "sending") return;
    const f = e.currentTarget;
    const email = f.email.value.trim();
    setState("sending");
    try {
      await window.submitForm("contacts", {
        prenom: "",
        email,
        sujet: "Newsletter",
        message: "Inscription newsletter (blog)"
      });
      f.reset();
      setState("sent");
      setTimeout(() => setState("idle"), 4000);
    } catch (err) {
      setState("error");
      setTimeout(() => setState("idle"), 4000);
    }
  };
  const label = state === "error" ? window.t("form.error") : state === "sending" ? window.t("form.sending") : state === "sent" ? window.t("blog.subscribed") : window.t("blog.subscribe");
  return /*#__PURE__*/React.createElement("form", {
    style: {
      display: "flex",
      gap: 8
    },
    onSubmit: onSubmit
  }, /*#__PURE__*/React.createElement("input", {
    name: "email",
    type: "email",
    required: true,
    style: {
      flex: 1,
      minWidth: 280,
      background: "rgba(0,0,0,0.35)",
      border: "1px solid rgba(177,234,163,0.15)",
      borderRadius: 999,
      padding: "12px 18px",
      color: "#fff",
      fontSize: 14,
      fontFamily: "inherit",
      letterSpacing: "-0.005em",
      outline: "none",
      transition: "border-color 0.15s, background 0.15s"
    },
    placeholder: window.t("blog.emailPlaceholder"),
    onFocus: e => {
      e.target.style.borderColor = "var(--jl-mint)";
      e.target.style.background = "rgba(0,0,0,0.5)";
    },
    onBlur: e => {
      e.target.style.borderColor = "rgba(177,234,163,0.15)";
      e.target.style.background = "rgba(0,0,0,0.35)";
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "jl-btn jl-btn-primary",
    type: "submit",
    disabled: state === "sending",
    style: {
      opacity: state === "sending" ? 0.7 : 1
    }
  }, label));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(BlogApp, null));
})();
