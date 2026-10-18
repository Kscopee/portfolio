# Phase 4 Design QA

## Evidence

- Source visual truth: `docs/reference/inspiration/08-characters-page-a.jpg`, `09-characters-page-b.jpg`, and `10-videos-page-carousel-a.jpg` through `13-videos-page-grid-b.jpg`.
- Rendered implementation: the original Phase 4 captures plus a 2026-10-18 closeout pass covering the revised desktop archive, 375px filter bar, LitterSense detail hero, and Csoles detail hero.
- Browser method: local Astro preview opened in headless Chrome through the Chrome DevTools Protocol because the in-app browser was not available.
- Desktop comparison viewport: 1600 × 760 CSS pixels at device scale factor 1. The source images are 1600 × 749–761 pixels; no density normalization was needed.
- Mobile verification viewport: 375 × 812 CSS pixels at device scale factor 1.
- States checked: project introduction, filtered IoT result, capstone detail hero, Csoles cover, 375px project page and filter bar, contribution section, every 01–07 rail stop, and a client-side transition from the archive to a detail page.

## Findings

- No actionable P0, P1, or P2 mismatch remains.
- Fonts and typography: cards and detail heroes use the requested short project names as their prominent headings. Each complete project title remains directly below the detail heading in smaller Tahoma text.
- Spacing and layout rhythm: the listing keeps the source's large light field, black diagonal region, watermark type, clipped media, and pill filters. Detail pages preserve the reference's asymmetric media/text split and large-name hierarchy.
- Colors and visual tokens: the implementation uses the locked portfolio palette—black, `#d7f205` lime, white, and light grey—with black text on lime.
- Image quality and asset fidelity: only Ashton's project screenshots are used. Dedicated cover fields feed centered 2.1:1 crops; the LitterSense logo remains visible and Csoles uses the purchases/wishlist screen instead of an arbitrary dashboard-tile crop. Astro produces responsive WebP variants, and full evidence views use `object-fit: contain`.
- Copy and content: every visible project fact comes from the validated project collection. The above-the-fold copy diff found no unsupported claims or ZZZ text.
- Responsive behavior: at 375px the layout becomes one column, the mobile menu control appears, the right rail is hidden, headings wrap cleanly, and readable content stays inside the viewport. Reported document overflow comes only from intentionally clipped decorative bands, the film strip, and the closed off-canvas menu; no readable content is clipped and horizontal page scrolling is suppressed by the shared shell.
- Accessibility and interaction: filter tabs update `aria-selected`, roving tab focus remains available, and all labels fit at desktop and tablet widths without scrolling. At 375px, overflow is swipeable with the native scrollbar hidden; a right fade appears at the start and a left fade appears at the end, while keyboard selection brings the focused tab into view. The detail rail derives a seven-section total, advances from 01 through 07 while scrolling, and reinitializes correctly after Astro client navigation. The IoT filter showed exactly one matching project, visible result text updated to “Showing 1 IoT project,” and project links retained the `/portfolio` base path.

## Comparison History

- Initial P3: the IoT filter result used lowercase “iot.” Fixed by preserving the tab label's capitalization; the revised browser check reports “Showing 1 IoT project.”
- Initial P3: the Csoles listing preview selected the sparse empty-cart screen. It was first moved to the dashboard, then the closeout pass replaced that arbitrary tile crop with the supplied purchases/wishlist screen; all three evidence images remain on the detail page.
- Post-fix evidence: matching-size 1600 × 760 desktop captures and 375 × 812 mobile captures were inspected with the source references. No P0/P1/P2 findings remain.
- Closeout P1: the rail stayed at `01 / 03`, detail-page numbers repeated, and the title could enter the black diagonal. Fixed with page-derived rail totals, scroll-position syncing, a single 01–07 document sequence, stacked numbered sections, and a protected paper-colored title region.
- Closeout P1: project covers were inferred from evidence and cropped inconsistently. Fixed with required schema-backed cover assets, centered wide crops, the requested short titles, and a separate smaller full-title line.
- Closeout P2: the filter's final label could be clipped. Fixed with a full desktop fit and a keyboard-compatible horizontal overflow bar on narrow screens.
- Filter follow-up: removed the visible scrollbar and moved overflow behavior behind the 40rem phone breakpoint. Chromium checks at 1600px and 800px measured equal client/scroll widths with both edge tabs fully visible; at 375px the hidden-scrollbar region exposed direction-aware fades and kept the IoT filter functional.

## Intentional Adaptations

- The references' copyrighted character art, logos, fonts, faction emblems, and copy are not reproduced. Project screenshots, portfolio branding, and the reusable project section rail fill those roles.
- The listing combines the references' carousel heading/filter treatment with their paged grid treatment because Phase 4 requires a complete filterable project archive rather than a media carousel.
- Missing LitterSense evidence is shown as the required striped “Content needed” treatment instead of invented imagery.

## Core Workflow Verified

- Open `/portfolio/projects/`.
- Select the IoT tab and confirm only the IoT project remains.
- Open project detail routes and confirm overview, role, objectives, technologies/components, team, status, result, links, and evidence are present.
- Use the detail-page rail on desktop; confirm it reads 01 / 07, follows the numbered sections through 07, survives navigation from `/projects`, and is absent at 375px.

Focused regions were required and checked for the filter bar/result card and the mobile contribution/objectives transition. The implementation is faithfully verified against the accepted reference direction, with no material mismatch remaining.

final result: passed
