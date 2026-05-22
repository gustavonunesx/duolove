"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";
import { Logo } from "@/components/shared/logo";

const schema = z.object({
  email: z.string().email("Email inválido"),
});

type Form = z.infer<typeof schema>;

const ease = [0.16, 1, 0.3, 1] as const;

export default function WaitlistPage() {
  const [done, setDone] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Form>({ resolver: zodResolver(schema) });

  async function onSubmit(data: Form) {
    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // mostra sucesso mesmo assim
    }
    setDone(true);
  }

  return (
    <div className="relative flex min-h-dvh flex-col bg-espresso">
      {/* Glow ambiente sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[65vh] opacity-[0.07]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(48% 0.14 12), transparent)",
        }}
      />

      {/* Header */}
      <header className="relative z-10 p-7 sm:p-8">
        <Link href="/home" aria-label="DuoLove — página inicial">
          <Logo size="sm" />
        </Link>
      </header>

      {/* Conteúdo principal */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-20">
        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14, transition: { duration: 0.22 } }}
              transition={{ duration: 0.55, ease }}
              className="w-full max-w-lg text-center"
            >
              {/* Kicker */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.08 }}
                className="mb-6 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-rose-warm"
              >
                em breve
              </motion.p>

              {/* Headline display */}
              <h1 className="mb-8">
                <motion.span
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.13, duration: 0.6, ease }}
                  className="block font-bold leading-[0.9] tracking-[-0.025em] text-ivory"
                  style={{ fontSize: "clamp(3.25rem, 9.5vw, 5.75rem)" }}
                >
                  Para dois.
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.21, duration: 0.6, ease }}
                  className="block font-bold leading-[0.9] tracking-[-0.025em] text-amber"
                  style={{ fontSize: "clamp(3.25rem, 9.5vw, 5.75rem)" }}
                >
                  Com amor.
                </motion.span>
              </h1>

              {/* Corpo */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.31 }}
                className="mx-auto mb-10 max-w-[28rem] text-base leading-relaxed text-taupe-light"
              >
                DuoLove está chegando — o app feito exclusivamente para vocês
                dois. Calendário, memórias, chat e muito mais. Deixa seu email
                e a gente te avisa na hora que abrir.
              </motion.p>

              {/* Formulário */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.45, ease }}
              >
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    autoComplete="email"
                    {...register("email")}
                    aria-label="Seu email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-err" : undefined}
                    className="flex-1 rounded-xl border border-mahogany-light bg-mahogany px-4 py-3.5 text-sm text-ivory outline-none transition-all placeholder:text-taupe/60 focus:border-bordeaux focus:ring-2 focus:ring-bordeaux/40"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="glow-bordeaux flex shrink-0 items-center justify-center gap-2 rounded-xl bg-bordeaux px-6 py-3.5 text-sm font-semibold text-ivory transition-all hover:bg-bordeaux-light disabled:opacity-60 active:scale-[0.98]"
                  >
                    {isSubmitting ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        Entrar na lista
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>

                {errors.email && (
                  <motion.p
                    id="email-err"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-2 text-left text-xs text-rose-warm"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </motion.div>

              {/* Reafirmação */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.54 }}
                className="mt-6 text-xs text-taupe/60"
              >
                Grátis. Sem spam. Só amor.
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
              className="w-full max-w-md text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.1, 1] }}
                transition={{ delay: 0.1, duration: 0.48, times: [0, 0.65, 1] }}
                className="mb-7 inline-flex h-20 w-20 items-center justify-center rounded-full bg-mahogany"
              >
                <span role="img" aria-label="carta com amor" className="text-4xl">💌</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.5, ease }}
                className="mb-3 text-4xl font-bold tracking-tight text-ivory"
              >
                Combinado!
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mx-auto max-w-xs text-base leading-relaxed text-taupe-light"
              >
                A gente te avisa assim que o DuoLove abrir as portas. Prepara
                o coração.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-5 text-sm text-rose-warm"
              >
                com carinho, time DuoLove
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Rodapé */}
      <footer className="relative z-10 py-6 text-center">
        <p className="text-xs text-taupe/60">
          © {new Date().getFullYear()} DuoLove
        </p>
      </footer>
    </div>
  );
}
