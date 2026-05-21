"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Loader2, Mail } from "lucide-react";

const forgotSchema = z.object({
  email: z.string().email("Email inválido"),
});

type ForgotForm = z.infer<typeof forgotSchema>;

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  const [sentEmail, setSentEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotForm>({ resolver: zodResolver(forgotSchema) });

  async function onSubmit(data: ForgotForm) {
    await new Promise((r) => setTimeout(r, 1200));
    setSentEmail(data.email);
    setSent(true);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="rounded-2xl border border-white/8 bg-[#1a1a2e]/60 p-8 backdrop-blur-xl">
        <AnimatePresence mode="wait">
          {!sent ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <div className="mb-7">
                <h2 className="mb-1 text-2xl font-bold text-[#f5f0eb]">
                  Recuperar senha
                </h2>
                <p className="text-sm text-[#8b8b9e]">
                  Sem problema. Vamos te ajudar a entrar de volta.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-[#8b8b9e]">
                    Seu email
                  </label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    autoComplete="email"
                    {...register("email")}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#f5f0eb] placeholder-[#8b8b9e]/60 outline-none transition-all focus:border-[#e91e8c]/60 focus:ring-2 focus:ring-[#e91e8c]/20"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full overflow-hidden rounded-xl py-3 text-sm font-semibold text-white transition-all disabled:opacity-60 active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg, #e91e8c 0%, #9b59b6 100%)",
                    boxShadow: isSubmitting
                      ? "none"
                      : "0 0 20px rgba(233,30,140,0.4), 0 0 40px rgba(233,30,140,0.15)",
                  }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    "Enviar link de recuperação"
                  )}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="py-4 text-center"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full"
                style={{ background: "linear-gradient(135deg, #e91e8c20, #9b59b620)" }}
              >
                <Mail className="h-7 w-7 text-[#e91e8c]" />
              </motion.div>

              <h3 className="mb-2 text-xl font-bold text-[#f5f0eb]">
                Enviamos um link para seu email 💌
              </h3>
              <p className="mb-1 text-sm text-[#8b8b9e]">
                Verifique a caixa de entrada de
              </p>
              <p className="mb-6 text-sm font-medium text-[#e91e8c]">{sentEmail}</p>
              <p className="mb-6 text-xs text-[#8b8b9e]">
                Não encontrou? Verifique a pasta de spam ou solicite novamente em alguns minutos.
              </p>

              <button
                onClick={() => setSent(false)}
                className="text-sm text-[#8b8b9e] underline-offset-2 transition-colors hover:text-[#f5f0eb] hover:underline"
              >
                Tentar com outro email
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-5 flex justify-center">
        <Link
          href="/login"
          className="flex items-center gap-2 text-sm text-[#8b8b9e] transition-colors hover:text-[#f5f0eb]"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para o login
        </Link>
      </div>
    </motion.div>
  );
}
