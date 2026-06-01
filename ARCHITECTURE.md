# Portfolio Website - Component Architecture

## Component Tree

```
App.tsx
├── useTheme() → provides theme & toggleTheme
│
├── Navigation.tsx (fixed header)
│   ├── Theme toggle button
│   ├── Logo with link
│   └── Navigation menu with smooth scroll
│
├── Hero.tsx
│   ├── Background gradients (animating)
│   ├── Main title with gradient text
│   ├── CTA buttons
│   └── Floating decorative cards
│
├── About.tsx
│   ├── useScrollAnimation() → visibility trigger
│   ├── Profile text
│   ├── 4 Trait cards
│   │   ├── Icon
│   │   ├── Title
│   │   └── Description
│   └── 3 Highlight boxes (stats)
│
├── Skills.tsx
│   ├── useScrollAnimation() → visibility trigger
│   ├── 4 Skill category cards
│   │   ├── Icon
│   │   ├── Category title
│   │   └── SkillBadge[] (reusable component)
│   │       ├── Gradient background
│   │       ├── Hover scale effect
│   │       └── Animated entrance
│   └── Current focus section
│
├── Experience.tsx
│   ├── useScrollAnimation() → visibility trigger
│   └── TimelineItem[] (reusable component)
│       ├── Position title
│       ├── Company name
│       ├── Period & location
│       ├── Description bullets
│       ├── Animated dot
│       └── Hover elevation effect
│
├── Projects.tsx
│   ├── useScrollAnimation() → visibility trigger
│   ├── ProjectCard[] (reusable component)
│   │   ├── Project title
│   │   ├── Icon/placeholder
│   │   ├── Description
│   │   ├── Tech stack badges
│   │   ├── View button
│   │   └── Hover 3D effect
│   └── CTA section
│
├── Contact.tsx
│   ├── useScrollAnimation() → visibility trigger
│   ├── Heading text
│   ├── Social links (LinkedIn, Email, GitHub)
│   ├── Contact info (location, email)
│   └── Decorative animated circles
│
└── Footer.tsx
    ├── Copyright notice
    └── Navigation links with hover underlines
```

## Reusable Components

### SkillBadge
**Location**: `src/components/common/SkillBadge.tsx`

Props:
- `name: string` - Skill name
- `delay?: number` - Animation delay in ms

Features:
- Gradient background
- Scale on hover
- Glow effect
- Configurable animation delay

### ProjectCard
**Location**: `src/components/common/ProjectCard.tsx`

Props:
- `title: string` - Project title
- `description: string` - Brief description
- `tech: string[]` - Tech stack
- `delay?: number` - Animation delay

Features:
- Icon placeholder
- Tech badge list
- Hover elevation
- CTA button

### TimelineItem
**Location**: `src/components/common/TimelineItem.tsx`

Props:
- `title: string` - Role title
- `company: string` - Company name
- `period: string` - Time period
- `location: string` - Location
- `description: string[]` - Bullet points
- `isLeft?: boolean` - Alternating layout
- `delay?: number` - Animation delay

Features:
- Animated dot indicator
- Directional entrance (left/right)
- Hover effects
- Responsive timeline

## Custom Hooks

### useTheme
**Location**: `src/hooks/useTheme.ts`

Returns:
- `theme: 'light' | 'dark'` - Current theme
- `toggleTheme: () => void` - Theme toggle function

Behavior:
- Persists to localStorage
- Applies `data-theme` attribute to HTML
- Checks system preference on first load
- Triggers re-render on change

### useScrollAnimation
**Location**: `src/hooks/useScrollAnimation.ts`

Returns:
- `ref: RefObject<HTMLElement>` - Attach to animated element
- `isVisible: boolean` - Visibility state

Behavior:
- Uses Intersection Observer API
- Triggers animation when element enters viewport
- Configurable threshold and margin
- Cleanup on unmount

## Utility Functions

### classNames
**Location**: `src/utils/classNames.ts`

Usage:
```typescript
cn('class1', condition && 'class2', undefined, 'class3')
// Returns: 'class1 class2 class3'
```

## CSS Modules Structure

Each component has a corresponding `.module.css` file with:
- **Scoped classes** - No global namespace pollution
- **CSS variables** - From global design tokens in `src/index.css`
- **Animations** - Using @keyframes from global styles
- **Responsive queries** - Mobile-first design

### Global Design Tokens (`src/index.css`)

**Colors**:
- `--bg`, `--bg-secondary` - Background colors
- `--text`, `--text-secondary`, `--text-muted` - Text colors
- `--accent-primary`, `--accent-secondary`, `--accent-tertiary` - Accent colors

**Spacing & Sizing**:
- `--text-xs` through `--text-5xl` - Font sizes
- `--shadow-sm` through `--shadow-xl` - Shadow definitions

**Timing**:
- `--transition-fast`: 150ms
- `--transition-base`: 300ms
- `--transition-slow`: 500ms

**Dark Mode Support**:
- Uses `@media (prefers-color-scheme: dark)` for system preference
- Uses `[data-theme="dark"]` for manual toggle
- Seamless switching with CSS variables

## Animation System

### Keyframes Available

- `fadeIn` - Opacity transition
- `slideInUp` - Slide up with fade
- `slideInDown` - Slide down with fade
- `slideInLeft` - Slide left with fade
- `slideInRight` - Slide right with fade
- `scaleIn` - Scale from 95% with fade
- `float` - Gentle vertical bobbing
- `glow` - Pulsing shadow/glow
- `gradientShift` - Animated gradient position
- `typewriter` - Width-based reveal (future use)
- `pulse` - Opacity pulse

### Animation Delays

Controlled via inline `style` prop with `animation` property:
```typescript
style={{
  animation: `slideInUp 0.6s ease-out ${delay}ms backwards`,
}}
```

This allows staggered animations across lists.

## Data Flow

1. **App.tsx** provides `data-theme` to HTML
2. Global CSS (index.css) defines color tokens
3. Components use `useScrollAnimation()` for visibility detection
4. Components render with animations via CSS modules
5. `useTheme()` manages dark/light mode globally
6. Theme preference stored in localStorage

## Performance Optimizations

- CSS modules for scoped styling (no specificity issues)
- CSS variables for efficient theme switching
- Intersection Observer for scroll animations (no scroll listener spam)
- Vite code-splitting for smaller bundles
- React Compiler enabled for optimizations
- Lazy component rendering with scroll triggers

## Responsive Behavior

### Desktop (1200px+)
- Full animations enabled
- Multi-column grids
- Sticky navigation
- Decorative elements visible

### Tablet (768px-1199px)
- Simplified animations
- 2-column grids
- Responsive typography
- Hamburger menu hidden

### Mobile (<768px)
- Touch-friendly buttons
- Single column layouts
- Hamburger menu visible
- Decorative elements hidden (performance)
- Simplified animations

---

This architecture ensures:
- ✅ Code reusability through components
- ✅ Maintainability through CSS modules
- ✅ Performance through optimizations
- ✅ Scalability for future additions
- ✅ Accessibility with semantic HTML
