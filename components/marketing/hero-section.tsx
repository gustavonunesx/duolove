"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export function HeroSection() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden pt-16">
      {/* Fundo espresso quente */}
      <div className="absolute inset-0 gradient-warm" aria-hidden="true" />

      {/* Acento bordeaux sutil no canto superior direito */}
      <div
        className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-bordeaux/20 blur-[100px]"
        aria-hidden="true"
      />
      {/* Acento âmbar sutil no canto inferior esquerdo */}
      <div
        className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-amber/10 blur-[80px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">

          {/* Coluna de texto */}
          <div className="flex max-w-2xl flex-col items-start">

            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={reveal}
              className="text-[clamp(2.75rem,8vw,5.25rem)] font-extrabold leading-[1.05] tracking-tight text-ivory"
            >
              A vida a dois,{" "}
              <br className="hidden sm:block" />
              <span className="text-bordeaux-light">organizada</span>{" "}
              <br className="hidden sm:block" />
              e conectada.
            </motion.h1>

            <motion.p
              custom={0.15}
              initial="hidden"
              animate="visible"
              variants={reveal}
              className="mt-6 max-w-lg text-[1.0625rem] leading-relaxed text-taupe sm:text-lg"
            >
              Chega de compromissos perdidos no WhatsApp e calendários separados.
              O DuoLove é o lugar só de vocês — para organizar, lembrar e celebrar.
            </motion.p>

            <motion.div
              custom={0.28}
              initial="hidden"
              animate="visible"
              variants={reveal}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-full bg-bordeaux px-7 py-3.5 text-base font-semibold text-ivory transition-all duration-200 hover:bg-bordeaux-light active:scale-[0.98]"
              >
                Começar grátis
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-ivory/15 px-7 py-3.5 text-base font-medium text-taupe transition-all duration-200 hover:border-ivory/30 hover:text-ivory"
              >
                Ver como funciona
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.p
              custom={0.4}
              initial="hidden"
              animate="visible"
              variants={reveal}
              className="mt-7 text-sm text-taupe"
            >
              Mais de{" "}
              <span className="font-semibold text-amber">2.000 casais</span>{" "}
              já organizam a vida juntos
            </motion.p>
          </div>

          {/* Preview do app — desktop */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
            aria-hidden="true"
          >
            <AppPreview />
          </motion.div>
        </div>

        {/* Preview do app — mobile (abaixo do texto) */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex justify-center lg:hidden"
          aria-hidden="true"
        >
          <AppPreviewMobile />
        </motion.div>
      </div>
    </section>
  );
}

function AppPreview() {
  return (
    <div className="relative w-[340px]">
      {/* Acento bordeaux atrás do card */}
      <div className="absolute -inset-4 rounded-3xl bg-bordeaux/10 blur-xl" />

      {/* Card principal */}
      <div className="relative overflow-hidden rounded-3xl border border-ivory/8 bg-mahogany p-6 shadow-2xl">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs text-taupe">Maio 2025</p>
            <p className="font-semibold text-ivory">Calendário do casal</p>
          </div>
          <div className="flex -space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-mahogany bg-bordeaux/30 text-xs font-bold text-amber">
              A
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-mahogany bg-amber/20 text-xs font-bold text-amber">
              G
            </div>
          </div>
        </div>

        {/* Contador */}
        <div className="mb-5 rounded-2xl border border-bordeaux/25 bg-bordeaux/15 p-4">
          <p className="text-xs text-taupe">Tempo juntos</p>
          <p className="mt-0.5 text-3xl font-extrabold text-amber">487 dias</p>
          <p className="mt-1 text-xs text-taupe">Desde 14 de jan de 2024</p>
        </div>

        {/* Eventos */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-taupe">Próximos eventos</p>
          {[
            { dot: "bg-bordeaux-light", title: "Jantar romântico", date: "Hoje, 20h" },
            { dot: "bg-amber", title: "Consulta médica juntos", date: "Amanhã, 15h" },
            { dot: "bg-rose-warm", title: "Aniversário de 1 ano", date: "Em 3 dias" },
          ].map((ev) => (
            <div
              key={ev.title}
              className="flex items-center gap-3 rounded-xl bg-espresso/60 px-3 py-2.5"
            >
              <div className={`h-2 w-2 flex-shrink-0 rounded-full ${ev.dot}`} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ivory">{ev.title}</p>
                <p className="text-xs text-taupe">{ev.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notificação flutuante */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
        className="absolute -bottom-5 -left-6 rounded-2xl border border-ivory/8 bg-mahogany-light px-4 py-3 shadow-xl"
      >
        <div className="flex items-center gap-2.5">
          <span className="text-lg" role="img" aria-label="coração">💌</span>
          <div>
            <p className="text-xs font-semibold text-ivory">Seu date começa em 1h</p>
            <p className="text-xs text-taupe">Jantar romântico</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function AppPreviewMobile() {
  return (
    <div className="w-full max-w-xs overflow-hidden rounded-2xl border border-ivory/8 bg-mahogany p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-semibold text-ivory">Calendário do casal</p>
        <div className="flex -space-x-1.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-mahogany bg-bordeaux/30 text-xs font-bold text-amber">A</div>
          <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-mahogany bg-amber/20 text-xs font-bold text-amber">G</div>
        </div>
      </div>
      <div className="rounded-xl border border-bordeaux/20 bg-bordeaux/12 px-4 py-3">
        <p className="text-xs text-taupe">Tempo juntos</p>
        <p className="text-2xl font-extrabold text-amber">487 dias</p>
      </div>
    </div>
  );
}
