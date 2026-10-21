# Dev Attri — Personal Developer Portfolio

> Modern, dark-themed, accessible personal developer portfolio built for **Dev Attri**, a B.Tech Computer Science and Engineering student at GLA University, Mathura.

---

## 🚀 Technology Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`)
- **Icons:** [Lucide React](https://lucide.dev/) + Custom accessible SVGs
- **Linter:** [Oxlint](https://oxc.rs/)

---

## 📁 Project Structure

```text
my-portfolio/
├── public/
│   ├── favicon.svg             # Custom dark developer SVG favicon
│   └── resume.pdf              # (Optional) Place verified resume PDF here
├── src/
│   ├── components/
│   │   ├── Footer.tsx          # Accessible footer with copyright & links
│   │   ├── Header.tsx          # Responsive navigation & mobile drawer
│   │   ├── ProjectCard.tsx     # Reusable typed project card
│   │   ├── SectionHeading.tsx  # Consistent semantic h2 section headings
│   │   ├── SkipLink.tsx        # Keyboard skip-to-content navigation
│   │   └── SocialIcons.tsx     # Crisp SVGs for GitHub and LinkedIn
│   ├── sections/
│   │   ├── About.tsx           # Academic track & engineering focus
│   │   ├── CodingProfiles.tsx  # LeetCode, GFG, GitHub, and LinkedIn cards
│   │   ├── Contact.tsx         # Direct email & copy-to-clipboard utility
│   │   ├── Education.tsx       # B.Tech CSE details at GLA University
│   │   ├── Hero.tsx            # Name, headline, bio, and key actions
│   │   ├── Projects.tsx        # Featured software coursework projects
│   │   └── Skills.tsx          # Categorized technical skills & tools
│   ├── data/
│   │   └── portfolio.ts        # Centralized typed data source
│   ├── App.tsx                 # Single-page shell with semantic landmarks
│   ├── index.css               # Global CSS tokens, reset, and reduced motion
│   └── main.tsx                # React entry point
├── Architecture.md             # Architectural specification & decisions
├── Design.md                   # Design tokens, color system, and typography
├── Phases.md                   # Sequential implementation plan
├── PRD.md                      # Product Requirements Document
├── Rules.md                    # AI constraints and quality standards
└── package.json
```

---

## 🛠️ Local Development

### 1. Prerequisites
- **Node.js:** v18.0.0 or higher (v24.x tested)
- **npm:** v9.x or higher

### 2. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open the local URL displayed in the terminal (typically `http://localhost:5173/`).

### 4. Run Linting
```bash
npm run lint
```

### 5. Production Build
```bash
npm run build
```
Build output is generated into the `dist/` directory.

### 6. Preview Production Build
```bash
npm run preview
```

---

## ✏️ Customizing Portfolio Data

All repeatable content is defined in `src/data/portfolio.ts`. To update your information:

1. **Profile & Contact:** Edit `profile` object for name, headline, bio, and email.
2. **Technical Skills:** Add or adjust entries in `skills` array.
3. **Projects:** Update `projects` array with your repository links and demo URLs.
4. **Resume:** To enable the "Resume" button, place your resume PDF at `public/resume.pdf` and set `resumePath: '/resume.pdf'` in `src/data/portfolio.ts`.

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Keep the default settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**.

### Deploy to Netlify
1. Log in to [Netlify](https://www.netlify.com/) and select **Import from Git**.
2. Connect your GitHub repository.
3. Configure build settings:
   - **Build Command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy Site**.

### Deploy to GitHub Pages
1. In `vite.config.ts`, configure `base: '/<repository-name>/'`.
2. Use a GitHub Actions workflow to build and deploy the `dist/` folder to GitHub Pages.

---

## 📄 License

This project is licensed under the MIT License.
