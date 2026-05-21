"use client";

import { motion } from "framer-motion";

const featured = {
  quote:
    "Finalmente um app que entende que somos um casal, não duas pessoas com agendas separadas. Os lembretes afetivos fazem toda a diferença — parece que o app também torce por nós.",
  name: "Ana & Rodrigo",
  detail: "Juntos há 2 anos",
  initials: ["A", "R"],
};

const secondary = [
  {
    quote:
      "A cápsula do tempo foi incrível. Escrevemos mensagens um para o outro para revelar no nosso aniversário de 3 anos. Choramos muito.",
    name: "Camila & Lucas",
    detail: "Juntos há 3 anos",
  },
  {
    quote:
      "Antes perdíamos compromissos no WhatsApp toda semana. Agora temos tudo organizado e ainda vemos nossa linha do tempo de memórias juntos.",
    name: "Mariana & Felipe",
    detail: "Juntos há 1 ano e meio",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        {/* Depoimento hero */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 border-b border-ivory/8 pb-16"
        >
          <div className="max-w-4xl">
            {/* Aspas decorativas */}
            <span className="mb-6 block text-6xl font-extrabold leading-none text-bordeaux/40 md:text-8xl" aria-hidden="true">
              "
            </span>
            <blockquote>
              <p className="text-[clamp(1.25rem,3.5vw,2rem)] font-semibold leading-[1.35] tracking-tight text-ivory">
                {featured.quote}
              </p>
            </blockquote>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2" aria-hidden="true">
                {featured.initials.map((initial, i) => (
                  <div
                    key={i}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-bordeaux/30 text-sm font-bold text-amber"
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <div>
                <p className="font-semibold text-ivory">{featured.name}</p>
                <p className="text-sm text-taupe">{featured.detail}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Depoimentos secundários */}
        <div className="grid gap-8 sm:grid-cols-2">
          {secondary.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-base leading-relaxed text-taupe-light">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-ivory">{t.name}</p>
                <p className="text-xs text-taupe">{t.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
