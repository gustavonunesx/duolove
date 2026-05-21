# DuoLove — Plano da Landing Page

## Contexto

O DuoLove é um app mobile (App Store + Google Play) de calendário compartilhado para casais. Esta landing page é a vitrine de vendas — seu trabalho é converter visitantes em downloads.

---

## Sobre monetização: Stripe vs IAP

**NÃO usar Stripe como forma de cobrança principal.**

Apple e Google exigem que assinaturas dentro de apps mobile usem o sistema de **In-App Purchase (IAP)** delas. Se você cobrar via Stripe e o app for descoberto, ele pode ser removido das lojas.

### O que a landing page deve fazer então:

| Situação | O que fazer |
|---|---|
| App ainda não lançado | Capturar e-mail (waitlist) + CTA "Em breve nas lojas" |
| App lançado (fase 1) | Redirecionar CTAs para App Store / Google Play |
| Se tiver versão web futura | Aí sim pode usar Stripe para assinatura web-only |

### Fluxo de conversão ideal (pós-lançamento):

```
Landing Page
    → CTA "Baixar agora"
        → App Store (iOS)
        → Google Play (Android)
            → Usuário instala o app
                → Assina via IAP dentro do app (R$ 19,90/mês)
```

### Antes do lançamento (agora):

```
Landing Page
    → CTA "Entrar na lista de espera"
        → Formulário com e-mail
            → Você notifica quando o app for ao ar
```

---

## L3 — Redesign & Melhorias Visuais

**Branch:** `feat/landing-redesign`

**Objetivo:** Elevar a qualidade visual e emocional da landing page atual. O design existe, mas pode ser mais impactante, mais mobile-friendly e mais convincente.

### Entregas

#### Hero Section
- [ ] Substituir mockup estático por **mockup de celular realista** (frame de iPhone/Android com screenshots do app)
- [ ] Adicionar badge "Em breve na App Store e Google Play" com os logos das lojas (SVG)
- [ ] CTA principal muda para: "Entrar na lista de espera" (formulário inline com e-mail)
- [ ] CTA secundário: "Ver como funciona" (âncora para #how-it-works)
- [ ] Remover link `/signup` que não existe — todos os links quebrados devem sumir
- [ ] Social proof: trocar "2.000 casais" por algo honesto para pré-lançamento (ex: "Seja um dos primeiros")

#### Features Section
- [ ] Redesenhar cards de features com ícone maior + descrição mais emocional
- [ ] Adicionar micro-animações individuais nos ícones (hover/scroll)
- [ ] Garantir layout mobile: 1 coluna em mobile, 2 em tablet, 3 em desktop

#### How It Works
- [ ] Adicionar screenshots reais (ou mockups fiéis) do app em cada passo
- [ ] Tornar os passos mais narrativos: "Você convida seu amor → Conectam os calendários → Vivem juntos"

#### Testimonials
- [ ] Tornar os depoimentos mais críveis: adicionar foto de avatar, cidade, tempo de relacionamento
- [ ] Ou substituir por uma seção de "O que casais dizem que sentem falta" (dor do usuário) — mais honesto para pré-lançamento

#### Pricing Section — REFORMULAR COMPLETAMENTE
- [ ] Remover links `/signup?plan=premium` (página não existe)
- [ ] Substituir CTAs por: "Baixar na App Store" e "Baixar no Google Play" (com ícones)
- [ ] Antes do lançamento: mudar para "Entrar na lista de espera"
- [ ] Adicionar nota: "Assinatura gerenciada pela App Store / Google Play"
- [ ] Manter os preços como referência, mas não como checkout

#### CTA Final (Email Section)
- [ ] Implementar formulário de waitlist **funcional** (ver L4)
- [ ] Headline emocional: "Seu casal merece isso. Avise quando lançar."
- [ ] Confirmar envio com feedback visual (toast / mensagem inline)

#### Header
- [ ] Remover links "Login" e "Cadastrar" — não existem
- [ ] Substituir por: "App Store" e "Google Play" (com ícones) — ou "Em breve" antes do lançamento
- [ ] Adicionar efeito de blur/glassmorphism no scroll

#### Footer
- [ ] Atualizar links — remover os que não existem ainda
- [ ] Adicionar: Política de Privacidade e Termos de Uso (páginas simples, obrigatórias para as lojas)

---

## L4 — Estratégia de Conversão

**Branch:** `feat/landing-conversion`

**Objetivo:** Fazer a landing page gerar leads reais e redirecionar para as lojas quando o app for ao ar.

### Entregas

#### Formulário de Waitlist
- [ ] Criar `app/api/waitlist/route.ts` — API Route que recebe `{ email }` e salva
- [ ] Opção A (simples): salvar em planilha via Google Sheets API
- [ ] Opção B (recomendada): usar [Resend](https://resend.com) — salva o contato + envia e-mail de confirmação
- [ ] Validação com Zod no servidor
- [ ] Rate limiting básico (evitar spam)

#### Links das lojas
- [ ] Criar constantes em `lib/store-links.ts`:
  ```ts
  export const APP_STORE_URL = "https://apps.apple.com/..."; // quando lançar
  export const PLAY_STORE_URL = "https://play.google.com/...";
  ```
- [ ] Antes do lançamento: links desabilitados com tooltip "Em breve"
- [ ] Depois do lançamento: trocar para os links reais

#### Páginas legais (obrigatórias para App Store)
- [ ] `app/(marketing)/privacy/page.tsx` — Política de Privacidade
- [ ] `app/(marketing)/terms/page.tsx` — Termos de Uso
- [ ] Conteúdo mínimo mas real (sem ser placeholder)

---

## L5 — SEO, OG Tags e Analytics

**Branch:** `feat/landing-seo`

**Objetivo:** Garantir que a página apareça no Google e seja compartilhável nas redes sociais.

### Entregas

#### Metadata & SEO
- [ ] Título: "DuoLove — O app de calendário para casais"
- [ ] Descrição: tagline emocional (160 chars)
- [ ] OG Image: imagem 1200×630 com branding (pode ser estática em `/public/og.png`)
- [ ] Twitter Card: `summary_large_image`
- [ ] Canonical URL
- [ ] `robots.txt` e `sitemap.xml` via Next.js

#### Structured Data
- [ ] JSON-LD do tipo `SoftwareApplication` (app mobile) com preço, rating, disponibilidade

#### Analytics
- [ ] Instalar [Vercel Analytics](https://vercel.com/analytics) (gratuito, zero config)
- [ ] Ou Plausible / PostHog para eventos customizados (clique nos CTAs, envio do formulário)

---

## L6 — Deploy & Domínio

**Branch:** `feat/deploy`

**Objetivo:** Colocar a landing page no ar com domínio próprio.

### Entregas

- [ ] Conectar repositório ao Vercel
- [ ] Configurar domínio (ex: `duolove.app` ou `duoloveapp.com.br`)
- [ ] Variáveis de ambiente no Vercel (Resend API Key, App URL)
- [ ] Certificar que o build passa sem erros (`npm run build`)
- [ ] Testar em mobile (iOS Safari + Chrome Android)
- [ ] Criar `.env.example` com todas as variáveis necessárias

---

## Ordem de execução sugerida

```
L3 (visual)  →  L4 (conversão + waitlist)  →  L5 (SEO)  →  L6 (deploy)
```

L3 e L4 podem se sobrepor. L5 e L6 vêm no final, antes de divulgar.

---

## Variáveis de ambiente necessárias

```env
# Resend (formulário de waitlist)
RESEND_API_KEY=

# App
NEXT_PUBLIC_APP_URL=
NEXT_PUBLIC_APP_STORE_URL=
NEXT_PUBLIC_PLAY_STORE_URL=
```
