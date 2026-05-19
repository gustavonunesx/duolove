"use client";

import { motion } from "framer-motion";
import { UserPlus, Link2, CalendarHeart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Crie sua conta",
    description:
      "Cadastre-se em segundos com seu e-mail ou conta Google. Rápido, simples e seguro.",
    color: "text-rose",
    bg: "from-rose/20 to-rose/5",
    border: "border-rose/20",
  },
  {
    number: "02",
    icon: Link2,
    title: "Conecte-se ao seu amor",
    description:
      "Envie um convite especial para seu parceiro(a). Quando ele(a) aceitar, vocês ficam conectados no app.",
    color: "text-lilac",
    bg: "from-lilac/20 to-lilac/5",
    border: "border-lilac/20",
  },
  {
    number: "03",
    icon: CalendarHeart,
    title: "Organizem a vida juntos",
    description:
      "Criem eventos, registrem memórias, troquem mensagens e nunca percam uma data especial.",
    color: "text-rose",
    bg: "from-wine/20 to-wine/5",
    border: "border-wine/20",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-surface-elevated/50 py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-rose/30 bg-rose/10 px-4 py-1.5 text-sm text-rose">
            Como funciona
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Três passos para{" "}
            <span className="text-gradient-rose">começar juntos</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Sem complicação. Em menos de 5 minutos, o casal já está conectado e organizando a vida a dois.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid gap-8 md:grid-cols-3">
          {/* Linha conectando os passos (desktop) */}
          <div
            className="absolute left-1/6 right-1/6 top-10 hidden h-px bg-gradient-to-r from-rose/30 via-lilac/30 to-rose/30 md:block"
            aria-hidden="true"
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Número + ícone */}
                <div
                  className={`relative mb-6 flex h-20 w-20 items-center justify-center rounded-full border ${step.border} bg-gradient-to-br ${step.bg}`}
                >
                  <Icon className={step.color} size={28} aria-hidden="true" />
                  <span
                    className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-card text-xs font-bold text-muted-foreground"
                    aria-hidden="true"
                  >
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
