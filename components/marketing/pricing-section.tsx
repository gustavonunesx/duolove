"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { GradientButton } from "@/components/shared/gradient-button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Grátis",
    price: "R$ 0",
    period: "para sempre",
    description: "Para casais que querem começar a se organizar juntos.",
    features: [
      "Calendário compartilhado",
      "Até 30 eventos por mês",
      "Chat nos eventos",
      "Contador de relacionamento",
      "5 memórias por mês",
    ],
    cta: "Começar grátis",
    href: "/signup",
    highlight: false,
  },
  {
    name: "Premium",
    price: "R$ 19,90",
    period: "por mês",
    description: "Para casais que querem a experiência completa do DuoLove.",
    features: [
      "Tudo do plano Grátis",
      "Eventos ilimitados",
      "Memórias ilimitadas",
      "Cápsula do tempo",
      "Retrospectiva mensal do casal",
      "Armazenamento extra de fotos",
      "Temas exclusivos",
      "IA para sugestões de encontros",
      "Suporte prioritário",
    ],
    cta: "Assinar Premium",
    href: "/signup?plan=premium",
    highlight: true,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-surface-elevated/50 py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-rose/30 bg-rose/10 px-4 py-1.5 text-sm text-rose">
            Preços
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simples como o amor.{" "}
            <span className="text-gradient-rose">Sem surpresas.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Comece grátis e faça upgrade quando quiser aproveitar o DuoLove completo.
          </p>
        </motion.div>

        {/* Cards de planos */}
        <div className="grid gap-6 md:grid-cols-2">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col rounded-3xl p-8 ${
                plan.highlight
                  ? "gradient-rose glow-rose border-0 text-white"
                  : "glass"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1 text-xs font-semibold text-rose shadow-lg">
                    <Sparkles size={12} aria-hidden="true" />
                    Mais popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p
                  className={`mb-1 text-sm font-medium ${
                    plan.highlight ? "text-white/80" : "text-muted-foreground"
                  }`}
                >
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span
                    className={`text-sm ${
                      plan.highlight ? "text-white/70" : "text-muted-foreground"
                    }`}
                  >
                    /{plan.period}
                  </span>
                </div>
                <p
                  className={`mt-2 text-sm ${
                    plan.highlight ? "text-white/80" : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Botão */}
              <div className="mb-8">
                {plan.highlight ? (
                  <Link
                    href={plan.href}
                    className={cn(
                      "inline-flex h-14 w-full items-center justify-center rounded-full px-8 text-lg font-semibold transition-colors",
                      "bg-white text-rose hover:bg-white/90"
                    )}
                  >
                    {plan.cta}
                  </Link>
                ) : (
                  <GradientButton size="lg" className="w-full" asChild>
                    <Link href={plan.href}>{plan.cta}</Link>
                  </GradientButton>
                )}
              </div>

              {/* Lista de features */}
              <ul className="flex flex-col gap-3" aria-label={`Recursos do plano ${plan.name}`}>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className={`mt-0.5 flex-shrink-0 ${
                        plan.highlight ? "text-white" : "text-rose"
                      }`}
                      aria-hidden="true"
                    />
                    <span
                      className={`text-sm ${
                        plan.highlight ? "text-white/90" : "text-muted-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          Cancele quando quiser. Sem taxas escondidas. Pagamento seguro.
        </motion.p>
      </div>
    </section>
  );
}
