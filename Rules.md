# Rules — AI Coding Constraints and Quality Standards

**Purpose:** These rules are binding instructions for any AI coding assistant building or modifying this portfolio.  
**Priority:** Follow these rules alongside `PRD.md`, `Architecture.md`, `Phases.md`, and `Design.md`.

---

## 1. Source of Truth

1. Read all five project documents before implementation.
2. Treat `PRD.md` as the product requirements source.
3. Treat `Architecture.md` as the structural and technical source.
4. Treat this file as the coding and quality constraint source.
5. Treat `Phases.md` as the required build order.
6. Treat `Design.md` as the visual system source.
7. If documents conflict, stop and report the conflict. Do not silently invent a new requirement.
8. If a personal detail is missing, use a clearly marked development placeholder and list it for the owner to replace.

## 2. Approved Stack

Approved for version 1:
- React
- Vite
- TypeScript
- Tailwind CSS, installed according to the chosen major version's official guide
- Optional: `lucide-react` for icons
- Git/GitHub
- Vercel or Netlify for static hosting

Do not add other frameworks or libraries without a clear need and explicit explanation. Avoid adding animation, state management, form, UI, or routing libraries merely for convenience.

## 3. Package and Version Rules

- Use stable, mutually compatible versions at setup time.
- Use one package manager consistently.
- Commit the lockfile.
- Do not manually edit lockfiles.
- Do not downgrade or upgrade packages blindly to silence errors.
- Check official documentation for version-specific setup.
- Never mix Tailwind instructions from different major versions.
- Before adding a dependency, explain what feature requires it.

## 4. Repository Inspection Rules

Before changing an existing project:
1. Inspect the file tree.
2. Read `package.json`.
3. Read existing app entry points and styles.
4. Check Git status.
5. Preserve working code unless there is a documented reason to replace it.
6. Do not overwrite the whole project to make a small change.
7. Do not delete user files without permission.

## 5. Implementation Rules

- Build in small, verifiable steps following `Phases.md`.
- Keep components focused and reusable where useful.
- Use TypeScript types for content data and component props.
- Avoid `any`; use a real type or `unknown` with narrowing.
- Do not suppress type errors to make a build pass.
- Do not use `@ts-ignore` unless truly unavoidable and documented.
- Do not leave unused imports, variables, or dead components.
- Use stable unique React keys.
- Do not mutate React state directly.
- Prefer declarative React state over manual DOM manipulation.
- Use semantic HTML.
- Keep data separate from layout when it improves maintainability.
- Avoid duplicating the same content in multiple components.
- Keep functions and components reasonably small.
- Do not create empty files or unused abstractions merely to match the proposed tree.

## 6. Personal Data and Truthfulness Rules

Never invent or imply:
- Professional experience
- Internship history
- Awards or certificates
- Grades or GPA
- Coding statistics or ratings
- Project usage numbers
- Testimonials
- Graduation year
- Project repository or demo URLs
- Claims of expertise

Only publish details supplied or verified by the owner. Use labels such as `Learning` only when accurate. Remove empty sections.

Search for and remove before deployment:
- `YOUR NAME`
- `YOUR_USERNAME`
- `example.com`
- `TODO`
- `PLACEHOLDER`
- `REPLACE ME`
- `href="#"`

## 7. Link Rules

- Never use `href="#"` as a fake action.
- Never show an external link without a real destination.
- Every project repository URL must point to the correct repository.
- A demo link must be tested before publication.
- A resume button must be hidden if the PDF is absent.
- Use descriptive link text.
- If opening an external link in a new tab, use `rel="noreferrer"` with `target="_blank"`.
- Do not invent URL formats or assume a username.
- If a profile is not supplied, omit it.

## 8. React and TypeScript Error Prevention

- Keep component file names and imports consistent in capitalization.
- Use named/default exports consistently and match imports to exports.
- Use `key={item.id}` for mapped records with stable IDs.
- Type component props explicitly.
- Do not use array indexes as keys when stable IDs exist.
- Guard optional values before rendering.
- Do not access nested fields that may be undefined without checking.
- Do not create invalid nested interactive elements.
- Buttons that are not form submissions must use `type="button"`.
- Use `type="submit"` for form submission buttons.
- Check browser console for warnings as well as errors.
- Do not hide TypeScript or ESLint output.

## 9. Accessibility Rules

- One meaningful `h1` for the page.
- Logical heading levels.
- Semantic `header`, `nav`, `main`, `section`, `article`, and `footer` elements where appropriate.
- All interactive elements reachable by keyboard.
- Visible focus styles.
- Accessible names for icon-only buttons.
- Every form field has a label.
- Meaningful images have useful alt text.
- Decorative images use `alt=""`.
- Do not convey state using color alone.
- Respect `prefers-reduced-motion`.
- Ensure mobile navigation communicates its expanded state.
- Do not autofocus a form or menu unexpectedly.
- Do not autoplay sound.

## 10. Responsive Design Rules

- Test small phones, phones, tablets, laptops, and wide desktops.
- Do not hard-code a fixed width that causes horizontal overflow.
- Do not use `overflow-x: hidden` to mask a broken layout.
- Ensure navigation and cards adapt to narrow screens.
- Images must preserve aspect ratio.
- Buttons must be usable by touch.
- Avoid fixed overlays covering page content.
- Check at 200% browser zoom.

## 11. Styling Rules

- Follow `Design.md` for colors, typography, spacing, and motion.
- Use the defined tokens rather than inventing inconsistent colors.
- Keep text/background contrast readable.
- Do not use arbitrary skill percentages.
- Avoid excessive glow, gradients, animation, parallax, and cursor effects.
- Avoid inline styles for repeated design rules.
- Use Tailwind classes consistently.
- Do not add a theme toggle unless both themes are fully implemented and accessible.

## 12. Form and Error Handling Rules

- A frontend-only form must never pretend to send an email.
- If a form is included, use a real endpoint or form service.
- Validate fields on the client for usability and on the server/service for trust.
- Treat all user input as untrusted.
- Show pending, success, and error states.
- Show success only after the service confirms success.
- Provide an actionable error message and retry path.
- Do not log private message content unnecessarily.
- Do not expose service secrets in client code.
- Variables prefixed with `VITE_` are not secrets.

## 13. Security and Privacy Rules

- Never commit `.env` files containing secrets.
- Never place credentials, API keys, database passwords, or tokens in client-side code.
- Do not publish student ID, home address, or private documents.
- Avoid collecting unnecessary personal data.
- Do not add analytics without a clear reason and appropriate disclosure.
- Do not embed untrusted HTML.
- Do not disable browser security protections.
- Do not claim deleting a secret from the latest commit removes it from Git history.

## 14. Performance Rules

- Compress images.
- Prefer appropriately sized WebP/AVIF images where practical.
- Avoid large background videos.
- Avoid unnecessary dependencies.
- Lazy-load below-the-fold images when appropriate.
- Set image dimensions or aspect ratios.
- Avoid expensive animations.
- Check for failed network requests.
- Use the production build for deployment.

## 15. Error Handling During Development

When an error occurs:
1. Read the full error message.
2. Identify the root cause instead of hiding the symptom.
3. Inspect relevant files and configuration.
4. Make the smallest sensible fix.
5. Re-run the failing command or interaction.
6. Check for regressions.
7. Explain the cause and fix in the completion summary.

Never:
- Delete unrelated code to silence an error.
- Disable checks without explanation.
- Claim a test passed without running it.
- Ignore warnings that indicate broken functionality.
- Continue to later phases when the current phase has a failing quality gate.

## 16. Required Checks

At minimum, when supported by the repository:
- `npm install`
- `npm run build`
- `npm run lint`
- Manual browser check
- Responsive check
- Link check
- Keyboard navigation check

Do not assume a script exists. Inspect `package.json` first. If a check is not configured or cannot be run, state that explicitly.

## 17. Git Rules

- Inspect `git status` before changing or committing files.
- Review `git diff` before a commit.
- Make focused commits.
- Never force-push or delete a branch without explicit instruction and understanding the impact.
- Never commit secrets, generated dependency folders, or local build output unless the project specifically requires it.
- Keep `.gitignore` appropriate for Node/Vite projects.

## 18. Deployment Rules

- Run the production build before deployment.
- Standard Vite output directory is `dist`.
- Do not deploy the development server.
- Verify environment variables and output settings.
- Check the actual production URL after deployment.
- Test images, resume, external links, and refresh behavior in production.
- Do not claim deployment succeeded unless it did.

## 19. Completion Report Format

At the end of a phase or task, report:
1. What was implemented.
2. Files created or changed.
3. Commands/checks actually run.
4. Results of each check.
5. Known limitations.
6. Owner-provided placeholders still needing replacement.
7. Exact next step.

Do not claim the website is error-free. Report that the specified checks passed and disclose anything not tested.
