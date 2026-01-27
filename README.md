# SmartSpaces DFW

A modern, tech-forward website for SmartSpaces DFW - a smart home installation company specializing in home automation and integration.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity Studio
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Sanity

1. Create a free account at [sanity.io](https://www.sanity.io/)
2. Create a new project in the Sanity dashboard
3. Copy your Project ID and Dataset name
4. Create `.env.local` file from the example:

```bash
cp .env.local.example .env.local
```

5. Update `.env.local` with your Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### 3. Deploy Sanity Schema

```bash
npx sanity schema deploy
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.
Access Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio) to manage content.

## Content Types

- **Services**: Smart home services offered
- **Projects**: Portfolio of completed installations
- **Testimonials**: Customer reviews and ratings
- **Pages**: Custom pages for additional content

## Project Structure

```
smartspaces-site/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── page.tsx      # Homepage
│   │   └── studio/       # Sanity Studio
├── sanity/
│   ├── schemas/          # Content schemas
│   └── lib/             # Sanity client utilities
├── sanity.config.ts     # Sanity configuration
└── tailwind.config.ts   # Tailwind CSS config
```

## Deployment

Deploy to Vercel with one click or manually build:

```bash
npm run build
```

## Environment Variables

Required for production:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

## License

© 2026 SmartSpaces DFW. All rights reserved.
