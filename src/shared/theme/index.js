/**
 * SALEC Design System - Unified Theme Export
 * Import all theme tokens from here
 */

export { default as colors } from "./colors";
export { default as spacing } from "./spacing";
export { default as typography } from "./typography";

// Convenience export for common color groups
export const themeColors = {
  text: {
    primary: "text-white",
    secondary: "text-emerald-50/70",
    tertiary: "text-emerald-50/55",
    muted: "text-emerald-50/65",
  },
  bg: {
    card: "bg-[linear-gradient(145deg,rgba(8,44,40,0.34),rgba(1,24,22,0.88))]",
    cardLight: "bg-[linear-gradient(145deg,rgba(8,44,40,0.44),rgba(1,24,22,0.86))]",
    header: "bg-[#04120CCC]",
  },
  border: {
    default: "border-white/10",
    light: "border-emerald-200/15",
    lighter: "border-emerald-100/12",
  },
};
