const { compile } = require("tailwindcss");
const { Scanner } = require("@tailwindcss/oxide");
const fs = require("fs");
const path = require("path");

async function buildCss() {
  try {
    const rootDir = path.resolve(__dirname, "..");
    const indexCssPath = path.join(rootDir, "node_modules", "tailwindcss", "index.css");
    const rawTailwindCss = fs.readFileSync(indexCssPath, "utf-8");

    // Prepend custom design tokens with Nunito and Sofbox sky-blue palette
    const rootVariables = `
@layer base {
  :root {
    --background: #ffffff;
    --foreground: #1a202c;
    --color-primary: #2596be;
    --color-primary-light: #38bdf8;
    --color-primary-dark: #1b7393;
    --color-navy: #0a1628;
    --color-ice: #f0f9ff;
    --color-cyan: #38bdf8;
    --font-sans: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, system-ui, sans-serif;
    --font-display: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, system-ui, sans-serif;
  }
}
`;

    console.log("Compiling Tailwind CSS engine...");
    const compiler = await compile(rootVariables + "\n" + rawTailwindCss);

    console.log("Scanning candidate classes across components and app...");
    const scanner = new Scanner({
      sources: [
        { base: rootDir, pattern: "app/**/*.{jsx,js,tsx,ts}", negated: false },
        { base: rootDir, pattern: "components/**/*.{jsx,js,tsx,ts}", negated: false },
        { base: rootDir, pattern: "data/**/*.{jsx,js,tsx,ts}", negated: false },
      ],
    });

    const candidates = scanner.scan();
    console.log(`Discovered ${candidates.length} candidate classes.`);

    const generatedTailwind = compiler.build([...candidates]);

    // Read custom components and animation CSS
    const customStylesPath = path.join(rootDir, "app", "custom-styles.css");
    let customStyles = "";
    if (fs.existsSync(customStylesPath)) {
      customStyles = fs.readFileSync(customStylesPath, "utf-8");
    }

    const finalCss =
      "/* AUTO-GENERATED TAILWIND CSS & CUSTOM STYLES (SOFBOX THEME) */\n\n" +
      generatedTailwind +
      "\n\n/* CUSTOM STYLES & ANIMATIONS */\n\n" +
      customStyles;

    const globalsCssPath = path.join(rootDir, "app", "globals.css");
    fs.writeFileSync(globalsCssPath, finalCss, "utf-8");

    console.log(`Successfully compiled app/globals.css! Size: ${(finalCss.length / 1024).toFixed(1)} KB`);
  } catch (err) {
    console.error("Error building Tailwind CSS:", err);
    process.exit(1);
  }
}

buildCss();
