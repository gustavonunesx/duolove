"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Smartphone } from "lucide-react";

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
    highlight: true,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#080810]" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose/4 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-6">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <span className="mb-5 inline-block rounded-full border border-rose/25 bg-rose/8 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-rose/80">
            Preços
          </span>
          <h2 className="font-display text-4xl font-light leading-tight text-foreground sm:text-5xl">
            Simples como o amor.{" "}
            <span className="text-gradient-rose italic">Sem surpresas.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
            Comece grátis e faça upgrade quando quiser aproveitar o DuoLove completo.
            Assinatura gerenciada pela App Store ou Google Play.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col rounded-3xl p-8 ${
                plan.highlight
                  ? "gradient-rose glow-rose text-white"
                  : "glass"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1 text-xs font-semibold text-rose shadow-lg">
                    <Sparkles size={11} aria-hidden="true" />
                    Mais popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className={`mb-1 text-sm font-medium ${plan.highlight ? "text-white/70" : "text-muted-foreground"}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-5xl font-light">{plan.price}</span>
                  <span className={`text-sm ${plan.highlight ? "text-white/60" : "text-muted-foreground"}`}>
                    /{plan.period}
                  </span>
                </div>
                <p className={`mt-2 text-sm ${plan.highlight ? "text-white/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              {/* CTA — disponível via lojas */}
              <div className="mb-8">
                <div
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium ${
                    plan.highlight
                      ? "bg-white/15 text-white border border-white/20"
                      : "border border-white/10 bg-white/5 text-muted-foreground"
                  }`}
                >
                  <Smartphone size={15} aria-hidden="true" />
                  Disponível em breve nas lojas
                </div>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3" aria-label={`Recursos do plano ${plan.name}`}>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={15}
                      className={`mt-0.5 shrink-0 ${plan.highlight ? "text-white" : "text-rose"}`}
                      aria-hidden="true"
                    />
                    <span className={`text-sm ${plan.highlight ? "text-white/85" : "text-muted-foreground"}`}>
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
          className="mt-8 text-center text-xs text-muted-foreground/60"
        >
          A assinatura Premium é gerenciada pela App Store (iOS) ou Google Play (Android).
          Cancele quando quiser. Sem taxas escondidas.
        </motion.p>
      </div>
    </section>
  );
}
