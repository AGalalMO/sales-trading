/**
 * SALEC Design System - Spacing System
 * Consistent spacing tokens for padding, margins, and gaps
 */

export const spacing = {
  // Section padding (vertical)
  section: {
    mobile: "py-18 sm:py-24", // ~72px mobile, ~96px desktop
    default: "py-20 sm:py-24", // ~80px mobile, ~96px desktop
  },

  // Gaps/margins
  gap: {
    xs: "gap-1.5",
    sm: "gap-3",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
  },

  // Padding
  padding: {
    card: "p-4 sm:p-5",
    cardLg: "p-6 sm:p-7",
    section: "px-6 py-6 sm:px-7 sm:py-7",
  },

  // Common measurements
  size: {
    headerHeight: "h-18",
    iconSmall: "h-8 w-8",
    iconMedium: "h-10 w-10",
    iconLarge: "h-11 w-11",
  },
};

export default spacing;
