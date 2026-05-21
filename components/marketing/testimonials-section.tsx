"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Finalmente um app que entende que somos um casal, não duas pessoas com agendas separadas. Os lembretes afetivos fazem toda a diferença no dia a dia.",
    name: "Ana & Rodrigo",
    detail: "Juntos há 2 anos · São Paulo, SP",
    initials: ["A", "R"],
    colors: ["bg-rose/20 text-rose", "bg-lilac/20 text-lilac"],
    stars: 5,
  },
  {
    quote:
      "A cápsula do tempo foi uma ideia incrível. Escrevemos mensagens um para o outro para revelar no nosso aniversário de 3 anos. Choramos muito.",
    name: "Camila & Lucas",
    detail: "Juntos há 3 anos · Belo Horizonte, MG",
    initials: ["C", "L"],
    colors: ["bg-lilac/20 text-lilac", "bg-rose/20 text-rose"],
    stars: 5,
  },
  {
    quote:
      "Antes perdíamos compromissos no WhatsApp toda semana. Agora temos tudo organizado e ainda vemos nossa linha do tempo de memórias juntos.",
    name: "Mariana & Felipe",
    detail: "Juntos há 1 ano e meio · Curitiba, PR",
    initials: ["M", "F"],
    colors: ["bg-wine/20 text-wine", "bg-rose/20 text-rose"],
    stars: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#090912]" aria-hidden="true" />
      <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-rose/4 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <span className="mb-5 inline-block rounded-full border border-lilac/25 bg-lilac/8 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-lilac/80">
            Depoimentos
          </span>
          <h2 className="font-display text-4xl font-light leading-tight text-foreground sm:text-5xl">
            O que os casais{" "}
            <span className="text-gradient-rose italic">estão dizendo</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="glass flex flex-col rounded-3xl p-7 transition-all duration-300 hover:border-white/15"
            >
              {/* Stars */}
              <div className="mb-5 flex gap-1" aria-label="5 estrelas">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-rose text-sm" aria-hidden="true">★</span>
                ))}
              </div>

              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-7 flex items-center gap-3 border-t border-white/6 pt-5">
                <div className="flex -space-x-2" aria-hidden="true">
                  {t.initials.map((initial, i) => (
                    <div
                      key={i}
                      className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#090912] text-xs font-bold ${t.colors[i]}`}
                    >
                      {initial}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground/70">{t.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
