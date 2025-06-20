# AI Portfolio

A modern, responsive portfolio web application built with Next.js, Tailwind CSS, and TypeScript. Showcases education, projects, certifications, and work experience in Artificial Intelligence and Machine Learning.

## Features
- Dynamic sections for Education, Projects, Certifications, and Experience
- Downloadable resume
- Modern UI with Tailwind CSS
- Responsive and mobile-friendly
- Easy to customize

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or above recommended)
- [pnpm](https://pnpm.io/) (recommended for this project)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
   cd Ai_portofolio
   ```
2. Install dependencies:
   ```sh
   pnpm install
   ```

### Running Locally
Start the development server:
```sh
pnpm dev
```
Visit [http://localhost:3000](http://localhost:3000) to view your portfolio.

### Building for Production
```sh
pnpm build
pnpm start
```

## Deployment
- **Vercel (Recommended):** Import your repo at [vercel.com](https://vercel.com), follow the prompts, and deploy.
- **Netlify:** Import your repo, set build command to `pnpm build` and publish directory to `.next`.

## Customization
- Update content in the `components/` folder (education, projects, certifications, experience, etc).
- Update resume link in `components/resume-download.tsx`.
- Add images to the `public/` folder as needed.

## License
This project is open source and free to use.
