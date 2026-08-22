# Fathom UI

An accessible, tested React component library. Headless behavior from Radix, themeable through CSS variables, shipped as tree-shakeable ESM + CJS with types.

[![npm](https://img.shields.io/npm/v/@engraya/fathom-ui)](https://www.npmjs.com/package/@engraya/fathom-ui)
[![CI](https://github.com/engraya/fathom-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/engraya/fathom-ui/actions/workflows/ci.yml)
[![license](https://img.shields.io/npm/l/@engraya/fathom-ui)](./LICENSE)

> Built as the shared foundation for my other projects — every component is keyboard-accessible, unit- and a11y-tested (jest-axe), and documented in Storybook.

## Why it exists

Most of my apps re-implemented the same primitives, sometimes inaccessibly. Fathom UI fixes that once: a small set of composable, WCAG-minded components with a single theming contract, so the apps that consume it inherit correct focus behavior, ARIA wiring, and dark mode for free.

## Install

```bash
npm install @engraya/fathom-ui
```

Import the stylesheet once (it defines the design tokens and component styles):

```tsx
import "@engraya/fathom-ui/styles.css";
import { Button } from "@engraya/fathom-ui";

export function Example() {
  return <Button variant="primary">Save</Button>;
}
```

## Theming

Tokens are CSS custom properties. Light is the default; dark applies automatically from the OS preference, and you can force either with `data-theme` on the root:

```html
<html data-theme="dark"> ... </html>
```

Override any token in your own CSS:

```css
:root {
  --fathom-primary: #0d7d72;
  --fathom-radius: 0.75rem;
}
```

## Components

| Component | Notes |
| --- | --- |
| `Button` | `variant` (primary/secondary/ghost/danger) · `size` (sm/md/lg) · `asChild` polymorphism via Radix Slot |
| `Input` | `invalid` toggles `aria-invalid` and error styling |
| `Badge` | `variant` (neutral/success/warning/danger/info) |
| `Dialog` | Radix-backed: focus trap, `Esc` to close, scroll lock, required accessible title |

```tsx
import { Dialog, DialogTrigger, DialogClose, DialogContent, Button } from "@engraya/fathom-ui";

<Dialog>
  <DialogTrigger asChild><Button>Delete</Button></DialogTrigger>
  <DialogContent title="Delete project?" description="This cannot be undone.">
    <DialogClose asChild><Button variant="danger">Confirm</Button></DialogClose>
  </DialogContent>
</Dialog>
```

## Development

```bash
npm install
npm run storybook       # component workshop at :6006
npm run test            # Vitest + Testing Library + jest-axe
npm run test:coverage
npm run typecheck
npm run build           # tsup -> dist (ESM + CJS + d.ts + styles.css)
```

## Testing & accessibility

Every component has unit/interaction tests and an automated accessibility assertion via `jest-axe` (`expect(await axe(container)).toHaveNoViolations()`). Behavior that must be keyboard-operable (dialog open/close, focus) is tested with `@testing-library/user-event`.

## Releasing

Versioning is managed with [Changesets](https://github.com/changesets/changesets):

```bash
npx changeset          # describe the change
npx changeset version  # bump + changelog
npm run build && npm run release
```

## License

MIT © Ahmad Yakubu Ahmad
