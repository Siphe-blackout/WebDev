# Roots & Wings Literacy Project — Website

## Project Title
Roots & Wings Literacy Project — Website Development Project

## Student Information
- **Subject Name & Code:** WEDE5020 —Web Development
- **Student Name:** Siphebulumko Somana
- **Student Number:** ST10517786
- **Lecturer:** L.Sibene
- **Submission:** Part 1 — Building the Foundation: Project Initiation and Planning

---

## Project Overview

Roots & Wings Literacy Project is a fictional 501(c)(3) nonprofit
organisation based in Columbus, Ohio, created for this assignment. The
organisation works to close the childhood literacy gap for K–5 students
through three core programs: free tutoring, monthly book mailings, and
summer reading camps.

This repository contains the design, planning, and initial HTML build for
the Roots & Wings website — a seven-page site intended to inform visitors
about the organisation, showcase its impact, and drive three key actions:
donating, volunteering, and enquiring about enrolling a child in a program.

The project follows a three-part structure across the module:
- **Part 1 (this submission):** project initiation, planning, proposal,
  content research, sitemap, and initial repository setup.
- **Part 2:** full HTML build-out of all pages.
- **Part 3:** styling, refinement, testing, and final submission.

---

## Website Goals and Objectives

**Primary goal:** create a functional, visually coherent, and informative
website that helps Roots & Wings attract donors, recruit volunteer tutors,
and inform families about its free literacy programs.

**Specific objectives:**
- Clearly communicate the organisation's mission, history, and impact
- Present all three programs (Tutoring, Book Mailings, Summer Camps) with
  enough detail that a visitor understands how to get involved
- Provide a low-friction path to donate (with a working, clearly labelled
  donation form)
- Provide a low-friction path to apply as a volunteer tutor
- Give families and partners at least one clear way to make contact,
  including two physical locations
- Present real, consistent statistics across every page (no contradicting
  numbers between the homepage, About, Programs, and Impact pages)

**Key performance indicators (KPIs):**
| KPI | Target |
|---|---|
| Pages with a clear call-to-action | 100% (all 7 pages) |
| Cross-browser rendering without layout breakage | Chrome, Firefox, Edge |
| Working internal navigation across all 5+ pages | 100% of links functional |
| Forms with required-field validation | Donate, Volunteer, Contact, Newsletter |

---

## Key Features and Functionality

- **Homepage (`index.html`)** — hero introduction, impact statistics,
  program preview, testimonial, and calls to action
- **About (`about.html`)** — mission, vision, organisation history/timeline,
  and target audience breakdown
- **Programs (`programs.html`)** — detailed breakdown of Tutoring, Book
  Mailings, and Summer Reading Camps
- **Impact & Stories (`impact.html`)** — annual statistics, student
  testimonials, and a funding-allocation breakdown
- **Donate (`donate.html`)** — donation form (one-time/monthly, suggested
  and custom amounts) and corporate sponsorship information
- **Volunteer (`volunteer.html`)** — process explanation, requirements, and
  a tutor application form
- **Contact (`contact.html`)** — two physical locations with embedded maps,
  phone, email, and a contact form
- **Consistent site-wide navigation and footer** across all pages
- **Newsletter signup** in the footer of every page

---

## Timeline and Milestones

| Milestone | Target Date | Status |
|---|---|---|
| Organisation selection & proposal drafting | Week 1 | Complete |
| Website Project Proposal (two organisations) submitted for approval | Week 1–2 | Complete |
| Content research and sourcing | Week 2 | Complete |
| Sitemap and file/folder structure planning | Week 2 | Complete |
| GitHub repository setup | Week 2 | Complete |
| Initial HTML structure for all 7 pages | Week 3 | Complete |
| Part 1 submission (proposal, content ZIP, HTML, repo link) | Week 3 | Complete |
| Part 2 — full content integration and functional navigation | Week 4–5 | Upcoming |
| Part 3 — styling, testing, debugging, final submission | Week 6–7 | Upcoming |

*(Dates should be adjusted to match your subject's actual submission
calendar.)*

---

## Part 1 Details

Part 1 covers project initiation and planning. Deliverables completed in
this part:

1. **Website Project Proposal** — Word document outlining scope, goals, and
   timeline for the approved organisation (Roots & Wings Literacy Project).
2. **Content Research and Sourcing** — original page content for all 7
   pages plus a sourcing/reference log for fonts, icons, and map assets,
   submitted as a compressed ZIP file.
3. **Sitemap** — visual representation of the site's page hierarchy (see
   below).
4. **Initial HTML files** — semantic HTML structure for all 7 pages, pushed
   to this repository with descriptive commit messages.

Part 2 and Part 3 deliverables (full styling, JavaScript behaviour,
cross-browser testing, and final debugging) will be added in future commits
and documented in the Changelog below.

---

## Sitemap

```
Home (index.html)
│
├── About (about.html)
│
├── Programs (programs.html)
│     ├── #tutoring
│     ├── #book-mailings
│     └── #summer-camps
│
├── Impact & Stories (impact.html)
│
├── Volunteer (volunteer.html)
│
├── Contact (contact.html)
│
└── Donate (donate.html)
      └── #sponsor
```

All 7 pages are reachable from the primary navigation menu on every page.
The Programs and Donate pages contain in-page anchor links (`#tutoring`,
`#book-mailings`, `#summer-camps`, `#sponsor`) referenced from other pages
(e.g. the homepage links to `programs.html`, the footer links to
`donate.html#sponsor`).

---

## Changelog

### [Unreleased] — Part 2/3 work
- Pending: full CSS styling pass
- Pending: JavaScript interactivity (mobile navigation, form handling,
  animated statistics)
- Pending: cross-browser testing and debugging

### Part 1 — [Insert submission date]
- Initial repository structure created (root HTML files + `css`, `js`,
  `images` folders)
- Added semantic HTML for all 7 pages: `index.html`, `about.html`,
  `programs.html`, `impact.html`, `donate.html`, `volunteer.html`,
  `contact.html`
- Added consistent header navigation and footer across all pages
- Added donation form, volunteer application form, contact form, and
  newsletter signup form (semantic HTML only, no styling/scripting yet)
- Added two contact locations with embedded OpenStreetMap maps
- Completed Website Project Proposal document
- Completed content research and sourcing documentation
- Completed sitemap
- Set up GitHub repository and pushed initial commit

---

## References

*(Formatted in Harvard style — replace with your institution's required
referencing style if different.)*

Google Fonts (2025) *Sora*. Available at: https://fonts.google.com/specimen/Sora (Accessed: 12 August 2026).

Google Fonts (2025) *Inter*. Available at: https://fonts.google.com/specimen/Inter (Accessed: 12 August 2026).

OpenStreetMap contributors (2026) *OpenStreetMap*. Available at: https://www.openstreetmap.org (Accessed: 12 August 2026).

Cooper, H. (2003) 'Summer Learning Loss: The Problem and Some Solutions', *ERIC Digest*. Available at: https://eric.ed.gov (Accessed: 12 August 2026).

Charity Navigator (2025) *How Do We Rate Charities' Accountability and Transparency?*. Available at: https://www.charitynavigator.org (Accessed: 12 August 2026).

*(See `content-research/sources-and-references.md` for the full sourcing
log with per-asset licence details.)*
