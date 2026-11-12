# Using Google Fonts with `next/font`

Load the font and assign it to a CSS variable:

```tsx
import { Kode_Mono } from "next/font/google";

const kodeMono = Kode_Mono({
  variable: "--font-kode-mono",
  subsets: ["latin"],
});
```

Add the generated variable class to `<html>`:

```tsx
<html className={`${kodeMono.variable} h-full antialiased`}>
```

`kodeMono.variable` defines `--font-kode-mono` on `<html>`, so the variable is available to every element inside the page. It makes the font available globally, but does not apply the font automatically.

Map the variable to a Tailwind utility in `globals.css`:

```css
@theme inline {
  --font-kode: var(--font-kode-mono);
}
```

Apply the font where it is needed:

```tsx
<h1 className="font-kode">InfoStation</h1>
```

To apply the font directly instead, use `kodeMono.className`:

```tsx
<body className={`${kodeMono.className} min-h-full`}>
```

- `kodeMono.variable` makes the font available through a CSS variable.
- `font-kode` applies that variable using the Tailwind theme mapping.
- `kodeMono.className` applies the font directly to an element and its descendants.

# Recommended App Router directory structure

Next.js does not require one specific organization style. A good approach is to keep `app` focused on routing, put reusable interface pieces in `components`, and group larger behavior by feature.

```text
infostation/
├── app/
│   ├── (main)/                    # Route group; not included in URLs
│   │   ├── notes/
│   │   │   ├── page.tsx          # /notes
│   │   │   ├── loading.tsx       # Optional loading UI for /notes
│   │   │   └── _components/      # Used only by the notes route
│   │   │       └── note-list.tsx
│   │   ├── projects/
│   │   │   └── page.tsx          # /projects
│   │   ├── games/
│   │   │   └── page.tsx          # /games
│   │   └── resources/
│   │       └── page.tsx          # /resources
│   ├── api/
│   │   └── notes/
│   │       └── route.ts          # /api/notes
│   ├── globals.css
│   ├── layout.tsx                # Root HTML and shared site layout
│   ├── page.tsx                  # Home page: /
│   ├── loading.tsx               # Optional global loading UI
│   ├── not-found.tsx             # Optional 404 UI
│   └── favicon.ico
├── components/
│   ├── layout/                    # Site-wide structural components
│   │   ├── sidebar.tsx
│   │   └── footer.tsx
│   └── ui/                        # Small reusable UI building blocks
│       ├── button.tsx
│       ├── card.tsx
│       └── page-heading.tsx
├── features/
│   ├── notes/                     # Reusable notes behavior
│   │   ├── components/
│   │   │   └── note-card.tsx
│   │   ├── actions.ts             # Server actions, if needed
│   │   ├── queries.ts             # Data-reading functions
│   │   ├── types.ts
│   │   └── utils.ts
│   └── projects/
│       ├── components/
│       ├── queries.ts
│       └── types.ts
├── lib/                           # Shared services and general utilities
│   ├── db.ts
│   ├── constants.ts
│   └── utils.ts
├── types/                         # Types shared by multiple features
│   └── index.ts
├── public/                        # Files available from the site root
│   ├── icons/
│   └── images/
├── next.config.ts
├── package.json
└── tsconfig.json
```

## What belongs where

- `app/`: Routes and special Next.js files such as `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, and `route.ts`.
- `components/ui/`: Small components that can be reused anywhere, such as buttons and cards.
- `components/layout/`: Shared page structure, such as the sidebar, navigation, and footer.
- `features/`: Everything associated with a larger feature, including its components, data access, actions, types, and utilities.
- `lib/`: Code shared across unrelated features, such as database setup and general utilities.
- `types/`: Types genuinely shared across multiple features. Keep feature-specific types inside their feature.
- `public/`: Static images, SVGs, fonts, and other files. `public/icons/box.svg` is referenced as `/icons/box.svg`.

## Route groups and private folders

A folder wrapped in parentheses organizes routes without adding a URL segment:

```text
app/(main)/notes/page.tsx  ->  /notes
```

A normal folder does become part of the URL:

```text
app/main/notes/page.tsx  ->  /main/notes
```

A folder beginning with an underscore is private to the route and ignored by the routing system:

```text
app/(main)/notes/_components/note-list.tsx
```

Use a route-level `_components` folder when a component belongs to only one route. Move it to `components` or `features` once it is shared.

## A simple rule for deciding where a component goes

```text
Used by one route only?          -> app/.../_components/
Reusable visual building block? -> components/ui/
Shared site structure?          -> components/layout/
Part of a complete feature?     -> features/feature-name/
```

Avoid creating folders before they are useful. For a small project, start with `app`, `components`, `lib`, and `public`; add `features` when a section develops multiple related components, data functions, and types.
