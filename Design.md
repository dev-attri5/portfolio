# Design System — Premium Student Developer Portfolio

**Version:** 1.0  
**Design direction:** Modern, dark, minimal, polished, developer-focused  
**Audience:** Recruiters, internship coordinators, developers, faculty, and peers

---

## 1. Design Principles

1. **Clarity before decoration:** Visitors should understand the owner and projects quickly.
2. **Content-first:** Project evidence and accurate information matter more than effects.
3. **Consistent visual language:** Use a small set of colors, spacing values, radii, and typography rules.
4. **Accessible contrast:** Text and controls must remain readable.
5. **Responsive by default:** Start with small screens and expand the layout at larger breakpoints.
6. **Motion with purpose:** Use subtle transitions and respect reduced-motion preferences.
7. **Premium, not noisy:** Avoid excessive neon, glowing borders, floating particles, cursor followers, and heavy 3D effects.

## 2. Theme

Version 1 uses a dark theme by default. A light theme is optional and should not be added until the dark theme is complete.

### Suggested color tokens

These are starting values; verify contrast before finalizing.

| Token | Hex | Use |
|---|---|---|
| `--color-bg` | `#0B0D12` | Main page background |
| `--color-surface` | `#121620` | Cards and raised surfaces |
| `--color-surface-hover` | `#191F2B` | Hovered cards and controls |
| `--color-border` | `#293140` | Borders and separators |
| `--color-text` | `#F4F6FA` | Primary text |
| `--color-text-muted` | `#A6AFBF` | Secondary text |
| `--color-accent` | `#7C9CFF` | Main accent and links |
| `--color-accent-hover` | `#9BB3FF` | Hover/focus accent |
| `--color-success` | `#66D6A3` | Success feedback |
| `--color-error` | `#FF7A86` | Error feedback |

Do not rely on color alone for success/error state. Add text and/or icons.

### Color rules
- Use the accent for primary actions, selected states, and a few highlights.
- Do not color every heading or every border with the accent.
- Ensure muted text is still readable.
- Check contrast for buttons, links, disabled controls, and focus rings.
- Avoid large saturated gradient backgrounds behind body text.

## 3. Typography

Use one clean sans-serif family. A system font stack is acceptable and avoids external font dependencies. If a web font is chosen, load only the weights actually used and provide a sensible fallback.

### Type scale

| Role | Suggested size | Weight | Notes |
|---|---:|---:|---|
| Hero heading | `clamp(2.5rem, 7vw, 5rem)` | 700 | Tight line-height, readable wrapping |
| Section heading | `clamp(1.8rem, 4vw, 2.8rem)` | 650–700 | Consistent across sections |
| Card heading | `1.15rem–1.35rem` | 600 | Clear hierarchy |
| Body | `1rem–1.125rem` | 400 | Comfortable reading |
| Supporting text | `0.875rem–0.95rem` | 400–500 | Never too low-contrast |
| Labels/tags | `0.75rem–0.875rem` | 500 | Adequate padding |

### Typography rules
- Use a clear hierarchy rather than many font sizes.
- Keep body line length comfortable, approximately 60–75 characters where practical.
- Avoid long all-caps paragraphs.
- Avoid overly thin font weights on dark backgrounds.
- Use responsive font sizes so headings do not overflow mobile screens.

## 4. Spacing System

Use a consistent spacing scale based on multiples of 4 px.

| Token | Value | Typical use |
|---|---:|---|
| `space-1` | 4px | Small icon/text gap |
| `space-2` | 8px | Tag spacing |
| `space-3` | 12px | Compact internal gap |
| `space-4` | 16px | Standard control/card gap |
| `space-6` | 24px | Card padding on small screens |
| `space-8` | 32px | Group separation |
| `space-12` | 48px | Section internal spacing |
| `space-16` | 64px | Large separation |
| `space-24` | 96px | Desktop section rhythm |

Section padding should be responsive. Use less vertical space on small screens and more on desktop, without creating excessively long empty areas.

## 5. Layout and Containers

- Use a centered container with a maximum width around `1120px–1200px`.
- Apply consistent horizontal padding on all sections.
- Hero content may use a two-column layout on large screens if there is a real visual asset; stack on mobile.
- Skills can use a responsive grid.
- Project cards can use 1 column on mobile, 2 on medium screens, and 3 on wide screens if card content remains readable.
- Avoid fixed card heights that clip content.
- Keep the text column readable and prevent overly wide paragraphs.
- Do not use horizontal scrolling for main content.

Suggested responsive grid behavior:
- `<640px`: one column
- `640px–1023px`: one or two columns depending on content
- `>=1024px`: two or three columns as appropriate

## 6. Section Specifications

### Header
- Compact, visually separated from the page.
- Brand/name on the left; navigation/actions on the right for desktop.
- Mobile menu button on small screens.
- Optional sticky behavior is allowed only if it does not cover section headings.
- Use a subtle border or surface difference rather than a heavy shadow.
- Menu button must have an accessible label and expanded state.

### Hero
- First viewport should clearly show name, role, introduction, and primary action.
- Use strong typography and generous but controlled whitespace.
- Optional decorative shape or subtle gradient is acceptable.
- Avoid a fake terminal window, fake metrics, or decorative UI that suggests functionality that does not exist.
- Use a real portrait only if the owner wants one; otherwise, no portrait is required.

### About
- Keep paragraphs short.
- Optional highlight cards may show genuine focus areas, not invented statistics.
- Avoid repeating the hero introduction word-for-word.

### Skills
- Group skills in surface cards or compact lists.
- Use simple tags or icons sparingly.
- Do not use progress bars unless there is a meaningful, defensible metric; default is text labels.

### Projects
- Use consistent cards with clear titles, summaries, technology tags, and links.
- A subtle border or slight surface change on hover is enough.
- Screenshots should have consistent aspect ratios.
- Do not make the entire card clickable if it contains nested links; avoid nested interactive elements.
- Make repository and demo actions visually distinct.

### Coding Profiles
- Use compact profile cards or inline links.
- Display actual profile names and logos/icons only when appropriate.
- No fake contribution graphs or fabricated counts.

### Education
- Use a simple timeline or structured card.
- Keep dates and institution information accurate.
- Omit unverified graduation year or scores.

### Achievements
- Use concise credential cards.
- Show verification link when available.
- Omit the entire section if there are no real entries.

### Contact
- Make the primary contact method obvious.
- Use a concise call-to-action.
- If using a form, clearly label fields and show status feedback.
- Never visually imply a form works before integration is complete.

### Footer
- Minimal and quiet.
- Include copyright year and selected profile links.
- Do not repeat the entire navigation if it creates clutter.

## 7. Components and States

### Buttons
Primary:
- Solid accent background.
- High-contrast text.
- Clear hover and focus state.
- Comfortable padding and touch area.

Secondary:
- Transparent or surface background.
- Visible border.
- Clear hover state.

Disabled:
- Clearly appears disabled.
- Must not be used as a substitute for an unimplemented action without explanation.

### Links
- Underline on hover or use another clear non-color cue.
- Must remain distinguishable from normal text.
- Provide a visible keyboard focus indicator.

### Cards
- Surface background and subtle border.
- Consistent padding.
- Avoid excessive shadows and glow.
- Hover effects should not be required to understand the content.

### Form fields
- Persistent labels.
- Visible focus border/ring.
- Error text near the field.
- Do not use placeholder text as the only label.
- Provide clear success/error status messages.

### Focus
- Keyboard focus must be easy to see.
- Never remove the browser outline without providing an equivalent.
- Ensure focus rings have enough contrast against all backgrounds.

## 8. Motion and Interaction

- Use short transitions, typically 150–250 ms.
- Prefer opacity and transform for simple transitions.
- Avoid animating layout properties unnecessarily.
- Do not delay access to content behind long animations.
- Respect `prefers-reduced-motion: reduce`.
- No autoplay video or sound.
- Avoid scroll-jacking and cursor-following effects.
- Smooth scrolling is optional; disable or simplify it for reduced-motion preferences.

## 9. Iconography

- Use one icon family consistently, such as Lucide.
- Keep icons visually aligned and similarly sized.
- Decorative icons should be hidden from assistive technology where appropriate.
- Icon-only buttons and links need accessible names.
- Do not use emoji as the only accessible label for a control.
- Do not add icons to every heading if they do not improve comprehension.

## 10. Imagery

- Prefer real project screenshots or screenshots created by the owner.
- Use a consistent aspect ratio, such as 16:9, for project previews.
- Compress images and avoid giant source files.
- Set dimensions or aspect ratios to reduce layout shift.
- Provide useful alt text for meaningful screenshots.
- Use `alt=""` for decorative images.
- Do not use an image that implies a project feature the project does not contain.
- Avoid copyrighted imagery without permission.

## 11. Responsive Design Rules

Test at:
- 320px
- 375px
- 430px
- 768px
- 1024px
- 1366px
- 1440px

At each size check:
- Header layout
- Menu behavior
- Heading wrapping
- Card grid
- Button wrapping
- Image cropping
- Contact layout
- Footer
- Horizontal overflow

Use mobile-first CSS. Avoid arbitrary absolute positioning for essential content.

## 12. Accessibility Requirements

- Follow WCAG 2.2 AA principles where practical.
- Maintain sufficient text contrast.
- Use semantic landmarks.
- Use a logical heading hierarchy.
- Make all controls keyboard-operable.
- Provide visible focus.
- Label form fields.
- Include alt text where appropriate.
- Avoid flashing content.
- Respect reduced motion.
- Ensure 200% zoom does not hide content or functionality.
- Use clear error messages that explain how to correct input.

## 13. Design Acceptance Checklist

- [ ] Accent color is used consistently.
- [ ] Text is readable on all surfaces.
- [ ] Heading hierarchy is clear.
- [ ] Spacing is consistent.
- [ ] Project cards have consistent structure.
- [ ] Mobile layout has no horizontal overflow.
- [ ] Navigation is accessible.
- [ ] Buttons and links have hover/focus states.
- [ ] Animations are subtle and optional.
- [ ] Reduced-motion preference is respected.
- [ ] Images are optimized and have appropriate alt text.
- [ ] No decorative effect obscures content.
- [ ] No fake metrics, fake project features, or misleading UI.
