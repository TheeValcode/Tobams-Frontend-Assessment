# Tobams Group – Training & Development Page Implementation

A pixel-perfect, fully responsive, production-ready Next.js (App Router) + Tailwind CSS implementation of the Tobams Group **"What We Do → Training and Development"** page design.

---

## 🔗 Project & Live Deployment Links

- **Live Deployment URL**: [https://tobams-frontend-assessment.vercel.app](https://tobams-frontend-assessment.vercel.app) *(or your deployed Vercel URL)*
- **GitHub Repository**: [https://github.com/TheeValcode/Tobams-Frontend-Assessment](https://github.com/TheeValcode/Tobams-Frontend-Assessment)

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 14+ / 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: [Google Fonts (`Inter`) via `next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- **Icons**: [Lucide React Icons](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 🧩 Reusable & Functional Component Architecture

The project adheres strictly to modular, reusable component design conventions. No single monolithic page file is used; each section and UI primitive is isolated in `/src/components`:

```text
src/
├── app/
│   ├── layout.tsx         # Root layout configuring Inter font & metadata
│   ├── page.tsx           # Page composition root
│   └── globals.css        # Tailwind @theme brand tokens
├── components/
│   ├── ui/
│   │   ├── Button.tsx           # Reusable props-driven CTA button component
│   │   ├── FeatureListItem.tsx  # Reusable lightning bolt list item component
│   │   └── SectionHeader.tsx    # Reusable section title & description header
│   ├── Navbar.tsx               # Header top bar, logo, account pill, nav & mobile drawer
│   ├── HeroSection.tsx          # Full-width background image, dark overlay & hero CTA
│   ├── LMSSection.tsx           # Soft lavender background, circular cropped image & course list
│   ├── CorporateTrainings.tsx   # Corporate trainings section with feature list & office image
│   ├── IndividualTraining.tsx   # Reversed-layout individual training section
│   ├── CapacityDevelopment.tsx  # Capacity development section with highlighted item box
│   ├── ManagementDev.tsx        # Deep dark purple card with stacked feature pills
│   ├── TransformationHub.tsx    # Soft pink card with CEO webinar details & portrait
│   └── Footer.tsx               # 4-zone comprehensive responsive branded footer
```

---

## 🎨 Design Decisions & Technical Assumptions

1. **Color Tokens Configuration**: Exact brand color tokens (`brand-purple`, `brand-red`, `brand-pink-bg`, `brand-purple-dark`, `brand-teal`) are registered in `globals.css` using Tailwind's `@theme` configuration for maximum consistency.
2. **Typography**: Used `Inter` from `next/font/google` for optimal rendering across screen densities and zero layout shift.
3. **Image Optimization**: All images leverage `next/image` with exact `fill`, `sizes`, `priority`, and responsive breakpoints to prevent CLS.
4. **Responsive Layout Strategy**: Standard Tailwind responsive breakpoints (`sm:`, `md:`, `lg:`) are used throughout without any custom non-standard media queries. The layout adjusts seamlessly across 425px (mobile), 768px (tablet), and 1280px+ (desktop).
5. **Accessibility & Semantics**: Implemented proper semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), keyboard-navigable buttons/links, and descriptive `alt` text for all images.

---

## 🚀 Getting Started Locally

### Prerequisites

- **Node.js**: v18.17.0 or higher
- **npm**: v9.0.0 or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/TheeValcode/Tobams-Frontend-Assessment.git
   cd Tobams-Frontend-Assessment
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the local development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## 🧪 Building & Verification

To verify the production build and linting rules locally:

```bash
# Type check and production build
npm run build

# Run ESLint check
npm run lint
```
