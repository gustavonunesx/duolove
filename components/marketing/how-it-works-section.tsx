"use client";

import { motion } from "framer-motion";
import { Smartphone, Link2, CalendarHeart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Baixe o app",
    description:
      "Disponível para iOS e Android. Instale em segundos e crie seu perfil com e-mail ou Google.",
    accent: "rose",
    bg: "from-rose/15 to-rose/3",
    border: "border-rose/20",
  },
  {
    number: "02",
    icon: Link2,
    title: "Conecte-se ao seu amor",
    description:
      "Envie um convite especial para seu parceiro(a). Quando aceito, vocês ficam conectados no app.",
    accent: "lilac",
    bg: "from-lilac/15 to-lilac/3",
    border: "border-lilac/20",
  },
  {
    number: "03",
    icon: CalendarHeart,
    title: "Organizem juntos",
    description:
      "Criem eventos, registrem memórias, troquem mensagens e nunca percam uma data especial.",
    accent: "wine",
    bg: "from-wine/15 to-wine/3",
    border: "border-wine/20",
  },
];

const accentText: Record<string, string> = {
  rose: "text-rose",
  lilac: "text-lilac",
  wine: "text-wine",
};

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#080810]" aria-hidden="true" />
      <div className="absolute left-1/2 top-0 h-px w-full max-w-2xl -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />
      <div className="absolute left-1/2 bottom-0 h-px w-full max-w-2xl -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <span className="mb-5 inline-block rounded-full border border-rose/25 bg-rose/8 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-rose/80">
            Como funciona
          </span>
          <h2 className="font-display text-4xl font-light leading-tight text-foreground sm:text-5xl">
            Três passos para{" "}
            <span className="text-gradient-rose italic">começar juntos</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
            Em menos de 5 minutos, o casal já está conectado e organizando a vida a dois.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid gap-6 md:grid-cols-3">
          {/* Linha conectora */}
          <div
            className="absolute left-[20%] right-[20%] top-10 hidden h-px bg-gradient-to-r from-rose/20 via-lilac/20 to-wine/20 md:block"
            aria-hidden="true"
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Círculo com ícone */}
                <div
                  className={`relative mb-8 flex h-20 w-20 items-center justify-center rounded-full border ${step.border} bg-gradient-to-br ${step.bg}`}
                >
                  <Icon className={accentText[step.accent]} size={26} aria-hidden="true" />
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#080810] text-[10px] font-bold text-muted-foreground border border-white/10">
                    {step.number}
                  </span>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
