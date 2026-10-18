# Phase 4 Design QA

## Evidence

- Source visual truth: `docs/reference/inspiration/08-characters-page-a.jpg`, `09-characters-page-b.jpg`, and `10-videos-page-carousel-a.jpg` through `13-videos-page-grid-b.jpg`.
- Rendered implementation: `%TEMP%/portfolio-phase4-qa/projects-desktop-cdp.png`, `projects-grid-final.png`, `detail-desktop-cdp.png`, `projects-filter-iot-cdp.png`, `projects-mobile-cdp.png`, and `detail-mobile-role-cdp.png`.
- Browser method: local Astro preview opened in headless Chrome through the Chrome DevTools Protocol because the in-app browser was not available.
- Desktop comparison viewport: 1600 × 760 CSS pixels at device scale factor 1. The source images are 1600 × 749–761 pixels; no density normalization was needed.
- Mobile verification viewport: 375 × 812 CSS pixels at device scale factor 1.
- States checked: project introduction, filtered IoT result, capstone detail hero, 375px project page, and 375px contribution section.

## Findings

- No actionable P0, P1, or P2 mismatch remains.
- Fonts and typography: the established display face is limited to short labels, numbers, and watermarks. Long project titles use Tahoma for legibility, matching the repository's approved type rules.
- Spacing and layout rhythm: the listing keeps the source's large light field, black diagonal region, watermark type, clipped media, and pill filters. Detail pages preserve the reference's asymmetric media/text split and large-name hierarchy.
- Colors and visual tokens: the implementation uses the locked portfolio palette—black, `#d7f205` lime, white, and light grey—with black text on lime.
- Image quality and asset fidelity: only Ashton's project screenshots are used. Astro produces responsive WebP variants; images remain inside cut frames and full evidence views use `object-fit: contain`.
- Copy and content: every visible project fact comes from the validated project collection. The above-the-fold copy diff found no unsupported claims or ZZZ text.
- Responsive behavior: at 375px the layout becomes one column, the mobile menu control appears, the right rail is hidden, headings wrap cleanly, and readable content stays inside the viewport. Reported document overflow comes only from intentionally clipped decorative bands, the film strip, and the closed off-canvas menu; no readable content is clipped and horizontal page scrolling is suppressed by the shared shell.
- Accessibility and interaction: filter tabs update `aria-selected`, roving tab focus remains available, the IoT filter showed exactly one matching project, visible result text updated to “Showing 1 IoT project,” project links retained the `/portfolio` base path, and no browser console errors were reported.

## Comparison History

- Initial P3: the IoT filter result used lowercase “iot.” Fixed by preserving the tab label's capitalization; the revised browser check reports “Showing 1 IoT project.”
- Initial P3: the Csoles listing preview selected the sparse empty-cart screen. Fixed by choosing the supplied dashboard evidence as the card preview while keeping all three evidence images on the detail page.
- Post-fix evidence: matching-size 1600 × 760 desktop captures and 375 × 812 mobile captures were inspected with the source references. No P0/P1/P2 findings remain.

## Intentional Adaptations

- The references' copyrighted character art, logos, fonts, faction emblems, and copy are not reproduced. Project screenshots, portfolio branding, and the reusable project section rail fill those roles.
- The listing combines the references' carousel heading/filter treatment with their paged grid treatment because Phase 4 requires a complete filterable project archive rather than a media carousel.
- Missing LitterSense evidence is shown as the required striped “Content needed” treatment instead of invented imagery.

## Core Workflow Verified

- Open `/portfolio/projects/`.
- Select the IoT tab and confirm only the IoT project remains.
- Open project detail routes and confirm overview, role, objectives, technologies/components, team, status, result, links, and evidence are present.
- Use the detail-page rail on desktop; confirm it is absent at 375px.

Focused regions were required and checked for the filter bar/result card and the mobile contribution/objectives transition. The implementation is faithfully verified against the accepted reference direction, with no material mismatch remaining.

final result: passed
