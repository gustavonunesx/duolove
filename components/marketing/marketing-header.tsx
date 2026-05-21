"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/shared/logo";

const navLinks = [
  { label: "Funcionalidades", href: "#features" },
  { label: "Como funciona", href: "#how-it-works" },
  { label: "Depoimentos", href: "#testimonials" },
  { label: "Preços", href: "#pricing" },
];

export function MarketingHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-bordeaux/20 bg-espresso/90 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/home" aria-label="DuoLove — página inicial">
          <Logo />
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Menu principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-taupe transition-colors duration-200 hover:text-ivory"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Botões desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="text-sm text-taupe transition-colors duration-200 hover:text-ivory"
          >
            Entrar
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-bordeaux px-5 py-2 text-sm font-semibold text-ivory transition-all duration-200 hover:bg-bordeaux-light"
          >
            Começar grátis
          </Link>
        </div>

        {/* Botão mobile */}
        <button
          className="flex items-center justify-center rounded-md p-2 text-taupe transition-colors hover:text-ivory md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-t border-bordeaux/20 bg-espresso/95 backdrop-blur-sm md:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Menu mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-sm text-taupe transition-colors hover:bg-mahogany hover:text-ivory"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-bordeaux/15 pt-3">
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 text-sm text-taupe transition-colors hover:text-ivory"
                >
                  Entrar
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full bg-bordeaux px-4 py-3 text-center text-sm font-semibold text-ivory transition-all hover:bg-bordeaux-light"
                >
                  Começar grátis
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
