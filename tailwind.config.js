/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // SALEC Background colors
        sales: {
          base: "#020f0e",
          card: "#031311",
          "section-default": "#021210",
          "section-alt": "#031310",
          "section-dark": "#02110f",
          "section-hero": "#021211",
          "header-bg": "#04120CCC",
        },
        // Emerald accent palette
        "sales-emerald": {
          50: "rgba(240, 253, 250, 0.95)",
          100: "rgba(207, 250, 245, 0.9)",
          200: "rgba(153, 246, 228, 0.85)",
          300: "#10B981",
          400: "#10B981",
          "50-semi": "rgba(240, 253, 250, 0.7)",
          "100-semi": "rgba(207, 250, 245, 0.6)",
          "200-semi": "rgba(153, 246, 228, 0.15)",
          "300-semi": "rgba(16, 185, 129, 0.3)",
          "300-light": "rgba(16, 185, 129, 0.12)",
          "300-bright": "#2dd4bf",
        },
        // Text colors
        "sales-text": {
          primary: "#ffffff",
          secondary: "rgba(240, 253, 250, 0.7)",
          tertiary: "rgba(240, 253, 250, 0.55)",
          muted: "rgba(240, 253, 250, 0.5)",
          dimmed: "rgba(240, 253, 250, 0.65)",
        },
        // Border colors
        "sales-border": {
          default: "rgba(255, 255, 255, 0.1)",
          light: "rgba(153, 246, 228, 0.15)",
          lighter: "rgba(153, 246, 228, 0.12)",
        },
      },

      spacing: {
        // Section spacing
        18: "4.5rem",
      },

      backgroundImage: {
        // Gradient backgrounds
        "sales-card": "linear-gradient(145deg, rgba(8, 44, 40, 0.34), rgba(1, 24, 22, 0.88))",
        "sales-card-light": "linear-gradient(145deg, rgba(8, 44, 40, 0.44), rgba(1, 24, 22, 0.86))",
        "sales-card-alt": "linear-gradient(145deg, rgba(8, 44, 40, 0.28), rgba(1, 24, 22, 0.84))",
        "sales-highlight": "linear-gradient(145deg, rgba(13, 90, 69, 0.28), rgba(1, 27, 24, 0.9))",
        "sales-cta": "radial-gradient(circle at 50% 15%, rgba(45, 212, 191, 0.2), rgba(1, 23, 20, 0.95) 60%)",
      },

      boxShadow: {
        // Shadows
        "sales-glow": "0 30px 80px -35px rgba(16, 185, 129, 0.5)",
      },

      fontSize: {
        // Typography - Headings
        "sales-display": ["3.125rem", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "600" }],
        "sales-h1": ["2.25rem", { lineHeight: "1.2", fontWeight: "600" }],
        "sales-h2": ["2rem", { lineHeight: "1.2", fontWeight: "600" }],
        "sales-h3": ["1.875rem", { lineHeight: "1.2", fontWeight: "500" }],
        "sales-h4": ["1.5rem", { lineHeight: "1.2", fontWeight: "500" }],
        // Typography - Body
        "sales-lg": ["1.25rem", { lineHeight: "1.6" }],
        "sales-base": ["1.125rem", { lineHeight: "1.6" }],
        "sales-sm": ["1rem", { lineHeight: "1.6" }],
        "sales-xs": ["0.75rem", { lineHeight: "1.5" }],
      },

      height: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};
