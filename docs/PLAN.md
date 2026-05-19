# DuoLove — Plano de Execução

> Estratégia: **interface primeiro, backend depois**.
> Cada milestone é uma branch isolada, com entregas verificáveis e um commit final de fechamento.
> A ordem prioriza o que o usuário vê e sente antes de conectar dados reais.

---

## Visão Geral das Milestones

| # | Branch | Foco | Tipo |
|---|---|---|---|
| M1 | `setup/foundation` | Scaffold, design system, roteamento | Frontend |
| M2 | `feat/landing-page` | Landing page e marketing | Frontend |
| M3 | `feat/auth-ui` | Telas de auth e onboarding (mock) | Frontend |
| M4 | `feat/dashboard-ui` | Dashboard, counter, UI do app shell | Frontend |
| M5 | `feat/calendar-ui` | Calendário completo (mock data) | Frontend |
| M6 | `feat/chat-ui` | Chat e reações dentro de eventos | Frontend |
| M7 | `feat/memories-ui` | Timeline de memórias e upload UI | Frontend |
| M8 | `feat/backend-foundation` | Supabase, Prisma schema, auth real | Backend |
| M9 | `feat/backend-calendar` | API de eventos + Realtime sync | Backend |
| M10 | `feat/backend-social` | Chat, memórias e upload real | Backend |
| M11 | `feat/notifications` | Email (Resend) + alertas de datas | Backend |
| M12 | `feat/premium-stripe` | Planos, Stripe, gating de features | Backend |
| M13 | `feat/polish` | Animações, acessibilidade, dark/light | Frontend |
| M14 | `chore/deploy` | Vercel + domínio + env vars de prod | Infra |

---

## M1 — Setup & Design System ✅ CONCLUÍDA

**Branch:** `setup/foundation`
**Objetivo:** Projeto Next.js configurado com toda a base visual do DuoLove. Nenhuma funcionalidade real — só estrutura e tokens de design.

### Entregas

- [x] Inicializar projeto com `create-next-app` (TypeScript, App Router, Tailwind)
- [x] Configurar `tailwind.config.ts` com paleta DuoLove (rosa, lilás, vinho, creme, preto fosco)
- [x] Instalar e configurar shadcn/ui
- [x] Criar variáveis CSS globais em `styles/globals.css`
- [x] Instalar Framer Motion
- [x] Criar estrutura de pastas conforme CLAUDE.md (`app/`, `components/`, `lib/`, `hooks/`, `types/`)
- [x] Configurar fontes (Plus Jakarta Sans via `next/font`)
- [x] Criar componentes base: `GlassCard`, `GradientButton`, `Badge`, `Avatar`
- [x] Configurar `components/ui/` com shadcn primitives (Button, Input, Dialog, Dropdown, Tabs, Sheet)
- [x] Criar `app/layout.tsx` root com providers (tema, fontes)
- [x] Página `/` redirecionando para landing (placeholder)
- [ ] Configurar `.env.example` com todas as variáveis necessárias
- [x] Configurar ESLint + Prettier + `tsconfig.json` strict
- [x] README.md inicial com instruções de setup local

**Commit final:**
```
feat(setup): initialize project with design system and folder structure
```

---

## M2 — Landing Page ✅ CONCLUÍDA

**Branch:** `feat/landing-page`
**Objetivo:** Página de marketing completa e responsiva, sem backend. Estática, com animações.

### Entregas

- [x] Layout da landing em `app/(marketing)/home/page.tsx`
- [x] Seção Hero: headline + CTA + mockup do app (card animado)
- [x] Seção Features: 6 features com ícones e descrição curta
- [x] Seção "Como funciona": 3 passos ilustrados
- [x] Seção de depoimentos (mock)
- [x] Seção Pricing: plano free vs. premium com tabela de comparação
- [x] Seção CTA final com campo de e-mail (sem envio real)
- [x] Footer com links e redes sociais
- [x] Header com nav e botão "Entrar" / "Começar grátis"
- [x] Animações de entrada com Framer Motion (scroll-triggered)
- [x] Totalmente responsivo (mobile-first)
- [x] Meta tags Open Graph e `<title>` para SEO básico

**Commit final:**
```
feat(marketing): add full landing page with pricing and animations
```

---

## M3 — Auth UI & Onboarding

**Branch:** `feat/auth-ui`
**Objetivo:** Todas as telas de autenticação e onboarding com UI completa e navegação funcional. Sem auth real — formulários com mock/redirect.

### Entregas

- [ ] Tela de login (`app/(auth)/login/page.tsx`): email + senha + botão Google
- [ ] Tela de cadastro (`app/(auth)/signup/page.tsx`): nome + email + senha
- [ ] Tela de recuperação de senha (`app/(auth)/forgot-password/page.tsx`)
- [ ] Tela de convite do parceiro(a) (`app/(auth)/invite/page.tsx`)
- [ ] Layout compartilhado de auth com identidade visual (gradiente lateral, logo)
- [ ] Validação de formulários com `react-hook-form` + `zod` (client-side apenas)
- [ ] Estados de loading e erro nos formulários
- [ ] Onboarding step 1: perfil individual (nome, foto, data de nascimento)
- [ ] Onboarding step 2: data de início do relacionamento
- [ ] Onboarding step 3: escolha de tema visual (rosa, lilás, vinho)
- [ ] Onboarding step 4: envio de convite ao parceiro(a)
- [ ] Barra de progresso no onboarding
- [ ] Navegação entre steps com animação de slide
- [ ] Redirect final para `/dashboard` (mock)

**Commit final:**
```
feat(auth): add auth screens and multi-step onboarding UI
```

---

## M4 — App Shell & Dashboard UI

**Branch:** `feat/dashboard-ui`
**Objetivo:** Shell autenticado do app com sidebar/navbar e dashboard completo usando dados mockados.

### Entregas

- [ ] Layout do app autenticado (`app/(app)/layout.tsx`) com sidebar e header
- [ ] Sidebar com navegação: Dashboard, Calendário, Chat, Memórias, Configurações
- [ ] Header com avatar do usuário, avatar do parceiro(a) e dropdown de perfil
- [ ] Mobile: bottom navigation bar
- [ ] Dashboard (`app/(app)/dashboard/page.tsx`)
  - [ ] Card "Contador de dias juntos" com animação do número
  - [ ] Card "Próximos eventos" (lista dos 3 próximos, dados mock)
  - [ ] Card "Datas comemorativas" (aniversários, mock)
  - [ ] Card "Status do parceiro(a)" (online/offline, mock)
  - [ ] Card "Última memória" com foto (mock)
- [ ] Estados vazios com copy afetivo ("Vocês ainda não têm eventos juntos 💭")
- [ ] Skeleton loading para todos os cards
- [ ] Responsivo em mobile

**Commit final:**
```
feat(dashboard): add app shell layout and dashboard with mock data
```

---

## M5 — Calendário UI

**Branch:** `feat/calendar-ui`
**Objetivo:** Calendário completo e interativo com dados mockados. Todas as views e interações funcionando no front.

### Entregas

- [ ] Página de calendário (`app/(app)/calendar/page.tsx`)
- [ ] Visualização mensal: grid de dias com eventos coloridos
- [ ] Visualização semanal: colunas por dia com blocos de horário
- [ ] Visualização diária: lista de eventos do dia com horários
- [ ] Toggle entre views (tabs ou botões)
- [ ] Navegação por mês/semana (anterior/próximo)
- [ ] Modal de criação de evento:
  - [ ] Título, descrição, data/hora início e fim
  - [ ] Tipo: pessoal, casal, data especial
  - [ ] Cor personalizável (6 opções)
  - [ ] Visibilidade: privado ou compartilhado
- [ ] Modal de visualização de evento com detalhes
- [ ] Indicador visual de quem criou o evento (avatar)
- [ ] Legenda de cores por tipo
- [ ] Filtro por tipo de evento (todos / só do casal / só meus)
- [ ] Busca de eventos por título
- [ ] Drag-and-drop de eventos para reagendar (mock, sem persistência)
- [ ] Highlight de hoje e de datas especiais
- [ ] Responsivo com view simplificada no mobile

**Commit final:**
```
feat(calendar): add full calendar UI with mock events and all views
```

---

## M6 — Chat UI

**Branch:** `feat/chat-ui`
**Objetivo:** Interface de chat dentro de eventos e área de mensagens rápidas, com UI completa e mock.

### Entregas

- [ ] Página de chat (`app/(app)/chat/page.tsx`)
- [ ] Lista de conversas (por evento + chat geral do casal)
- [ ] Janela de mensagens com bolhas (estilo WhatsApp mas com identidade própria)
- [ ] Diferenciação visual: mensagens próprias vs. do parceiro(a)
- [ ] Input de mensagem com botão de envio e emoji picker
- [ ] Reações com emojis nas mensagens (hover/long press)
- [ ] Timestamps nas mensagens
- [ ] Indicador "digitando..." (mock)
- [ ] Indicador de leitura (lido/entregue com ícone)
- [ ] Aba de comentários dentro de evento no modal do calendário
- [ ] Estados vazios: "Mandem a primeira mensagem juntos 💌"
- [ ] Scroll automático para mensagem mais recente
- [ ] Responsivo em mobile

**Commit final:**
```
feat(chat): add messaging UI with reactions and event comments
```

---

## M7 — Memórias UI

**Branch:** `feat/memories-ui`
**Objetivo:** Espaço de memórias do casal — timeline, upload de fotos e cápsula do tempo, tudo no front com mock.

### Entregas

- [ ] Página de memórias (`app/(app)/memories/page.tsx`)
- [ ] Timeline cronológica de memórias com fotos (dados mock)
- [ ] Card de memória: foto, data, título e descrição curta
- [ ] Modal de visualização ampliada da memória (lightbox)
- [ ] Modal de criação de memória:
  - [ ] Upload de foto (UI apenas, sem upload real)
  - [ ] Título, descrição, data
  - [ ] Tag de tipo: viagem, date, aniversário, etc.
- [ ] Filtro por tipo e por período
- [ ] Seção "Cápsula do Tempo":
  - [ ] Form para escrever mensagem com data de revelação
  - [ ] Card de cápsula lacrada com countdown
- [ ] Galeria de fotos em grid (modo alternativo à timeline)
- [ ] Estado vazio afetivo: "O primeiro capítulo de vocês começa aqui ✨"
- [ ] Responsivo em mobile

**Commit final:**
```
feat(memories): add memory timeline, photo gallery and time capsule UI
```

---

## M8 — Backend Foundation

**Branch:** `feat/backend-foundation`
**Objetivo:** Infraestrutura real de dados. Supabase configurado, schema Prisma completo, auth funcionando.

### Entregas

- [ ] Criar projeto no Supabase e configurar variáveis de ambiente
- [ ] Instalar e configurar Prisma com Supabase PostgreSQL
- [ ] Schema Prisma completo:
  - [ ] `User` (id, email, name, avatar_url, created_at)
  - [ ] `Couple` (id, user1_id, user2_id, start_date, theme, plan, created_at)
  - [ ] `CoupleInvite` (id, couple_id, inviter_id, token, expires_at, accepted_at)
  - [ ] `Event` (id, couple_id, creator_id, title, description, start_at, end_at, type, color, visibility)
  - [ ] `Memory` (id, couple_id, creator_id, title, description, photo_url, date, tags)
  - [ ] `Capsule` (id, couple_id, creator_id, message, reveal_at, revealed_at)
  - [ ] `Message` (id, couple_id, sender_id, event_id?, content, created_at)
  - [ ] `MessageReaction` (id, message_id, user_id, emoji)
  - [ ] `Subscription` (id, couple_id, stripe_customer_id, stripe_subscription_id, plan, status)
- [ ] Migrations rodando (`prisma migrate dev`)
- [ ] Row Level Security (RLS) no Supabase para todas as tabelas
- [ ] Configurar Supabase Auth (email/senha + OAuth Google)
- [ ] Lib de cliente Supabase: `lib/supabase/client.ts` e `lib/supabase/server.ts`
- [ ] Lib Prisma singleton: `lib/prisma/client.ts`
- [ ] Middleware Next.js para proteger rotas autenticadas
- [ ] Auth funcionando end-to-end: cadastro, login, logout, sessão persistida
- [ ] Substituir mocks de auth pelas chamadas reais nas telas de M3

**Commit final:**
```
feat(backend): add Supabase setup, full Prisma schema and working auth
```

---

## M9 — Backend Calendário

**Branch:** `feat/backend-calendar`
**Objetivo:** API REST de eventos conectada ao banco, sincronização em tempo real via Supabase Realtime.

### Entregas

- [ ] `POST /api/events` — criar evento
- [ ] `GET /api/events` — listar eventos do casal (com filtros por data, tipo)
- [ ] `PATCH /api/events/[id]` — atualizar evento
- [ ] `DELETE /api/events/[id]` — deletar evento
- [ ] Validação de todas as rotas com Zod
- [ ] Autorização: usuário só acessa eventos do próprio casal
- [ ] Hook `useEvents` no front consumindo a API
- [ ] Substituir dados mock do calendário por dados reais
- [ ] Supabase Realtime: canal `couple:{id}:events` para sync em tempo real
- [ ] Indicador visual de sincronização ("sincronizando..." / "online")
- [ ] Fluxo de invite de casal:
  - [ ] `POST /api/couple/invite` — gerar token de convite
  - [ ] `GET /api/couple/invite/[token]` — validar convite
  - [ ] `POST /api/couple/invite/[token]/accept` — aceitar convite e linkar contas
- [ ] Substituir mocks de couple linking pelas chamadas reais (M3)

**Commit final:**
```
feat(backend): add events API with realtime sync and couple invite flow
```

---

## M10 — Backend Social (Chat & Memórias)

**Branch:** `feat/backend-social`
**Objetivo:** Chat em tempo real e upload de memórias funcionando com dados reais.

### Entregas

- [ ] `POST /api/messages` — enviar mensagem
- [ ] `GET /api/messages` — listar mensagens (paginado, por casal ou por evento)
- [ ] `POST /api/messages/[id]/reactions` — adicionar reação
- [ ] `DELETE /api/messages/[id]/reactions/[emoji]` — remover reação
- [ ] Supabase Realtime: canal `couple:{id}:messages` para chat ao vivo
- [ ] Substituir mock do chat por dados reais
- [ ] Configurar Supabase Storage bucket `memories` (público, por casal)
- [ ] `POST /api/memories` — criar memória com upload de foto para Storage
- [ ] `GET /api/memories` — listar memórias (com filtros)
- [ ] `DELETE /api/memories/[id]` — deletar memória e arquivo do Storage
- [ ] `POST /api/capsules` — criar cápsula do tempo
- [ ] `GET /api/capsules` — listar cápsulas (reveladas e lacradas)
- [ ] Job/cron simples para revelar cápsulas na data programada (Vercel Cron)
- [ ] Substituir mocks de memórias e chat pelas chamadas reais

**Commit final:**
```
feat(backend): add realtime chat, memories upload and time capsule API
```

---

## M11 — Notificações

**Branch:** `feat/notifications`
**Objetivo:** Sistema de notificações por email para eventos, datas especiais e alertas afetivos.

### Entregas

- [ ] Instalar e configurar Resend
- [ ] Template de email: lembrete de evento (24h e 1h antes)
- [ ] Template de email: parabéns de aniversário do relacionamento
- [ ] Template de email: alerta de data especial (1 semana antes)
- [ ] Template de email: cápsula do tempo revelada
- [ ] Template de email: convite de casal
- [ ] Vercel Cron Job `0 8 * * *` para verificar eventos do dia e disparar emails
- [ ] `POST /api/notifications/preferences` — salvar preferências de notificação
- [ ] Tela de configurações de notificação no app (`app/(app)/settings/notifications`)
- [ ] Preferências: quais tipos de alerta receber e com quanta antecedência
- [ ] Todos os emails com identidade visual DuoLove (rosa, logo, copy afetivo)

**Commit final:**
```
feat(notifications): add email alerts for events, anniversaries and capsules
```

---

## M12 — Premium & Stripe

**Branch:** `feat/premium-stripe`
**Objetivo:** Planos de assinatura, checkout com Stripe e gating de features premium.

### Entregas

- [ ] Criar produtos e preços no Stripe (mensal e anual)
- [ ] Instalar e configurar Stripe SDK
- [ ] `POST /api/stripe/checkout` — criar sessão de checkout
- [ ] `POST /api/stripe/portal` — criar sessão do portal do cliente
- [ ] `POST /api/webhooks/stripe` — webhook para sincronizar status da assinatura
- [ ] Helper `isPremium(coupleId)` para verificar plano ativo
- [ ] Gating de features no front com componente `<PremiumGate>`
- [ ] Features premium bloqueadas para free: temas exclusivos, retrospectiva mensal, storage extra
- [ ] Tela de upgrade (`app/(app)/settings/upgrade`) com comparativo de planos
- [ ] Modal de upgrade contextual (quando usuário tenta acessar feature premium)
- [ ] Tela de gerenciamento de assinatura com portal Stripe
- [ ] Página de sucesso e cancelamento do checkout
- [ ] Atualizar pricing da landing page para refletir valores reais

**Commit final:**
```
feat(premium): add Stripe subscription flow and premium feature gating
```

---

## M13 — Polish & Qualidade

**Branch:** `feat/polish`
**Objetivo:** Refinar a experiência. Animações completas, acessibilidade, light mode, performance.

### Entregas

- [ ] Revisar e completar animações Framer Motion em todas as páginas
- [ ] Page transitions suaves entre rotas
- [ ] Microinterações: hover, press, focus states em todos os elementos interativos
- [ ] Skeleton loaders consistentes em todos os estados de carregamento
- [ ] Estados vazios com copy afetivo em todas as seções
- [ ] Light mode: revisar paleta e garantir contraste adequado
- [ ] Acessibilidade: aria-labels, foco de teclado, contraste WCAG AA
- [ ] Responsividade final: testar em 320px, 375px, 768px, 1024px, 1440px
- [ ] Otimização de imagens com `next/image`
- [ ] `loading.tsx` e `error.tsx` em todas as rotas principais
- [ ] Favicon, ícones de PWA e manifest.json
- [ ] Meta tags completas (OG, Twitter Card) nas páginas públicas
- [ ] Auditoria de performance (Lighthouse > 90 em mobile)

**Commit final:**
```
feat(polish): finalize animations, accessibility and responsive layout
```

---

## M14 — Deploy

**Branch:** `chore/deploy`
**Objetivo:** App rodando em produção na Vercel com domínio, variáveis de ambiente e monitoramento básico.

### Entregas

- [ ] Criar projeto na Vercel conectado ao repositório GitHub
- [ ] Configurar todas as variáveis de ambiente de produção na Vercel
- [ ] Configurar domínio customizado (se disponível)
- [ ] Configurar Supabase para produção (projeto separado do dev)
- [ ] Rodar migrations em produção (`prisma migrate deploy`)
- [ ] Configurar OAuth Google com domínio de produção (callback URLs)
- [ ] Configurar webhook do Stripe apontando para domínio de produção
- [ ] Verificar Vercel Cron Jobs ativos (notificações + revelação de cápsulas)
- [ ] Smoke test completo em produção:
  - [ ] Cadastro + invite de casal
  - [ ] Criar e visualizar evento
  - [ ] Chat em tempo real
  - [ ] Upload de memória
  - [ ] Checkout premium
  - [ ] Email de lembrete
- [ ] Configurar Vercel Analytics
- [ ] Checklist de segurança: RLS ativo, service role key não exposta, CORS configurado

**Commit final:**
```
chore(deploy): configure production environment and verify all integrations
```

---

## Sequência Visual

```
M1 Setup ──► M2 Landing ──► M3 Auth UI ──► M4 Dashboard UI ──► M5 Calendário UI
                                                                        │
                                                                        ▼
M8 Backend Base ◄── M7 Memórias UI ◄── M6 Chat UI ◄──────────────────────
     │
     ▼
M9 Backend Calendar ──► M10 Backend Social ──► M11 Notificações ──► M12 Premium
                                                                          │
                                                                          ▼
                                                              M13 Polish ──► M14 Deploy
```

---

## Regras de Branch

- `main` — produção, protegida. Só recebe merge via PR após cada milestone completa.
- `develop` — integração. Cada milestone faz merge aqui antes do review final.
- Cada milestone vive na sua própria branch (ex: `feat/calendar-ui`).
- Nomear commits no padrão: `type(scope): description` (Conventional Commits).
