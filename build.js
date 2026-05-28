/* ─────────────────────────────────────────────────────────────────────────
   build.js — precompiles the JSX sources to plain browser JS.

   The site has no bundler: in production we ship pre-compiled .js so the
   browser doesn't have to download Babel and transpile JSX on every visit.

   Usage:
     npm install @babel/standalone      # one-time
     node build.js                      # after editing any *.jsx

   Edit the *.jsx files (source of truth); the matching *.js are generated.
   ───────────────────────────────────────────────────────────────────────── */
const fs = require("fs");
const Babel = require("@babel/standalone");

const SRC = [
  "src/shell.jsx",
  "src/page-home.jsx", "src/page-projets.jsx", "src/page-projet.jsx",
  "src/page-blog.jsx", "src/page-collab.jsx", "src/page-a-propos.jsx", "src/page-contact.jsx",
];

let n = 0;
for (const f of SRC) {
  if (!fs.existsSync(f)) { console.log("  ⚠ missing " + f); continue; }
  const code = fs.readFileSync(f, "utf8");
  const out = Babel.transform(code, { presets: ["react"], filename: f }).code;
  const dest = "js/" + f.replace(/^src\//, "").replace(/\.jsx$/, ".js");
  // Wrap in an IIFE: as plain <script>s these share one global scope, so each
  // file's top-level `const D = window.JL` etc. would collide. Cross-file
  // sharing already goes through `window`, so isolating locals is safe.
  const wrapped = "/* AUTO-GENERATED from " + f + " by build.js — edit the .jsx, then re-run `node build.js` */\n(function () {\n" + out + "\n})();\n";
  fs.writeFileSync(dest, wrapped);
  console.log("  " + f + " → " + dest);
  n++;
}
console.log("✓ built " + n + " files");
