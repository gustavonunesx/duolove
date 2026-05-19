# PROJECT ARCHITECTURE: DuoLove

## 1. CONTEXT & PROBLEM

Hoje, muitos casais têm dificuldade em organizar a rotina juntos de forma simples, leve e emocionalmente conectada. Os compromissos ficam espalhados entre conversas no WhatsApp, anotações, calendários separados e lembretes esquecidos.

Isso gera problemas como:

- desencontros de horários;
- esquecimentos de datas importantes;
- dificuldade para planejar momentos juntos;
- falta de alinhamento na rotina;
- sensação de distância causada pela correria do dia a dia.

Os aplicativos de calendário atuais são muito corporativos e frios, focados apenas em produtividade, sem considerar o lado emocional e afetivo de um relacionamento.

O resultado é uma experiência pouco prática e sem personalidade para casais que querem compartilhar a vida de forma mais organizada e conectada.

## 2. PROPOSED SOLUTION

O projeto será um aplicativo de calendário compartilhado para casais, desenvolvido para unir organização, comunicação e conexão emocional em uma única plataforma.

O app permitirá que o casal:

- compartilhe compromissos em tempo real;
- organize rotinas juntos;
- acompanhe datas importantes;
- planeje encontros e viagens;
- receba lembretes personalizados;
- registre memórias especiais do relacionamento.

Diferente dos calendários tradicionais, a plataforma terá uma identidade visual acolhedora, moderna e romântica, criando uma experiência mais íntima e agradável de usar.

O sistema combinará:

- calendário inteligente;
- agenda compartilhada;
- notificações afetivas;
- contador de relacionamento;
- espaço para memórias e momentos especiais.

O objetivo é transformar a organização do casal em algo leve, bonito e emocionalmente significativo.

## 3. FUNCTIONAL REQUIREMENTS

### Core Features

- Login e Autenticação
- Chat / Mensagens
- Notificações
- Dashboards
- Upload de Arquivos
- Busca e Filtros
- Multi usuário
- Parte premium (paga)
- Onboarding do Usuário
- Landing Page

### Detailed Requirements

#### Login e Autenticação
- Cadastro individual ou por convite do parceiro(a)
- Login social (Google/Apple)
- Recuperação de senha
- Conexão segura entre contas do casal

#### Calendário Compartilhado
- Eventos sincronizados em tempo real
- Compromissos individuais e do casal
- Visualização diária, semanal e mensal
- Cores personalizadas por tipo de evento

#### Notificações Inteligentes
- Lembretes de compromissos
- Datas especiais do relacionamento
- Alertas personalizados ("Seu date começa em 1h 💖")

#### Chat / Mensagens
- Mensagens rápidas dentro dos eventos
- Reações com emojis
- Comentários em compromissos compartilhados

#### Dashboard
- Tempo juntos
- Próximos eventos
- Datas comemorativas
- Estatísticas do relacionamento

#### Upload de Arquivos
- Fotos em eventos especiais
- Compartilhamento de imagens e memórias

#### Busca e Filtros
- Busca de eventos por data, categoria ou palavra-chave

#### Multi Usuário
- Sistema focado em duas contas conectadas (casal)

#### Parte Premium (paga)
Possíveis recursos premium:
- temas exclusivos;
- personalização avançada;
- retrospectiva mensal do casal;
- armazenamento extra de fotos;
- IA para sugestões de encontros e planejamento.

#### Onboarding do Usuário
- Experiência inicial interativa
- Configuração do perfil do casal
- Escolha de temas visuais

#### Landing Page
- Página moderna para divulgação do app
- Explicação das funcionalidades
- Planos e benefícios

### Funcionalidades Extras
- Contador de dias juntos
- "Cápsula do tempo" com mensagens futuras
- Widget personalizado para celular
- Sugestões automáticas de horários livres para encontros
- Modo "estou chegando"
- Lista compartilhada (mercado, viagens, tarefas)

## 4. USER PERSONAS

### Casal
Usuários principais da plataforma. Compartilham compromissos, datas especiais, tarefas e momentos importantes do relacionamento.

### Usuário Individual
Cada pessoa possui:
- agenda pessoal;
- preferências;
- notificações;
- eventos privados ou compartilhados.

### Administrador da Plataforma
Responsável por:
- gerenciar assinaturas;
- monitorar métricas;
- administrar usuários;
- suporte e moderação do sistema.

## 5. TECHNICAL STACK

### Front-end
- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

### Back-end
- Node.js
- PostgreSQL
- Prisma
- Supabase

### Infraestrutura e Deploy
- Vercel
- Supabase Storage

### Autenticação
- Supabase Auth
- OAuth Google/Apple

### Funcionalidades Extras
- Resend (envio de e-mails)
- Stripe (assinaturas premium)
- Upload de imagens e arquivos
- API em tempo real para sincronização do calendário

## 6. DESIGN LANGUAGE

O projeto terá inspiração em aplicativos modernos, minimalistas e emocionalmente acolhedores.

### Referências Visuais
- Pinterest — estética clean e inspiracional
- Notion — organização minimalista
- Instagram — interação emocional e fluidez
- Spotify — visual moderno no dark mode
- Discord — microinterações e experiência social

### Estilo Visual
- Interface moderna e aconchegante
- Glassmorphism suave
- Gradientes delicados
- Animações fluidas
- Bordas arredondadas
- Design emocional e intuitivo
- Tema dark e light
- Cores românticas e sofisticadas (rosa, vinho, lilás, creme e preto fosco)

### Objetivo Visual
Criar um aplicativo que transmita:
- conexão;
- proximidade;
- conforto;
- modernidade;
- organização afetiva.

## 7. PROCESS

- Break app build into logical milestones (steps)
- Each milestone should be a deliverable increment
- Prioritize core functionality first, then iterate
- Test each milestone before moving to the next
