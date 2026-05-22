"use client";

import { useEffect, useRef, useState } from "react";
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
const ease = [0.16, 1, 0.3, 1] as const;

// ── Shared styles ─────────────────────────────────────────

const primaryBtn =
  "glow-bordeaux flex items-center justify-center gap-2 rounded-xl bg-bordeaux px-5 py-3 text-sm font-semibold text-ivory transition-all hover:bg-bordeaux-light disabled:opacity-60 active:scale-[0.98]";

const backBtn =
  "flex items-center gap-2 rounded-xl border border-mahogany-light bg-mahogany px-5 py-3 text-sm font-medium text-ivory transition-all hover:bg-mahogany-light";

const inputCls =
  "w-full rounded-xl border border-mahogany-light bg-espresso px-4 py-3 text-sm text-ivory outline-none transition-all placeholder:text-taupe/60 focus:border-bordeaux focus:ring-2 focus:ring-bordeaux/25 [color-scheme:dark]";

// ── Progress bar ──────────────────────────────────────────

function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="mb-8">
      <div className="mb-2 flex items-center justify-between">
        <Logo size="sm" />
        <span className="text-xs text-taupe" aria-live="polite">
          {current} de {total}
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-mahogany-light" role="progressbar" aria-valuenow={current} aria-valuemin={1} aria-valuemax={total}>
        <motion.div
          className="h-full rounded-full bg-bordeaux"
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
  const blobUrlRef = useRef<string | null>(null);

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
    if (!file) return;
    if (blobUrlRef.current) URL.revokeObjectURL(blobUrlRef.current);
    blobUrlRef.current = URL.createObjectURL(file);
    setAvatarPreview(blobUrlRef.current);
  }

  useEffect(() => {
    return () => {
      if (blobUrlRef.current) URL.revokeObjectURL(blobUrlRef.current);
    };
  }, []);

  return (
    <form onSubmit={handleSubmit(onNext)} noValidate className="space-y-5">
      <div className="mb-6">
        <h2 className="mb-1 text-2xl font-bold text-ivory">
          Seu perfil <span aria-hidden="true">👤</span>
        </h2>
        <p className="text-sm text-taupe">Vamos personalizar a sua experiência.</p>
      </div>

      {/* Avatar */}
      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="group relative h-24 w-24 overflow-hidden rounded-full border-2 border-dashed border-mahogany-light bg-espresso transition-all hover:border-bordeaux/50 hover:bg-mahogany"
          aria-label="Adicionar foto de perfil"
        >
          {avatarPreview ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={avatarPreview}
              alt="Pré-visualização do avatar"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-1">
              <User className="h-7 w-7 text-taupe transition-colors group-hover:text-bordeaux-light" />
              <Camera className="h-4 w-4 text-taupe/50 transition-colors group-hover:text-bordeaux-light/70" />
            </div>
          )}
          {avatarPreview && (
            <div className="absolute inset-0 flex items-center justify-center bg-espresso/50 opacity-0 transition-opacity group-hover:opacity-100">
              <Camera className="h-6 w-6 text-ivory" />
            </div>
          )}
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleAvatarChange}
          aria-hidden="true"
          tabIndex={-1}
        />
      </div>
      <p className="text-center text-xs text-taupe">Foto de perfil (opcional)</p>

      {/* Name */}
      <div>
        <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-taupe">
          Como você quer ser chamado?
        </label>
        <input
          id="name"
          type="text"
          placeholder="Seu nome"
          autoComplete="given-name"
          {...register("name")}
          className={inputCls}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-err" : undefined}
        />
        {errors.name && (
          <p id="name-err" className="mt-1.5 text-xs text-rose-warm">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Birth date */}
      <div>
        <label htmlFor="birthDate" className="mb-1.5 block text-xs font-medium text-taupe">
          Data de nascimento
        </label>
        <input
          id="birthDate"
          type="date"
          {...register("birthDate")}
          max={new Date().toISOString().split("T")[0]}
          className={inputCls}
          aria-invalid={!!errors.birthDate}
          aria-describedby={errors.birthDate ? "birthdate-err" : undefined}
        />
        {errors.birthDate && (
          <p id="birthdate-err" className="mt-1.5 text-xs text-rose-warm">
            {errors.birthDate.message}
          </p>
        )}
      </div>

      <button type="submit" className={`${primaryBtn} w-full`}>
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
        <h2 className="mb-1 text-2xl font-bold text-ivory">
          Quando tudo começou? <span aria-hidden="true">💕</span>
        </h2>
        <p className="text-sm text-taupe">
          A data que mudou tudo. Vamos comemorar juntos cada ano.
        </p>
      </div>

      <div>
        <label htmlFor="startDate" className="mb-1.5 block text-xs font-medium text-taupe">
          Data de início do relacionamento
        </label>
        <input
          id="startDate"
          type="date"
          {...register("startDate")}
          disabled={noOfficialDate}
          max={new Date().toISOString().split("T")[0]}
          className={`${inputCls} disabled:opacity-40`}
        />
      </div>

      <button
        type="button"
        onClick={() => setValue("noOfficialDate", !noOfficialDate)}
        aria-pressed={noOfficialDate}
        className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all ${
          noOfficialDate
            ? "border-bordeaux/40 bg-bordeaux/10"
            : "border-mahogany-light bg-espresso hover:border-bordeaux/30"
        }`}
      >
        <div
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-all ${
            noOfficialDate ? "border-bordeaux bg-bordeaux" : "border-mahogany-light bg-transparent"
          }`}
          aria-hidden="true"
        >
          {noOfficialDate && <Check className="h-3 w-3 text-ivory" />}
        </div>
        <div>
          <p className="text-sm font-medium text-ivory">Ainda não temos uma data oficial</p>
          <p className="text-xs text-taupe">Tudo bem. Vocês são o que importa.</p>
        </div>
      </button>

      <div className="flex gap-3 pt-2">
        <button type="button" onClick={onBack} className={backBtn}>
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </button>
        <button type="submit" className={`${primaryBtn} flex-1`}>
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
        <h2 className="mb-1 text-2xl font-bold text-ivory">
          Escolham o estilo de vocês <span aria-hidden="true">🎨</span>
        </h2>
        <p className="text-sm text-taupe">
          O tema pode ser trocado depois nas configurações.
        </p>
      </div>

      <div className="space-y-3" role="radiogroup" aria-label="Escolha de tema">
        {THEMES.map((theme) => (
          <button
            key={theme.id}
            type="button"
            onClick={() => setValue("theme", theme.id)}
            aria-pressed={selectedTheme === theme.id}
            className={`flex w-full items-center gap-4 rounded-xl border px-4 py-4 text-left transition-all ${
              selectedTheme === theme.id
                ? "border-transparent"
                : "border-mahogany-light bg-espresso hover:border-bordeaux/20"
            }`}
            style={
              selectedTheme === theme.id
                ? {
                    borderColor: theme.ring,
                    background: `${theme.ring}18`,
                    boxShadow: `0 0 16px ${theme.ring}20`,
                  }
                : undefined
            }
          >
            <div
              className="h-12 w-12 shrink-0 rounded-xl"
              style={{ background: theme.gradient }}
              aria-hidden="true"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span aria-hidden="true">{theme.emoji}</span>
                <span className="font-semibold text-ivory">{theme.label}</span>
              </div>
              <p className="text-xs text-taupe">{theme.desc}</p>
            </div>
            <div
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-all ${
                selectedTheme === theme.id ? "opacity-100" : "opacity-0"
              }`}
              style={{ background: theme.ring }}
              aria-hidden="true"
            >
              <Check className="h-3 w-3 text-white" />
            </div>
          </button>
        ))}
      </div>

      <div className="flex gap-3 pt-2">
        <button type="button" onClick={onBack} className={backBtn}>
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </button>
        <button type="submit" className={`${primaryBtn} flex-1`}>
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

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
    `Amor, vamos usar o DuoLove juntos? 💕 Entra com esse link: ${MOCK_LINK}`
  )}`;

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
        <h2 className="mb-1 text-2xl font-bold text-ivory">
          Convide seu amor <span aria-hidden="true">💌</span>
        </h2>
        <p className="text-sm text-taupe">
          A experiência completa só começa quando vocês dois estiverem aqui.
        </p>
      </div>

      {/* Invite code */}
      <div className="rounded-xl border border-bordeaux/20 bg-bordeaux/5 p-4 text-center">
        <p className="mb-1 text-xs text-taupe">Seu código de convite</p>
        <p className="text-2xl font-bold tracking-widest text-ivory">{MOCK_CODE}</p>
      </div>

      {/* Link + copy */}
      <div className="flex items-center gap-2 overflow-hidden rounded-xl border border-mahogany-light bg-espresso p-3">
        <p className="flex-1 truncate text-xs text-taupe">{MOCK_LINK}</p>
        <button
          onClick={copyLink}
          aria-label={copied ? "Link copiado" : "Copiar link de convite"}
          className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
            copied
              ? "bg-green-500/20 text-green-400"
              : "bg-mahogany-light text-ivory hover:bg-mahogany"
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

      <div className="flex gap-3 pt-2">
        <button type="button" onClick={onBack} className={backBtn}>
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </button>
        <button
          onClick={handleFinish}
          disabled={finishing}
          className={`${primaryBtn} flex-1`}
        >
          {finishing ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Abrindo o DuoLove...
            </>
          ) : (
            <>
              Começar a usar <span aria-hidden="true">🚀</span>
            </>
          )}
        </button>
      </div>

      <div className="text-center">
        <button
          onClick={handleFinish}
          disabled={finishing}
          className="text-sm text-taupe transition-colors hover:text-taupe-light disabled:opacity-40"
        >
          Pular por agora ›
        </button>
      </div>
    </div>
  );
}

// ── Slide variants ───────────────────────────────────────

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 56 : -56,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.35, ease },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -56 : 56,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.5, 0, 1, 0.5] as const },
  }),
};

// ── Main page ─────────────────────────────────────────────

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
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-espresso px-6 py-12">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[50vh] opacity-[0.06]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(48% 0.14 12), transparent)",
        }}
      />

      <div className="relative w-full max-w-md">
        <ProgressBar current={step} total={TOTAL_STEPS} />

        {/* Card */}
        <div className="overflow-hidden rounded-2xl border border-mahogany-light/30 bg-mahogany p-8">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {step === 1 && <Step1 onNext={goNext} />}
              {step === 2 && <Step2 onNext={goNext} onBack={goBack} />}
              {step === 3 && <Step3 onNext={goNext} onBack={goBack} />}
              {step === 4 && <Step4 onBack={goBack} onFinish={finish} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress dots */}
        <div
          className="mt-6 flex justify-center gap-2"
          aria-hidden="true"
        >
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <motion.div
              key={i}
              animate={{
                width: step === i + 1 ? 24 : 8,
                opacity: step === i + 1 ? 1 : 0.3,
              }}
              transition={{ duration: 0.3, ease }}
              className="h-2 rounded-full bg-bordeaux"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
