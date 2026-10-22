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
- LitterSense IoT evidence follow-up (2026-10-19): the side-wiring enclosure photo is the project cover, and all five tightly cropped enclosure photos load with the exact supplied captions. Desktop at 1600 x 900 and mobile at 375 x 812 both measured zero horizontal overflow; only the architecture/flowcharts and app-screen placeholders remain for this project.
- LitterSense wireframe follow-up (2026-10-19): the IoT flowchart and dashboard wireframe replace both IoT placeholders, while three capstone wireframes appear immediately after the real login screenshot. Rendered checks found exactly three `Wireframe` badges on the capstone and one on IoT; none appears on the login screenshot, flowchart, or enclosure photos. Captions and alt text retain the supplied design-mockup wording, all evidence images load, and desktop/mobile layouts have no horizontal overflow.
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

# Phase 6 About Design QA

## Evidence

- Source visual truth: `docs/reference/inspiration/15-background-cards-a.jpg`, `16-background-cards-b.jpg`, and `17-background-card-opened.jpg`; the legacy skill treatment is grounded by `docs/reference/current/06-techstack-technical.jpg` and `07-techstack-softskills.jpg`.
- Latest rendered screenshots: `.qa/phase-6/about-desktop.png`, `about-dialog-desktop.png`, `about-skills-desktop.png`, `about-mobile.png`, `about-dialog-mobile.png`, and `about-skills-mobile.png`.
- Browser method: the local Astro development server was opened and exercised in headless Microsoft Edge through the Chrome DevTools Protocol because the in-app browser was not available.
- Desktop viewport: 1600 x 900 CSS pixels at device scale factor 1. A second implementation capture at `.qa/phase-6/about-source-native-viewport.png` uses 1600 x 763 to match the 1600 x 763 source card references without density normalization.
- Mobile viewport: 375 x 812 CSS pixels at device scale factor 1.
- States compared: initial card deck, open My Story detail, Skills Technical state, Skills Soft state, and all three equivalent mobile states.

## Fidelity Ledger

- Fonts and typography: short display labels, numbers, and card names use the approved display role with readable spacing; program, story, list, control, and skill text use Tahoma. Headings retain the source's heavy italic character without copying its font.
- Spacing and layout rhythm: the initial view preserves the source's left title wedge, oversized focused card, dimmer side cards, outer arrows/dots, blurred moving backdrop, and edge-bleeding diagonals. The focused card no longer collides with the title wedge, and controls stay visually grouped below it.
- Colors and visual tokens: black, `#d7f205`, white, grey surfaces, stripe texture, and hard cut corners all use the locked portfolio tokens. Lime surfaces use black text; small lime text remains on black/dark surfaces at strong contrast.
- Image quality and asset fidelity: the page uses Ashton's second cut-out portrait, his Csoles screenshot, his LitterSense wireframe, the existing background-video poster, and the original legacy skill icons. Raster content is emitted through Astro's responsive WebP pipeline; all 19 skill icons completed with non-zero intrinsic width.
- Copy and content: the story, education, goals, interests, program, tagline, and skills are rendered from the validated About collection. The above-the-fold diff found no unsupported personal claim, ZZZ copy, fake statistic, invented achievement, or new rubric section.
- Detail state: compared with reference 17, the implementation keeps the required blurred page, one large high-contrast surface, prominent real media, clear title/body, close control, and next/previous navigation. The longer real story scrolls inside the details area without pushing controls off screen.
- Responsive behavior: at 375px, the section title and intro stack, the card row becomes a 293px-wide swipe carousel, the mobile menu appears, the section rail hides, the dialog becomes one scrollable column, and the skills grid becomes two columns. Wide card content stays inside its intentional horizontal scroll viewport; decorative film-strip overflow remains clipped by the shared shell.
- Accessibility and motion: native buttons cover card activation; ArrowLeft/ArrowRight and Home/End move selection; the native dialog traps focus; Escape closes it; focus returns to the opener; tabs use linked tab/tabpanel semantics; reduced motion pauses the background video and removes meaningful transition duration.

## Comparison History

- Initial P2: calling `scrollIntoView()` to center the first card could also move the page vertically at 375px, hiding the About title. Replaced it with horizontal scrolling on the carousel viewport only; the final mobile capture begins at scroll position zero with the full About 01 title visible.
- Initial P2: the focused card sat too far left under the title wedge and its black media wedge obscured the portrait's focal point. Added deliberate carousel side padding, moved the title wedge behind the deck, reduced the black wedge, and adjusted the portrait focal position. The final render keeps the title, face, and card label readable.
- Initial P2: the first desktop composition was too tall for the intended first-view rhythm. Reduced the side/focused card sizes and track height while preserving the active-card scale difference; the card and controls now fit the 1600 x 900 comparison view.
- Post-fix evidence: the source card view and final 1600 x 900 implementation, plus the source open state and final dialog, were opened together with `view_image`. No actionable P0, P1, or P2 mismatch remains.

## Intentional Adaptations

- The source has three fictional-lore cards; the portfolio has four required real-content cards in the approved My Story / Education / Goals / Interests order.
- Copyrighted ZZZ art, logos, icons, fonts, and copy are not reproduced. Ashton’s own portrait, screenshots, wireframe, video treatment, and legacy icons fill those roles.
- The opened state uses a side-by-side desktop layout instead of the source's image-over-copy layout so Ashton's six-paragraph story remains readable; it stacks to the source-like vertical order on mobile.
- The Skills section follows Ashton's existing grid-and-toggle concept, restyled with the revamp's cut corners, numbered tiles, watermark, and section title.

## Core Workflow Verified

- Use Previous/Next, dots, Left/Right, and Home/End to change the focused About card.
- Open a card; use Previous/Next or Left/Right inside the dialog; cycle focus; close with Escape; confirm focus returns to the opener.
- Scroll to Skills; switch Technical / Soft with click and keyboard-compatible tabs; confirm the matching panel is the only visible panel.
- Scroll between Background 01 and Skills 02 and confirm the fixed rail updates on desktop and stays hidden at 375px.
- Enable reduced motion and confirm the background video pauses and card movement is removed.

Focused region comparisons were required and completed for card geometry, portrait crop, the open story panel, mobile dialog controls, the skills toggle, and icon tiles. The Phase 6 implementation was faithfully verified against the accepted reference direction, with no material mismatch remaining.

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

---

# Phase 8 Homepage Strip Design QA

## Evidence

- Source visual truth: `docs/reference/inspiration/01` through `06`, with the existing site shape kit and Ashton's supplied portrait, project, certificate, and video assets.
- Accepted concept direction: the four generated previews in `D:/Users/ZcarinaCaspeExpertCo/.codex/generated_images/01a15663-a47d-7cf1-95b1-f5802509c51c/` for Hero, About, Projects, and Credentials.
- Latest rendered screenshots: `.qa/phase-8-fixes/hero-final.png`, `about-final.png`, `projects-final.png`, `projects-csoles-final.png`, `projects-3-keyboard.png`, `credentials-final.png`, and the `mobile-*-final.png` captures.
- Browser method: the production build was opened in headless Microsoft Edge through the Chrome DevTools Protocol because the in-app browser was unavailable.
- Native viewports: 1600 x 900 and 375 x 812 CSS pixels, device scale factor 1.

## Fidelity Ledger

- Hero balance and copy: the final render keeps the reference's large left-aligned display name, bold lime accent line, prominent cut-out portrait, angled edge bands, and visible video texture. The above-the-fold copy diff contains only Ashton's name, validated tagline, action label, site navigation, and shared header copy; it adds no unsupported claim or statistic.
- Diagonal geometry: all four strips use the established `14deg` desktop / `9deg` phone angle, edge-bleeding black/lime/paper bands, stripe texture, hard shadows, and film-strip dividers instead of centered Bootstrap-style boxes.
- Media containment: the hero portrait, About portrait, all four project covers, and Cybersecurity certificate stay inside reusable cut-corner frames. Project covers and the certificate use `object-fit: contain`; no supplied image is cropped incorrectly or spills from its frame. Project copy and media occupy separate grid areas, with measured intersection area of zero.
- Number hierarchy and rail: the hero is `00`, previews are `01`-`03`, and the fixed desktop rail shows the matching current number over total `03`. Its Next arrow moved from `00` to `01`; scroll checks reached `02` and `03`; it computes to `display: none` at 375px.
- Real-content previews: About reads the first validated story and education entries. Projects exposes all four records in the same order as `/projects`; selecting a name updates its category/year, title, description, full cover, and direct detail link. Credentials uses the latest certification and the exact requested collection-derived sentence: “4 certifications and 2 completed Cisco courses, with 1 more in progress.” No copied ZZZ art, logo, font, or text appears.
- Motion and accessibility: GSAP reveals finish within 560ms, do not alter native scrolling, and clean up across Astro transitions. With reduced motion enabled, reveal opacity is `1`, transform is `none`, and the video is paused. The video also pauses after the hero leaves the viewport.
- Responsive behavior: at 375px the name remains readable, long project titles wrap clear of media, Credentials clears its title wedge, the project-name strip can swipe horizontally, the mobile menu replaces desktop navigation, and document width remains below viewport width. The desktop Credentials action remains fully visible at 1600 x 900.

## Comparison History

- Hero: reduced the display sizing and protected each name line so `James D.` no longer wraps while preserving the oversized reference hierarchy.
- Projects: selected the capstone explicitly, moved the real cover into the dominant right-hand frame, and compacted the copy/media rhythm so the complete preview reads within one desktop viewport.
- Projects fix pass: expanded the switcher from three static labels to all four name-only tabs, connected click and arrow-key state changes, separated title and media, showed every cover whole, removed the unintended pale wedge under the header, and kept the tabs visible at the bottom of the 1600 x 900 capture.
- Credentials: tightened vertical spacing so the heading, counts, action, and certificate all appear together at 1600 x 900; added phone clearance so the heading no longer sits under the `03` wedge.
- Section clearance: converted the `01`, `02`, and `03` title wedges into layout rows. Geometry checks report no overlap between any title block and its first content heading at either tested viewport.
- Hero fix pass: moved the decorative lime diagonal to the bottom of the portrait field so it no longer crosses behind Ashton's head.
- Mobile Projects: reduced the title scale and kept `LitterSense` intact instead of clipping its final letters.
- Typography follow-up (2026-10-22): audited LitterSense, Csoles Connect, LitterSense IoT, and Kivotos Shopping List at 1440, 1280, 1024, 768, and 375 px. Computed styles were `word-break: normal`, `overflow-wrap: normal`, and `hyphens: none`; every word returned one line rectangle and every heading stayed within its column.
- About-media follow-up (2026-10-22): `.qa/phase-8-fix2/about-goals-card.png`, `about-goals-panel.png`, and their 375 px equivalents confirm the supplied NieR art is centered on both characters, fills the frame without letterbox edges, and carries the exact credit. The matching Education captures confirm the campus building leads both crops rather than the flag.
- Final source/concept and implementation pairs were opened together with `view_image`. No actionable P0, P1, or P2 mismatch remains.

## Intentional Adaptations

- Copyrighted ZZZ artwork, logos, fonts, character images, and copy are not reproduced. Ashton's own media and original CSS/SVG geometry fill those roles.
- The inspiration uses game-character and news content; the homepage uses the required real portfolio sequence and content model while preserving the asymmetric visual rhythm.
- The accepted Projects concept showed three numbered tabs; the final intentionally uses four names without tab numbers to match the requested Projects-page order and avoid competing with the section number.
- The About Goals media intentionally departs from the original-art-only decision because Ashton explicitly approved the supplied NieR:Automata anniversary image as an exception on 2026-10-22. Its publisher credit is visible in the open panel.
- Auto-cycling hero content remains a Phase 9 nice-to-have and was not added during Phase 8.

## Core Workflow Verified

- Open `/portfolio/`, use the hero action to jump to Projects, click each of the four project names, and confirm its matching preview and direct `View project` link.
- Focus a project name and use Left/Right (plus Home/End); confirm focus, highlight, and preview move together and wrap at the ends.
- Scroll through `00`-`03`; confirm the desktop rail updates and its arrows and markers move between sections.
- Repeat at 375px; confirm the rail is absent, the full-screen menu is available, and each strip stacks without horizontal scrolling.
- Enable reduced motion; confirm all content is immediately visible and the background video remains paused.

final result: passed
