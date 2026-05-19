"use client";

import { motion } from "framer-motion";
import { Calendar, MessageCircle, Bell, Image, Heart, Sparkles } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Calendário compartilhado",
    description:
      "Todos os compromissos do casal em um só lugar, sincronizados em tempo real. Nunca mais desencontros.",
    color: "text-rose",
    bg: "bg-rose/10",
  },
  {
    icon: Bell,
    title: "Lembretes afetivos",
    description:
      "Receba alertas personalizados para eventos, aniversários e datas especiais do relacionamento.",
    color: "text-lilac",
    bg: "bg-lilac/10",
  },
  {
    icon: MessageCircle,
    title: "Chat nos eventos",
    description:
      "Comente, reaja e combine detalhes diretamente dentro de cada evento. Sem sair do app.",
    color: "text-rose",
    bg: "bg-rose/10",
  },
  {
    icon: Heart,
    title: "Contador de relacionamento",
    description:
      "Veja exatamente quantos dias, meses e anos vocês estão juntos. Cada dia celebrado.",
    color: "text-wine",
    bg: "bg-wine/10",
  },
  {
    icon: Image,
    title: "Memórias especiais",
    description:
      "Registre momentos com fotos, captions e datas. Uma linha do tempo afetiva do casal.",
    color: "text-lilac",
    bg: "bg-lilac/10",
  },
  {
    icon: Sparkles,
    title: "Cápsula do tempo",
    description:
      "Escreva mensagens para revelar no futuro. Surpresas guardadas com amor para o momento certo.",
    color: "text-rose",
    bg: "bg-rose/10",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Título da seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-lilac/30 bg-lilac/10 px-4 py-1.5 text-sm text-lilac">
            Funcionalidades
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tudo o que o casal precisa,{" "}
            <span className="text-gradient-rose">em um só lugar</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Criado para substituir os grupos de WhatsApp, os calendários separados e os
            lembretes esquecidos por uma experiência bonita e emocionalmente conectada.
          </p>
        </motion.div>

        {/* Grid de cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="glass group rounded-2xl p-6 transition-all duration-300 hover:border-white/20 hover:shadow-lg"
              >
                <div className={`mb-4 inline-flex rounded-xl ${feature.bg} p-3`}>
                  <Icon className={feature.color} size={22} aria-hidden="true" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
