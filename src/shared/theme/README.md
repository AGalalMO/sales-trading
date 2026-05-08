# SALEC Design System - Theme

Centralized design tokens for consistent theming across the application.

## Structure

- **colors.js** - Color palette (backgrounds, text, borders, gradients, shadows)
- **spacing.js** - Spacing system (sections, gaps, padding, sizes)
- **typography.js** - Typography system (headings, body text, labels)

## Usage

### Colors

```js
import { colors } from '@/shared/theme';

// Access background colors
colors.background.base        // "#020f0e"
colors.background.card        // "#031311"
colors.emerald[300]           // "#10B981"
colors.gradient.card          // gradient string

// Use in className (inline)
className={`bg-[${colors.background.base}]`}
```

### Spacing

```js
import { spacing } from '@/shared/theme';

// For section padding
className={spacing.section.default}  // "py-20 sm:py-24"

// For gaps
className={`flex gap-4 ${spacing.gap.lg}`}
```

### Typography

```js
import { typography } from '@/shared/theme';

// For headings
className={typography.heading.h1}

// For body text
className={typography.body.default}
```

### Quick Tailwind Classes

```js
import { themeColors } from '@/shared/theme';

// Pre-composed Tailwind classes
className={themeColors.text.primary}         // "text-white"
className={themeColors.bg.card}              // gradient className
className={themeColors.border.light}         // "border-emerald-200/15"
```

## Color Reference

### Backgrounds

- `background.base` - Page background (#020f0e)
- `background.card` - Card background (#031311)
- `background.section.*` - Section-specific backgrounds

### Text

- `text.primary` - Main text (white)
- `text.secondary` - Secondary text (70% opacity)
- `text.tertiary` - Tertiary text (55% opacity)

### Accents

- `emerald[300]` - Primary action color (#10B981)
- `emerald.300_semi` - Semi-transparent variant
- `emerald.300_light` - Light/subtle variant

### Gradients

- `gradient.card` - Standard card gradient
- `gradient.cardLight` - Lighter card gradient
- `gradient.highlight` - Highlighted card gradient

## Extending the Theme

To add new tokens, add them to the appropriate file and export from `index.js`.

Example:

```js
// colors.js
export const colors = {
	// ... existing colors
	new: {
		token: "value",
	},
};
```

Then import and use:

```js
import { colors } from "@/shared/theme";
colors.new.token;
```
