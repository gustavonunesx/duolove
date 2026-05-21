"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";
import { GradientButton } from "@/components/shared/gradient-button";
import { Input } from "@/components/ui/input";

export function CtaSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <section className="grain relative overflow-hidden py-32">
      <div className="absolute inset-0 gradient-dark" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose/6 blur-[100px]"
        aria-hidden="true"
      />
      {/* Bordas de luz horizontais */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-rose/20 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lilac/15 to-transparent" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Heart
            size={36}
            className="mx-auto mb-8 text-rose"
            fill="currentColor"
            fillOpacity={0.2}
            aria-hidden="true"
          />

          <h2 className="font-display text-4xl font-light leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Seu casal merece isso.{" "}
            <span className="text-gradient-rose italic">
              Avise quando lançar.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-md text-base text-muted-foreground">
            Entre na lista de espera e seja um dos primeiros a organizar a vida a dois
            com o DuoLove.
          </p>

          {/* Formulário de waitlist */}
          <div className="mt-10">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl border border-rose/20 bg-rose/8 px-6 py-6"
              >
                <p className="text-lg font-semibold text-foreground">
                  💌 Você está na lista!
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Te avisamos assim que o DuoLove estiver disponível na App Store e Google Play.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 sm:flex-row sm:justify-center"
                aria-label="Formulário de lista de espera"
              >
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Seu endereço de e-mail"
                  className="h-12 max-w-xs flex-1 rounded-xl border-white/10 bg-white/5 placeholder:text-muted-foreground/50 focus:border-rose/40"
                />
                <GradientButton type="submit" size="lg" className="h-12">
                  Quero ser avisado
                  <ArrowRight size={15} aria-hidden="true" />
                </GradientButton>
              </form>
            )}
          </div>

          <p className="mt-4 text-xs text-muted-foreground/50">
            Sem spam. Você só recebe um e-mail quando o app lançar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
