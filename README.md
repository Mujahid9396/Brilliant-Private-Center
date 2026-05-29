# 🌟 Brilliant Private Center — Academic Excellence Portal

A beautifully crafted, modern web application for **Brilliant Private Center** (located in Joypurhat). This portal is built with **React (v19)**, **Vite**, **TypeScript**, **Tailwind CSS (v4)**, and dynamic animations powered by **motion** (`motion/react`). It serves as an informative hub for students, parents, and prospective candidates seeking premium coaching programs from Class 6 to SSC candidates.

---

## ✨ Features & Visual Highlights

- **🏛️ Proportional & Cohesive Design Theme**: Designed on a premium dark and slate off-white grid system utilizing spacious padding, high-contrast typography, and intuitive layouts.
- **📚 Multi-Class Academic Support**: Standardized course cards outlining details for **Class 6, Class 7, Class 8, Class 9, Class 10**, and **SSC Board candidates**, featuring interactive program highlights, exact fee tracking, physical schedules, and exam timings.
- **💬 Multi-Channel WhatsApp Communications**:
  - Implemented a floating dynamic interactive WhatsApp action badge in the bottom-right corner with smooth hover states.
  - Placed pre-filled instant-chat links throughout the Navbar, Hero banner, Contact drawer, and Footer leading directly to the advisory hotline (`+8801750091995`).
- **📍 Interactive Campus Location**:
  - Embedded an interactive location iframe rendering the exact map coordinates of *Brilliant Private Center, Ratanpur, Panchbibi, Joypurhat*.
  - Added a direct deep-link button mapping standard navigation endpoints within the Google Maps mobile/desktop app.
- **📝 Admission Counselling Request Hub**: 
  - Complete client-side validation for admissions counselling requests.
  - Direct Gmail compose links bundling formatted form data inside emails as direct action buttons.
- **⚡ Super-Fast Deployment & CI/CD**: Fully configured GitHub Actions pipeline (`.github/workflows/deploy.yml`) for instant deploy-on-push to **GitHub Pages**.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + TypeScript (TSX)
- **Bundler & Build Tool**: Vite (v6)
- **Styling**: Tailwind CSS (v4) with high-density grids and custom font pairings
- **Interactive Transitions**: `motion` (by the core Motion team) for smooth micro-animations
- **Icons**: `lucide-react` containing standard vector declarations
- **Automated Deployments**: GitHub Actions (CI/CD)

---

## 🚀 How to Run the Project Locally

To get started with local development, follow these simple steps:

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher is recommended).

### 2. Clone and Install Dependencies
Navigate into your project folder and run:
```bash
# Install standard dependencies
npm install
```

### 3. Run Development Server
Start the Vite local development server:
```bash
npm run dev
```
Once started, open your browser and navigate to `http://localhost:3000` (or the port specified in terminal outputs).

### 4. Build and Compile for Production
To package the app into a fully optimized, minified bundle:
```bash
npm run build
```
This output is written cleanly inside the `/dist` directory, ready to serve as static files.

---

## 📦 How to Push this Project to GitHub

Follow these steps to create a new repository and push this code straight to your GitHub account:

1. **Log in to GitHub**: Visit [GitHub](https://github.com/) and create a new, empty repository named `brilliant-private-center` (leave files like README, `.gitignore`, or licenses UNCHECKED).
2. **Open your Terminal** at the root of this project and execute:

```bash
# Initialize local git repository
git init

# Add all files (the preconfigured .gitignore will keep node_modules and builds out)
git add .

# Create the initial commit
git commit -m "feat: initial commit of Brilliant Private Center academic portal"

# Set default branch to main
git branch -M main

# Connect your local project to your newly created GitHub repository
# (Remember to swap out YOUR_USERNAME with your real GitHub name)
git remote add origin https://github.com/YOUR_USERNAME/brilliant-private-center.git

# Push the code safely code to GitHub
git push -u origin main
```

---

## 🌐 Free Hosting Guide

Once your project is on GitHub, hosting it live for your audience is completely free and takes less than 2 minutes.

### Method A: GitHub Pages (Automatic Continuous Deployment)
We have pre-configured a **GitHub Actions CI/CD pipeline** inside `.github/workflows/deploy.yml`.

1. Go to your repository settings on GitHub (`Settings` -> `Pages`).
2. Under **Build and deployment** -> **Source**, select **GitHub Actions** (instead of Deploy from branch).
3. The next time you push a clean change to the `main` branch, GitHub will run the action, build your Vite app, and host it live.
4. *Note on Custom Domains:* If you are deploying to a standard sub-domain (e.g. `https://yourusername.github.io/brilliant-private-center/`), you can optionally append the repository name as the base directory in your `vite.config.ts`, or bind it directly to your own custom domain name for immediate root accessibility.

### Method B: Vercel / Netlify (Recommended)
1. Head over to [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).
2. Click **Add New Project** and connect your GitHub account.
3. Import the `brilliant-private-center` repository.
4. Keep the default settings (Vercel automatically detects **Vite** as your build tool, setting the `npm run build` command and `dist` target folders).
5. Click **Deploy**. Your site will receive a free, stable production URL with an SSL certificate.

---

## 📂 Project Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated CI/CD GitHub Pages action
├── src/
│   ├── assets/                 # High-resolution optimized brand graphics and images
│   ├── components/             # Reusable interactive visual blocks (Navbar, Hero, About, Courses, Contact...)
│   ├── data/                   # Structured, single-source-of-truth JSON files for academic batches & packages
│   ├── types.ts                # TypeScript system contracts and structure declarations
│   ├── index.css               # Core CSS containing tailwind imports
│   └── main.tsx                # App entry point
├── package.json                # Project dependencies, scripts & metadata
├── tsconfig.json               # TypeScript path mapping & compiler rules
└── vite.config.ts              # Vite configurations
```

---

*This portal has been prepared and formatted for quick-launch production grade packaging. Live stats, responsive panels, and communication gateways are configured out-of-the-box. Made with ❤️ for Brilliant Private Center.*
