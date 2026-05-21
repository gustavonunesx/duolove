"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <section className="relative overflow-hidden bordeaux-drench py-24 md:py-32">
      {/* Acento âmbar de fundo */}
      <div
        className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-amber/15 blur-[80px]"
        aria-hidden="true"
      />
      <div
        className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-ivory/5 blur-[60px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-2xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-[clamp(2rem,6vw,3.5rem)] font-extrabold leading-tight tracking-tight text-ivory">
            Prontos para organizar
            <br />
            a vida a dois?
          </h2>

          <p className="mt-5 max-w-md text-[1.0625rem] leading-relaxed text-ivory/70">
            Junte-se a milhares de casais que já tornaram a rotina mais organizada,
            conectada e cheia de amor.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 rounded-2xl border border-ivory/15 bg-ivory/10 px-6 py-5"
            >
              <p className="font-semibold text-ivory">
                💌 Ótimo! Entraremos em contato em breve.
              </p>
              <p className="mt-1 text-sm text-ivory/70">
                Enquanto isso, que tal já criar sua conta?
              </p>
              <Link
                href="/signup"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-ivory px-6 py-2.5 text-sm font-semibold text-espresso transition-all hover:bg-ivory/90"
              >
                Criar conta grátis
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
              aria-label="Formulário de interesse"
            >
              <input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Seu endereço de e-mail"
                className="h-12 flex-1 rounded-full border border-ivory/20 bg-ivory/10 px-5 text-sm text-ivory placeholder:text-ivory/40 outline-none focus:border-ivory/40 focus:bg-ivory/15 transition-all"
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ivory px-7 text-sm font-semibold text-espresso transition-all hover:bg-ivory/90 active:scale-[0.98]"
              >
                Começar grátis
                <ArrowRight size={15} aria-hidden="true" />
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-ivory/50">
            Grátis para sempre. Sem cartão de crédito.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
