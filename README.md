# DuoLove

O app de calendário compartilhado para casais. Organizem a rotina, celebrem datas especiais e registrem memórias juntos.

## Stack

- **Framework**: Next.js 15 (App Router)
- **Linguagem**: TypeScript (strict)
- **UI**: Tailwind CSS v4 + shadcn/ui
- **Animações**: Framer Motion
- **Banco de dados**: PostgreSQL via Supabase + Prisma
- **Auth**: Supabase Auth (email + OAuth Google)
- **Storage**: Supabase Storage
- **Email**: Resend
- **Pagamentos**: Stripe
- **Deploy**: Vercel

## Setup local

### 1. Clone e instale dependências

```bash
git clone <repo-url>
cd duolove
npm install
```

### 2. Configure variáveis de ambiente

```bash
cp .env.example .env.local
```

Preencha todos os valores no `.env.local`:

| Variável | Onde obter |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Dashboard Supabase → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Dashboard Supabase → Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | Dashboard Supabase → Settings → API |
| `DATABASE_URL` | Dashboard Supabase → Settings → Database (porta 6543) |
| `DIRECT_URL` | Dashboard Supabase → Settings → Database (porta 5432) |
| `STRIPE_SECRET_KEY` | Dashboard Stripe → Developers → API Keys |
| `STRIPE_WEBHOOK_SECRET` | Dashboard Stripe → Webhooks |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Dashboard Stripe → Developers → API Keys |
| `RESEND_API_KEY` | Dashboard Resend → API Keys |

### 3. Configure o banco de dados

```bash
npx prisma migrate dev
npx prisma generate
```

### 4. Rode o servidor de desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Scripts disponíveis

```bash
npm run dev        # Servidor de desenvolvimento
npm run build      # Build de produção
npm run start      # Servidor de produção
npm run lint       # ESLint
npm run format     # Prettier
```

## Estrutura de pastas

```
duolove/
├── app/
│   ├── (auth)/          # Login, cadastro, onboarding
│   ├── (app)/           # App autenticado (dashboard, calendário, chat, memórias)
│   ├── (marketing)/     # Landing page e pricing
│   └── api/             # API routes
├── components/
│   ├── ui/              # Primitivos shadcn/ui
│   ├── calendar/        # Componentes do calendário
│   ├── chat/            # Componentes de mensagens
│   └── shared/          # Componentes reutilizáveis (GlassCard, GradientButton...)
├── lib/                 # Clientes e utilitários
├── hooks/               # React hooks customizados
├── types/               # Tipos TypeScript compartilhados
├── prisma/              # Schema e migrations
└── docs/                # PRD, PLAN e documentação
```

## Plano de execução

Consulte [docs/PLAN.md](../docs/PLAN.md) para a sequência de milestones e status atual.

## Identidade visual

| Papel | Cor | Hex |
|---|---|---|
| Primário (rose) | Rosa DuoLove | `#E91E8C` |
| Secundário (lilac) | Lilás | `#9B59B6` |
| Acento (wine) | Vinho | `#8B0051` |
| Superfície | Preto fosco | `#0D0D0D` |
| Card | Vidro escuro | `#1A1A2E` |
| Texto | Creme | `#F5F0EB` |
