"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Calendar, Sparkles } from "lucide-react";
import { GradientButton } from "@/components/shared/gradient-button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Fundo gradiente */}
      <div className="absolute inset-0 gradient-dark" aria-hidden="true" />

      {/* Brilhos decorativos de fundo */}
      <div
        className="absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 h-80 w-80 translate-x-1/2 translate-y-1/2 rounded-full bg-lilac/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-24 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Texto */}
          <div className="flex flex-col items-start">
            {/* Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose/30 bg-rose/10 px-4 py-1.5 text-sm text-rose">
                <Sparkles size={14} aria-hidden="true" />
                Organização com amor
              </span>
            </motion.div>

            <motion.h1
              custom={0.1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              A vida a dois,{" "}
              <span className="text-gradient-rose">organizada</span> e{" "}
              <span className="text-gradient-rose">conectada</span>
            </motion.h1>

            <motion.p
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground"
            >
              Chega de compromissos perdidos no WhatsApp e calendários separados.
              O DuoLove é o app de calendário compartilhado feito para casais —
              organizado, bonito e emocionalmente conectado.
            </motion.p>

            <motion.div
              custom={0.3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-3"
            >
              <GradientButton size="lg" asChild>
                <Link href="/signup">
                  <Heart size={18} aria-hidden="true" />
                  Começar grátis
                </Link>
              </GradientButton>
              <Link
                href="#how-it-works"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                Ver como funciona
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.p
              custom={0.4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 text-sm text-muted-foreground"
            >
              Mais de{" "}
              <span className="font-semibold text-foreground">2.000 casais</span>{" "}
              já organizam a vida juntos
            </motion.p>
          </div>

          {/* Mockup visual do app */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center"
            aria-hidden="true"
          >
            {/* Card principal simulando o app */}
            <div className="glass relative w-full max-w-sm overflow-hidden rounded-3xl p-6 shadow-2xl">
              {/* Header do mockup */}
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Maio 2025</p>
                  <p className="font-semibold text-foreground">Calendário do casal</p>
                </div>
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full border-2 border-card bg-rose/20 flex items-center justify-center text-xs font-bold text-rose">
                    A
                  </div>
                  <div className="h-8 w-8 rounded-full border-2 border-card bg-lilac/20 flex items-center justify-center text-xs font-bold text-lilac">
                    G
                  </div>
                </div>
              </div>

              {/* Contador de dias */}
              <div className="mb-4 rounded-2xl bg-gradient-to-r from-rose/20 to-lilac/20 p-4">
                <p className="text-xs text-muted-foreground">Tempo juntos</p>
                <p className="text-3xl font-bold text-gradient-rose">487 dias</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Desde 14 de jan de 2024 💕
                </p>
              </div>

              {/* Próximos eventos */}
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground">Próximos eventos</p>
                {[
                  { color: "bg-rose", title: "Jantar romântico", date: "Hoje, 20h" },
                  { color: "bg-lilac", title: "Consulta médica juntos", date: "Amanhã, 15h" },
                  { color: "bg-wine", title: "Aniversário de 1 ano", date: "Em 3 dias" },
                ].map((event) => (
                  <div
                    key={event.title}
                    className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-2.5"
                  >
                    <div className={`h-2 w-2 rounded-full ${event.color} flex-shrink-0`} />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-foreground">
                        {event.title}
                      </p>
                      <p className="text-xs text-muted-foreground">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Ícone do calendário */}
              <div className="absolute -right-4 -top-4 flex h-20 w-20 items-center justify-center rounded-full bg-rose/10 blur-sm">
                <Calendar className="text-rose" size={28} />
              </div>
            </div>

            {/* Notificação flutuante */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="glass absolute -bottom-4 -left-4 rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg" role="img" aria-label="coração">💖</span>
                <div>
                  <p className="text-xs font-medium text-foreground">Seu date começa em 1h</p>
                  <p className="text-xs text-muted-foreground">Jantar romântico</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
