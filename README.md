# ⚙️ Mechanical Engineering Student Portfolio

A clean, minimalistic, modern, and engineering-inspired personal portfolio website for a **19-year-old first-year B.Tech Mechanical Engineering student in Jaipur, India**.

Built with **React, Vite, and React Router**, featuring a technical blueprint/CAD aesthetic with deep navy/slate accents, monospace metrics, and responsive design.

---

## 📁 Complete Folder Structure

```text
mechanical-portfolio/
├── index.html                    # HTML shell & font definitions (Inter + JetBrains Mono)
├── package.json                  # Dependencies (React, React Router DOM, Vite)
├── vite.config.js                # Vite development server configuration
├── README.md                     # Setup, customization & deployment instructions
│
├── public/
│   ├── favicon.svg               # Custom engineering gear/compass favicon
│   ├── profile.jpg               # Your profile photo (replace this file!)
│   └── resume.pdf                # Your downloadable resume PDF (replace this file!)
│
└── src/
    ├── main.jsx                  # React application entry point (BrowserRouter)
    ├── App.jsx                   # Layout shell, route switch & scroll restoration
    ├── App.css                   # App layout styling
    │
    ├── data/
    │   └── portfolioData.js      # ⭐️ CENTRAL FILE: All your personal info in ONE place!
    │
    ├── styles/
    │   └── index.css             # Engineering design system (colors, typography, grid)
    │
    ├── components/
    │   ├── Icons.jsx             # Clean lightweight SVG icon library
    │   ├── Navbar.jsx            # Sticky navigation with mobile hamburger drawer
    │   ├── Navbar.css
    │   ├── Footer.jsx            # Minimal footer with coordinates & social links
    │   ├── Footer.css
    │   ├── PageHeader.jsx        # Reusable header banner for inner pages
    │   ├── PageHeader.css
    │   ├── SkillCard.jsx         # Animated percentage progress bar card
    │   ├── SkillCard.css
    │   ├── EducationTimeline.jsx # Blueprint-style vertical education timeline
    │   ├── EducationTimeline.css
    │   ├── AchievementCard.jsx   # Milestone & achievement card
    │   ├── AchievementCard.css
    │   ├── CertificationCard.jsx # Verified credential card with external link
    │   ├── CertificationCard.css
    │   ├── ContactCard.jsx       # Interactive communication channel card
    │   └── ContactCard.css
    │
    └── pages/
        ├── Home.jsx              # Hero, stats ticker, pillars & skill previews
        ├── Home.css
        ├── About.jsx             # My Story, Education, Hobbies & Achievements
        ├── About.css
        ├── SkillsResume.jsx      # 6 Skill progress bars, Certifications & Resume CTA
        ├── SkillsResume.css
        ├── Contact.jsx           # 6 Contact channels & direct message composer
        └── Contact.css
```

---

## 🚀 Quick Start Instructions

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) and **npm** installed on your machine.
- To check: run `node -v` and `npm -v` in your terminal.
- If not installed, download from [nodejs.org](https://nodejs.org/).

### 2. Install Dependencies
Open your terminal in the project directory:

```bash
cd /Users/pushkarchauhan/.gemini/antigravity/scratch/mechanical-portfolio
npm install
```

### 3. Run Development Server
Start the local development server:

```bash
npm run dev
```

Open your browser and visit:
👉 **`http://localhost:5173`**

The website will load with hot-reload enabled. Any changes you make to the code or data will instantly appear!

---

## 📸 How to Add Your Profile Photo

1. Prepare your photo:
   - A clear, high-resolution portrait or headshot (square or 4:5 aspect ratio works best).
2. Rename your photo file to:
   ```text
   profile.jpg
   ```
3. Move or copy your file into the `public` folder:
   ```text
   mechanical-portfolio/public/profile.jpg
   ```
4. That's it! Replace that single file, and your photo will automatically appear in the hero section on desktop and mobile.

---

## 📄 How to Add Your Resume PDF

1. Export your resume as a PDF.
2. Name the file:
   ```text
   resume.pdf
   ```
3. Place it directly inside the `public` directory:
   ```text
   mechanical-portfolio/public/resume.pdf
   ```
4. Both the **"Download Resume"** button on the Home page and the **"Download My Resume"** button on the Skills & Resume page will instantly trigger a download of your PDF.

---

## ✏️ How to Customize Your Personal Information

Everything on this website is controlled by **one single file**:

👉 **`src/data/portfolioData.js`**

You never need to edit multiple components to change your information.

### What you can edit inside `src/data/portfolioData.js`:
- **Personal Details**: `name`, `title`, `age`, `location`, `college`.
- **Hero Introduction**: `introduction` (two-line intro) and `tagline`.
- **My Story**: Change the paragraphs in `story.paragraphs` to personalize your journey as a first-year student.
- **Education Timeline**: Update college name, Class 12, and Class 10 school names, years, and subjects in `education`.
- **Hobbies**: Update hobby names, descriptions, or change icons (`fitness`, `tech`, `exploring`, `photography`, `sports`, `learning`).
- **Achievements**: Add or remove entries in `achievements`.
- **Skills & Animated Progress Bars**:
  ```javascript
  {
    id: "autocad",
    name: "AutoCAD",
    level: 70, // 👈 Change to any number 0-100! The progress bar animates automatically!
    category: "Design / Drafting",
    description: "Orthographic projections, isometric drafting, and schematics."
  }
  ```
- **Certifications**: Add new certificates in `certifications`.
- **Contact Details**: Update `email`, `phone`, `address`, `instagram`, `linkedin`, and `github` in `contact`.

---

## 🏗️ Building & Deploying to the Web

### Build for Production
When you're ready to publish:

```bash
npm run build
```

This creates an optimized, blazing-fast production bundle in the `dist/` directory.

### Deploying for Free

#### Option 1: Vercel (Recommended)
1. Push this project to your GitHub account (`git init`, `git add .`, `git commit`, `git push`).
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **"Add New Project"** and select your repository.
4. Framework preset will automatically be detected as **Vite**.
5. Click **"Deploy"**. Your website will be live in 30 seconds with a free `.vercel.app` URL and custom domain support!

#### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com) and sign in.
2. Drag and drop the `dist/` folder into the Netlify dashboard, or link your GitHub repo.
3. Build command: `npm run build`, Publish directory: `dist`.
4. Click Deploy.

---

## 💡 Engineering Design Philosophy
This portfolio is tailored specifically for a mechanical engineering undergraduate:
- **Clean Light Palette**: `#F8FAFC` slate background with pure `#FFFFFF` cards and `#0F172A` deep charcoal typography.
- **Blueprint Precision**: Faint coordinate dot-grids, monospace measurement tags, and corner drafting brackets.
- **Authentic Student Tone**: Highlights genuine first-year curiosity, foundational mechanics, CAD tools, and hands-on lab projects without artificial exaggeration.
