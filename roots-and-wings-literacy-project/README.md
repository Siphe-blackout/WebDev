# Roots & Wings Literacy Project — Website

Static HTML/CSS/JS website built for **Proposal 1 (Roots & Wings Literacy Project)**,
a childhood literacy nonprofit in Columbus, Ohio.

## Pages
| File | Description |
|------|-------------|
| `index.html` | Homepage (hero, impact stats, program preview, story, CTA) |
| `about.html` | Organisation history, mission, vision, timeline, target audience |
| `programs.html` | Tutoring, Book Mailings, Summer Reading Camps |
| `impact.html` | Impact stats, student stories, annual report highlights |
| `donate.html` | One-time/recurring donation form + corporate sponsorship |
| `volunteer.html` | Tutor/volunteer application form |
| `contact.html` | Two locations (embedded maps), phone, email, contact form |

## Structure
```
/
├── index.html
├── about.html
├── programs.html
├── impact.html
├── donate.html
├── volunteer.html
├── contact.html
├── css/
│   └── style.css      — external design system (tokens, layout, components, responsive)
├── js/
│   └── main.js        — mobile nav, scroll reveal, animated counters, demo forms
├── images/            — reserved for photography/assets
└── README.md
```

## Design System (Part 2)

### Colour palette
| Token | Hex | Use |
|-------|-----|-----|
| Teal | `#0D7377` | Primary brand, links, accents |
| Teal dark | `#095456` | Hover states |
| Teal tint | `#E6F3F3` | Soft backgrounds, tags |
| Cream | `#F8F4E8` | Page background |
| Coral | `#E07A5F` | Primary CTAs / donate buttons |
| Charcoal | `#2D2D2D` | Body text, headings |
| White | `#FFFFFF` | Cards, forms |

### Typography
- **Display:** Sora (600 / 700 / 800) — headings, quotes, brand
- **Body:** Inter (400 / 500 / 600) — paragraphs, UI
- Fluid type scale using `clamp()` and `rem` for responsiveness

### Layout
- CSS Grid + Flexbox
- Max container width: 1120px
- Mobile-first with breakpoints at **640px** (tablet), **880px** (desktop nav), **1100px** (large)

### Responsive strategy
- Relative units (`rem`, `%`, `clamp`) for type and spacing
- Media queries switch multi-column grids → single column on small screens
- Hamburger navigation below 880px; full horizontal nav above
- Sticky header with backdrop blur
- Map embeds and forms stack vertically on mobile

## JavaScript behaviour
- Mobile nav toggle (ARIA-expanded)
- IntersectionObserver scroll-reveal for `.reveal` elements
- Animated count-up for `[data-count]` stats
- Demo form submit handlers (no backend; shows success message)
- Donation amount button selection

## Changelog

### Part 2 — CSS Styling & Responsive Design (2026-10-04)
- **Created external stylesheet** `css/style.css` and linked it from every HTML page (already present in Part 1 markup).
- **CSS reset** applied for consistent cross-browser baseline (`box-sizing`, margins, form elements).
- **Design tokens** defined in `:root` (colours, fonts, fluid type scale, spacing, radii).
- **Base styles** set for body, headings, paragraphs, lists.
- **Typography** — Sora + Inter via Google Fonts; properties used: `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`.
- **Layout** — CSS Grid (`.grid`, `.grid-2`, `.grid-3`) and Flexbox for nav, hero, CTAs, forms, footer.
- **Visual styles** — colour, background, border, box-shadow, border-radius; pseudo-classes `:hover`, `:focus-visible`, `:active`.
- **Components styled:** header/nav, buttons (primary/teal/ghost/outline), hero, cards, stats, timeline, quotes, forms, contact details, maps, footer, CTA band.
- **Cascading** used extensively (shared utility classes, component modifiers) to minimise selector count.
- **Responsive design:**
  - Breakpoints: 640px (tablet), 880px (desktop nav), 1100px (large desktop).
  - Multi-column → single-column layout on smaller screens.
  - Relative units (`rem`, `%`, `clamp`) throughout.
  - Mobile hamburger menu; desktop horizontal nav + CTA.
- **JS enhancements** in `js/main.js`: mobile nav, scroll reveal, animated counters, demo forms, amount buttons.
- **Accessibility:** focus-visible outlines, ARIA attributes on nav toggle, visually-hidden labels, reduced-motion support.
- **No Part 1 structural HTML changes required** — pages already referenced `css/style.css` and `js/main.js`; Part 2 supplied the missing assets and completed visual/responsive implementation.

### Part 1 — HTML structure (prior)
- Built all seven static HTML pages with semantic structure, navigation, forms, and content matching Proposal 1.
- Placeholder links for CSS and JS established.

### Part 3 — Enhancing Functionality and SEO (2026-11-01)

- Created enquiry.html with purpose-specific form (tutoring, books, camps, volunteer, sponsor).
- Enhanced contact.html form with stronger validation and mailto-based email composition.
- Implemented client-side JavaScript validation with clear error messages on both forms.
- Added AJAX-style (asynchronous) form handling and dynamic response messages.
- Added interactive accordion component on Programs page.
- Implemented image lightbox gallery on Impact page.
- Added live search + category filter on Programs page.
- Created robots.txt and sitemap.xml for search-engine indexing.
- Expanded main.js with validation, lightbox, accordion and filter logic.
- Updated navigation and footer links to include Enquiry page.
- Documented all changes in this changelog.

## How to view
Open any `.html` file in a browser (or serve the folder with a local static server).  
All pages share the same external CSS and JS.

## Notes
- Forms are front-end demos only (no backend / payment processor).
- Map embeds use OpenStreetMap (no API key required).
- Colour palette, typography scale, and page list follow Proposal 1 exactly.
- Mobile-first, responsive via CSS Grid/Flexbox; hamburger nav under 880px.

## References
- Proposal 1 brief (Roots & Wings Literacy Project)
- Google Fonts — Sora & Inter
- OpenStreetMap embed API
- MDN Web Docs — CSS Grid, Flexbox, media queries, Intersection Observer
- W3C WCAG considerations for focus and reduced motion
