/**
 * SALEC Design System - Typography System
 * Text sizes, weights, and line heights
 */

export const typography = {
  // Headings
  heading: {
    display: "text-5xl sm:text-6xl font-semibold leading-[1.05] tracking-tight",
    h1: "text-4xl sm:text-6xl font-semibold leading-tight",
    h2: "text-4xl font-semibold leading-tight sm:text-5xl",
    h3: "text-3xl font-medium leading-tight sm:text-[34px]",
    h4: "text-2xl font-medium leading-tight",
  },

  // Body text
  body: {
    large: "text-xl leading-relaxed",
    default: "text-lg leading-relaxed",
    small: "text-base leading-relaxed",
    xs: "text-sm",
  },

  // Labels and tags
  label: {
    default: "text-xs uppercase tracking-[0.14em]",
    small: "text-[10px] uppercase tracking-[0.08em]",
  },

  // Links and CTAs
  link: "font-medium text-emerald-300 transition-colors hover:text-emerald-200",
  cta: "font-semibold transition-transform hover:-translate-y-0.5",
};

export default typography;
