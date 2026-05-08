/**
 * SALEC Design System - Color Palette
 * Centralized color tokens for consistent theming across the application
 */

export const colors = {
  // Background colors
  background: {
    base: "#020f0e",
    card: "#031311",
    section: {
      default: "#021210",
      alt: "#031310",
      dark: "#02110f",
      hero: "#021211",
    },
  },

  // Header colors
  header: {
    background: "#04120CCC",
    border: "rgba(255, 255, 255, 0.1)",
  },

  // Emerald/teal accent palette
  emerald: {
    50: "rgba(240, 253, 250, 0.95)",
    100: "rgba(207, 250, 245, 0.9)",
    200: "rgba(153, 246, 228, 0.85)",
    300: "#10B981",
    400: "#10B981",
    50_semi: "rgba(240, 253, 250, 0.7)",
    100_semi: "rgba(207, 250, 245, 0.6)",
    200_semi: "rgba(153, 246, 228, 0.15)",
    300_semi: "rgba(16, 185, 129, 0.3)",
    300_light: "rgba(16, 185, 129, 0.12)",
    300_bright: "#2dd4bf",
  },

  // Text colors
  text: {
    primary: "#ffffff",
    secondary: "rgba(240, 253, 250, 0.7)",
    tertiary: "rgba(240, 253, 250, 0.55)",
    muted: "rgba(240, 253, 250, 0.5)",
    dimmed: "rgba(240, 253, 250, 0.65)",
  },

  // Border colors
  border: {
    default: "rgba(255, 255, 255, 0.1)",
    light: "rgba(153, 246, 228, 0.15)",
    lighter: "rgba(153, 246, 228, 0.12)",
  },

  // Gradient backgrounds
  gradient: {
    card: "linear-gradient(145deg, rgba(8, 44, 40, 0.34), rgba(1, 24, 22, 0.88))",
    cardLight: "linear-gradient(145deg, rgba(8, 44, 40, 0.44), rgba(1, 24, 22, 0.86))",
    cardAlt: "linear-gradient(145deg, rgba(8, 44, 40, 0.28), rgba(1, 24, 22, 0.84))",
    highlight: "linear-gradient(145deg, rgba(13, 90, 69, 0.28), rgba(1, 27, 24, 0.9))",
    cta: "radial-gradient(circle at 50% 15%, rgba(45, 212, 191, 0.2), rgba(1, 23, 20, 0.95) 60%)",
  },

  // Shadows
  shadow: {
    glow: "0 30px 80px -35px rgba(16, 185, 129, 0.5)",
  },
};

export default colors;
