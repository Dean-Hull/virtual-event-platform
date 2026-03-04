# LeadXP Virtual Event Platform

A virtual event platform POC built with Next.js, featuring a 3D interactive environment powered by Unity WebGL, agenda, speaker profiles and content with real-time chat.

## Features

- Speaker Directory: Browse and filter speakers by tag (AI, FinTech, Healthcare, etc.)
- Virtual Environment: Interactive 3D booth explorer powered by Unity WebGL
- Keynote Stream: Embedded live/recorded video player with chat and document access
- Live Chat: Real-time audience chat widget during sessions
- Document Viewer: Access pitch decks and supporting documents per speaker
- Agenda: Session schedule with speaker thumbnails and time slots

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) + Radix UI |
| 3D Environment | Unity WebGL |
| Icons | Lucide React + React Icons |
| Fonts | Inter (Google Fonts) |

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
git clone https://github.com/your-org/virtual-event-platform.git
cd virtual-event-platform
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_VIDEO_ID=your_youtube_video_id
NEXT_PUBLIC_BLOB_URL=https://your-blob-storage-url
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/               # Next.js App Router pages
│   ├── home/          # Landing page
│   ├── explore/       # Virtual environment + agenda
│   ├── speakers/      # Speaker directory with tag filtering
│   └── keynote/       # Video stream page
├── components/
│   ├── cards/         # Speaker, agenda, and Unity overlay cards
│   ├── event/         # VideoPlayer and UnityPlayer components
│   ├── layout/        # Header / navigation
│   ├── ui/            # shadcn/ui base components
│   └── widgets/       # Chat, agenda, and documents widgets
├── constants/         # Navigation items
├── routes/            # App view enums
└── types/             # TypeScript interfaces (Speaker, Content, etc.)
public/
└── data/
    └── speakers.ts    # Speaker data and headshots
```

## Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

## Deployment

Deploy easily on [Vercel](https://vercel.com/):

```bash
vercel deploy
```

Ensure all environment variables are configured in your Vercel project settings.

---

© 2026 LeadXP · All Rights Reserved

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
