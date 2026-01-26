# Using Colors in Your Project

## ✅ Now You Can Use Colors Directly in Tailwind!

### 1. Use with Tailwind classes:

```jsx
// Background colors
<div className="bg-[var(--color-bg-primary)]">
<div className="bg-[var(--color-bg-secondary)]">
<div className="bg-[var(--color-bg-tertiary)]">

// Text colors
<h1 className="text-[var(--color-text-primary)]">
<p className="text-[var(--color-text-secondary)]">
<span className="text-[var(--color-text-muted)]">

// Button colors
<button className="bg-[var(--color-btn-primary)] hover:bg-[var(--color-btn-primary-hover)]">
<button className="bg-[var(--color-btn-danger)] hover:bg-[var(--color-btn-danger-hover)]">

// Border colors
<div className="border border-[var(--color-border-default)]">
<input className="focus:border-[var(--color-border-focus)]">
```

### 2. Or use with JavaScript constants:

```jsx
import { COLORS } from '../constants';

<div style={{ backgroundColor: COLORS.background.primary }}>
  <h1 style={{ color: COLORS.text.primary }}>Hello</h1>
</div>
```

## Available Tailwind CSS Variables:

### Backgrounds:
- `bg-[var(--color-bg-primary)]` - #0F172A
- `bg-[var(--color-bg-secondary)]` - #1E293B
- `bg-[var(--color-bg-tertiary)]` - #0F1729

### Text:
- `text-[var(--color-text-primary)]` - White
- `text-[var(--color-text-secondary)]` - Gray-400
- `text-[var(--color-text-muted)]` - Gray-500

### Buttons:
- `bg-[var(--color-btn-primary)]` - Blue
- `bg-[var(--color-btn-primary-hover)]` - Darker Blue
- `bg-[var(--color-btn-danger)]` - Red
- `bg-[var(--color-btn-success)]` - Green

### Borders:
- `border-[var(--color-border-default)]` - Gray-700
- `border-[var(--color-border-focus)]` - Blue (for focus states)

## Quick Example:

```jsx
const MyComponent = () => {
  return (
    <div className="bg-[var(--color-bg-primary)] min-h-screen">
      <div className="bg-[var(--color-bg-secondary)] p-6 rounded-lg">
        <h1 className="text-[var(--color-text-primary)] text-2xl font-bold">
          Welcome
        </h1>
        <button className="bg-[var(--color-btn-primary)] hover:bg-[var(--color-btn-primary-hover)] text-[var(--color-text-primary)] px-4 py-2 rounded">
          Click Me
        </button>
      </div>
    </div>
  );
};
```

## Pro Tip:
You can also access colors via JavaScript for dynamic styling:
```jsx
import { COLORS } from '../constants';

const dynamicColor = isActive ? COLORS.button.primary : COLORS.button.secondary;
```
