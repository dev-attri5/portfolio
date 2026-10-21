# Architecture — Student Developer Portfolio

**Version:** 1.0  
**Recommended stack:** React + Vite + TypeScript + Tailwind CSS  
**Deployment target:** Static hosting such as Vercel, Netlify, or GitHub Pages (with suitable configuration)

---

## 1. Architecture Overview

This is a client-rendered, single-page portfolio. The initial version should be a static frontend with no database or backend. Content is stored in typed TypeScript data files and rendered through reusable React components.

```text
Visitor
  |
  v
Browser
  |
  v
Vite-built static application
  |
  +--> App shell
  |      +--> Header / Navigation
  |      +--> Main
  |             +--> Hero
  |             +--> About
  |             +--> Skills
  |             +--> Projects
  |             +--> Coding Profiles
  |             +--> Education
  |             +--> Optional Achievements
  |             +--> Contact
  |      +--> Footer
  |
  +--> Typed portfolio data
  |
  +--> Public assets (resume, favicon, project screenshots)
```

### Data flow
1. Portfolio data is defined in `src/data/portfolio.ts`.
2. Components import typed data.
3. React renders sections and cards.
4. Browser navigation uses same-page anchor links.
5. External links navigate to GitHub, LinkedIn, project repositories, demos, or email.
6. A contact form, if later added, sends data to an explicitly configured service or backend. No form submission should be simulated.

## 2. Technology Choices

### React
Used for reusable components and rendering repeated content such as project cards and skill categories.

### Vite
Provides a development server and production build. Standard output directory is `dist`.

### TypeScript
Defines the shapes of profile, skills, and project data and catches many mistakes during development.

### Tailwind CSS
Provides responsive utility classes and consistent styling. Use installation steps for the exact Tailwind major version selected; do not mix old and new setup instructions.

### Lucide React (optional)
Use for consistent icons. Icon-only controls require accessible names. If the icon library is not needed, do not install it.

### Git and GitHub
Track changes, review diffs, and host source code.

### Vercel or Netlify
Serve the built static site. Standard build command is usually `npm run build`; standard Vite output directory is `dist`.

## 3. Repository Structure

```text
dev-portfolio/
├── public/
│   ├── favicon.svg
│   ├── resume.pdf                 # only if owner supplies a real resume
│   └── images/
│       ├── project-bank.webp
│       ├── project-student-management.webp
│       └── project-portfolio.webp
├── src/
│   ├── assets/                    # imported assets, if needed
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── ProjectCard.tsx
│   │   └── SocialLinks.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── CodingProfiles.tsx
│   │   ├── Education.tsx
│   │   ├── Achievements.tsx       # optional; omit if no content
│   │   └── Contact.tsx
│   ├── data/
│   │   └── portfolio.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

This structure is a guide, not a requirement to create empty files. Do not create unused sections or duplicate components.

## 4. Component Responsibilities

### `App.tsx`
- Compose the page in the required section order.
- Include one `main` element for primary content.
- Keep section IDs stable and unique.
- Avoid putting large data arrays directly into JSX.

### `Header.tsx`
- Display brand/name and section navigation.
- Implement mobile menu state with React state.
- Use a button to open/close the mobile menu.
- Set `aria-expanded` and `aria-controls` correctly.
- Close the menu after choosing a section.
- Support Escape to close the menu if practical.
- Keep focus visible.

### `Hero.tsx`
- Display one `h1`, role/headline, short introduction, and primary actions.
- Show resume action only if the resume exists.
- Do not use a broken image or fake profile statistics.

### `SectionHeading.tsx`
- Provide consistent section heading layout.
- Do not hard-code duplicate `h1` tags; section headings should normally be `h2`.

### `Skills.tsx`
- Render categories from typed data.
- Do not display arbitrary percentage scores.
- Omit empty categories.

### `ProjectCard.tsx`
- Accept a typed `Project` prop.
- Render title, description, technologies, features, image, and valid links.
- Use project ID as React key in the parent list.
- Use meaningful alt text or empty alt text for decorative imagery.
- Never render a fake link.

### `Projects.tsx`
- Map project data to cards.
- Use stable IDs.
- Handle an empty project list gracefully during development; do not publish a blank section.

### `CodingProfiles.tsx`
- Render only supplied, valid profile links.
- Do not assume profile APIs exist.
- Avoid scraping external sites for stats.

### `Education.tsx`
- Render verified degree, branch, institution, semester, and optional expected graduation year.
- Omit unknown values rather than guessing.

### `Contact.tsx`
- Provide a public email and relevant profile links.
- If a form is implemented, it must have real delivery integration and status handling.

### `Footer.tsx`
- Show copyright and useful links.
- Current year may be computed with `new Date().getFullYear()`.

## 5. Data Model

Example `src/data/portfolio.ts`:

```ts
export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  repoUrl: string;
  liveUrl?: string;
  image?: string;
  imageAlt?: string;
  status: "completed" | "in-progress";
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type SocialProfile = {
  label: string;
  url: string;
};

export const profile = {
  name: "YOUR NAME",
  role: "B.Tech CSE Student | Aspiring Software Developer",
  summary: "Replace with an accurate short introduction.",
  email: "your-public-email@example.com",
  githubUrl: "",
  linkedinUrl: "",
  resumePath: "/resume.pdf",
};

export const skills: SkillGroup[] = [
  { category: "Programming Languages", items: ["Java"] },
  { category: "Web Development", items: ["HTML", "CSS", "JavaScript"] },
];

export const projects: Project[] = [];
```

The data above is a schema example only. Replace placeholders and remove unverified skills/links before launch.

### Data invariants
- Project IDs must be unique.
- `title`, `description`, and `repoUrl` must not be blank for published projects.
- `repoUrl` must lead to the correct repository.
- `liveUrl` is optional and must be omitted unless a real demo exists.
- An image path must resolve to a real file.
- Profile links must be valid HTTPS URLs where applicable.
- Email must be intentionally public.
- A resume path must resolve to a real PDF.

## 6. Routing and Navigation

Version 1 does not need a router because it is a single-page site. Use anchors such as `href="#projects"` and ensure the destination exists.

If multiple pages are introduced later, choose a router only after documenting the new route requirements. If the deployment host uses client-side routing, configure fallback rewrites correctly.

## 7. Styling Architecture

- Global tokens and base rules live in `src/index.css`.
- Component-specific styling should primarily use Tailwind utilities.
- Keep colors and spacing consistent.
- Use a consistent max-width container.
- Use responsive grids for project cards and skills.
- Avoid inline style values repeated across many components.
- Respect `prefers-reduced-motion`.
- Do not use `overflow-x: hidden` to conceal a broken layout; fix the actual overflow.

## 8. Asset Handling

### Public files
Files inside `public/` are served from the site root:
- `public/resume.pdf` → `/resume.pdf`
- `public/images/project-bank.webp` → `/images/project-bank.webp`

### Imported files
Files inside `src/assets/` should be imported in a component or module.

### Asset requirements
- Use compressed images.
- Use correct filename capitalization.
- Provide alt text for meaningful images.
- Set dimensions or aspect ratio where possible.
- Avoid huge uncompressed screenshots.
- Do not include copyrighted images without permission.

## 9. Contact Architecture

### Minimum version
Use a `mailto:` link with the owner's public email.

### Optional form version
A form requires one of:
- A trusted form service with appropriate configuration, or
- A server-side endpoint that validates and forwards the message.

Do not put secret API keys in Vite variables exposed to the browser. Variables prefixed with `VITE_` are public in the client bundle. Use server-side environment variables for secrets.

Expected form states:
- Idle
- Validation error
- Submitting
- Success after confirmed response
- Error after failed response

## 10. Build and Deployment Flow

```text
Local source
   |
   +--> npm run lint (if configured)
   |
   +--> npm run build
             |
             v
          dist/
             |
             v
       Vercel / Netlify
             |
             v
      Production URL
             |
             v
   Production smoke tests
```

Do not deploy the Vite development server. Deploy the production build.

## 11. Failure Handling

- Missing optional profile: omit its link.
- Missing achievement data: omit the section.
- Missing live demo: show repository only.
- Missing resume: hide the download button.
- Missing image: use an intentional placeholder or omit the image.
- Form delivery failure: show a real error state and allow retry.
- Invalid external URL: fix or omit it before release.
- Build failure: stop deployment and resolve the error first.

## 12. Architecture Decision Records

### ADR-001: Single-page static frontend
**Decision:** Use a single-page React app with static content for version 1.  
**Reason:** Simple, fast, inexpensive, and adequate for a student portfolio.  
**Trade-off:** Dynamic data and form delivery require external services or a backend.

### ADR-002: TypeScript
**Decision:** Use TypeScript.  
**Reason:** Better data contracts and earlier detection of common mistakes.  
**Trade-off:** Slightly more setup and type definitions.

### ADR-003: Typed central data file
**Decision:** Store project and skill data in a dedicated module.  
**Reason:** Content is easier to update and validate.  
**Trade-off:** Avoid making the data module a dumping ground for component logic.

### ADR-004: No backend by default
**Decision:** Do not create a backend unless a feature requires one.  
**Reason:** Lower complexity and fewer security/deployment concerns.  
**Trade-off:** A real contact form needs an external form provider or a later backend.
