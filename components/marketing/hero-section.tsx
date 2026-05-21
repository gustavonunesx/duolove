"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ArrowRight, Calendar, Bell } from "lucide-react";
import { GradientButton } from "@/components/shared/gradient-button";
import { Input } from "@/components/ui/input";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.3.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M3.18 23.76c.3.17.64.24.99.2l13.12-7.58-2.83-2.83-11.28 10.21zM.1 1.01C.04 1.2 0 1.42 0 1.67v20.66c0 .25.04.48.1.67l.06.06 11.57-11.57v-.27L.16.95.1 1.01zM19.85 10.31l-2.77-1.6-3.17 3.17 3.17 3.17 2.8-1.62c.8-.46.8-1.22-.03-1.72zM3.18.24L16.3 7.82l-2.83 2.83L2.19.44C2.5.24 2.88.07 3.18.24z" />
    </svg>
  );
}

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <section className="grain relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Fundo */}
      <div className="absolute inset-0 bg-[#080810]" aria-hidden="true" />
      <div
        className="absolute -left-40 top-0 h-[700px] w-[700px] rounded-full bg-rose/5 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-lilac/5 blur-[100px]"
        aria-hidden="true"
      />
      {/* Linha diagonal decorativa */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #e91e8c 0, #e91e8c 1px, transparent 0, transparent 50%)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-24 md:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Texto + CTA */}
          <div className="flex flex-col items-start">
            <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
              <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-rose/20 bg-rose/8 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-rose/80">
                <Heart size={10} fill="currentColor" aria-hidden="true" />
                App para casais · Em breve
              </span>
            </motion.div>

            <motion.h1
              custom={0.1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-display text-5xl font-light leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            >
              A vida a dois,{" "}
              <em className="text-gradient-rose not-italic">organizada</em>
              {" "}e{" "}
              <em className="text-gradient-rose not-italic">conectada</em>
            </motion.h1>

            <motion.p
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Chega de compromissos perdidos no WhatsApp e calendários separados.
              O DuoLove é o app feito para casais — bonito, organizado e emocionalmente conectado.
            </motion.p>

            <motion.div
              custom={0.3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-10 w-full max-w-md"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-rose/20 bg-rose/8 px-6 py-5"
                >
                  <p className="font-semibold text-foreground">💌 Incrível! Você está na lista.</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Te avisamos assim que o app estiver disponível nas lojas.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-3 sm:flex-row"
                  aria-label="Lista de espera"
                >
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Seu endereço de e-mail"
                    className="h-12 flex-1 rounded-xl border-white/10 bg-white/5 text-sm placeholder:text-muted-foreground/50 focus:border-rose/40 focus:ring-rose/20"
                  />
                  <GradientButton type="submit" size="lg" className="h-12 shrink-0">
                    Quero ser avisado
                    <ArrowRight size={15} aria-hidden="true" />
                  </GradientButton>
                </form>
              )}
              <p className="mt-3 text-xs text-muted-foreground/60">
                Gratuito. Sem spam. Sem cartão de crédito.
              </p>
            </motion.div>

            {/* Store badges */}
            <motion.div
              custom={0.4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <div
                className="flex cursor-not-allowed items-center gap-3 rounded-xl border border-white/10 bg-white/4 px-5 py-3 opacity-50 transition-opacity"
                title="Em breve"
                aria-label="App Store — em breve"
              >
                <AppleIcon />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Em breve na</p>
                  <p className="text-sm font-semibold text-foreground">App Store</p>
                </div>
              </div>
              <div
                className="flex cursor-not-allowed items-center gap-3 rounded-xl border border-white/10 bg-white/4 px-5 py-3 opacity-50 transition-opacity"
                title="Em breve"
                aria-label="Google Play — em breve"
              >
                <GooglePlayIcon />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Em breve no</p>
                  <p className="text-sm font-semibold text-foreground">Google Play</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
            aria-hidden="true"
          >
            {/* Glow atrás do phone */}
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose/10 blur-3xl" />

            <div className="phone-frame">
              {/* Dynamic island */}
              <div className="absolute left-1/2 top-4 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

              {/* Botões laterais */}
              <div className="absolute -left-[3px] top-24 h-8 w-[3px] rounded-l-sm bg-white/15" />
              <div className="absolute -left-[3px] top-36 h-12 w-[3px] rounded-l-sm bg-white/15" />
              <div className="absolute -left-[3px] top-52 h-12 w-[3px] rounded-l-sm bg-white/15" />
              <div className="absolute -right-[3px] top-32 h-16 w-[3px] rounded-r-sm bg-white/15" />

              {/* Tela do app */}
              <div className="absolute inset-0 overflow-y-hidden pt-14">
                {/* Status bar */}
                <div className="flex items-center justify-between px-6 py-1">
                  <span className="text-[9px] font-semibold text-white/60">9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="h-1.5 w-3.5 rounded-sm bg-white/40" />
                    <div className="h-1.5 w-1 rounded-sm bg-white/40" />
                    <div className="h-1.5 w-4 rounded-sm bg-white/60" />
                  </div>
                </div>

                {/* App header */}
                <div className="flex items-center justify-between px-5 pt-3 pb-2">
                  <div>
                    <p className="text-[9px] text-white/40">Maio 2025</p>
                    <p className="text-xs font-semibold text-white">Calendário</p>
                  </div>
                  <div className="flex -space-x-1.5">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border border-black/60 bg-rose/30 text-[8px] font-bold text-rose">A</div>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border border-black/60 bg-lilac/30 text-[8px] font-bold text-lilac">G</div>
                  </div>
                </div>

                {/* Contador */}
                <div className="mx-5 mt-1 rounded-2xl bg-gradient-to-br from-rose/25 to-lilac/15 p-3">
                  <p className="text-[8px] text-white/50">Tempo juntos</p>
                  <p className="font-display text-2xl font-semibold text-white">487 dias</p>
                  <p className="mt-0.5 text-[8px] text-white/40">Desde 14 de jan de 2024 💕</p>
                </div>

                {/* Próximos eventos */}
                <div className="mt-3 px-5">
                  <p className="mb-2 text-[8px] font-medium uppercase tracking-wider text-white/30">Próximos</p>
                  {[
                    { dot: "bg-rose", title: "Jantar romântico", time: "Hoje, 20h" },
                    { dot: "bg-lilac", title: "Consulta juntos", time: "Amanhã, 15h" },
                    { dot: "bg-wine", title: "Aniversário de 1 ano", time: "Em 3 dias" },
                  ].map((ev) => (
                    <div key={ev.title} className="mb-1.5 flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
                      <div className={`h-1.5 w-1.5 shrink-0 rounded-full ${ev.dot}`} />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[9px] font-medium text-white">{ev.title}</p>
                        <p className="text-[8px] text-white/40">{ev.time}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Nav bar do app */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around border-t border-white/8 bg-black/40 px-4 pb-3 pt-2 backdrop-blur-md">
                  <div className="flex flex-col items-center gap-0.5">
                    <Calendar size={14} className="text-rose" />
                    <span className="text-[7px] text-rose">Agenda</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <Heart size={14} className="text-white/25" />
                    <span className="text-[7px] text-white/25">Memórias</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <Bell size={14} className="text-white/25" />
                    <span className="text-[7px] text-white/25">Alertas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Notificação flutuante */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
              className="glass absolute -bottom-6 -left-6 rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-xl" role="img" aria-label="coração">💖</span>
                <div>
                  <p className="text-[11px] font-semibold text-foreground">Seu date começa em 1h</p>
                  <p className="text-[10px] text-muted-foreground">Jantar romântico · Hoje</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
