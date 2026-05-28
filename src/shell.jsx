/* global React */

// ── Shared shell — sidebar + topbar + footer ─────────────────
// Usage:
//   <Shell page="projets" chips={["agents ia", "RAG"]}>
//     <YourPageContent />
//   </Shell>

const D = window.JL;

// ── Supabase form submit (REST insert with the public anon key) ──────────────
// Same project/key the chatbot uses. Tables: contacts, collab_submissions.
const JL_SUPABASE_URL = "https://wpfsrkzhakyumepusmke.supabase.co";
const JL_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwZnNya3poYWt5dW1lcHVzbWtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1NjExNDAsImV4cCI6MjA5MDEzNzE0MH0.yvX67uCTorUwttc-OQ9LEcBouK8zsOL0A_DfazpXhow";
window.submitForm = async function (table, row) {
  const res = await fetch(`${JL_SUPABASE_URL}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      apikey: JL_SUPABASE_ANON_KEY,
      Authorization: "Bearer " + JL_SUPABASE_ANON_KEY,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(row),
  });
  if (!res.ok) throw new Error("Supabase insert failed: " + res.status + " " + (await res.text().catch(() => "")));
  return true;
};

function Logo({ small = false }) {
  return (
    <div className="jl-logo-mark" style={small ? { height: 16 } : undefined}>
      <span className="b1" style={small ? { height: 10, width: 5 } : undefined} />
      <span className="b2" style={small ? { height: 16, width: 5 } : undefined} />
      <span className="pt" style={small ? { width: 4, height: 4 } : undefined} />
    </div>
  );
}

function Sidebar({ page, extra }) {
  return (
    <aside className="jl-sidebar">
      <a href="index.html" className="jl-sidebar-brand">
        <Logo />
        <span>{D.brand.name}</span>
      </a>

      <nav className="jl-nav">
        {D.nav.map(n => (
          <a key={n.slug} href={n.href} className={page === n.slug ? "active" : ""}>
            <span className="ic">{n.ic}</span>
            {n.label}
          </a>
        ))}
      </nav>

      <div className="jl-sidebar-spacer" />

      {/* Optional page-specific extra block */}
      {extra}

      {/* Cette semaine — fil d'updates (placeholder, contenu démo) */}
      <div className="jl-widget">
        <div className="jl-widget-eyebrow" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {window.t("week.title")}
            <span className="dot" />
          </span>
          <span style={{
            fontSize: 9, padding: "2px 6px", borderRadius: 999,
            background: "rgba(177,234,163,0.12)", color: "var(--jl-mint)",
            letterSpacing: "0.1em", fontWeight: 600,
          }}>{window.t("week.demo")}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {D.thisWeek.map(u => (
            <div key={u.day} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ fontSize: 10, color: "var(--jl-ink-4)", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 500, paddingTop: 1, minWidth: 48 }}>{u.day}</span>
              <span style={{ fontSize: 12, color: "var(--jl-ink-2)", letterSpacing: "-0.005em", lineHeight: 1.4 }}>{u.text}</span>
            </div>
          ))}
        </div>
        <a href="blog.html" style={{
          display: "block", marginTop: 14, paddingTop: 10,
          borderTop: "1px solid var(--jl-line)",
          fontSize: 11, color: "var(--jl-mint)", fontWeight: 500, letterSpacing: "-0.005em",
        }}>
          {window.t("week.all")}
        </a>
      </div>
    </aside>
  );
}

function LangToggle({ compact }) {
  const lang = window.JL_LANG;
  const seg = (code) => {
    const active = lang === code;
    return (
      <button
        key={code}
        type="button"
        onClick={() => { if (!active) window.setLang(code); }}
        aria-pressed={active}
        style={{
          padding: compact ? "7px 14px" : "5px 10px",
          border: 0, cursor: active ? "default" : "pointer",
          background: active ? "var(--jl-mint)" : "transparent",
          color: active ? "#0a0a0a" : "var(--jl-ink-2)",
          fontSize: compact ? 13 : 11.5, fontWeight: 700,
          letterSpacing: "0.04em", fontFamily: "inherit",
          flex: compact ? 1 : "none",
          transition: "background 0.15s, color 0.15s",
        }}
      >{code.toUpperCase()}</button>
    );
  };
  return (
    <div
      role="group"
      aria-label="Langue / Language"
      style={{
        display: "flex", alignItems: "center",
        border: "1px solid var(--jl-line-2)", borderRadius: 999,
        overflow: "hidden", flexShrink: 0,
        width: compact ? "100%" : "auto",
      }}
    >
      {seg("fr")}
      {seg("en")}
    </div>
  );
}

function Topbar({ chips, activeChip, onChip, onMenuToggle }) {
  const [q, setQ] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const wrapRef = React.useRef(null);

  // Close on outside click
  React.useEffect(() => {
    if (!open) return undefined;
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const results = React.useMemo(() => {
    const lq = q.trim().toLowerCase();
    if (!lq) return [];
    const matchStr = (s) => (s || "").toLowerCase().includes(lq);
    const projets = (D.projets || []).filter(p =>
      matchStr(p.title) || matchStr(p.sub) || matchStr(p.desc) ||
      (p.tags || []).some(t => matchStr(t)) ||
      (p.stack || []).some(s => matchStr(s))
    ).slice(0, 5).map(p => ({
      kind: "projet", label: window.t("kind.projet"), title: p.title, sub: p.sub || p.meta,
      href: `projet-${p.slug}.html`,
    }));
    const articles = (D.articles || []).filter(a =>
      matchStr(a.title) || matchStr(a.desc) || matchStr(a.cat)
    ).slice(0, 5).map(a => ({
      kind: "article", label: window.t("kind.article"), title: a.title, sub: a.cat,
      href: `blog.html#${a.slug}`,
    }));
    return [...projets, ...articles].slice(0, 8);
  }, [q]);

  const hasResults = results.length > 0;

  return (
    <div className="jl-topbar">
      <div className="jl-topbar-row">
        <button
          type="button"
          className="jl-hamburger"
          onClick={onMenuToggle}
          aria-label="Ouvrir le menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <div className="jl-search" ref={wrapRef} style={{ position: "relative", display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ flexShrink: 0 }}>⌕</span>
          <input
            type="text"
            value={q}
            onChange={(e) => { setQ(e.target.value); setOpen(true); }}
            onFocus={() => setOpen(true)}
            placeholder={window.t("search.placeholder")}
            aria-label="Recherche"
            style={{
              flex: 1, background: "transparent", border: "none",
              color: "var(--jl-ink)", fontSize: 13, fontFamily: "inherit",
              letterSpacing: "-0.005em", outline: "none", padding: 0,
            }}
          />
          {q && (
            <button
              type="button"
              onClick={() => { setQ(""); setOpen(false); }}
              aria-label="Effacer"
              style={{
                background: "transparent", border: 0, padding: 0,
                color: "var(--jl-ink-3)", fontSize: 14, cursor: "pointer", flexShrink: 0,
              }}
            >×</button>
          )}
          {open && q.trim() && (
            <div style={{
              position: "absolute", top: "calc(100% + 6px)", left: 0, right: 0,
              background: "var(--jl-card-2)",
              border: "1px solid var(--jl-line-2)",
              borderRadius: 10, overflow: "hidden",
              boxShadow: "0 12px 32px rgba(0,0,0,0.5)",
              zIndex: 100,
              maxHeight: 360, overflowY: "auto",
            }}>
              {hasResults ? results.map(r => (
                <a
                  key={r.href}
                  href={r.href}
                  style={{
                    display: "flex", alignItems: "center", gap: 12,
                    padding: "10px 14px", textDecoration: "none",
                    color: "var(--jl-ink)", borderBottom: "1px solid var(--jl-line)",
                  }}
                >
                  <span style={{
                    fontSize: 9.5, padding: "3px 7px", borderRadius: 4,
                    background: r.kind === "projet" ? "rgba(177,234,163,0.16)" : "rgba(255,255,255,0.06)",
                    color: r.kind === "projet" ? "var(--jl-mint)" : "var(--jl-ink-2)",
                    fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
                    flexShrink: 0,
                  }}>{r.label}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "-0.005em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.title}</div>
                    {r.sub && <div style={{ fontSize: 11, color: "var(--jl-ink-3)", marginTop: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.sub}</div>}
                  </div>
                </a>
              )) : (
                <div style={{ padding: "16px 14px", fontSize: 12.5, color: "var(--jl-ink-3)" }}>
                  {window.t("search.none")} « {q} »
                </div>
              )}
            </div>
          )}
        </div>
        <div className="jl-topbar-right" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <LangToggle />
          <a href="contact.html" className="jl-btn jl-btn-primary" style={{ padding: "9px 18px", fontSize: 13 }}>
            {window.t("cta.contact")}
          </a>
        </div>
      </div>
      {chips && chips.length > 0 && (
        <div className="jl-chips" style={{ marginLeft: 0 }}>
          {chips.map((c) => {
            const val = typeof c === "string" ? c : c.value;
            const label = typeof c === "string" ? c : c.label;
            return (
              <span key={val}
                className={"jl-chip" + (val === activeChip ? " active" : "")}
                onClick={() => onChip && onChip(val)}>{label}</span>
            );
          })}
        </div>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="jl-footer">
      <div style={{
        display: "grid",
        gridTemplateColumns: "1.6fr auto",
        gap: 40,
        alignItems: "center",
      }}>
        <div>
          <div style={{
            fontSize: 14, color: "var(--jl-mint)",
            fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase",
            marginBottom: 8,
          }}>
            build · learn · collab
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1, color: "var(--jl-ink)" }}>
            {window.t("footer.made")} <span className="jl-italic">{window.t("footer.intention")}</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 14 }}>
          <a
            href={`mailto:${D.brand.email}`}
            className="jl-btn jl-btn-ghost"
            style={{ fontSize: 14, fontWeight: 600, textDecoration: "none", cursor: "pointer" }}
            onClick={(e) => {
              try {
                navigator.clipboard && navigator.clipboard.writeText(D.brand.email);
              } catch (_) {}
            }}
            title="Cliquer pour copier · ouvre aussi ton client mail"
          >
            {D.brand.email} →
          </a>
          <div style={{ display: "flex", gap: 8 }}>
            {(D.brand.socials || []).map(s => (
              <a
                key={s.l}
                href={s.h}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "5px 11px", borderRadius: 999,
                  background: "rgba(255,255,255,0.04)", border: "1px solid var(--jl-line-2)",
                  fontSize: 11, color: "var(--jl-ink-2)", fontWeight: 500, letterSpacing: "-0.005em",
                  textDecoration: "none",
                }}
              >{s.l} ↗</a>
            ))}
          </div>
        </div>
      </div>

      <div className="jl-footer-bot" style={{ justifyContent: "space-between" }}>
        <span>© 2026 By Joliment</span>
        <a
          href="#cookies"
          style={{ color: "var(--jl-ink-4)", cursor: "pointer" }}
          onClick={(e) => {
            e.preventDefault();
            try { localStorage.removeItem("joliment-cookie-consent"); } catch (_) {}
            if (window.gtag) window.gtag("consent", "update", { analytics_storage: "denied" });
            location.reload();
          }}
        >{window.t("footer.cookies")}</a>
      </div>
    </footer>
  );
}

// Section heading helper
function SectionHead({ eyebrow, title, italic, sub, right }) {
  return (
    <div className="jl-section-head">
      <div style={{ flex: 1 }}>
        <div className="jl-eyebrow">{eyebrow}</div>
        <h2 className="jl-h2">
          {title}
          {italic && <> <span className="jl-italic">{italic}</span></>}
        </h2>
        {sub && <p className="sub">{sub}</p>}
      </div>
      {right && <a href={right.href || "#"} className="right">{right.label}</a>}
    </div>
  );
}

// Project signature SVGs
function ProjectSigil({ kind }) {
  const base = { position: "absolute", inset: 0, opacity: 0.7 };
  if (kind === "bars") return (
    <svg viewBox="0 0 100 100" style={base}>
      {[20, 35, 50, 65, 80].map((x, i) => <rect key={x} x={x} y={30 + (i%2)*10} width="8" height={40-(i%2)*10} fill="rgba(255,255,255,0.55)"/>)}
      <line x1="14" y1="78" x2="86" y2="78" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8"/>
    </svg>
  );
  if (kind === "graph") return (
    <svg viewBox="0 0 100 100" style={base}>
      {/* Stack of documents (sources retrieved) */}
      <g transform="translate(20 32)">
        <rect x="0" y="6" width="18" height="22" rx="1" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" strokeWidth="0.4"/>
        <rect x="2" y="3" width="18" height="22" rx="1" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.45)" strokeWidth="0.4"/>
        <rect x="4" y="0" width="18" height="22" rx="1" fill="rgba(177,234,163,0.18)" stroke="rgba(177,234,163,0.75)" strokeWidth="0.5"/>
        <line x1="7" y1="5" x2="20" y2="5" stroke="rgba(177,234,163,0.7)" strokeWidth="0.4"/>
        <line x1="7" y1="9" x2="19" y2="9" stroke="rgba(255,255,255,0.4)" strokeWidth="0.3"/>
        <line x1="7" y1="13" x2="17" y2="13" stroke="rgba(255,255,255,0.4)" strokeWidth="0.3"/>
        <line x1="7" y1="17" x2="18" y2="17" stroke="rgba(255,255,255,0.4)" strokeWidth="0.3"/>
      </g>
      {/* Arrow → */}
      <path d="M 47 49 L 57 49 M 55 46 L 57 49 L 55 52" stroke="rgba(177,234,163,0.85)" strokeWidth="0.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Chat bubble */}
      <path d="M 60 34 L 86 34 Q 88 34 88 36 L 88 56 Q 88 58 86 58 L 72 58 L 67 64 L 67 58 L 62 58 Q 60 58 60 56 Z"
            fill="rgba(177,234,163,0.20)" stroke="rgba(177,234,163,0.85)" strokeWidth="0.6"/>
      <circle cx="68" cy="46" r="1.6" fill="rgba(177,234,163,0.95)"/>
      <circle cx="74" cy="46" r="1.6" fill="rgba(177,234,163,0.95)"/>
      <circle cx="80" cy="46" r="1.6" fill="rgba(177,234,163,0.95)"/>
    </svg>
  );
  if (kind === "orchestration") return (
    <svg viewBox="0 0 100 100" style={base}>
      {[0,1,2,3,4,5].map(i => {
        const a = (i*60)*Math.PI/180;
        const x = 50+Math.cos(a)*26, y = 56+Math.sin(a)*26;
        return <g key={i}>
          <line x1="50" y1="56" x2={x} y2={y} stroke="rgba(255,255,255,0.4)" strokeWidth="0.6"/>
          <circle cx={x} cy={y} r="3.5" fill="rgba(255,255,255,0.6)"/>
        </g>;
      })}
      <circle cx="50" cy="56" r="7" fill="rgba(177,234,163,0.85)"/>
    </svg>
  );
  if (kind === "pipeline") return (
    <svg viewBox="0 0 100 100" style={base}>
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x={12+i*22} y="45" width="18" height="22" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5"/>
          {i<3 && <path d={`M ${30+i*22} 56 L ${34+i*22} 56 M ${32+i*22} 54 L ${34+i*22} 56 L ${32+i*22} 58`} stroke="rgba(177,234,163,0.7)" strokeWidth="0.7" fill="none"/>}
        </g>
      ))}
    </svg>
  );
  if (kind === "finance") return (
    <svg viewBox="0 0 100 100" style={base}>
      <line x1="14" y1="80" x2="86" y2="80" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
      <line x1="14" y1="20" x2="14" y2="80" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
      <polyline points="14,68 26,62 36,55 48,48 58,42 70,36 82,28" fill="none" stroke="rgba(177,234,163,0.9)" strokeWidth="1.5"/>
      {[26,36,48,58,70,82].map((x, i) => <circle key={x} cx={x} cy={[62,55,48,42,36,28][i]} r="1.8" fill="rgba(177,234,163,0.9)"/>)}
    </svg>
  );
  if (kind === "game") return (
    <svg viewBox="0 0 100 100" style={base}>
      <path d="M 18 56 L 30 44 L 42 56 L 54 44 L 66 56 L 78 44" fill="none" stroke="rgba(177,234,163,0.85)" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round"/>
      <path d="M 22 70 L 34 58 L 46 70 L 58 58 L 70 70 L 82 58" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8"/>
    </svg>
  );
  if (kind === "viz") return (
    <svg viewBox="0 0 100 100" style={base}>
      <line x1="14" y1="80" x2="86" y2="80" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
      <line x1="14" y1="20" x2="14" y2="80" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
      <circle cx="24" cy="64" r="3" fill="rgba(255,255,255,0.55)"/>
      <circle cx="34" cy="48" r="2.5" fill="rgba(177,234,163,0.7)"/>
      <circle cx="44" cy="54" r="3.5" fill="rgba(255,255,255,0.6)"/>
      <circle cx="54" cy="36" r="4" fill="rgba(177,234,163,0.85)"/>
      <circle cx="64" cy="42" r="2.5" fill="rgba(255,255,255,0.5)"/>
      <circle cx="74" cy="28" r="3" fill="rgba(177,234,163,0.7)"/>
      <circle cx="82" cy="32" r="2" fill="rgba(255,255,255,0.55)"/>
    </svg>
  );
  if (kind === "sql") return (
    <svg viewBox="0 0 100 100" style={base}>
      <ellipse cx="50" cy="34" rx="22" ry="5" fill="rgba(255,255,255,0.1)" stroke="rgba(177,234,163,0.65)" strokeWidth="0.7"/>
      <path d="M 28 34 v 14 a 22 5 0 0 0 44 0 v -14" fill="rgba(255,255,255,0.06)" stroke="rgba(177,234,163,0.55)" strokeWidth="0.7"/>
      <path d="M 28 48 v 14 a 22 5 0 0 0 44 0 v -14" fill="rgba(255,255,255,0.06)" stroke="rgba(177,234,163,0.55)" strokeWidth="0.7"/>
      <path d="M 28 62 v 8 a 22 5 0 0 0 44 0 v -8" fill="rgba(255,255,255,0.06)" stroke="rgba(177,234,163,0.55)" strokeWidth="0.7"/>
    </svg>
  );
  if (kind === "terminal") return (
    <svg viewBox="0 0 100 100" style={base}>
      <rect x="18" y="30" width="64" height="44" rx="2.5" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.35)" strokeWidth="0.6"/>
      <circle cx="23" cy="34.5" r="1.3" fill="rgba(255,255,255,0.4)"/>
      <circle cx="27" cy="34.5" r="1.3" fill="rgba(255,255,255,0.4)"/>
      <circle cx="31" cy="34.5" r="1.3" fill="rgba(255,255,255,0.4)"/>
      <line x1="18" y1="38" x2="82" y2="38" stroke="rgba(255,255,255,0.15)" strokeWidth="0.4"/>
      <text x="22" y="48" fill="rgba(177,234,163,0.85)" fontSize="4.2" style={{ fontFamily: "monospace" }}>{"$ python scrape.py"}</text>
      <text x="22" y="56" fill="rgba(255,255,255,0.45)" fontSize="3.8" style={{ fontFamily: "monospace" }}>{"Fetching pages..."}</text>
      <text x="22" y="64" fill="rgba(177,234,163,0.6)" fontSize="3.8" style={{ fontFamily: "monospace" }}>{"OK · 1247 records"}</text>
      <rect x="22" y="67" width="2" height="3.5" fill="rgba(177,234,163,0.7)"/>
    </svg>
  );
  if (kind === "nodes") return (
    <svg viewBox="0 0 100 100" style={base}>
      {[[28,32],[72,32],[20,58],[80,58],[40,80],[60,80]].map((p, i) => (
        <g key={i}>
          <line x1="50" y1="55" x2={p[0]} y2={p[1]} stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
          <circle cx={p[0]} cy={p[1]} r="3.5" fill="rgba(255,255,255,0.55)"/>
        </g>
      ))}
      <line x1="28" y1="32" x2="72" y2="32" stroke="rgba(255,255,255,0.2)" strokeWidth="0.4"/>
      <line x1="20" y1="58" x2="40" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="0.4"/>
      <line x1="60" y1="80" x2="80" y2="58" stroke="rgba(255,255,255,0.2)" strokeWidth="0.4"/>
      <circle cx="50" cy="55" r="7.5" fill="rgba(177,234,163,0.85)"/>
    </svg>
  );
  if (kind === "flow") return (
    <svg viewBox="0 0 100 100" style={base}>
      {[20, 40, 60, 80].map((x, i) => (
        <g key={x}>
          <rect x={x-8} y="48" width="16" height="16" rx="2.5" fill="rgba(255,255,255,0.12)" stroke="rgba(177,234,163,0.55)" strokeWidth="0.6"/>
          <circle cx={x} cy="56" r="2.5" fill="rgba(177,234,163,0.7)"/>
          {i < 3 && (
            <g>
              <line x1={x+8} y1="56" x2={x+12} y2="56" stroke="rgba(177,234,163,0.5)" strokeWidth="0.7"/>
              <path d={`M ${x+10} 54 L ${x+12} 56 L ${x+10} 58`} stroke="rgba(177,234,163,0.5)" strokeWidth="0.7" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
          )}
        </g>
      ))}
    </svg>
  );
  if (kind === "editorial") return (
    <svg viewBox="0 0 100 100" style={base}>
      {/* Stacked articles (3 layers offset) */}
      {[0, 1, 2].map(i => (
        <g key={i} transform={`translate(${i*3.5} ${-i*3.5})`}>
          <rect x="22" y="38" width="34" height="42" rx="2" fill={i === 2 ? "rgba(177,234,163,0.16)" : "rgba(255,255,255,0.08)"} stroke={i === 2 ? "rgba(177,234,163,0.75)" : "rgba(255,255,255,0.4)"} strokeWidth="0.5"/>
          {i === 2 && (
            <g>
              <line x1="26" y1="44" x2="52" y2="44" stroke="rgba(177,234,163,0.75)" strokeWidth="0.5"/>
              <line x1="26" y1="50" x2="50" y2="50" stroke="rgba(255,255,255,0.4)" strokeWidth="0.35"/>
              <line x1="26" y1="54" x2="52" y2="54" stroke="rgba(255,255,255,0.4)" strokeWidth="0.35"/>
              <line x1="26" y1="58" x2="48" y2="58" stroke="rgba(255,255,255,0.4)" strokeWidth="0.35"/>
              <line x1="26" y1="62" x2="50" y2="62" stroke="rgba(255,255,255,0.4)" strokeWidth="0.35"/>
              <line x1="26" y1="66" x2="46" y2="66" stroke="rgba(255,255,255,0.4)" strokeWidth="0.35"/>
              <line x1="26" y1="70" x2="50" y2="70" stroke="rgba(255,255,255,0.4)" strokeWidth="0.35"/>
              <line x1="26" y1="74" x2="44" y2="74" stroke="rgba(255,255,255,0.4)" strokeWidth="0.35"/>
            </g>
          )}
        </g>
      ))}
      {/* Quality shield with ✓ — top-right */}
      <path d="M 70 20 L 84 25 L 84 38 Q 84 48 77 53 Q 70 48 70 38 Z"
            fill="rgba(177,234,163,0.28)" stroke="rgba(177,234,163,0.95)" strokeWidth="0.8"/>
      <path d="M 73 36 L 76 40 L 81 32" fill="none" stroke="rgba(177,234,163,1)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  if (kind === "ml") return (
    <svg viewBox="0 0 100 100" style={base}>
      {/* Input data points (left) */}
      {[34, 42, 50, 58, 66, 74].map((y, i) => (
        <circle key={i} cx="18" cy={y} r="1.8" fill="rgba(255,255,255,0.55)"/>
      ))}
      {/* Lines converging to ML hub */}
      {[34, 42, 50, 58, 66, 74].map((y, i) => (
        <line key={i} x1="20" y1={y} x2="44" y2="54" stroke="rgba(255,255,255,0.22)" strokeWidth="0.35"/>
      ))}
      {/* ML hub center */}
      <circle cx="50" cy="54" r="8" fill="rgba(177,234,163,0.25)" stroke="rgba(177,234,163,0.85)" strokeWidth="0.7"/>
      <text x="50" y="57" textAnchor="middle" fontSize="6" fontWeight="700" fill="rgba(177,234,163,1)" style={{ fontFamily: "var(--font-sans)" }}>ML</text>
      {/* Hub → output predictions */}
      <line x1="58" y1="52" x2="66" y2="46" stroke="rgba(177,234,163,0.45)" strokeWidth="0.45"/>
      <line x1="58" y1="56" x2="66" y2="62" stroke="rgba(177,234,163,0.45)" strokeWidth="0.45"/>
      {/* Output bar chart (right) */}
      <line x1="65" y1="72" x2="89" y2="72" stroke="rgba(255,255,255,0.4)" strokeWidth="0.4"/>
      {[[69, 22], [75, 14], [81, 30], [87, 18]].map(([x, h], i) => (
        <rect key={i} x={x-2.5} y={72-h} width="5" height={h}
              fill={i === 2 ? "rgba(177,234,163,0.85)" : "rgba(255,255,255,0.55)"}/>
      ))}
    </svg>
  );
  if (kind === "idea") return (
    <svg viewBox="0 0 100 100" style={base}>
      {/* Lightbulb glass — pear shape */}
      <path d="M 50 26 C 38 26 32 36 36 48 C 38 52 42 55 42 60 L 58 60 C 58 55 62 52 64 48 C 68 36 62 26 50 26 Z"
            fill="rgba(177,234,163,0.22)" stroke="rgba(177,234,163,0.9)" strokeWidth="0.8"/>
      {/* Filament squiggle */}
      <path d="M 44 44 Q 47 49 50 44 Q 53 49 56 44" fill="none" stroke="rgba(177,234,163,0.95)" strokeWidth="0.7"/>
      {/* Base threads */}
      <line x1="44" y1="64" x2="56" y2="64" stroke="rgba(255,255,255,0.7)" strokeWidth="0.8"/>
      <line x1="44" y1="68" x2="56" y2="68" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8"/>
      <line x1="46" y1="72" x2="54" y2="72" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8"/>
      <path d="M 47 76 L 50 78 L 53 76" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="0.7" strokeLinecap="round"/>
      {/* Glow rays around lightbulb */}
      <g stroke="rgba(177,234,163,0.75)" strokeWidth="0.9" strokeLinecap="round">
        <line x1="50" y1="14" x2="50" y2="20"/>
        <line x1="26" y1="30" x2="32" y2="34"/>
        <line x1="74" y1="30" x2="68" y2="34"/>
        <line x1="18" y1="46" x2="24" y2="46"/>
        <line x1="82" y1="46" x2="76" y2="46"/>
      </g>
    </svg>
  );
  return null;
}

// Article signature SVGs (terminal / nodes / agents / finance)
function ArticleSigil({ kind }) {
  if (kind === "terminal") return (
    <svg viewBox="0 0 200 84" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
      <rect x="14" y="14" width="172" height="56" rx="3" fill="rgba(0,0,0,0.45)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"/>
      <circle cx="22" cy="20" r="1.6" fill="rgba(255,255,255,0.25)"/>
      <circle cx="28" cy="20" r="1.6" fill="rgba(255,255,255,0.25)"/>
      <circle cx="34" cy="20" r="1.6" fill="rgba(255,255,255,0.25)"/>
      <text x="22" y="34" fill="rgba(177,234,163,0.85)" fontSize="6.5" style={{ fontFamily: "monospace" }}>$ docker run -d</text>
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x={22+i*22} y={42} width="18" height="14" rx="1.5" fill="rgba(177,234,163,0.18)" stroke="rgba(177,234,163,0.5)" strokeWidth="0.5"/>
          <rect x={26+i*22} y={45} width="10" height="1.2" fill="rgba(177,234,163,0.7)"/>
          <rect x={26+i*22} y={48} width="6" height="1.2" fill="rgba(177,234,163,0.5)"/>
        </g>
      ))}
    </svg>
  );
  if (kind === "nodes") return (
    <svg viewBox="0 0 200 84" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
      <path d="M 38 42 C 60 42, 60 22, 80 22 L 110 22" stroke="rgba(177,234,163,0.4)" strokeWidth="0.6" fill="none"/>
      <path d="M 38 42 L 110 42" stroke="rgba(177,234,163,0.5)" strokeWidth="0.6" fill="none"/>
      <path d="M 38 42 C 60 42, 60 62, 80 62 L 110 62" stroke="rgba(177,234,163,0.4)" strokeWidth="0.6" fill="none"/>
      <path d="M 138 22 L 162 42" stroke="rgba(177,234,163,0.4)" strokeWidth="0.6" fill="none"/>
      <path d="M 138 42 L 162 42" stroke="rgba(177,234,163,0.5)" strokeWidth="0.6" fill="none"/>
      <path d="M 138 62 L 162 42" stroke="rgba(177,234,163,0.4)" strokeWidth="0.6" fill="none"/>
      <rect x="20" y="34" width="18" height="16" rx="3" fill="rgba(177,234,163,0.18)" stroke="rgba(177,234,163,0.7)" strokeWidth="0.6"/>
      <circle cx="29" cy="42" r="2.5" fill="rgba(177,234,163,0.8)"/>
      {[14, 34, 54].map(y => (
        <rect key={y} x="110" y={y} width="28" height="16" rx="3" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
      ))}
      <rect x="162" y="34" width="18" height="16" rx="3" fill="rgba(177,234,163,0.18)" stroke="rgba(177,234,163,0.7)" strokeWidth="0.6"/>
    </svg>
  );
  if (kind === "agents") return (
    <svg viewBox="0 0 200 84" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
      <circle cx="100" cy="42" r="14" fill="rgba(177,234,163,0.2)" stroke="rgba(177,234,163,0.8)" strokeWidth="0.7"/>
      <text x="100" y="46" fill="var(--jl-mint)" fontSize="9" textAnchor="middle" style={{ fontFamily: "monospace", fontWeight: 700 }}>AI</text>
      {[
        { x: 42, y: 22 }, { x: 42, y: 62 }, { x: 158, y: 22 }, { x: 158, y: 62 },
      ].map((s, i) => (
        <g key={i}>
          <line x1={s.x + (s.x < 100 ? 11 : -11)} y1={s.y} x2={100 + (s.x < 100 ? -11 : 11)} y2="42" stroke="rgba(177,234,163,0.35)" strokeWidth="0.5"/>
          <circle cx={s.x} cy={s.y} r="9" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
        </g>
      ))}
    </svg>
  );
  if (kind === "finance") return (
    <svg viewBox="0 0 200 84" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
      <line x1="20" y1="68" x2="180" y2="68" stroke="rgba(255,255,255,0.15)" strokeWidth="0.4"/>
      <polyline points="20,62 50,55 80,48 110,42 140,35 170,28" fill="none" stroke="rgba(177,234,163,0.9)" strokeWidth="1.6"/>
      {[50,80,110,140,170].map((x, i) => <circle key={x} cx={x} cy={[55,48,42,35,28][i]} r="2" fill="rgba(177,234,163,0.9)"/>)}
      <text x="20" y="20" fill="rgba(255,255,255,0.45)" fontSize="6" style={{ fontFamily: "monospace" }}>+24.6% YTD</text>
    </svg>
  );
  return null;
}

// Skill icons
function SkillIcon({ kind }) {
  const s = { width: 14, height: 14, color: "var(--jl-mint)", flexShrink: 0 };
  if (kind === "py") return <svg style={s} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M5 1.5h6a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3M3 4.5h6"/><circle cx="6" cy="4" r="0.6" fill="currentColor"/><circle cx="10" cy="12" r="0.6" fill="currentColor"/></svg>;
  if (kind === "sql") return <svg style={s} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><ellipse cx="8" cy="3.5" rx="5" ry="1.5"/><path d="M3 3.5v9c0 .83 2.24 1.5 5 1.5s5-.67 5-1.5v-9M3 7.5c0 .83 2.24 1.5 5 1.5s5-.67 5-1.5"/></svg>;
  if (kind === "r") return <svg style={s} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 14V3h5a3 3 0 0 1 0 6H5l5 5"/></svg>;
  if (kind === "rag") return <svg style={s} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="8" cy="8" r="6"/><path d="M2 8h12M8 2c2 2 2 10 0 12M8 2c-2 2-2 10 0 12"/></svg>;
  if (kind === "agents") return <svg style={s} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="8" cy="8" r="2"/><circle cx="3" cy="3" r="1.5"/><circle cx="13" cy="3" r="1.5"/><circle cx="3" cy="13" r="1.5"/><circle cx="13" cy="13" r="1.5"/><line x1="4" y1="4" x2="6.5" y2="6.5"/><line x1="12" y1="4" x2="9.5" y2="6.5"/><line x1="4" y1="12" x2="6.5" y2="9.5"/><line x1="12" y1="12" x2="9.5" y2="9.5"/></svg>;
  if (kind === "graph") return <svg style={s} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="4" cy="4" r="1.5"/><circle cx="12" cy="4" r="1.5"/><circle cx="8" cy="12" r="1.5"/><line x1="5" y1="5" x2="11" y2="5"/><line x1="5" y1="5" x2="7.5" y2="11"/><line x1="11" y1="5" x2="8.5" y2="11"/></svg>;
  if (kind === "docker") return <svg style={s} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="2" y="9" width="3" height="3"/><rect x="6" y="9" width="3" height="3"/><rect x="10" y="9" width="3" height="3"/><rect x="6" y="5" width="3" height="3"/><path d="M2 14h12c0-2-1-3-2-3"/></svg>;
  if (kind === "flow") return <svg style={s} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="3" cy="8" r="1.5"/><circle cx="13" cy="8" r="1.5"/><path d="M4.5 8h7M9.5 5.5l2 2.5-2 2.5"/></svg>;
  if (kind === "viz") return <svg style={s} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M2 14V2M2 14h12"/><rect x="4" y="9" width="2" height="4"/><rect x="7" y="6" width="2" height="7"/><rect x="10" y="3" width="2" height="10"/></svg>;
  if (kind === "finance") return <svg style={s} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M2 12l4-4 3 3 5-5M14 6V3h-3"/></svg>;
  return null;
}

function LaurelIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="var(--jl-mint)" strokeWidth="1.2" strokeLinecap="round">
      <path d="M3 8c0 3 1.5 5 5 5M3 5c.5-.5 1.5-1 2.5-1M3 8.5c.5-.5 1.5-1 2.5-1M4 11c.5-.5 1.5-1 2.5-1M13 8c0 3-1.5 5-5 5M13 5c-.5-.5-1.5-1-2.5-1M13 8.5c-.5-.5-1.5-1-2.5-1M12 11c-.5-.5-1.5-1-2.5-1"/>
      <circle cx="8" cy="13" r="0.7" fill="var(--jl-mint)" stroke="none"/>
    </svg>
  );
}

// Project card (used on home + projects list)
function ProjectCard({ p, big = false }) {
  return (
    <a className="jl-card" href={`projet-${p.slug}.html`} style={{ display: "block", textDecoration: "none", color: "inherit" }}>
      <div style={{
        aspectRatio: big ? "16 / 9" : "1",
        borderRadius: 6,
        background: p.gradient,
        marginBottom: 12,
        boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
        position: "relative", overflow: "hidden",
      }}>
        {p.badge && (
          <div style={{
            position: "absolute", top: 8, left: 8,
            padding: "3px 8px 3px 6px", borderRadius: 999,
            background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)",
            fontSize: 10.5, fontWeight: 500, letterSpacing: "-0.005em",
            color: "#fff", zIndex: 2,
            display: "inline-flex", alignItems: "center", gap: 5,
          }}>
            <LaurelIcon /> {p.badge}
          </div>
        )}
        <ProjectSigil kind={p.sigil} />
      </div>
      <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "-0.01em" }}>{p.title}</div>
      <div style={{ fontSize: 12.5, color: "var(--jl-ink-3)", marginTop: 3, letterSpacing: "-0.005em" }}>{p.sub}</div>
      <div style={{
        marginTop: 10, paddingTop: 10,
        borderTop: "1px solid var(--jl-line)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontSize: 10.5, color: "var(--jl-ink-3)", letterSpacing: "-0.005em",
      }}>
        <span style={{ letterSpacing: "0.04em", textTransform: "uppercase" }}>{p.meta}</span>
        <span style={{ color: "var(--jl-mint)", fontWeight: 500 }}>{window.t("act.read")}</span>
      </div>
    </a>
  );
}

// Travel photo card
function TravelCard({ stop, big = false }) {
  return (
    <div style={{
      borderRadius: 8, overflow: "hidden", position: "relative",
      height: big ? "100%" : "auto",
      aspectRatio: big ? undefined : "4 / 2.2",
      background: "var(--jl-card-2)",
    }}>
      <image-slot id={stop.id} src={stop.src} placeholder={stop.loc}></image-slot>
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.78) 100%)",
        pointerEvents: "none",
      }} />
      <div style={{ position: "absolute", left: 14, bottom: 12, right: 14, pointerEvents: "none" }}>
        <div style={{ fontSize: 10, color: "var(--jl-mint)", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 4 }}>
          {stop.loc}
        </div>
        <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "-0.005em", color: "#fff", textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}>
          {stop.sub}
        </div>
      </div>
    </div>
  );
}

// Article card
function ArticleCard({ a }) {
  return (
    <a className="jl-card" href={`blog.html#${a.slug}`} style={{ display: "flex", flexDirection: "column", gap: 14, textDecoration: "none", color: "inherit" }}>
      <div style={{
        height: 84, borderRadius: 6, position: "relative", overflow: "hidden",
        background: "linear-gradient(135deg, #20302a 0%, #16241f 100%)",
        border: "1px solid var(--jl-line)",
      }}>
        <ArticleSigil kind={a.sigil} />
        {a.soon && (
          <div style={{
            position: "absolute", top: 8, right: 8,
            padding: "3px 9px", borderRadius: 999,
            background: "rgba(177,234,163,0.18)", color: "var(--jl-mint)",
            fontSize: 10, fontWeight: 600, letterSpacing: "-0.005em",
          }}>{window.t("blog.comingSoon")}</div>
        )}
      </div>
      <div>
        <div style={{
          fontSize: 10.5, color: "var(--jl-ink-3)", fontWeight: 500,
          letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6,
          display: "flex", gap: 8,
        }}>
          <span>{a.cat}</span>
          <span style={{ color: "var(--jl-ink-4)" }}>· {a.read}</span>
        </div>
        <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-0.015em", lineHeight: 1.2 }}>{a.title}</div>
        <div style={{
          fontSize: 12.5, color: "var(--jl-ink-3)", marginTop: 8,
          letterSpacing: "-0.005em", lineHeight: 1.5,
          display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>{a.desc}</div>
      </div>
    </a>
  );
}

function Shell({ page, chips, activeChip, onChip, sidebarExtra, children }) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Close on Escape key
  React.useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <div className={"jl-app" + (menuOpen ? " is-menu-open" : "")}>
      <button
        type="button"
        className="jl-sidebar-backdrop"
        aria-label="Fermer le menu"
        onClick={() => setMenuOpen(false)}
        style={{ border: 0, padding: 0 }}
      />
      <Sidebar page={page} extra={sidebarExtra} />
      <main className="jl-main">
        <Topbar
          chips={chips} activeChip={activeChip} onChip={onChip}
          onMenuToggle={() => setMenuOpen(o => !o)}
        />
        <div className="jl-body">
          {children}
          <Footer />
        </div>
      </main>
    </div>
  );
}

Object.assign(window, {
  Logo, Sidebar, Topbar, Footer, SectionHead,
  ProjectSigil, ArticleSigil, SkillIcon, LaurelIcon,
  ProjectCard, TravelCard, ArticleCard, Shell,
});
