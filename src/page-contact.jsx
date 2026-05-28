/* global React, ReactDOM */
const { Shell } = window;
const { useState } = React;

const CONTACT = {
  email: "jean-li.sek@joliment.fr",
  links: [
    { ic: "@",  label: "email",    text: "jean-li.sek@joliment.fr", href: "mailto:jean-li.sek@joliment.fr" },
    { ic: "in", label: "linkedin", text: "Jean-Li Sek",             href: "https://www.linkedin.com/in/jeanlisek/" },
    { ic: "gh", label: "github",   text: "@jeanlisek",              href: "https://github.com/jeanlisek" },
  ],
};

function Field({ label, children }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{ fontSize: 11, color: "var(--jl-ink-3)", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" }}>{label}</span>
      {children}
    </label>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    const f = e.currentTarget;
    setSending(true);
    setError(false);
    try {
      await window.submitForm("contacts", {
        prenom: f.prenom.value.trim(),
        email: f.email.value.trim(),
        sujet: f.sujet.value,
        message: f.message.value.trim(),
      });
      f.reset();
      setSent(true);
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 4000);
    } finally {
      setSending(false);
    }
  };
  return (
    <div className="jl-card jl-card-noh" style={{ padding: 32, cursor: "default" }}>
      <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", color: "#fff", marginBottom: 6 }}>
        {window.t("contact.sendMsg")}
      </div>
      <p style={{ margin: "0 0 22px", fontSize: 13.5, color: "var(--jl-ink-3)", letterSpacing: "-0.005em" }}>
        {window.t("contact.replyTime")}
      </p>
      <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <Field label={window.t("contact.fName")}>
          <input name="prenom" type="text" placeholder={window.t("contact.phName")} required style={inputStyle} {...inputFocusHandlers} />
        </Field>
        <Field label={window.t("contact.fEmail")}>
          <input name="email" type="email" placeholder={window.t("contact.phEmail")} required style={inputStyle} {...inputFocusHandlers} />
        </Field>
        <Field label={window.t("contact.fSubject")}>
          <select name="sujet" required defaultValue="" style={inputStyle} {...inputFocusHandlers}>
            <option value="" disabled>{window.t("contact.choose")}</option>
            {window.t("contact.subjects").map(s => <option key={s}>{s}</option>)}
          </select>
        </Field>
        <Field label={window.t("contact.fMessage")}>
          <textarea name="message" placeholder={window.t("contact.phMessage")} rows={5} required style={{ ...inputStyle, resize: "vertical", minHeight: 110 }} {...inputFocusHandlers} />
        </Field>
        <button type="submit" disabled={sending} style={{
          marginTop: 6, padding: "13px 22px", borderRadius: 999,
          background: error ? "#d97757" : "var(--jl-mint)", color: error ? "#fff" : "#0a0a0a", border: 0,
          fontSize: 14, fontWeight: 700, letterSpacing: "-0.005em",
          cursor: sending ? "wait" : "pointer", opacity: sending ? 0.7 : 1,
        }}>
          {error ? window.t("form.error") : sending ? window.t("form.sending") : sent ? window.t("contact.sentLabel") : window.t("contact.send")}
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%", padding: "12px 14px",
  background: "rgba(0,0,0,0.35)",
  border: "1px solid rgba(177,234,163,0.15)",
  borderRadius: 8, color: "var(--jl-ink)",
  fontSize: 14, fontFamily: "var(--font-sans)",
  letterSpacing: "-0.005em", outline: "none",
  transition: "border-color 0.15s, background 0.15s",
};

const inputFocusHandlers = {
  onFocus: (e) => {
    e.target.style.borderColor = "var(--jl-mint)";
    e.target.style.background = "rgba(0,0,0,0.5)";
  },
  onBlur: (e) => {
    e.target.style.borderColor = "rgba(177,234,163,0.15)";
    e.target.style.background = "rgba(0,0,0,0.35)";
  },
};

function ContactApp() {
  return (
    <Shell page="contact">
      {/* HERO */}
      <div style={{ paddingTop: 8 }}>
        <div style={{ fontSize: 10.5, color: "var(--jl-mint)", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 8 }}>
          {window.t("contact.eyebrow")}
        </div>
        <h1 style={{
          margin: 0, fontSize: 72, fontWeight: 700,
          letterSpacing: "-0.04em", lineHeight: 0.95, color: "#fff",
        }}>
          {window.t("contact.title1")} <span className="jl-italic">{window.t("contact.title2")}</span>
        </h1>
        <p style={{
          margin: "20px 0 0", fontSize: 17, color: "var(--jl-ink-2)",
          letterSpacing: "-0.005em", lineHeight: 1.5, maxWidth: 640,
        }} dangerouslySetInnerHTML={{ __html: window.t("contact.heroDesc") }} />
      </div>

      {/* GRID — left: links + dispo card · right: form */}
      <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 18, alignItems: "stretch" }}>

        {/* LEFT */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div className="jl-card jl-card-noh" style={{ padding: 28, cursor: "default", flex: 1 }}>
            <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", color: "#fff", marginBottom: 6 }}>
              {window.t("contact.reasons1")}<br />{window.t("contact.reasons2")}
            </div>
            <p style={{ margin: "0 0 22px", fontSize: 14, color: "var(--jl-ink-3)", lineHeight: 1.55, letterSpacing: "-0.005em" }}>
              {window.t("contact.reasonsDesc")}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {CONTACT.links.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    display: "flex", alignItems: "center", gap: 14,
                    padding: "12px 14px", borderRadius: 10,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid var(--jl-line)",
                    textDecoration: "none", color: "var(--jl-ink)",
                  }}
                >
                  <span style={{
                    flexShrink: 0, width: 36, height: 36, borderRadius: 8,
                    background: "rgba(177,234,163,0.12)", color: "var(--jl-mint)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 13, fontWeight: 700, letterSpacing: "-0.01em",
                  }}>{l.ic}</span>
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <span style={{ fontSize: 10.5, color: "var(--jl-ink-3)", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" }}>{l.label}</span>
                    <span style={{ fontSize: 14, color: "#fff", fontWeight: 500, letterSpacing: "-0.005em" }}>{l.text}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* DISPONIBLE CARD */}
          <div className="jl-card jl-card-noh" style={{
            padding: 28, cursor: "default",
            background: "linear-gradient(135deg, #1f2a1c 0%, #2a3a22 100%)",
            borderColor: "rgba(177,234,163,0.18)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <span style={{
                width: 8, height: 8, borderRadius: "50%",
                background: "var(--jl-mint)",
                boxShadow: "0 0 12px var(--jl-mint)",
              }} />
              <span style={{ fontSize: 11, color: "var(--jl-mint)", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                {window.t("contact.available")}
              </span>
            </div>
            <p style={{ margin: "0 0 18px", fontSize: 14, color: "var(--jl-ink-2)", lineHeight: 1.55, letterSpacing: "-0.005em" }}>
              {window.t("contact.availableDesc")}
            </p>
            <button
              type="button"
              onClick={() => window.openCalendly && window.openCalendly()}
              style={{
                width: "100%", padding: "12px 18px", borderRadius: 999,
                background: "var(--jl-mint)", color: "#0a0a0a", border: 0,
                fontSize: 13, fontWeight: 700, letterSpacing: "-0.005em",
                cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              {window.t("contact.book")}
            </button>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <ContactForm />
      </div>
    </Shell>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ContactApp />);
