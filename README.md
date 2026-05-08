# 🌐 Personal Web - Ezra Mighty

[![GitHub License](https://img.shields.io/github/license/ezra08mc/personal-web-2?style=flat-square&color=B75D69)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Development-orange?style=flat-square)](https://github.com/ezra08mc)

A minimalist, high-performance personal website built with a **Monorepo architecture**. This project focuses on clean Vanilla UI/UX, showcasing technical proficiency in Backend & DevOps through a refined frontend presentation. Developed as part of my journey in Informatics Engineering.

## 📸 Preview

[![Preview Website](https://img.shields.io/badge/Live_Demo-B75D69?style=for-the-badge&logo=googlechrome&logoColor=white)](https://ezra08mc.github.io/personal-web-2)

---

## 🚀 Key Features

* **🌗 Dynamic Theme Engine**: Persistent Light and Dark mode using CSS Variables and `localStorage`.
* **⏳ Session-based Loader**: Custom splash screen loader using CSS animations, optimized to run only once per session to enhance user experience.
* **🖼️ Masonry Gallery**: A responsive, multi-column photo gallery with dynamic aspect-ratio cropping and lightbox effects.
* **⚡ Monorepo Structure**: Clean separation between public entry points and core source assets for better maintainability.
* **✨ Reveal Animations**: Smooth scroll-reveal effects using the Intersection Observer API for a modern feel.

## 📁 Project Structure

```text
personal-web/
├── public/             # Deployment entry points
│   ├── index.html      # Main Dashboard / Homepage
│   ├── about.html      # Professional profile & Bio
│   ├── gallery.html    # Interactive photo gallery
│   ├── resume.html     # Work experiences & Tech stack
│   └── assets/         # Static images, icons, and PDF documents
├── src/                # Core application source
│   ├── css/            # Global styles and theme variables (style.css)
│   └── js/             # Interactive logic and theme handling (script.js)
├── index.html          # Root redirect for GitHub Pages deployment
└── README.md           # Project documentation
