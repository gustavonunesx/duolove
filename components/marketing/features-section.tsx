"use client";

import { motion } from "framer-motion";
import { Calendar, MessageCircle, Bell, Image, Heart, Sparkles } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Calendário compartilhado",
    description:
      "Todos os compromissos do casal em um só lugar, sincronizados em tempo real. Nunca mais desencontros.",
    accent: "rose",
    number: "01",
  },
  {
    icon: Bell,
    title: "Lembretes afetivos",
    description:
      "Alertas personalizados para aniversários, datas especiais e momentos que importam para os dois.",
    accent: "lilac",
    number: "02",
  },
  {
    icon: MessageCircle,
    title: "Chat nos eventos",
    description:
      "Comente, reaja e combine detalhes diretamente dentro de cada evento. Sem sair do app.",
    accent: "rose",
    number: "03",
  },
  {
    icon: Heart,
    title: "Contador do relacionamento",
    description:
      "Veja exatamente quantos dias, meses e anos vocês estão juntos. Cada dia merece ser celebrado.",
    accent: "wine",
    number: "04",
  },
  {
    icon: Image,
    title: "Memórias especiais",
    description:
      "Registrem momentos com fotos, captions e datas. Uma linha do tempo afetiva só de vocês dois.",
    accent: "lilac",
    number: "05",
  },
  {
    icon: Sparkles,
    title: "Cápsula do tempo",
    description:
      "Escrevam mensagens para revelar no futuro. Surpresas guardadas com amor para o momento certo.",
    accent: "rose",
    number: "06",
  },
];

const accentMap = {
  rose: { text: "text-rose", bg: "bg-rose/10", border: "border-rose/15", num: "text-rose/15" },
  lilac: { text: "text-lilac", bg: "bg-lilac/10", border: "border-lilac/15", num: "text-lilac/15" },
  wine: { text: "text-wine", bg: "bg-wine/10", border: "border-wine/15", num: "text-wine/15" },
};

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-28 overflow-hidden">
      {/* Background sutil */}
      <div className="absolute inset-0 bg-[#090910]" aria-hidden="true" />
      <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-lilac/4 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        {/* Cabeçalho assimétrico */}
        <div className="mb-20 grid gap-8 lg:grid-cols-2 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-5 inline-block rounded-full border border-lilac/25 bg-lilac/8 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-lilac/80">
              Funcionalidades
            </span>
            <h2 className="font-display text-4xl font-light leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Tudo o que o casal{" "}
              <span className="text-gradient-rose italic">precisa,</span>
              <br />
              em um só lugar
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-base leading-relaxed text-muted-foreground lg:max-w-sm lg:text-lg"
          >
            Criado para substituir os grupos de WhatsApp, os calendários separados e os
            lembretes esquecidos — por uma experiência bonita e emocionalmente conectada.
          </motion.p>
        </div>

        {/* Grid de features */}
        <div className="grid gap-px bg-white/5 rounded-3xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = accentMap[feature.accent as keyof typeof accentMap];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="group relative bg-[#090910] p-8 transition-colors duration-300 hover:bg-[#0f0f1a]"
              >
                {/* Número decorativo de fundo */}
                <span className={`absolute right-5 top-5 font-display text-6xl font-bold leading-none ${colors.num} select-none`}>
                  {feature.number}
                </span>

                <div className={`relative z-10 mb-5 inline-flex rounded-2xl border ${colors.border} ${colors.bg} p-3.5 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={colors.text} size={20} aria-hidden="true" />
                </div>

                <h3 className="relative z-10 mb-3 text-base font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="relative z-10 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
