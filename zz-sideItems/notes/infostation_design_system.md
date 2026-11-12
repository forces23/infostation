# Infostation — Official Design System

**Design direction:** Retro-Futuristic Knowledge Hub  
**Status:** Selected visual direction  
**Core concept:** A personal digital universe where knowledge, creativity, software projects, research, and games coexist inside a mysterious, pixel-art-inspired space environment.

The design combines a modern knowledge-management interface with the atmosphere of retro science-fiction games, emphasizing **simplicity, exploration, readability, and visual personality**.

> **Visual reference note:** The colors and measurements below are suggested implementation values approximating the approved concept images, not exact pixel-sampled values. The illustrations are design references; the website itself will be built by hand.

## 1. Color Palette

The interface uses extremely dark purple backgrounds, violet borders, and neon lavender highlights. Bright colors are used selectively to direct attention.

| Color | Hex | Intended use |
|---|---|---|
| Void Black | `#090713` | Page background |
| Deep Violet | `#141026` | Sidebar and panels |
| Dark Purple | `#251344` | Elevated surfaces |
| Plum | `#56318A` | Selected states |
| Neon Purple | `#9963E8` | Primary accents |
| Lavender | `#C6A6FF` | Text and highlights |
| Electric Cyan | `#42D6E8` | Diagrams and code |
| Neon Lime | `#B9F64A` | Game play buttons |
| Warm Gold | `#FFC857` | Favorite icons |

**Color principles:** Purple is the dominant identity color. Cyan is reserved for technical diagrams and selected interactions, lime for playable games, and gold for saved/favorite states. Keep large reading surfaces darker and calmer than illustrated areas.

### Suggested CSS Tokens

```css
:root {
  --color-bg: #090713;
  --color-panel: #141026;
  --color-elevated: #251344;
  --color-selected: #56318A;
  --color-primary: #9963E8;
  --color-lavender: #C6A6FF;
  --color-cyan: #42D6E8;
  --color-lime: #B9F64A;
  --color-gold: #FFC857;
}
```

## 2. Typography

The design's typography is strongly influenced by retro computer terminals, but remains modern enough for long-form reading.

| Element | Style | Suggested font |
|---|---|---|
| Logo | Clean, bold sans-serif | Space Grotesk |
| Main page titles | Large, light monospace | Space Mono |
| Article titles | Large, spacious monospace | IBM Plex Mono |
| Section headings | Medium monospace | IBM Plex Mono |
| Body text | Readable monospace | IBM Plex Mono |
| UI labels | Compact, medium-weight | Inter or IBM Plex Mono |
| Code blocks | Developer monospace | JetBrains Mono |

Typography uses generous spacing, especially around major titles. Avoid making everything bold; use size, positioning, and contrast to establish hierarchy.

## 3. Global Application Layout

There are two primary layouts.

### A. Browsing Layout

Used for **Notes**, **Projects**, **References**, and **Web Games**.

```text
┌────────────────────┬───────────────────────────────────────────────┐
│ INFOSTATION        │ PAGE TITLE + PIXEL-ART HERO BANNER            │
│                    ├───────────────────────────────────────────────┤
│ Home               │ Search · Category filters · Actions          │
│ Notes              ├───────────────┬───────────────┬───────────────┤
│ Projects           │ Content card  │ Content card  │ Content card  │
│ Web Games          ├───────────────┼───────────────┼───────────────┤
│ References         │ Content card  │ Content card  │ Content card  │
│ Resources          │               │               │               │
│                    │               │               │               │
│ ────────────       │               │               │               │
│ Tools / Bookmarks  │               │               │               │
└────────────────────┴───────────────┴───────────────┴───────────────┘
```

The browsing layout consists of a fixed sidebar, page-specific illustrated banner, search and filters, and a responsive grid of content cards.

### B. Article Reading Layout

Used when a visitor opens an individual note.

```text
┌─────────────────┬──────────────────────┬───────────────────────────────────┐
│ GLOBAL NAV      │ NOTES LIBRARY        │ ARTICLE READER                    │
│                 │                      │                                   │
│ Home            │ Search notes         │ Pixel-art cover                   │
│ Notes (active)  │ All · Fav · Recent   │ Article title                     │
│ Projects        │                      │ Tags · Date · Reading metadata    │
│ Web Games       │ Selected note        │                                   │
│ References      │ Other note           │ Headings and body content         │
│ Resources       │ Other note           │ Key Idea / Callout                │
│                 │ ...                  │ Diagrams · Lists · Code blocks    │
│ Tools           │                      │                                   │
└─────────────────┴──────────────────────┴───────────────────────────────────┘
```

This three-column reading experience is one of the defining features of the design: global navigation, searchable notes, and readable article content remain accessible simultaneously.

## 4. Sidebar Navigation

The fixed sidebar is shared across the website.

**Primary navigation:** Home, Notes, Projects, Web Games, References, Resources.

**Secondary tools:** Inbox, Ideas, Bookmarks, Archive, Tags.

Key styling details:

- Outlined icons.
- Active navigation backgrounds in purple.
- Compact text labels.
- Fine dividers between navigation groups.
- Atmospheric pixel-art scenery at the bottom.
- Consistent positioning and appearance between pages.

**Layout variation from exploration:** Some later mockups experiment with navigation on the **right** instead of the left. The official design language works with either; use a consistent position across the final application. The original approved browsing and open-note designs use a left sidebar.

## 5. Card and Component Styling

The shared component language includes:

- Rounded rectangular cards.
- Thin glowing purple borders.
- Purple category/tag pills.
- Subtle selected states.
- Action icons and metadata rows.
- Compact buttons.
- Favorites indicated with warm gold stars.
- Distinctive neon-lime **Play** buttons for games.

**Corner radius:** Generally **8–12px**, with stronger purple borders for selected or interactive states.

### Example: Note Card

```text
┌──────────────────────────────────┐
│ ♧ Learning Systems            ★ │
│ A personal learning framework.   │
│                                  │
│ #learning  #systems              │
└──────────────────────────────────┘
```

### Example: Game Card

```text
┌──────────────────────────────────┐
│ [Pixel-art game preview]         │
│                                  │
│ Orbital Dice                     │
│ Strategy / Dice       [Play ▶]    │
└──────────────────────────────────┘
```

## 6. Pixel-Art Identity

**Pixel art is the primary visual signature of Infostation.**

Recurring themes include:

- Celestial bodies, planets, moons, and stars.
- Observatories and satellite dishes.
- Mountain ridges and dark oceans.
- Violet skies and isolated futuristic structures.
- Purple-lit valleys and reflective water.

### Imagery Rules

1. Use panoramic **16-bit-inspired pixel illustrations** for page headers.
2. Maintain a limited range of dark violet, purple, lavender, and occasional cyan.
3. Favor mysterious, calm environments over busy action scenes.
4. Integrate artwork into page sections rather than placing it randomly.
5. Use different locations within the same imagined universe to distinguish pages.
6. Reserve more colorful or game-specific artwork for project and web-game thumbnails.
7. Avoid duplicated scenery or repeated moonlight reflections in large website backgrounds; keep the landscape continuous.

The website should feel as though every page is another destination within the **Infostation universe**.

## 7. Page-Specific Architecture

| Screen | Primary structure | Key components |
|---|---|---|
| **Notes** | Banner + search/filter + three-column note-card grid | Tags, descriptions, dates, reading time, favorites |
| **Open Note** | Global sidebar + notes library + article reader | Cover, metadata, headings, key ideas, diagrams, code blocks |
| **Projects** | Banner + filters + three-column project grid | Thumbnails, summaries, status, progress bars, technology tags |
| **References** | Banner + featured cards + saved-links table | Technology logos, categories, link descriptions, favorites |
| **Web Games** | Banner + filters + three-column game gallery | Pixel-art previews, genres, lime-green Play buttons, development status |
| **Home** | Large illustrated landing hero + dashboard tiles | Introduction, quote, recent content, projects, site links |

The Home page remains more atmospheric and introductory, while the other pages provide practical browsing and reading functionality.

### Notes Browser Details

- Search input and category filters.
- Grid/list view controls.
- “New Note” action where editing is authorized.
- Note cards with title, short summary, tags, date, estimated reading time, and favorite star.

### Open Note Details

- Selected note highlighted in the notes-library column.
- Large landscape cover image.
- Title, short subtitle, date, reading metadata, and tags.
- Numbered content sections.
- Highlighted **Key Idea** panels.
- Process diagrams, explanatory bullets, and code snippets with a Copy action.

### Projects Details

- Thumbnail grid with project title and summary.
- Development status and progress indicator.
- Technology tags and external links.
- Search and status/type filtering.

### References Details

- Featured documentation/reference cards.
- Search and category filters.
- Saved-links table with categories, notes, dates, and favorites.

### Web Games Details

- Game preview artwork in a three-column gallery.
- Genre/type filters.
- Play buttons for runnable games.
- Prototype/development state for unfinished projects.

## 8. Interaction and Animation

Animation should be subtle enough to maintain the website's calm character.

**Suitable effects:**

- Gently twinkling stars.
- Slow background atmospheric movement.
- Soft purple hover glows.
- Smooth card selection transitions.
- Animated progress indicators.
- Very slight shimmer on highlighted elements.

**Avoid:**

- Constant pulsing.
- Aggressive parallax.
- Excessive neon animation.
- Distracting effects inside long-form article-reading areas.

**Accessibility:** Respect reduced-motion preferences.

## 9. Design Principles

1. **Content first:** Notes, articles, projects, and references must remain readable and easy to navigate.
2. **Atmosphere without clutter:** Pixel-art environments provide character but should not compete with functional content.
3. **Consistency:** Every page shares typography, navigation, card language, colors, and spacing.
4. **Exploration:** Visitors should feel encouraged to discover related notes, projects, games, and resources.
5. **Personal identity:** Infostation should resemble a creative person's own digital world rather than generic productivity software.

## 10. Final Design Summary

| Category | Chosen direction |
|---|---|
| Design name | Infostation — Retro-Futuristic Knowledge Hub |
| Theme | Dark mode only |
| Primary palette | Void black, deep violet, neon purple, lavender |
| Accent colors | Cyan, lime, gold |
| Typography | Retro monospace + clean modern sans-serif |
| Navigation | Fixed vertical sidebar (originally left; right-side variant explored) |
| Layout | Dashboard grids + three-column article reader |
| Cards | Rounded, dark, thin purple outlines |
| Hero imagery | Panoramic sci-fi pixel art |
| Icons | Minimal outlined icons |
| Interactive elements | Purple filters, selected states, compact controls |
| Signature experience | Exploring knowledge through a pixel-art sci-fi universe |

---

## Essential Idea

**Infostation should feel like a digital space outpost built to preserve knowledge, document experiments, share projects, and invite others to explore.**

The visual world creates the personality; the structured notes, projects, references, and games make it useful.
