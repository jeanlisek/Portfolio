/* global React, ReactDOM */

const D = window.JL;
const { Shell, SectionHead, ProjectCard, LaurelIcon } = window;

const { useState } = React;

function FeaturedProject({ p }) {
  return (
    <a className="jl-card jl-card-noh" href={`projet-${p.slug}.html`} style={{
      display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 0,
      padding: 0, overflow: "hidden", textDecoration: "none", color: "inherit",
      borderRadius: 12, cursor: "pointer",
    }}>
      <div style={{
        background: p.gradient, position: "relative", minHeight: 320,
        overflow: "hidden",
      }}>
        {window.ProjectSigil ? <window.ProjectSigil kind={p.sigil} /> : null}
        {p.badge && (
          <div style={{
            position: "absolute", top: 18, left: 18,
            padding: "5px 12px 5px 9px", borderRadius: 999,
            background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)",
            fontSize: 11, fontWeight: 500, color: "#fff",
            display: "inline-flex", alignItems: "center", gap: 6,
            letterSpacing: "-0.005em",
          }}>
            <LaurelIcon /> {p.badge} · Hackathon
          </div>
        )}
      </div>
      <div style={{ padding: 32, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: 11, color: "var(--jl-mint)", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14 }}>
            {p.meta}
          </div>
          <h3 style={{ margin: 0, fontSize: 36, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            {p.title}
          </h3>
          <p style={{ margin: "16px 0 0", fontSize: 14.5, lineHeight: 1.55, color: "var(--jl-ink-2)", maxWidth: 380, letterSpacing: "-0.005em" }}>
            {p.desc}
          </p>
        </div>
        <div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 18 }}>
            {p.tags.map(t => <span key={t} className="jl-tag">{t}</span>)}
          </div>
          <span style={{ color: "var(--jl-mint)", fontWeight: 600, fontSize: 13, letterSpacing: "-0.005em" }}>
            {window.t("act.readDetail")}
          </span>
        </div>
      </div>
    </a>
  );
}

function ProjectsApp() {
  const filters = [
    { value: "tout", label: window.t("filter.all") },
    { value: "hackathon", label: window.t("filter.hackathon") },
    { value: "agents ia", label: window.t("filter.agentsIa") },
    { value: "rag", label: window.t("filter.rag") },
    { value: "data", label: window.t("filter.data") },
    { value: "web", label: window.t("filter.web") },
  ];
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

  return (
    <Shell page="projets" chips={filters} activeChip={filter} onChip={setFilter}>
      <header style={{ paddingTop: 8 }}>
        <div className="jl-eyebrow">{window.t("projets.portfolio")} · {D.projets.length} {window.t("projets.count")}</div>
        <h1 className="jl-page-title">
          {window.t("projets.title1")} <span className="jl-italic">{window.t("home.building")}</span>.
        </h1>
        <p style={{ margin: "20px 0 0", fontSize: 17, color: "var(--jl-ink-2)", lineHeight: 1.5, letterSpacing: "-0.005em" }}>
          {D.projets.length} {window.t("projets.intro")}<br />
          {window.t("projets.intro2")}
        </p>
      </header>

      {/* Featured */}
      {featured.length > 0 && (
        <>
          <SectionHead eyebrow={window.t("projets.featured")} title={window.t("projets.finalists")} />
          <div style={{ display: "grid", gridTemplateColumns: featured.length === 1 ? "1fr" : "repeat(2, 1fr)", gap: 14, marginTop: 12 }}>
            {featured.map(p => <FeaturedProject key={p.slug} p={p} />)}
          </div>
        </>
      )}

      {/* Rest */}
      <SectionHead eyebrow={window.t("projets.otherTag")} title={window.t("projets.others1")} italic={window.t("projets.others2")} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginTop: 12 }}>
        {rest.map(p => <ProjectCard key={p.slug} p={p} />)}
      </div>

      {/* Note about open positions */}
      <section style={{
        marginTop: 32,
        background: "linear-gradient(135deg, #1a1f1a 0%, #16241a 100%)",
        border: "1px solid rgba(177,234,163,0.15)",
        borderRadius: 12,
        padding: "28px 36px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 32,
      }}>
        <div>
          <div style={{ fontSize: 11, color: "var(--jl-mint)", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 10 }}>
            {window.t("projets.note")}
          </div>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.45, fontWeight: 600, letterSpacing: "-0.01em", maxWidth: 580 }}>
            {window.t("projets.noteText")}
          </p>
        </div>
        <a href="collab.html" className="jl-btn jl-btn-primary">{window.t("projets.seeCollab")}</a>
      </section>
    </Shell>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ProjectsApp />);
