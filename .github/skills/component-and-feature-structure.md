# Component And Feature Structure Skill

Use these rules whenever creating UI components or feature modules.

## Shared Components

- Shared components that are reused across features must be created in `src/shared/components`.
- Layout-level components (Header, Footer, Navigation, Layouts) always belong in `src/shared/components` since they are used globally across the application.
- Layout-level components (Header, Footer, Navigation, Layouts) always belong in `src/shared/components` since they are used globally across the application.

## Feature Modules

- Every new feature must be created under `src/features/<feature-name>`.
- Each feature folder must include:
  - `index.js` (public exports)
  - `components/` (feature-scoped components)
  - `hooks/` (feature-scoped custom hooks)
  - `utils/` (feature-scoped utility functions)

## Example

`src/features/orders/`

- `index.js`
- `components/`
- `hooks/`
- `utils/`
