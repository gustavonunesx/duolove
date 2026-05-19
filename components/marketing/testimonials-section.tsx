"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Finalmente um app que entende que somos um casal, não duas pessoas com agendas separadas. Os lembretes afetivos fazem toda a diferença.",
    name: "Ana & Rodrigo",
    detail: "Juntos há 2 anos",
    initials: ["A", "R"],
    colors: ["bg-rose/20 text-rose", "bg-lilac/20 text-lilac"],
  },
  {
    quote:
      "A cápsula do tempo foi uma ideia incrível. Escrevemos mensagens um para o outro para revelar no nosso aniversário de 3 anos. Choramos muito.",
    name: "Camila & Lucas",
    detail: "Juntos há 3 anos",
    initials: ["C", "L"],
    colors: ["bg-lilac/20 text-lilac", "bg-rose/20 text-rose"],
  },
  {
    quote:
      "Antes perdíamos compromissos no WhatsApp toda semana. Agora temos tudo organizado e ainda vemos nossa linha do tempo de memórias juntos.",
    name: "Mariana & Felipe",
    detail: "Juntos há 1 ano e meio",
    initials: ["M", "F"],
    colors: ["bg-wine/20 text-wine", "bg-rose/20 text-rose"],
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-lilac/30 bg-lilac/10 px-4 py-1.5 text-sm text-lilac">
            Depoimentos
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Casais que já{" "}
            <span className="text-gradient-rose">transformaram a rotina</span>
          </h2>
        </motion.div>

        {/* Grid de depoimentos */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="glass flex flex-col rounded-2xl p-6"
            >
              <Quote
                size={20}
                className="mb-4 text-rose/50"
                aria-hidden="true"
              />
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex -space-x-2" aria-hidden="true">
                  {t.initials.map((initial, i) => (
                    <div
                      key={i}
                      className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-card text-xs font-bold ${t.colors[i]}`}
                    >
                      {initial}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
