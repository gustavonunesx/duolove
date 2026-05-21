"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Check,
  Copy,
  Loader2,
  MessageCircle,
  User,
} from "lucide-react";
import { Logo } from "@/components/shared/logo";

// ── Schemas ──────────────────────────────────────────────────

const step1Schema = z.object({
  name: z.string().min(2, "Nome precisa ter ao menos 2 caracteres"),
  birthDate: z.string().min(1, "Selecione sua data de nascimento"),
});

const step2Schema = z.object({
  startDate: z.string().optional(),
  noOfficialDate: z.boolean().optional(),
});

const step3Schema = z.object({
  theme: z.enum(["rosa", "lilas", "vinho"]),
});

type Step1Form = z.infer<typeof step1Schema>;
type Step2Form = z.infer<typeof step2Schema>;
type Step3Form = z.infer<typeof step3Schema>;

// ── Constants ──────────────────────────────────────────────

const MOCK_CODE = "DUO-X7K2M";
const MOCK_LINK = `https://duolove.app/join/${MOCK_CODE}`;

const THEMES = [
  {
    id: "rosa" as const,
    label: "Rosa",
    emoji: "🌸",
    gradient: "linear-gradient(135deg, #e91e8c, #f06ab3)",
    ring: "#e91e8c",
    desc: "Apaixonado e vibrante",
  },
  {
    id: "lilas" as const,
    label: "Lilás",
    emoji: "💜",
    gradient: "linear-gradient(135deg, #9b59b6, #bf8fd6)",
    ring: "#9b59b6",
    desc: "Suave e sonhador",
  },
  {
    id: "vinho" as const,
    label: "Vinho",
    emoji: "🍷",
    gradient: "linear-gradient(135deg, #8b0051, #c0005a)",
    ring: "#8b0051",
    desc: "Intenso e elegante",
  },
];

const TOTAL_STEPS = 4;

// ── Progress bar ──────────────────────────────────────────

function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="mb-8">
      <div className="mb-2 flex items-center justify-between">
        <Logo size="sm" />
        <span className="text-xs text-[#8b8b9e]">
          {current} de {total}
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/8">
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, #e91e8c, #9b59b6)" }}
          initial={{ width: 0 }}
          animate={{ width: `${(current / total) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

// ── Step 1: Profile ──────────────────────────────────────

function Step1({ onNext }: { onNext: (data: Step1Form) => void }) {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step1Form>({
    resolver: zodResolver(step1Schema),
    defaultValues: { name: "" },
  });

  function handleAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarPreview(url);
    }
  }

  return (
    <form onSubmit={handleSubmit(onNext)} noValidate className="space-y-5">
      <div className="mb-6">
        <h2 className="mb-1 text-2xl font-bold text-[#f5f0eb]">Seu perfil 👤</h2>
        <p className="text-sm text-[#8b8b9e]">
          Vamos personalizar a sua experiência.
        </p>
      </div>

      {/* Avatar upload */}
      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="group relative h-24 w-24 overflow-hidden rounded-full border-2 border-dashed border-white/20 bg-white/5 transition-all hover:border-[#e91e8c]/50 hover:bg-white/10"
          aria-label="Adicionar foto de perfil"
        >
          {avatarPreview ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={avatarPreview} alt="Avatar" className="h-full w-full object-cover" />
          ) : (
            <div className="flex flex-col items-center justify-center h-full gap-1">
              <User className="h-7 w-7 text-[#8b8b9e] group-hover:text-[#e91e8c]" />
              <Camera className="h-4 w-4 text-[#8b8b9e]/50 group-hover:text-[#e91e8c]/70" />
            </div>
          )}
          {avatarPreview && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
              <Camera className="h-6 w-6 text-white" />
            </div>
          )}
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleAvatarChange}
        />
      </div>
      <p className="text-center text-xs text-[#8b8b9e]">Foto de perfil (opcional)</p>

      {/* Name */}
      <div>
        <label className="mb-1.5 block text-xs font-medium text-[#8b8b9e]">
          Como você quer ser chamado(a)?
        </label>
        <input
          type="text"
          placeholder="Seu nome"
          autoComplete="given-name"
          {...register("name")}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#f5f0eb] placeholder-[#8b8b9e]/60 outline-none transition-all focus:border-[#e91e8c]/60 focus:ring-2 focus:ring-[#e91e8c]/20"
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
        )}
      </div>

      {/* Birth date */}
      <div>
        <label className="mb-1.5 block text-xs font-medium text-[#8b8b9e]">
          Data de nascimento
        </label>
        <input
          type="date"
          {...register("birthDate")}
          max={new Date().toISOString().split("T")[0]}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#f5f0eb] outline-none transition-all focus:border-[#e91e8c]/60 focus:ring-2 focus:ring-[#e91e8c]/20 [color-scheme:dark]"
          aria-invalid={!!errors.birthDate}
        />
        {errors.birthDate && (
          <p className="mt-1.5 text-xs text-red-400">{errors.birthDate.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white transition-all active:scale-[0.98]"
        style={{
          background: "linear-gradient(135deg, #e91e8c 0%, #9b59b6 100%)",
          boxShadow: "0 0 20px rgba(233,30,140,0.4), 0 0 40px rgba(233,30,140,0.15)",
        }}
      >
        Continuar
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}

// ── Step 2: Relationship start date ──────────────────────

function Step2({
  onNext,
  onBack,
}: {
  onNext: (data: Step2Form) => void;
  onBack: () => void;
}) {
  const { register, handleSubmit, watch, setValue } = useForm<Step2Form>({
    defaultValues: { noOfficialDate: false },
  });

  const noOfficialDate = watch("noOfficialDate");

  return (
    <form onSubmit={handleSubmit(onNext)} noValidate className="space-y-5">
      <div className="mb-6">
        <h2 className="mb-1 text-2xl font-bold text-[#f5f0eb]">
          Quando tudo começou? 💕
        </h2>
        <p className="text-sm text-[#8b8b9e]">
          A data que mudou tudo. Vamos comemorar juntos cada ano.
        </p>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium text-[#8b8b9e]">
          Data de início do relacionamento
        </label>
        <input
          type="date"
          {...register("startDate")}
          disabled={noOfficialDate}
          max={new Date().toISOString().split("T")[0]}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#f5f0eb] outline-none transition-all focus:border-[#e91e8c]/60 focus:ring-2 focus:ring-[#e91e8c]/20 disabled:opacity-40 [color-scheme:dark]"
        />
      </div>

      {/* No official date */}
      <button
        type="button"
        onClick={() => setValue("noOfficialDate", !noOfficialDate)}
        className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all ${
          noOfficialDate
            ? "border-[#e91e8c]/40 bg-[#e91e8c]/10"
            : "border-white/10 bg-white/5 hover:border-white/20"
        }`}
      >
        <div
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-all ${
            noOfficialDate
              ? "border-[#e91e8c] bg-[#e91e8c]"
              : "border-white/30 bg-transparent"
          }`}
        >
          {noOfficialDate && <Check className="h-3 w-3 text-white" />}
        </div>
        <div>
          <p className="text-sm font-medium text-[#f5f0eb]">
            Ainda não temos uma data oficial
          </p>
          <p className="text-xs text-[#8b8b9e]">Tudo bem! Vocês são o que importa.</p>
        </div>
      </button>

      {/* Navigation */}
      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-[#f5f0eb] transition-all hover:bg-white/10"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </button>
        <button
          type="submit"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white transition-all active:scale-[0.98]"
          style={{
            background: "linear-gradient(135deg, #e91e8c 0%, #9b59b6 100%)",
            boxShadow: "0 0 20px rgba(233,30,140,0.4), 0 0 40px rgba(233,30,140,0.15)",
          }}
        >
          Continuar
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}

// ── Step 3: Theme selection ──────────────────────────────

function Step3({
  onNext,
  onBack,
}: {
  onNext: (data: Step3Form) => void;
  onBack: () => void;
}) {
  const { handleSubmit, watch, setValue } = useForm<Step3Form>({
    resolver: zodResolver(step3Schema),
    defaultValues: { theme: "rosa" },
  });

  const selectedTheme = watch("theme");

  return (
    <form onSubmit={handleSubmit(onNext)} noValidate className="space-y-5">
      <div className="mb-6">
        <h2 className="mb-1 text-2xl font-bold text-[#f5f0eb]">
          Escolham o estilo de vocês 🎨
        </h2>
        <p className="text-sm text-[#8b8b9e]">
          O tema pode ser trocado depois nas configurações.
        </p>
      </div>

      <div className="space-y-3">
        {THEMES.map((theme) => (
          <button
            key={theme.id}
            type="button"
            onClick={() => setValue("theme", theme.id)}
            className={`flex w-full items-center gap-4 rounded-xl border px-4 py-4 text-left transition-all ${
              selectedTheme === theme.id
                ? "border-transparent"
                : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
            }`}
            style={
              selectedTheme === theme.id
                ? {
                    borderColor: theme.ring,
                    background: `${theme.ring}15`,
                    boxShadow: `0 0 20px ${theme.ring}25`,
                  }
                : undefined
            }
          >
            {/* Swatch */}
            <div
              className="h-12 w-12 shrink-0 rounded-xl"
              style={{ background: theme.gradient }}
            />

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-base">{theme.emoji}</span>
                <span className="font-semibold text-[#f5f0eb]">{theme.label}</span>
              </div>
              <p className="text-xs text-[#8b8b9e]">{theme.desc}</p>
            </div>

            {/* Selected indicator */}
            <div
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-all ${
                selectedTheme === theme.id ? "opacity-100" : "opacity-0"
              }`}
              style={{ background: theme.ring }}
            >
              <Check className="h-3 w-3 text-white" />
            </div>
          </button>
        ))}
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-[#f5f0eb] transition-all hover:bg-white/10"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </button>
        <button
          type="submit"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white transition-all active:scale-[0.98]"
          style={{
            background: "linear-gradient(135deg, #e91e8c 0%, #9b59b6 100%)",
            boxShadow: "0 0 20px rgba(233,30,140,0.4), 0 0 40px rgba(233,30,140,0.15)",
          }}
        >
          Continuar
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}

// ── Step 4: Invite partner ──────────────────────────────

function Step4({ onBack, onFinish }: { onBack: () => void; onFinish: () => void }) {
  const [copied, setCopied] = useState(false);
  const [finishing, setFinishing] = useState(false);

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`Amor, vamos usar o DuoLove juntos? 💕 Entra com esse link: ${MOCK_LINK}`)}`;

  async function copyLink() {
    await navigator.clipboard.writeText(MOCK_LINK);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  async function handleFinish() {
    setFinishing(true);
    await new Promise((r) => setTimeout(r, 1000));
    onFinish();
  }

  return (
    <div className="space-y-5">
      <div className="mb-6">
        <h2 className="mb-1 text-2xl font-bold text-[#f5f0eb]">
          Convide seu amor 💌
        </h2>
        <p className="text-sm text-[#8b8b9e]">
          A experiência completa só começa quando vocês dois estiverem aqui.
        </p>
      </div>

      {/* Code */}
      <div className="rounded-xl border border-[#e91e8c]/20 bg-[#e91e8c]/5 p-4 text-center">
        <p className="mb-1 text-xs text-[#8b8b9e]">Seu código de convite</p>
        <p className="text-2xl font-bold tracking-widest text-[#f5f0eb]">{MOCK_CODE}</p>
      </div>

      {/* Link + copy */}
      <div className="flex items-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-3">
        <p className="flex-1 truncate text-xs text-[#8b8b9e]">{MOCK_LINK}</p>
        <button
          onClick={copyLink}
          className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
            copied
              ? "bg-green-500/20 text-green-400"
              : "bg-white/10 text-[#f5f0eb] hover:bg-white/20"
          }`}
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
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 py-3 text-sm font-medium text-green-400 transition-all hover:bg-green-500/20"
      >
        <MessageCircle className="h-4 w-4" />
        Compartilhar via WhatsApp
      </a>

      {/* Navigation */}
      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-[#f5f0eb] transition-all hover:bg-white/10"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </button>
        <button
          onClick={handleFinish}
          disabled={finishing}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white transition-all disabled:opacity-60 active:scale-[0.98]"
          style={{
            background: "linear-gradient(135deg, #e91e8c 0%, #9b59b6 100%)",
            boxShadow: "0 0 20px rgba(233,30,140,0.4), 0 0 40px rgba(233,30,140,0.15)",
          }}
        >
          {finishing ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Abrindo o DuoLove...
            </>
          ) : (
            "Começar a usar 🚀"
          )}
        </button>
      </div>

      {/* Skip */}
      <div className="text-center">
        <button
          onClick={handleFinish}
          disabled={finishing}
          className="text-sm text-[#8b8b9e] transition-colors hover:text-[#f5f0eb]"
        >
          Pular por agora ›
        </button>
      </div>
    </div>
  );
}

// ── Main onboarding page ──────────────────────────────────

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
};

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);

  function goNext() {
    setDirection(1);
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }

  function goBack() {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 1));
  }

  function finish() {
    router.push("/dashboard");
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#0d0d0d] px-6 py-12">
      {/* Background blobs */}
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-[400px] w-[400px] rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #e91e8c 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #9b59b6 0%, transparent 70%)" }}
      />

      <div className="relative w-full max-w-md">
        <ProgressBar current={step} total={TOTAL_STEPS} />

        {/* Card */}
        <div className="overflow-hidden rounded-2xl border border-white/8 bg-[#1a1a2e]/60 p-8 backdrop-blur-xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {step === 1 && <Step1 onNext={goNext} />}
              {step === 2 && <Step2 onNext={goNext} onBack={goBack} />}
              {step === 3 && <Step3 onNext={goNext} onBack={goBack} />}
              {step === 4 && <Step4 onBack={goBack} onFinish={finish} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Step dots */}
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <motion.div
              key={i}
              animate={{
                width: step === i + 1 ? 24 : 8,
                opacity: step === i + 1 ? 1 : 0.3,
              }}
              transition={{ duration: 0.3 }}
              className="h-2 rounded-full"
              style={{ background: "linear-gradient(90deg, #e91e8c, #9b59b6)" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
