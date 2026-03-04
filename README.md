# LeadXP Virtual Event Platform

A virtual event platform POC built with Next.js, featuring a 3D interactive environment powered by Unity WebGL, agenda, speaker profiles and content with real-time chat.

## Features

- Speaker Directory: Browse and filter speakers by tag (AI, Sustainability, Healthcare, etc...)
- Virtual Environment: Interactive 3D booth explorer powered by Unity WebGL
- Keynote Stream: Embedded video player with chat and document access
- Live Chat: Audience chat widget during sessions
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

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_VIDEO_ID=
NEXT_PUBLIC_BLOB_URL=
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

---

© 2026 LeadXP · All Rights Reserved

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
