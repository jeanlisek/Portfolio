/* global React, ReactDOM, THREE */
const D = window.JL;
const { Shell, SectionHead, LaurelIcon } = window;
const { useEffect, useRef, useState } = React;

// Big 3D knowledge graph for the collab hero — the 3D moment finally lives
function BigGlobe() {
  const mountRef = useRef(null);
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    let raf, scene, camera, renderer, group, dispose;

    function start() {
      if (typeof THREE === "undefined") { raf = requestAnimationFrame(start); return; }
      const W = mount.clientWidth, H = mount.clientHeight;
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(40, W / H, 0.1, 50);
      camera.position.set(0, 0.3, 5.0);
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
      renderer.setSize(W, H);
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);

      group = new THREE.Group();
      scene.add(group);
      const R = 1.5, MINT = 0xb1eaa3, INK = 0xffffff;

      // Wireframe sphere
      const wireGeo = new THREE.SphereGeometry(R, 36, 24);
      const wireMat = new THREE.LineBasicMaterial({ color: MINT, transparent: true, opacity: 0.22 });
      group.add(new THREE.LineSegments(new THREE.WireframeGeometry(wireGeo), wireMat));

      // Continent dots
      const dotsGeo = new THREE.BufferGeometry();
      const positions = [];
      const seeds = [[0.4, 1.0], [0.5, 1.5], [1.2, 1.2], [2.6, 1.1], [3.6, 0.9], [4.0, 1.4], [5.2, 1.0], [1.8, 2.0], [5.8, 1.8]];
      for (let i = 0; i < 1400; i++) {
        const s = seeds[Math.floor(Math.random() * seeds.length)];
        const theta = s[0] + (Math.random() - 0.5) * 0.6;
        const phi = s[1] + (Math.random() - 0.5) * 0.55;
        const x = R * 1.005 * Math.sin(phi) * Math.cos(theta);
        const y = R * 1.005 * Math.cos(phi);
        const z = R * 1.005 * Math.sin(phi) * Math.sin(theta);
        positions.push(x, y, z);
      }
      dotsGeo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
      group.add(new THREE.Points(dotsGeo, new THREE.PointsMaterial({ color: MINT, size: 0.022, transparent: true, opacity: 0.85, sizeAttenuation: true })));

      // Knowledge nodes (collab themes + projects)
      const nodes = [
        [0.5, 1.1, "MIRAKL", true, MINT],
        [1.8, 0.9, "SYNAPSE", false, INK],
        [2.8, 1.4, "DUST", true, MINT],
        [3.7, 1.1, "PAYFIT", false, INK],
        [4.6, 1.5, "VEILLE", false, INK],
        [5.5, 1.0, "DASHBOARD", false, INK],
        [1.0, 2.0, "BLOG", true, MINT],
        [3.4, 2.1, "JOLIMENT V2", false, INK],
        [0.2, 0.5, "PARIS", false, MINT],
        [2.2, 0.6, "TOKYO", false, MINT],
        [4.8, 0.7, "P. PENH", false, MINT],
      ];
      const nodePoints = [];
      nodes.forEach(([theta, phi, label, big, color]) => {
        const x = R * Math.sin(phi) * Math.cos(theta);
        const y = R * Math.cos(phi);
        const z = R * Math.sin(phi) * Math.sin(theta);
        const r = big ? 0.075 : 0.05;
        const haloGeo = new THREE.RingGeometry(r * 1.6, r * 1.7, 32);
        const halo = new THREE.Mesh(haloGeo, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.6, side: THREE.DoubleSide }));
        halo.position.set(x, y, z);
        halo.lookAt(0, 0, 0);
        group.add(halo);
        const node = new THREE.Mesh(new THREE.SphereGeometry(r * 0.45, 16, 12), new THREE.MeshBasicMaterial({ color }));
        node.position.set(x, y, z);
        group.add(node);
        const pinPts = [new THREE.Vector3(x, y, z), new THREE.Vector3(x * 1.18, y * 1.18, z * 1.18)];
        group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pinPts), new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.7 })));
        nodePoints.push(new THREE.Vector3(x, y, z));
      });

      function arc(p1, p2, big = false) {
        const start = p1.clone().normalize();
        const end = p2.clone().normalize();
        const points = [];
        for (let i = 0; i <= 40; i++) {
          const t = i / 40;
          const dot = start.dot(end);
          const omega = Math.acos(Math.min(1, Math.max(-1, dot)));
          const sinO = Math.sin(omega);
          let p = sinO < 1e-4 ? start.clone() : start.clone().multiplyScalar(Math.sin((1 - t) * omega) / sinO).add(end.clone().multiplyScalar(Math.sin(t * omega) / sinO));
          p.multiplyScalar(R * (1 + 0.18 * Math.sin(t * Math.PI)));
          points.push(p);
        }
        const arcGeo = new THREE.BufferGeometry().setFromPoints(points);
        group.add(new THREE.Line(arcGeo, new THREE.LineBasicMaterial({ color: big ? MINT : 0x7da4d4, transparent: true, opacity: big ? 0.85 : 0.45 })));
      }
      [[0, 1], [0, 2], [0, 6], [2, 3], [2, 4], [3, 5], [6, 7], [1, 4], [8, 0], [9, 2], [10, 6], [8, 9], [9, 10]].forEach(([a, b]) => arc(nodePoints[a], nodePoints[b], a < 3 || b < 3));

      // Outer dashed ring
      const ring = new THREE.Mesh(new THREE.RingGeometry(R * 1.35, R * 1.355, 128), new THREE.MeshBasicMaterial({ color: MINT, side: THREE.DoubleSide, transparent: true, opacity: 0.45 }));
      ring.rotation.x = Math.PI / 2;
      ring.rotation.z = Math.PI / 8;
      group.add(ring);

      group.add(new THREE.Mesh(new THREE.SphereGeometry(R * 1.06, 32, 24), new THREE.MeshBasicMaterial({ color: MINT, transparent: true, opacity: 0.06, side: THREE.BackSide })));
      group.rotation.z = 0.18;

      let isDragging = false, lastX = 0, lastY = 0, velX = 0.003;
      const onDown = e => { isDragging = true; lastX = e.clientX || e.touches?.[0]?.clientX; lastY = e.clientY || e.touches?.[0]?.clientY; velX = 0; };
      const onMove = e => {
        if (!isDragging) return;
        const x = e.clientX || e.touches?.[0]?.clientX; const y = e.clientY || e.touches?.[0]?.clientY;
        group.rotation.y += (x - lastX) * 0.005;
        group.rotation.x += (y - lastY) * 0.005;
        velX = (x - lastX) * 0.005;
        lastX = x; lastY = y;
      };
      const onUp = () => { isDragging = false; };
      renderer.domElement.addEventListener("pointerdown", onDown);
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);

      const ro = new ResizeObserver(() => {
        const w = mount.clientWidth, h = mount.clientHeight;
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      });
      ro.observe(mount);

      function tick() {
        if (!isDragging) {
          group.rotation.y += velX || 0.003;
          group.rotation.x *= 0.98;
          if (velX !== 0) velX *= 0.95;
        }
        renderer.render(scene, camera);
        raf = requestAnimationFrame(tick);
      }
      tick();

      dispose = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        renderer.domElement.removeEventListener("pointerdown", onDown);
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
        renderer.dispose();
        if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
      };
    }
    start();
    return () => { if (dispose) dispose(); else cancelAnimationFrame(raf); };
  }, []);
  return <div ref={mountRef} style={{ width: "100%", height: "100%", cursor: "grab" }} />;
}

function CollabApp() {
  return (
    <Shell page="collab">
      <header style={{ paddingTop: 8 }}>
        <div className="jl-eyebrow">{window.t("collab.eyebrow")} · {D.collabs.filter(c => c.status === "open").length} {window.t("collab.positions")}</div>
        <h1 className="jl-page-title">
          {window.t("collab.build1")} <span className="jl-italic">{window.t("collab.build2")}</span>
        </h1>
        <p style={{ margin: "20px 0 0", fontSize: 17, color: "var(--jl-ink-2)", lineHeight: 1.5, letterSpacing: "-0.005em" }}>
          {window.t("collab.heroDesc1")}<br />
          {window.t("collab.heroDesc2")}
        </p>
      </header>

      {/* HERO with big 3D globe */}
      <section style={{
        marginTop: 24, borderRadius: 12,
        background: "linear-gradient(135deg, #0a0a0a 0%, #0f1a0d 60%, #0a0a0a 100%)",
        border: "1px solid var(--jl-line)",
        position: "relative", overflow: "hidden",
        display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 0,
        minHeight: 460,
      }}>
        {/* faint grid */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "linear-gradient(rgba(177,234,163,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(177,234,163,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }} />

        <div style={{ padding: "40px 44px", position: "relative", zIndex: 2 }}>
          <div className="jl-eyebrow" style={{ color: "var(--jl-mint)" }}>{window.t("collab.network")}</div>
          <h2 style={{ margin: "8px 0 0", fontSize: 44, fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 0.95 }}>
            {window.t("collab.nodesLine")}<br/>
            <span className="jl-italic">{window.t("collab.collabsItalic")}</span> {window.t("collab.collabsRest")}
          </h2>
          <p style={{ margin: "20px 0 0", fontSize: 14.5, color: "var(--jl-ink-2)", maxWidth: 380, lineHeight: 1.5, letterSpacing: "-0.005em" }}>
            {window.t("collab.networkDesc")}
          </p>
          <div style={{ marginTop: 24, display: "flex", gap: 10 }}>
            <a href="#open" className="jl-btn jl-btn-primary">{window.t("collab.seePositions")}</a>
            <a href="#propose" className="jl-btn jl-btn-ghost">{window.t("collab.proposeProject")}</a>
          </div>
        </div>

        <div style={{ position: "relative", minHeight: 460 }}>
          <BigGlobe />
        </div>
      </section>

      {/* OPEN positions */}
      <SectionHead eyebrow={window.t("collab.openTag")} title={window.t("collab.whatBuilds")} italic={window.t("collab.lookingForBras")} />
      <div id="open" style={{ marginTop: 12, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
        {D.collabs.map(c => (
          <article key={c.slug} className="jl-card jl-card-noh" style={{
            padding: 24, cursor: "default",
            display: "flex", flexDirection: "column", gap: 16,
            minHeight: 360,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
              <span className={"jl-tag " + (c.status === "open" ? "jl-tag-mint" : "")} style={c.status !== "open" ? { color: "#d97757", borderColor: "rgba(217,119,87,0.35)" } : {}}>
                <span className="dot" style={c.status !== "open" ? { background: "#d97757" } : {}} />
                {c.status === "open" ? window.t("collab.badgeOpen") : window.t("collab.badgeSoon")} · {c.slots}
              </span>
              <span style={{ fontSize: 10.5, color: "var(--jl-ink-4)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{c.step}</span>
            </div>
            <h3 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05 }}>
              {c.title}
            </h3>
            <p style={{ margin: 0, fontSize: 13.5, color: "var(--jl-ink-2)", lineHeight: 1.5, letterSpacing: "-0.005em", flex: 1 }}>
              {c.desc}
            </p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {c.tags.map(t => <span key={t} className="jl-tag">{t}</span>)}
            </div>
            <div style={{
              fontSize: 12.5, color: "var(--jl-ink-2)",
              paddingTop: 14, borderTop: "1px dashed var(--jl-line)", letterSpacing: "-0.005em", lineHeight: 1.45,
            }}>
              <strong style={{ color: "var(--jl-mint)", fontWeight: 600 }}>{window.t("collab.seeking")} </strong>
              {c.seek}
            </div>
            <a href="#propose" style={{ alignSelf: "flex-start", fontSize: 12.5, color: "var(--jl-mint)", fontWeight: 600, letterSpacing: "-0.005em" }}>
              {c.status === "open" ? window.t("collab.join") : window.t("collab.contactBtn")}
            </a>
          </article>
        ))}
      </div>

      {/* How it works */}
      <SectionHead eyebrow={window.t("collab.how")} title={window.t("collab.threeSteps")} />
      <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
        {[
          { n: "01", t: window.t("collab.step1t"), d: window.t("collab.step1d") },
          { n: "02", t: window.t("collab.step2t"), d: window.t("collab.step2d") },
          { n: "03", t: window.t("collab.step3t"), d: window.t("collab.step3d") },
        ].map(s => (
          <div key={s.n} className="jl-card jl-card-noh" style={{ padding: 24, cursor: "default" }}>
            <div style={{ fontSize: 56, fontWeight: 800, letterSpacing: "-0.04em", color: "var(--jl-mint)", lineHeight: 0.9 }}>{s.n}</div>
            <div style={{ marginTop: 12, fontSize: 17, fontWeight: 700, letterSpacing: "-0.02em" }}>{s.t}</div>
            <p style={{ margin: "8px 0 0", fontSize: 13.5, color: "var(--jl-ink-2)", lineHeight: 1.5, letterSpacing: "-0.005em" }}>{s.d}</p>
          </div>
        ))}
      </div>

      {/* Form */}
      <section id="propose" style={{
        marginTop: 32, borderRadius: 12,
        background: "linear-gradient(135deg, #1a1f1a 0%, #16241a 100%)",
        border: "1px solid rgba(177,234,163,0.15)",
        padding: "40px 44px",
        display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 40,
      }}>
        <div>
          <div className="jl-eyebrow" style={{ color: "var(--jl-mint)" }}>{window.t("collab.proposeYours")}</div>
          <h2 style={{ margin: "8px 0 0", fontSize: 36, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}>
            {window.t("collab.gotIdea")}<br/>
            <span className="jl-italic">{window.t("collab.letsTalk")}</span>
          </h2>
          <p style={{ margin: "18px 0 0", fontSize: 14.5, color: "var(--jl-ink-2)", lineHeight: 1.5, letterSpacing: "-0.005em" }}>
            {window.t("collab.formDesc")}
          </p>
          <div style={{ marginTop: 28, fontSize: 12.5, color: "var(--jl-ink-3)", letterSpacing: "-0.005em" }}>
            {window.t("collab.orEmail")} <a href={`mailto:${D.brand.email}`} style={{ color: "var(--jl-mint)" }}>{D.brand.email}</a>
          </div>
        </div>

        <CollabForm />
      </section>
    </Shell>
  );
}

function CollabForm() {
  const [state, setState] = useState("idle"); // idle | sending | sent | error
  const onSubmit = async (e) => {
    e.preventDefault();
    if (state === "sending") return;
    const f = e.currentTarget;
    const moi = f.moi.value.trim();
    const emailMatch = moi.match(/[\w.+-]+@[\w-]+\.[\w.-]+/);
    setState("sending");
    try {
      await window.submitForm("collab_submissions", {
        prenom: moi,
        email: emailMatch ? emailMatch[0] : "",
        nom_projet: f.nom_projet.value.trim(),
        type_projet: "",
        description: f.description.value.trim(),
        profils: f.profils.value.trim(),
      });
      f.reset();
      setState("sent");
      setTimeout(() => setState("idle"), 4000);
    } catch (err) {
      setState("error");
      setTimeout(() => setState("idle"), 4000);
    }
  };
  const label = state === "error" ? window.t("form.error")
    : state === "sending" ? window.t("form.sending")
    : state === "sent" ? window.t("collab.sentLabel")
    : window.t("collab.send");
  return (
    <form style={{ display: "flex", flexDirection: "column", gap: 12 }} onSubmit={onSubmit}>
      <FormField name="moi" required label={window.t("collab.fName")} placeholder={window.t("collab.phName")} />
      <FormField name="nom_projet" required label={window.t("collab.fProject")} placeholder={window.t("collab.phProject")} />
      <FormField name="description" required multiline label={window.t("collab.fContext")} placeholder={window.t("collab.phContext")} />
      <FormField name="profils" label={window.t("collab.fSeeking")} placeholder={window.t("collab.phSeeking")} />
      <button type="submit" disabled={state === "sending"} className="jl-btn jl-btn-primary" style={{ alignSelf: "flex-start", marginTop: 6, opacity: state === "sending" ? 0.7 : 1 }}>
        {label}
      </button>
    </form>
  );
}

function FormField({ label, placeholder, multiline, name, required }) {
  const Tag = multiline ? "textarea" : "input";
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{ fontSize: 11, color: "var(--jl-ink-3)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>{label}</span>
      <Tag
        name={name}
        required={required}
        placeholder={placeholder}
        rows={multiline ? 4 : undefined}
        style={{
          background: "rgba(0,0,0,0.35)",
          border: "1px solid rgba(177,234,163,0.15)",
          borderRadius: 8, padding: "12px 14px",
          color: "#fff", fontSize: 14, fontFamily: "inherit",
          letterSpacing: "-0.005em",
          resize: "vertical", outline: "none",
          transition: "border-color 0.15s, background 0.15s",
        }}
        onFocus={(e) => {
          e.target.style.borderColor = "var(--jl-mint)";
          e.target.style.background = "rgba(0,0,0,0.5)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "rgba(177,234,163,0.15)";
          e.target.style.background = "rgba(0,0,0,0.35)";
        }}
      />
    </label>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<CollabApp />);
