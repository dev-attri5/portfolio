# Phases — Sequential Portfolio Build Plan

**Purpose:** Divide implementation into small milestones with clear deliverables and quality gates.  
**Rule:** Complete and verify one phase before moving to the next. Do not implement all features in one large change.

---

## Overview

| Phase | Name | Main outcome | Gate |
|---|---|---|---|
| 0 | Inspect and clarify | Requirements and repo understood | No unresolved critical conflicts |
| 1 | Project foundation | Vite + React + TypeScript runs | Dev server and build pass |
| 2 | Design system | Tokens and global styles | Base layout works on mobile |
| 3 | Page shell | Header, main, footer, section anchors | Navigation works |
| 4 | Content data | Typed profile, skill, project data | Types pass; no invented content |
| 5 | Core sections | Hero, About, Skills, Projects | Sections render correctly |
| 6 | Supporting sections | Profiles, Education, optional achievements | Links and facts verified |
| 7 | Contact and interactions | Contact route, mobile menu, optional theme | Interactions work end to end |
| 8 | Responsive/accessibility | Layout and keyboard quality | Manual checklist passes |
| 9 | SEO/performance | Metadata and asset optimization | No obvious errors or broken assets |
| 10 | Final verification | Build, lint, browser, link checks | All available checks pass |
| 11 | Deployment | Production site published | Production smoke tests pass |

---

## Phase 0 — Inspect and Clarify

### Tasks
1. Read `PRD.md`, `Architecture.md`, `Rules.md`, `Phases.md`, and `Design.md`.
2. Inspect the repository before editing.
3. Check `package.json`, app entry points, existing CSS, and Git status.
4. Confirm whether this is a new project or an existing project.
5. List the owner's actual name, bio, skills, profile links, project URLs, resume availability, and verified education details.
6. Identify missing information. Do not invent it.

### Deliverables
- Short implementation plan.
- List of user details that must be supplied or replaced.
- List of existing files that will be changed.

### Gate
- No unexplained destructive changes.
- No conflict among project documents.
- Existing work is understood.

---

## Phase 1 — Project Foundation

### Tasks
1. If no project exists, create a Vite React TypeScript project.
2. Install dependencies using one package manager.
3. Verify the current stable Tailwind installation procedure and install it consistently.
4. Create or confirm the standard app entry point.
5. Confirm the development server runs.
6. Confirm a production build succeeds before major customization.
7. Initialize Git if appropriate and commit the baseline.

### Commands for a new project

```bash
npm create vite@latest dev-portfolio -- --template react-ts
cd dev-portfolio
npm install
npm run dev
```

Use the local URL printed in the terminal. Stop the server with `Ctrl+C`.

### Deliverables
- Working starter project.
- Lockfile committed.
- No unnecessary packages.

### Gate
- `npm run dev` starts successfully.
- `npm run build` passes.
- No unresolved package or configuration error.

---

## Phase 2 — Design System and Global Styles

### Tasks
1. Implement colors, typography, spacing, containers, and focus styles from `Design.md`.
2. Configure Tailwind according to the installed version.
3. Add global CSS reset/base styles.
4. Define consistent container and section spacing.
5. Add reduced-motion handling.
6. Verify text contrast and default body styles.

### Deliverables
- Global style system.
- Responsive container utility or consistent equivalent.
- Base typography and accessible focus style.

### Gate
- No horizontal overflow on a narrow viewport.
- Headings and body text are readable.
- A test Tailwind utility visibly works.

---

## Phase 3 — Page Shell and Navigation

### Tasks
1. Create `Header.tsx` and `Footer.tsx`.
2. Build `App.tsx` with semantic page structure.
3. Add section containers and unique IDs.
4. Add a skip-to-content link.
5. Add desktop navigation.
6. Add a basic accessible mobile menu.
7. Use real anchors pointing to existing sections.

### Deliverables
- Complete page skeleton.
- Navigation and footer.
- Section placeholders only for development.

### Gate
- All nav links land at the correct sections.
- No duplicate IDs.
- Mobile menu works by keyboard.
- Menu closes after section selection.

---

## Phase 4 — Typed Content Data

### Tasks
1. Create `src/data/portfolio.ts`.
2. Define TypeScript types for profile, skills, projects, and social links.
3. Add only verified owner information.
4. Use empty/optional fields where data is unavailable.
5. Ensure project IDs are unique.
6. Ensure external URLs are real.
7. Remove fake example URLs from production data.

### Deliverables
- Central typed data module.
- Accurate profile and content data.
- Placeholder replacement checklist.

### Gate
- TypeScript/build checks pass.
- No fabricated details.
- No broken or fake links in the data.

---

## Phase 5 — Core Sections

Implement one section at a time, verifying after each.

### 5A. Hero
- Name, role, short intro.
- Primary `View Projects` action.
- Contact or resume action.
- Only show a resume action if the PDF exists.

### 5B. About
- Current degree/semester.
- Accurate interests and learning goals.
- Concise paragraphs.

### 5C. Skills
- Category groups from typed data.
- No fake proficiency percentages.
- Omit empty categories.

### 5D. Projects
- Create reusable `ProjectCard.tsx`.
- Render from the projects array.
- Show technology tags and real repository links.
- Show live demo only if real.
- Use stable project IDs as keys.
- Use valid images or intentional placeholders.

### Deliverables
- Hero, About, Skills, and Projects sections.

### Gate
- No console errors or React key warnings.
- Cards render correctly on mobile and desktop.
- Every visible project link is valid.
- Content is truthful and concise.

---

## Phase 6 — Supporting Sections

### Tasks
1. Add coding profile links.
2. Add education details.
3. Add achievements only when genuine entries exist.
4. Add learning journey only if it adds useful information.
5. Remove any section with no real content.
6. Verify all external links.

### Deliverables
- Supporting sections populated with accurate information.

### Gate
- No invented statistics, certificates, awards, or dates.
- No empty sections.
- All links lead to the intended destination.

---

## Phase 7 — Contact and Interactions

### Required
- Public email link if supplied.
- Working social profile links.
- Mobile navigation interactions.

### Optional theme toggle
Only implement if both themes are styled and tested. Persist preference only if behavior is clear and does not cause flashing or inconsistent state.

### Optional contact form
1. Select a real form service or backend.
2. Keep secrets server-side.
3. Validate inputs.
4. Show pending state.
5. Show success only after confirmed success.
6. Show errors and allow retry.
7. Submit a real test message.

### Deliverables
- Functional interactions.
- Contact path that genuinely works.

### Gate
- No fake form submission.
- No button without an action.
- Keyboard and focus behavior work.
- No secrets in client code.

---

## Phase 8 — Responsive and Accessibility Pass

### Viewports
- 320–375 px phone
- 390–430 px phone
- 768 px tablet
- 1366 px laptop
- 1440 px desktop

### Tasks
- Check horizontal overflow.
- Check nav and card layouts.
- Check image aspect ratios.
- Check keyboard-only navigation.
- Check focus visibility.
- Check heading order and labels.
- Check contrast.
- Check 200% zoom.
- Check reduced-motion behavior.

### Gate
- No lost or clipped content.
- All interactive elements are keyboard reachable.
- Site is usable at tested widths.

---

## Phase 9 — SEO and Performance

### Tasks
- Update title and meta description.
- Confirm `lang` and viewport metadata.
- Add favicon.
- Add social metadata if desired.
- Compress images.
- Set image dimensions/aspect ratios.
- Remove unused dependencies and assets.
- Check network requests and console errors.

### Gate
- No broken local asset paths.
- Metadata is not generic Vite boilerplate.
- No obviously oversized images or unnecessary libraries.

---

## Phase 10 — Final Verification

### Commands
Run only scripts that actually exist in `package.json`.

```bash
npm run build
npm run lint
npm run preview
```

### Manual tests
- All navigation links.
- All repository and demo links.
- Resume download/open.
- Email link.
- Contact form end-to-end, if present.
- Mobile menu.
- Keyboard navigation.
- Responsive widths.
- Browser console and network panel.
- Search for placeholders:
  `YOUR NAME`, `YOUR_USERNAME`, `example.com`, `TODO`, `PLACEHOLDER`, `href="#"`.

### Gate
- Build passes.
- Lint/type checks pass where configured.
- No known critical console errors.
- All visible links work.
- No secret or private identifier is exposed.

---

## Phase 11 — Deployment

### Tasks
1. Push the reviewed code to GitHub.
2. Import the repository into Vercel or Netlify.
3. Use the correct build command, normally `npm run build`.
4. Use `dist` as the output directory for a standard Vite build.
5. Configure environment variables only when required.
6. Deploy.
7. Open the actual production URL.
8. Test the production site on desktop and mobile.
9. Confirm images, resume, and links work.
10. Add the live URL to the repository README.

### Gate
- Production deployment completed successfully.
- Production smoke tests pass.
- Do not report success if the platform reports a failed build.

---

## Rollback and Recovery Rules

- Use Git commits as checkpoints.
- If a phase breaks the app, inspect the diff and revert only the faulty change where possible.
- Do not delete the entire project to recover from a local error.
- Keep a copy of important owner-supplied assets.
- If a dependency upgrade causes a failure, inspect the version and lockfile before changing other parts of the app.

## Final Handoff Format

At the end of the project, report:
- Implemented features.
- Key files created/changed.
- Build and lint commands run and their actual results.
- Manual tests performed.
- Deployment URL, only if genuinely deployed.
- Remaining placeholders or known limitations.
- How to run the project locally.
