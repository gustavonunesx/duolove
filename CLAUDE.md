# DuoLove — Project Briefing for Claude

## What is DuoLove

DuoLove is a shared calendar app for couples that combines scheduling, communication, and emotional connection in one platform. It replaces scattered WhatsApp messages, separate calendars, and forgotten reminders with a warm, beautiful, and emotionally meaningful experience.

Full PRD: [docs/PRD.md](docs/PRD.md)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| Database | PostgreSQL via Supabase |
| ORM | Prisma |
| Auth | Supabase Auth (OAuth Google/Apple) |
| Storage | Supabase Storage |
| Email | Resend |
| Payments | Stripe |
| Deploy | Vercel |

---

## Folder Structure

```
duolove/
├── app/                    # Next.js App Router pages
│   ├── (auth)/             # Login, signup, invite flows
│   ├── (app)/              # Authenticated app shell
│   │   ├── dashboard/
│   │   ├── calendar/
│   │   ├── chat/
│   │   ├── memories/
│   │   └── settings/
│   ├── (marketing)/        # Landing page, pricing
│   └── api/                # API routes
├── components/
│   ├── ui/                 # shadcn/ui primitives
│   ├── calendar/           # Calendar-specific components
│   ├── chat/               # Messaging components
│   └── shared/             # Reusable app components
├── lib/
│   ├── supabase/           # Supabase client + server helpers
│   ├── prisma/             # Prisma client singleton
│   ├── stripe/             # Stripe helpers
│   └── utils/              # Shared utilities
├── prisma/
│   └── schema.prisma       # Database schema
├── hooks/                  # Custom React hooks
├── types/                  # Shared TypeScript types
├── styles/                 # Global CSS, Tailwind config
└── docs/                   # PRD and project docs
```

---

## Design Identity

### Color Palette

| Role | Color | Hex |
|---|---|---|
| Primary accent | Rose/Pink | `#E91E8C` or similar warm rose |
| Secondary | Lilac/Purple | `#9B59B6` range |
| Surface dark | Matte black | `#0D0D0D` / `#111111` |
| Surface card | Dark glass | `#1A1A2E` with opacity |
| Text primary | Cream/White | `#F5F0EB` |
| Text muted | Warm gray | `#8B8B9E` |
| Accent wine | Deep rose | `#8B0051` |

### Visual Style
- **Glassmorphism**: `backdrop-blur`, semi-transparent cards with subtle borders
- **Gradients**: soft diagonal gradients (rose → lilac, dark to darker)
- **Borders**: fully rounded (`rounded-2xl`, `rounded-full`)
- **Shadows**: glow effects on primary actions using the accent color
- **Animations**: Framer Motion for page transitions and microinteractions
- **Typography**: clean sans-serif, emotionally warm (consider Geist or Plus Jakarta Sans)
- **Dark-first**: dark mode is the primary experience; light mode is secondary

### Tone
The UI should feel intimate, not corporate. Warm, not clinical. Every empty state, tooltip, and notification should feel like it was written by a person who cares about the relationship.

---

## Key Domain Concepts

- **Couple**: two linked user accounts; core unit of the app
- **Event**: calendar entry that can be private, shared, or couple-only
- **Memory**: media-attached moment (photo + caption + date) tied to the relationship timeline
- **Capsule**: scheduled message to be revealed at a future date
- **Counter**: days-together tracker tied to the relationship start date
- **Plan**: premium subscription granting advanced features

---

## Coding Conventions

- Use TypeScript strictly — no `any`, prefer explicit types and Zod for runtime validation
- All DB access goes through Prisma; never raw SQL unless explicitly needed
- Supabase client: use server client in Server Components / Route Handlers, browser client in Client Components
- Components: prefer Server Components by default; add `"use client"` only when needed
- API routes live in `app/api/` and return typed JSON responses
- File naming: `kebab-case` for files and folders, `PascalCase` for components
- Avoid barrel exports (`index.ts`) — import directly from the source file
- Forms: use `react-hook-form` + `zod` for validation
- Realtime: use Supabase Realtime channels for live calendar sync and chat

---

## Build Milestones

> Milestones seguem o plano detalhado em [docs/PLAN.md](docs/PLAN.md). A ordem foi reorganizada para frontend-first (ver PLAN.md).

| # | Milestone (PLAN.md ref) | Status |
|---|---|---|
| M1 | Setup & Design System | ✅ Concluída (pendente: `.env.example`) |
| M2 | Landing Page | ✅ Concluída |
| M3 | Auth UI & Onboarding | ⬜ Próxima |
| M4 | App Shell & Dashboard UI | ⬜ |
| M5 | Calendário UI | ⬜ |
| M6 | Chat UI | ⬜ |
| M7 | Memórias UI | ⬜ |
| M8 | Backend Foundation | ⬜ |
| M9 | Backend Calendário | ⬜ |
| M10 | Backend Social | ⬜ |
| M11 | Notificações | ⬜ |
| M12 | Premium & Stripe | ⬜ |
| M13 | Polish & Qualidade | ⬜ |
| M14 | Deploy | ⬜ |

---

## Environment Variables (required)

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Database (Prisma)
DATABASE_URL=
DIRECT_URL=

# Stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

# Resend
RESEND_API_KEY=

# App
NEXT_PUBLIC_APP_URL=
```

---

## Notes

- The app is intentionally scoped to **two users per couple** — not a general multi-user system
- Premium features should be gated via a `plan` field on the couple entity
- Emotional copywriting matters — placeholder text, empty states, and notifications should reflect the app's warm, intimate tone
- Accessibility and mobile-first responsiveness are non-negotiable from the start

---

## Milestone Completion Protocol

**At the end of every milestone, Claude must:**

1. **Check off all completed deliverables** in `docs/PLAN.md` — mark each done item as `[x]` and add `✅ CONCLUÍDA` to the milestone heading.
2. **Update `CLAUDE.md`** — update the Build Milestones table to reflect the current status (add a ✅ next to completed milestones).
3. **Create the closing commit** using the exact message defined in the milestone's `Commit final` block.
4. **Do not move to the next milestone** until the current one is checked off in `docs/PLAN.md`.

This keeps project state always readable at a glance from both files.
