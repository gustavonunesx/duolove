"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Check, Copy, Loader2, MessageCircle } from "lucide-react";

const MOCK_CODE = "DUO-X7K2M";
const MOCK_LINK = `https://duolove.app/join/${MOCK_CODE}`;

const codeSchema = z.object({
  code: z
    .string()
    .min(9, "Código inválido")
    .regex(/^DUO-[A-Z0-9]{5}$/, "Formato inválido. Ex: DUO-X7K2M"),
});

type CodeForm = z.infer<typeof codeSchema>;

export default function InvitePage() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [mode, setMode] = useState<"share" | "enter">("share");
  const [joining, setJoining] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CodeForm>({ resolver: zodResolver(codeSchema) });

  async function copyLink() {
    await navigator.clipboard.writeText(MOCK_LINK);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  async function onJoin(_data: CodeForm) {
    setJoining(true);
    await new Promise((r) => setTimeout(r, 1200));
    router.push("/onboarding");
  }

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`Oi amor! Vamos usar o DuoLove juntos? 💕 É um app lindo para casais organizarem a vida a dois. Entra com esse link: ${MOCK_LINK}`)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="rounded-2xl border border-white/8 bg-[#1a1a2e]/60 p-8 backdrop-blur-xl">
        {/* Header */}
        <div className="mb-7 text-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mb-4 text-4xl"
          >
            💌
          </motion.div>
          <h2 className="mb-2 text-2xl font-bold text-[#f5f0eb]">
            Convide seu amor
          </h2>
          <p className="text-sm text-[#8b8b9e]">
            O DuoLove é melhor a dois. Compartilhe com quem você ama.
          </p>
        </div>

        {/* Mode tabs */}
        <div className="mb-6 flex rounded-xl border border-white/8 bg-white/5 p-1">
          <button
            onClick={() => setMode("share")}
            className={`flex-1 rounded-lg py-2 text-xs font-medium transition-all ${mode === "share" ? "bg-[#e91e8c] text-white shadow-sm" : "text-[#8b8b9e] hover:text-[#f5f0eb]"}`}
          >
            Compartilhar convite
          </button>
          <button
            onClick={() => setMode("enter")}
            className={`flex-1 rounded-lg py-2 text-xs font-medium transition-all ${mode === "enter" ? "bg-[#e91e8c] text-white shadow-sm" : "text-[#8b8b9e] hover:text-[#f5f0eb]"}`}
          >
            Tenho um código
          </button>
        </div>

        <AnimatePresence mode="wait">
          {mode === "share" ? (
            <motion.div
              key="share"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              {/* Code display */}
              <div className="rounded-xl border border-[#e91e8c]/20 bg-[#e91e8c]/5 p-4 text-center">
                <p className="mb-1 text-xs text-[#8b8b9e]">Seu código de convite</p>
                <p className="text-2xl font-bold tracking-widest text-[#f5f0eb]">
                  {MOCK_CODE}
                </p>
              </div>

              {/* Link + copy */}
              <div className="flex items-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-3">
                <p className="flex-1 truncate text-xs text-[#8b8b9e]">{MOCK_LINK}</p>
                <button
                  onClick={copyLink}
                  className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${copied ? "bg-green-500/20 text-green-400" : "bg-white/10 text-[#f5f0eb] hover:bg-white/20"}`}
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5" />
                      Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      Copiar
                    </>
                  )}
                </button>
              </div>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 py-3 text-sm font-medium text-green-400 transition-all hover:bg-green-500/20 active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4" />
                Compartilhar via WhatsApp
              </a>

              {/* Proceed */}
              <button
                onClick={() => router.push("/onboarding")}
                className="w-full rounded-xl py-3 text-sm font-semibold text-white transition-all active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #e91e8c 0%, #9b59b6 100%)",
                  boxShadow: "0 0 20px rgba(233,30,140,0.4), 0 0 40px rgba(233,30,140,0.15)",
                }}
              >
                Convite enviado, continuar
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="enter"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.25 }}
            >
              <form onSubmit={handleSubmit(onJoin)} noValidate className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-[#8b8b9e]">
                    Código do seu parceiro(a)
                  </label>
                  <input
                    type="text"
                    placeholder="DUO-XXXXX"
                    autoCapitalize="characters"
                    {...register("code")}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-mono font-semibold tracking-widest text-[#f5f0eb] placeholder-[#8b8b9e]/40 outline-none transition-all focus:border-[#e91e8c]/60 focus:ring-2 focus:ring-[#e91e8c]/20"
                    aria-invalid={!!errors.code}
                  />
                  {errors.code && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.code.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || joining}
                  className="w-full rounded-xl py-3 text-sm font-semibold text-white transition-all disabled:opacity-60 active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg, #e91e8c 0%, #9b59b6 100%)",
                    boxShadow: "0 0 20px rgba(233,30,140,0.4), 0 0 40px rgba(233,30,140,0.15)",
                  }}
                >
                  {isSubmitting || joining ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Conectando...
                    </span>
                  ) : (
                    "Entrar como casal 💕"
                  )}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Skip */}
      <div className="mt-5 text-center">
        <Link
          href="/onboarding"
          className="text-sm text-[#8b8b9e] transition-colors hover:text-[#f5f0eb]"
        >
          Você pode convidar depois ›
        </Link>
      </div>
    </motion.div>
  );
}
