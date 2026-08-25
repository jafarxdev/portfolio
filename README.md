# Jafar Madadi — Portfolio

**Full-Stack Software Developer | AI Engineer**

Production portfolio for **Jafar Madadi**, a Senior Software Engineer and Software Architect focused on designing and building **enterprise platforms, scalable backend systems, APIs, microservices, workflow automation, and modern full-stack applications**.

🌐 **Portfolio:** https://jafarxdev.github.io/portfolio/
💻 **GitHub:** https://github.com/jafarxdev

---

## 🚀 Overview

This repository contains the source code for my personal developer portfolio.

The portfolio presents my:

* Professional experience
* Technical expertise
* Software architecture capabilities
* Selected projects
* Backend and frontend engineering work
* Microservices and API development
* Cloud and DevOps experience
* AI and intelligent application development
* Education and professional background
* Contact information and professional links

The application is designed with a strong emphasis on **performance, accessibility, maintainability, SEO, responsive design, and production-ready engineering practices**.

---

## 🛠️ Technology Stack

### Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS
* `next-themes`
* Vite
* Vinext

### Backend & Runtime

* Cloudflare Workers
* Cloudflare-compatible rendering
* Server-side and edge-compatible application architecture

### Tooling & Quality

* Node.js 22.13+
* npm 10+
* TypeScript strict mode
* ESLint
* Automated tests
* GitHub Actions
* Continuous integration

### Integrations

* Formspree
* OpenAI Sites
* GitHub Pages

---

## 🏗️ Architecture

The project follows a modular structure designed to keep **presentation, content, configuration, infrastructure, and shared contracts** clearly separated.

```text
app/
├── Routes
├── Metadata routes
├── Layout
└── Global styles

components/
└── Reusable UI and interactive components

data/
└── Centralized portfolio content and public configuration

lib/
└── Environment resolution and pure utility functions

types/
└── Shared TypeScript contracts

worker/
└── Cloudflare Worker entry point and response headers

tests/
└── Focused configuration and utility tests
```

Portfolio content, navigation, professional links, and public site metadata are centralized in:

```text
data/portfolio.ts
```

Environment-dependent URL resolution and form configuration are handled through:

```text
lib/
```

This separation makes the application easier to maintain and deploy across different hosting environments.

---

## ⚙️ Requirements

Before running the project locally, make sure you have:

* **Node.js 22.13 or newer**
* **npm 10 or newer**

Verify your environment:

```bash
node --version
npm --version
```

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/jafarxdev/portfolio.git
cd portfolio
```

Install dependencies:

```bash
npm ci
```

Create the local environment file:

```bash
copy .env.example .env.local
```

Start the development server:

```bash
npm run dev
```

The development server will print the local URL when it is ready.

---

## 🔐 Environment Variables

| Variable                        | Required    | Purpose                                                                    |
| ------------------------------- | ----------- | -------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`          | Recommended | Canonical production origin used by metadata, sitemap, and structured data |
| `NEXT_PUBLIC_BASE_PATH`         | Optional    | Production subdirectory such as `/portfolio` for GitHub Pages              |
| `NEXT_PUBLIC_FORMSPREE_FORM_ID` | Optional    | Formspree form identifier for contact-form submission                      |

Example:

```env
NEXT_PUBLIC_SITE_URL=https://jafarxdev.github.io
NEXT_PUBLIC_BASE_PATH=/portfolio
NEXT_PUBLIC_FORMSPREE_FORM_ID=
```

### Security

Formspree form IDs are public routing identifiers and are **not API secrets**.

Never place private keys, credentials, tokens, or other sensitive values inside `NEXT_PUBLIC_*` variables because they are exposed to the client.

---

## 🧪 Available Scripts

```bash
npm run dev
```

Start the local development server.

```bash
npm run lint
```

Run linting and code-quality checks.

```bash
npm run typecheck
```

Run strict TypeScript validation.

```bash
npm test
```

Run the project's focused test suite.

```bash
npm run build
```

Create the production Cloudflare-compatible build.

```bash
npm run check
```

Run the complete verification pipeline.

```bash
npm run start
```

Serve the completed production build locally.

---

## 📬 Contact Form

The contact form uses progressive enhancement through a client-side component.

It provides:

* Native HTML validation
* Direct Formspree submission
* Sending, success, and error states
* Accessible status announcements
* Spam honeypot protection
* Direct email fallback when Formspree is not configured

This allows the portfolio to remain functional even when an external form provider is unavailable or intentionally disabled.

---

## 🔎 SEO & Accessibility

The application includes production-oriented SEO and accessibility features, including:

* Route-level metadata
* Canonical URLs
* Open Graph metadata
* X/Twitter metadata
* JSON-LD structured data
* `sitemap.xml`
* `robots.txt`
* Web manifest
* Semantic HTML
* Structured heading hierarchy
* Skip navigation link
* Current-page navigation semantics
* Visible keyboard focus states
* Reduced-motion support
* Accessible error and status messaging
* Accessible not-found page

The goal is to provide a portfolio that is both **search-engine friendly and usable with assistive technologies**.

---

## 🧪 Testing & Continuous Integration

GitHub Actions validates the project on pull requests and changes to `main`.

The CI pipeline includes:

```text
Dependency installation
        ↓
Lint
        ↓
TypeScript validation
        ↓
Tests
        ↓
Production build
```

The project is therefore validated before changes are considered production-ready.

---

## ☁️ Deployment

The repository supports two deployment targets.

### OpenAI Sites / Cloudflare

The primary production configuration uses:

```text
.openai/hosting.json
vite.config.ts
build/sites-vite-plugin.ts
worker/index.ts
```

The Sites build produces a **Cloudflare Worker-compatible ESM bundle** in:

```text
dist/
```

The Sites deployment is intentionally **base-path-free**.

Environment-specific runtime values should be configured through the hosting environment rather than committed to the repository.

Before deployment:

```bash
npm ci
npm run check
```

---

### GitHub Pages

The repository also includes a dedicated GitHub Pages workflow.

GitHub Pages uses a static export with:

```env
NEXT_PUBLIC_BASE_PATH=/portfolio
```

This ensures that:

* Internal navigation
* Images
* Metadata assets
* Static resources
* Résumé links

resolve correctly under:

```text
https://jafarxdev.github.io/portfolio/
```

The GitHub Pages deployment is intentionally separate from the Cloudflare/Sites runtime.

---

## 🌐 Deployment Architecture

```text
                    ┌─────────────────────┐
                    │   Portfolio Source  │
                    │   Next.js + React   │
                    └──────────┬──────────┘
                               │
                    ┌──────────▼──────────┐
                    │   TypeScript / Vite │
                    │   Build Pipeline    │
                    └──────────┬──────────┘
                               │
                 ┌─────────────┴─────────────┐
                 │                           │
        ┌────────▼────────┐        ┌────────▼────────┐
        │ OpenAI Sites    │        │ GitHub Pages    │
        │ Cloudflare      │        │ Static Export   │
        │ Worker / ESM    │        │ /portfolio      │
        └─────────────────┘        └─────────────────┘
```

---

## 📁 Project Principles

The project is built around several engineering principles:

* **Separation of concerns**
* **Strong typing**
* **Reusable components**
* **Centralized configuration**
* **Environment-aware deployment**
* **Accessibility-first UI**
* **SEO-friendly architecture**
* **Progressive enhancement**
* **Automated validation**
* **Production-oriented deployment**
* **Minimal and maintainable dependencies**

---

## 👨‍💻 About Me

I'm **Jafar Madadi**, a Senior Software Engineer and Full-Stack Architect focused on building scalable software systems and enterprise applications.

My engineering interests include:

* Software architecture
* Microservices
* Backend engineering
* REST APIs
* Distributed systems
* Full-stack development
* Cloud-native applications
* Database architecture
* Workflow automation
* AI-powered applications
* RAG and LLM-based systems
* Performance optimization
* Enterprise software development

### Core Technologies

```text
Java • Spring Boot • PHP • Laravel
TypeScript • Node.js • NestJS
Python • FastAPI
React • Angular
MySQL • PostgreSQL • MongoDB
Docker • Kubernetes
AWS • Cloudflare
Kafka • REST APIs
RAG • LangChain • MCP
LLMs • OpenAI API
```

---

## 🔗 Professional Links

* **Portfolio:** https://jafarxdev.github.io/portfolio/
* **GitHub:** https://github.com/jafarxdev

---

## 📄 License

This portfolio is personal work created by **Jafar Madadi**.

The source code may be used for learning and reference, but personal content, résumé information, professional identity, photographs, and portfolio assets should not be reused without permission.
