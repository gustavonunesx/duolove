"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2 } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha precisa ter ao menos 6 caracteres"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({ resolver: zodResolver(loginSchema) });

  async function onSubmit(_data: LoginForm) {
    setServerError("");
    await new Promise((r) => setTimeout(r, 1200));
    router.push("/dashboard");
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Glass card */}
      <div className="rounded-2xl border border-white/8 bg-[#1a1a2e]/60 p-8 backdrop-blur-xl">
        {/* Header */}
        <div className="mb-7">
          <h2 className="mb-1 text-2xl font-bold text-[#f5f0eb]">
            Bem-vindo(a) de volta 💕
          </h2>
          <p className="text-sm text-[#8b8b9e]">
            Continue a jornada com seu amor.
          </p>
        </div>

        {/* Google OAuth */}
        <button
          type="button"
          onClick={() => router.push("/dashboard")}
          className="mb-5 flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-medium text-[#f5f0eb] transition-all hover:bg-white/10 hover:border-white/20 active:scale-[0.98]"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Continuar com Google
        </button>

        {/* Divider */}
        <div className="mb-5 flex items-center gap-3">
          <div className="flex-1 border-t border-white/8" />
          <span className="text-xs text-[#8b8b9e]">ou use seu email</span>
          <div className="flex-1 border-t border-white/8" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
          {/* Email */}
          <div>
            <label className="mb-1.5 block text-xs font-medium text-[#8b8b9e]">
              Email
            </label>
            <input
              type="email"
              placeholder="seu@email.com"
              autoComplete="email"
              {...register("email")}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#f5f0eb] placeholder-[#8b8b9e]/60 outline-none transition-all focus:border-[#e91e8c]/60 focus:ring-2 focus:ring-[#e91e8c]/20 aria-invalid:border-red-500/50"
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="mb-1.5 block text-xs font-medium text-[#8b8b9e]">
              Senha
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                autoComplete="current-password"
                {...register("password")}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pr-11 text-sm text-[#f5f0eb] placeholder-[#8b8b9e]/60 outline-none transition-all focus:border-[#e91e8c]/60 focus:ring-2 focus:ring-[#e91e8c]/20 aria-invalid:border-red-500/50"
                aria-invalid={!!errors.password}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8b8b9e] transition-colors hover:text-[#f5f0eb]"
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1.5 text-xs text-red-400">{errors.password.message}</p>
            )}
          </div>

          {/* Forgot password */}
          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-xs text-[#8b8b9e] transition-colors hover:text-[#e91e8c]"
            >
              Esqueceu a senha?
            </Link>
          </div>

          {/* Server error */}
          {serverError && (
            <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {serverError}
            </div>
          )}

          {/* Submit */}
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
                Entrando...
              </span>
            ) : (
              "Entrar"
            )}
          </button>
        </form>
      </div>

      {/* Signup link */}
      <p className="mt-5 text-center text-sm text-[#8b8b9e]">
        Ainda não tem conta?{" "}
        <Link
          href="/signup"
          className="font-medium text-[#e91e8c] transition-colors hover:text-[#f06ab3]"
        >
          Criar conta grátis
        </Link>
      </p>
    </motion.div>
  );
}
