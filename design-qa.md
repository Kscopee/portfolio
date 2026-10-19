# Phase 4-5 Design QA

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

---

# Phase 5 Credentials Design QA

## Evidence

- Source visual truth: `docs/reference/inspiration/10-videos-page-carousel-a.jpg`, `12-videos-page-grid-a.jpg`, `14-news-page.jpg`, and especially `17-background-card-opened.jpg` for the revised viewer.
- Browser method: the production build was served locally and exercised in headless Chromium through the Chrome DevTools Protocol because the in-app browser was not available.
- Viewports checked: 1600 x 900 desktop and 375 x 812 mobile, both at device scale factor 1.
- States checked: Certifications tab, Course Completions tab, completed certificate viewer, in-progress course viewer, previous/next navigation, focus loop, Escape close, return focus, and the mobile viewer.

## Fidelity Ledger

- Copy and content: all 4 certifications and 3 course entries come directly from the validated content collections. The above-the-fold copy adds no unsupported credential, award, claim, or ZZZ text.
- Layout: the archive keeps the references' large light field, black diagonal region, faded watermark, three-column desktop rhythm, contained media cards, and black pill tabs. It becomes one column at 375px.
- Typography and palette: the implementation uses the approved display/body roles and locked black, `#d7f205` lime, white, and light-grey palette. Lime surfaces always use black text.
- Asset treatment: certificate images use `object-fit: contain`, never crop or spill from their frames, and are emitted as responsive WebP variants. Local badges are displayed without external embeds.
- Viewer: the revised modal follows reference 17's image-led composition: the page visibly blurs behind one dark surface, a large CutFrame gives the certificate priority, and the title, issuer/provider, date, and actions remain on that same surface. It intentionally has no white side panel, full-width lime navigation bar, or offset lime outline.
- Cards: badges and numbers sit below the media so they never cover certificate details; numbering restarts at `01` in each tab. Certificate thumbnails have no haze overlay, completed items use an expand icon, and the in-progress card has no action icon.
- Viewer follow-up: the details column measures 496px at 1600px, its dark-track/lime-thumb scrollbar matches the page, and both arrows sit inside the certificate region. Certificate images compute to `object-fit: contain` with no transform, so the CutFrame clips the corners without tilting, skewing, cropping, or stretching the document.
- Badge and module follow-up: artificial circular badge containers are removed. Pearson, PowerPoint, and Cisco badges preserve their original silhouettes inside consistent image boxes on cards and in the viewer. Module dates appear once in the heading; list items contain only module names.
- Responsive behavior: the mobile hero copy, tab shell, cards, viewer close control, and modal bounds stay inside the readable viewport. The viewer stacks into one scrollable column with small previous/next arrows at the certificate sides.
- Accessibility and interaction: tab buttons expose `aria-controls` and roving focus; the matching panels expose `role="tabpanel"`. Native buttons open the viewer, Left/Right cycles items, Tab remains trapped, Escape closes, scroll locking clears, and focus returns to the opener.

## Intentional Adaptations

- The source's copyrighted art, logos, fonts, and copy are not reproduced. Ashton's certificate images and badge assets fill the media role.
- Discovering Entrepreneurship has no certificate because it is still in progress. Its viewer shows the supplied status and modules in a striped placeholder instead of inventing proof or a link.
- Packet Tracer has no supplied public verification URL, so its local certificate PDF is the available proof link.

## Core Workflow Verified

- Open `/portfolio/credentials/` and switch between Certifications and Course Completions.
- Open a completed credential, inspect its full certificate and use the provided Credly or PDF link.
- Open the in-progress course and confirm its status and supplied modules appear without a fake certificate.
- Navigate with Left/Right, cycle focus with Tab, close with Escape, and confirm focus returns to the opening control.

The implementation was visually inspected again on 2026-10-19 against reference 17 and the latest desktop, PowerPoint, Cisco/module, card, and mobile renders. No material mismatch remains.

final result: passed
