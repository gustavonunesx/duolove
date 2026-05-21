# DuoLove — Landing Page

## O que é este repositório

Este repo é **exclusivamente a landing page de vendas** do DuoLove — um app de calendário compartilhado para casais. O app em si está em outro repositório.

O objetivo desta página é converter visitantes em downloads/assinantes, redirecionando para a App Store, Google Play, e/ou fluxo de pagamento.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| Animations | Framer Motion |
| Deploy | Vercel |

---

## Estrutura de Pastas

```
duolove-web/
├── app/
│   ├── (marketing)/        # Todas as páginas públicas
│   │   └── home/page.tsx   # Landing page principal
│   ├── layout.tsx
│   ├── page.tsx            # Redireciona para /home
│   └── globals.css
├── components/
│   ├── marketing/          # Seções da landing page
│   ├── shared/             # GlassCard, GradientButton, Logo, ThemeProvider
│   └── ui/                 # shadcn primitives (button, badge, card, input)
└── lib/
    └── utils.ts            # cn() utility
```

---

## Design Identity

### Paleta de cores

| Role | Hex |
|---|---|
| Primary Rose | `#E91E8C` |
| Secondary Lilac | `#9B59B6` |
| Surface Dark | `#0D0D0D` / `#111111` |
| Card Glass | `#1A1A2E` |
| Text Cream | `#F5F0EB` |
| Text Muted | `#8B8B9E` |
| Accent Wine | `#8B0051` |

### Estilo visual
- **Glassmorphism**: `backdrop-blur`, cards semi-transparentes com bordas sutis
- **Gradientes**: diagonais suaves (rose → lilac)
- **Bordas**: `rounded-2xl`, `rounded-full`
- **Sombras**: glow effects no accent color
- **Animações**: Framer Motion — scroll-triggered, fadeUp, scale
- **Tipografia**: Plus Jakarta Sans
- **Dark-first**: modo escuro como experiência primária

### Tom
Íntimo, não corporativo. Quente, não clínico.

---

## Coding Conventions

- TypeScript estrito — sem `any`
- Componentes: Server Components por padrão; `"use client"` só quando necessário
- Nomenclatura: `kebab-case` para arquivos, `PascalCase` para componentes
- Sem barrel exports (`index.ts`) — importar direto da fonte

---

## Milestones da Landing Page

| # | Milestone | Status |
|---|---|---|
| L1 | Setup & Design System | ✅ Concluída |
| L2 | Landing Page inicial | ✅ Concluída |
| L3 | Redesign & melhorias visuais | ⬜ Próxima |
| L4 | Estratégia de conversão (App Store / monetização) | ⬜ |
| L5 | SEO, OG tags, analytics | ⬜ |
| L6 | Deploy & domínio | ⬜ |

---

## Estratégia de Monetização (ver PLAN.md)

O app será distribuído via **App Store e Google Play**. A landing page deve:

1. Redirecionar CTAs para os links das lojas (App Store / Play Store)
2. Capturar e-mails de interesse (waitlist) antes do lançamento
3. Mostrar preços como referência — a cobrança real acontece dentro do app via **In-App Purchase (IAP)** das lojas

> Não usar Stripe diretamente — as lojas cobram 15-30% e exigem que assinaturas sejam via IAP. Stripe pode ser usado apenas para assinaturas **web-only** (ex: acesso via browser), se for o caso.

---

## Git Flow

**Início de milestone:**
```
git checkout -b feat/<nome-da-branch>
```

**Final de milestone:**
1. Commit com mensagem semântica
2. `git push -u origin <branch>`
3. `gh pr create` → `gh pr merge --merge --delete-branch`
4. `git branch -d <branch>` → `git checkout main && git pull`
