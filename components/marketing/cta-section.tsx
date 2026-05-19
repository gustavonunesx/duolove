"use client";

import Link from "next/link";
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
    <section className="relative overflow-hidden py-28">
      {/* Fundo */}
      <div className="absolute inset-0 gradient-dark" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-2xl px-4 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heart
            size={40}
            className="mx-auto mb-6 text-rose"
            aria-hidden="true"
          />

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Prontos para organizar a{" "}
            <span className="text-gradient-rose">vida a dois?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
            Junte-se a milhares de casais que já tornaram a rotina mais organizada,
            conectada e cheia de amor.
          </p>

          {/* Formulário de e-mail */}
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-10 rounded-2xl border border-rose/30 bg-rose/10 px-6 py-5"
            >
              <p className="font-semibold text-foreground">
                💌 Ótimo! Entraremos em contato em breve.
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Enquanto isso, que tal já criar sua conta?
              </p>
              <GradientButton className="mt-4" asChild>
                <Link href="/signup">
                  Criar conta grátis
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </GradientButton>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center"
              aria-label="Formulário de interesse"
            >
              <Input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Seu endereço de e-mail"
                className="h-12 max-w-xs flex-1 rounded-xl border-white/10 bg-white/5 placeholder:text-muted-foreground/60 focus:border-rose/50"
              />
              <GradientButton type="submit" size="lg" className="h-12">
                Começar grátis
                <ArrowRight size={16} aria-hidden="true" />
              </GradientButton>
            </form>
          )}

          <p className="mt-4 text-xs text-muted-foreground">
            Grátis para sempre. Sem cartão de crédito.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
