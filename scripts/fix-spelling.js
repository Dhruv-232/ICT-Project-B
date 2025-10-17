#!/usr/bin/env node
// Cross-platform script to normalize variants of "Cyber security" to "Cybersecurity" across src files
// Usage: node scripts/fix-spelling.js
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "src");

const exts = [".tsx", ".ts", ".jsx", ".js", ".md"];

function walk(dir, cb) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const f of files) {
    const fp = path.join(dir, f.name);
    if (f.isDirectory()) {
      if (f.name === "node_modules" || f.name === "dist" || f.name === "build")
        continue;
      walk(fp, cb);
    } else if (exts.includes(path.extname(f.name))) {
      cb(fp);
    }
  }
}

const patterns = [
  /Cyber security/gi,
  /Cyber-security/gi,
  /Cybersecurity/gi,
  /cyber security/gi,
  /cyber-security/gi,
];

let changed = 0;

walk(SRC, (file) => {
  let src = fs.readFileSync(file, "utf8");
  let out = src;
  // Replace various forms with the canonical 'Cybersecurity'
  out = out.replace(/Cyber[ -]?security/gi, "Cybersecurity");
  out = out.replace(/cyber[ -]?security/gi, "Cybersecurity");

  if (out !== src) {
    fs.copyFileSync(file, file + ".bak");
    fs.writeFileSync(file, out, "utf8");
    changed++;
    console.log("Updated:", file);
  }
});

console.log(`Completed. Files changed: ${changed}. Backups with .bak`);
