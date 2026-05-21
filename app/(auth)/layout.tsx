"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Logo } from "@/components/shared/logo";

const TAGLINES = [
  "Organizem a vida. Celebrem o amor.",
  "Uma agenda, dois corações.",
  "Cada dia junto, registrado.",
  "Sua história merece um lugar especial.",
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const tagline = TAGLINES[0];

  return (
    <div className="relative flex min-h-screen overflow-hidden bg-[#0d0d0d]">
      {/* Decorative background blobs */}
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #e91e8c 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #9b59b6 0%, transparent 70%)" }}
      />

      {/* Left panel — brand identity */}
      <div className="relative hidden w-[46%] flex-shrink-0 overflow-hidden lg:flex">
        {/* gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(145deg, #e91e8c 0%, #9b59b6 55%, #1a1a2e 100%)",
          }}
        />
        {/* noise grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px",
          }}
        />
        {/* decorative rings */}
        <div className="absolute right-[-120px] top-[30%] h-[400px] w-[400px] rounded-full border border-white/10" />
        <div className="absolute right-[-80px] top-[38%] h-[280px] w-[280px] rounded-full border border-white/10" />

        <div className="relative flex flex-col items-start justify-between p-12 text-white">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/">
              <Logo size="lg" className="[&_span]:text-white [&_span]:[background:none] [&_span]:[-webkit-text-fill-color:white]" />
            </Link>
          </motion.div>

          {/* Center copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-sm"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Para casais apaixonados
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight">
              {tagline}
            </h1>
            <p className="text-base leading-relaxed text-white/70">
              O app que cuida da rotina para vocês terem mais tempo para se amarem.
            </p>

            {/* Decorative hearts */}
            <div className="mt-10 flex items-center gap-3">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
                  className="h-2 w-2 rounded-full bg-white/50"
                />
              ))}
            </div>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm"
          >
            <p className="mb-3 text-sm italic leading-relaxed text-white/90">
              &ldquo;Finalmente paramos de esquecer as datas importantes. O DuoLove mudou a forma como nos organizamos.&rdquo;
            </p>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-white/20 text-center text-xs leading-7">
                💕
              </div>
              <span className="text-xs text-white/60">Ana & Pedro, juntos há 3 anos</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right panel — form area */}
      <div className="relative flex flex-1 flex-col items-center justify-center px-6 py-12 lg:px-12">
        {/* Mobile logo */}
        <div className="mb-8 lg:hidden">
          <Link href="/">
            <Logo size="md" />
          </Link>
        </div>

        <div className="w-full max-w-md">
          {children}
        </div>

        <p className="mt-8 text-center text-xs text-[#8b8b9e]">
          Ao continuar, você concorda com os{" "}
          <Link href="#" className="text-[#e91e8c] underline-offset-2 hover:underline">
            Termos de Uso
          </Link>{" "}
          e a{" "}
          <Link href="#" className="text-[#e91e8c] underline-offset-2 hover:underline">
            Política de Privacidade
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
