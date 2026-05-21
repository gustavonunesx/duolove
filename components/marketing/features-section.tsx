"use client";

import { motion } from "framer-motion";
import { CalendarDays, Images, Sparkles, Bell, MessageCircle, Heart } from "lucide-react";

const revealLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const revealRight = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const revealUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const primaryFeatures = [
  {
    number: "01",
    icon: CalendarDays,
    title: "Calendário compartilhado",
    description:
      "Todos os compromissos do casal em um só lugar, sincronizados em tempo real. Nunca mais desencontros — o que é de um é de dois.",
    accent: "text-amber",
    accentBg: "bg-amber/10",
    accentBorder: "border-amber/20",
    visual: <CalendarVisual />,
  },
  {
    number: "02",
    icon: Images,
    title: "Memórias especiais",
    description:
      "Registrem momentos com fotos, captions e datas. Uma linha do tempo afetiva da história de vocês — guardada com cuidado.",
    accent: "text-bordeaux-light",
    accentBg: "bg-bordeaux/10",
    accentBorder: "border-bordeaux/25",
    visual: <MemoriesVisual />,
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Cápsula do tempo",
    description:
      "Escrevam mensagens para revelar no futuro. Uma surpresa guardada com amor — para o aniversário, para aquele dia especial.",
    accent: "text-rose-warm-soft",
    accentBg: "bg-rose-warm/8",
    accentBorder: "border-rose-warm/20",
    visual: <CapsuleVisual />,
  },
];

const secondaryFeatures = [
  {
    icon: Bell,
    title: "Lembretes afetivos",
    description: "Alertas personalizados para eventos, aniversários e datas especiais.",
  },
  {
    icon: MessageCircle,
    title: "Chat nos eventos",
    description: "Comente e combine detalhes diretamente dentro de cada evento.",
  },
  {
    icon: Heart,
    title: "Contador de relacionamento",
    description: "Quantos dias, meses e anos vocês estão juntos. Cada dia celebrado.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        {/* Título — alinhado à esquerda */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-tight tracking-tight text-ivory">
            Tudo o que o casal precisa,
            <br />
            <span className="text-bordeaux-light">em um só lugar.</span>
          </h2>
          <p className="mt-4 max-w-lg text-taupe">
            Criado para substituir os grupos de WhatsApp, os calendários separados
            e os lembretes esquecidos por algo que realmente entende vocês.
          </p>
        </motion.div>

        {/* 3 momentos principais — layout editorial alternado */}
        <div className="space-y-24 md:space-y-32">
          {primaryFeatures.map((feature, i) => {
            const Icon = feature.icon;
            const isEven = i % 2 === 1;

            return (
              <div
                key={feature.number}
                className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                  isEven ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Texto */}
                <motion.div
                  variants={isEven ? revealRight : revealLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className={`font-mono text-4xl font-extrabold ${feature.accent} opacity-40`}>
                      {feature.number}
                    </span>
                    <div className={`rounded-lg border ${feature.accentBorder} ${feature.accentBg} p-2`}>
                      <Icon className={feature.accent} size={18} aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-ivory md:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="text-base leading-relaxed text-taupe">
                    {feature.description}
                  </p>
                </motion.div>

                {/* Visual */}
                <motion.div
                  variants={isEven ? revealLeft : revealRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  className="flex justify-center"
                >
                  {feature.visual}
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* 3 features secundárias — lista compacta */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 border-t border-ivory/8 pt-16"
        >
          <p className="mb-8 text-sm font-medium uppercase tracking-widest text-taupe">
            Também incluso
          </p>
          <div className="grid gap-8 sm:grid-cols-3">
            {secondaryFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  custom={i * 0.1}
                  variants={revealUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Icon className="mb-3 text-bordeaux-light" size={20} aria-hidden="true" />
                  <h4 className="mb-1.5 font-semibold text-ivory">{feature.title}</h4>
                  <p className="text-sm leading-relaxed text-taupe">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Visuais das features principais ── */

function CalendarVisual() {
  const days = ["S", "T", "Q", "Q", "S", "S", "D"];
  const events = [
    { day: 8, label: "Jantar", color: "bg-bordeaux-light" },
    { day: 14, label: "Consulta", color: "bg-amber" },
    { day: 21, label: "Aniversário", color: "bg-rose-warm" },
  ];

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-ivory/8 bg-mahogany p-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-semibold text-ivory">Maio 2025</p>
        <div className="flex -space-x-1.5">
          <div className="h-6 w-6 rounded-full border-2 border-mahogany bg-bordeaux/40 text-[10px] font-bold text-ivory flex items-center justify-center">A</div>
          <div className="h-6 w-6 rounded-full border-2 border-mahogany bg-amber/30 text-[10px] font-bold text-amber flex items-center justify-center">G</div>
        </div>
      </div>

      {/* Dias da semana */}
      <div className="mb-2 grid grid-cols-7 gap-1">
        {days.map((d, i) => (
          <div key={i} className="text-center text-xs text-taupe">{d}</div>
        ))}
      </div>

      {/* Grade de dias */}
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 31 }, (_, i) => {
          const day = i + 1;
          const event = events.find((e) => e.day === day);
          return (
            <div
              key={day}
              className={`relative flex h-8 w-full items-center justify-center rounded-lg text-xs transition-colors ${
                event
                  ? `${event.color} font-semibold text-ivory`
                  : "text-taupe hover:bg-espresso"
              }`}
            >
              {day}
            </div>
          );
        })}
      </div>

      {/* Legenda */}
      <div className="mt-4 space-y-1.5">
        {events.map((ev) => (
          <div key={ev.day} className="flex items-center gap-2">
            <div className={`h-2 w-2 rounded-full ${ev.color}`} />
            <span className="text-xs text-taupe">
              Dia {ev.day} — {ev.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MemoriesVisual() {
  return (
    <div className="w-full max-w-sm space-y-3">
      {[
        {
          date: "14 jan 2024",
          caption: "Primeiro encontro na Lapa.",
          bg: "bg-bordeaux/15",
          border: "border-bordeaux/25",
          emoji: "🌙",
        },
        {
          date: "08 mar 2024",
          caption: "Viagem para o litoral.",
          bg: "bg-amber/10",
          border: "border-amber/20",
          emoji: "🌊",
        },
        {
          date: "14 jun 2024",
          caption: "6 meses juntos.",
          bg: "bg-rose-warm/8",
          border: "border-rose-warm/20",
          emoji: "🥂",
        },
      ].map((memory) => (
        <div
          key={memory.date}
          className={`flex items-start gap-4 overflow-hidden rounded-2xl border ${memory.border} ${memory.bg} p-4`}
        >
          <span className="text-2xl" role="img" aria-hidden="true">{memory.emoji}</span>
          <div>
            <p className="text-xs text-taupe">{memory.date}</p>
            <p className="mt-0.5 text-sm font-medium text-ivory">{memory.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function CapsuleVisual() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-ivory/8 bg-mahogany p-6">
      <div className="mb-5 text-center">
        <span className="text-4xl" role="img" aria-label="cápsula do tempo">⏳</span>
        <p className="mt-2 text-xs font-medium uppercase tracking-widest text-taupe">
          Cápsula do tempo
        </p>
      </div>

      <div className="rounded-xl border border-bordeaux/25 bg-bordeaux/12 p-4">
        <p className="mb-1 text-xs text-taupe">Mensagem para revelar em</p>
        <p className="font-bold text-ivory">14 jan 2025 — 1 ano juntos</p>
        <p className="mt-3 text-sm leading-relaxed text-taupe">
          "Amor, quando você ler isso, já vai ter um ano que nos escolhemos todos
          os dias. Obrigado por cada momento…"
        </p>
        <p className="mt-3 text-xs text-taupe italic">— escrito por Ana, 14 jan 2024</p>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-lg bg-espresso/60 px-3 py-2.5">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-ivory/10">
          <div className="h-full w-[76%] rounded-full bg-bordeaux-light" />
        </div>
        <span className="flex-shrink-0 text-xs text-taupe">76 dias</span>
      </div>
    </div>
  );
}
