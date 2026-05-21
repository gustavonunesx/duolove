"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

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
    <section id="pricing" className="warm-surface py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-tight tracking-tight text-ivory">
            Simples como o amor.
            <br />
            <span className="text-bordeaux-light">Sem surpresas.</span>
          </h2>
          <p className="mt-4 max-w-sm text-taupe">
            Comece grátis e faça upgrade quando quiser a experiência completa.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col rounded-3xl p-8 ${
                plan.highlight
                  ? "bordeaux-drench border border-ivory/10"
                  : "border border-ivory/8 bg-mahogany"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber px-4 py-1 text-xs font-bold text-espresso">
                    Mais popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className={`mb-1 text-sm font-medium ${plan.highlight ? "text-ivory/70" : "text-taupe"}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-ivory">{plan.price}</span>
                  <span className={`text-sm ${plan.highlight ? "text-ivory/60" : "text-taupe"}`}>
                    /{plan.period}
                  </span>
                </div>
                <p className={`mt-2 text-sm ${plan.highlight ? "text-ivory/70" : "text-taupe"}`}>
                  {plan.description}
                </p>
              </div>

              <Link
                href={plan.href}
                className={`mb-8 inline-flex h-12 items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  plan.highlight
                    ? "bg-ivory text-espresso hover:bg-ivory/90"
                    : "border border-bordeaux/40 bg-bordeaux/15 text-ivory hover:bg-bordeaux/25"
                }`}
              >
                {plan.cta}
                <ArrowRight size={15} aria-hidden="true" />
              </Link>

              <ul className="flex flex-col gap-3" aria-label={`Recursos do plano ${plan.name}`}>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={15}
                      className={`mt-0.5 flex-shrink-0 ${
                        plan.highlight ? "text-amber" : "text-bordeaux-light"
                      }`}
                      aria-hidden="true"
                    />
                    <span className={`text-sm ${plan.highlight ? "text-ivory/85" : "text-taupe"}`}>
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
          className="mt-7 text-center text-sm text-taupe"
        >
          Cancele quando quiser. Sem taxas escondidas. Pagamento seguro.
        </motion.p>
      </div>
    </section>
  );
}
