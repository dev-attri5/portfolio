# Dev Attri — Personal Developer Portfolio

> Modern, dark-themed, fully responsive, and accessible personal developer portfolio built with **pure HTML5, CSS3, and JavaScript**.

---

## 🚀 Technology Highlights

- **Pure HTML5:** Semantic landmarks (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`), logical heading hierarchy, and zero layout shift.
- **Pure CSS3:** Native design tokens (CSS custom properties), fluid clamp typography (`clamp()`), flexbox/grid responsive layouts, accessible `:focus-visible` styling, and `prefers-reduced-motion` compliance.
- **Vanilla JavaScript:** Fast client-side interactivity (mobile menu toggle, Escape key handler, dynamic copyright year, and interactive copy-to-clipboard utility with visual feedback).
- **Zero Build Dependencies:** No Node.js build process, bundlers, or external packages required. Open `index.html` directly in any web browser.

---

## 📁 Project Structure

```text
portfolio/
├── index.html                  # Single semantic HTML document containing all sections
├── css/
│   └── style.css               # Native CSS design tokens, typography, grid & animations
├── js/
│   └── main.js                 # Mobile drawer, copy-to-clipboard & dynamic year
├── assets/
│   └── favicon.svg             # Custom developer SVG favicon
├── favicon.svg                 # Root fallback favicon
├── vercel.json                 # Vercel static deployment configuration
└── README.md                   # Project documentation
```

---

## 🛠️ How to Run Locally

### Option 1: Direct File Open
Simply double-click `index.html` or open it with your favorite browser (Chrome, Edge, Firefox, Safari).

### Option 2: Live Server (VS Code / Python / npx)
Using Python:
```bash
python -m http.server 3000
```
Or using Node/npx:
```bash
npx serve
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploying to Vercel / Netlify / GitHub Pages

### Vercel (Automatic Static Hosting)
1. Push your repository to GitHub.
2. Vercel automatically detects the static `index.html` and `vercel.json` with zero build command needed.
3. Your site deploys instantly.

### GitHub Pages
1. Go to your GitHub repository: `Settings` > `Pages`.
2. Select `Deploy from a branch` > `main` > `/ (root)` and click **Save**.

---

## 📄 License

This project is open-source and available under the MIT License.
