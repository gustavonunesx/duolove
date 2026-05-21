"use client";

import { motion } from "framer-motion";
import { UserPlus, Link2, CalendarHeart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Crie sua conta",
    description: "Cadastre-se em segundos com seu e-mail ou conta Google.",
  },
  {
    number: "02",
    icon: Link2,
    title: "Conecte-se ao seu amor",
    description: "Envie um convite para seu parceiro(a). Quando aceitar, vocês ficam conectados.",
  },
  {
    number: "03",
    icon: CalendarHeart,
    title: "Organizem a vida juntos",
    description: "Criem eventos, registrem memórias e nunca percam uma data especial.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="warm-surface py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-tight tracking-tight text-ivory">
            Três passos para
            <br />
            <span className="text-amber">começarem juntos.</span>
          </h2>
          <p className="mt-4 max-w-md text-taupe">
            Sem complicação. Em menos de 5 minutos, o casal já está conectado.
          </p>
        </motion.div>

        <div className="relative">
          {/* Linha conectora — desktop */}
          <div
            className="absolute left-[calc(3.5rem+1px)] top-10 hidden h-[calc(100%-5rem)] w-px bg-gradient-to-b from-bordeaux/40 via-amber/20 to-transparent md:block"
            aria-hidden="true"
          />

          <div className="space-y-12 md:space-y-14">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-6"
                >
                  {/* Ícone + número */}
                  <div className="relative flex-shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-bordeaux/35 bg-espresso">
                      <Icon className="text-bordeaux-light" size={22} aria-hidden="true" />
                    </div>
                    <span
                      className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-bordeaux text-[10px] font-bold text-ivory"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                  </div>

                  {/* Texto */}
                  <div className="pt-2">
                    <h3 className="text-lg font-bold text-ivory md:text-xl">{step.title}</h3>
                    <p className="mt-1.5 max-w-md text-taupe">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
