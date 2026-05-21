import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { ThemeProvider } from "@/components/shared/theme-provider";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DuoLove — Sua vida a dois, organizada",
    template: "%s | DuoLove",
  },
  description:
    "O app de calendário compartilhado para casais. Organizem a rotina, celebrem datas especiais e registrem memórias juntos.",
  keywords: ["casal", "calendário compartilhado", "relacionamento", "organização", "agenda"],
  authors: [{ name: "DuoLove" }],
  creator: "DuoLove",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "DuoLove",
    title: "DuoLove — Sua vida a dois, organizada",
    description:
      "O app de calendário compartilhado para casais. Organizem a rotina, celebrem datas especiais e registrem memórias juntos.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DuoLove — Sua vida a dois, organizada",
    description:
      "O app de calendário compartilhado para casais. Organizem a rotina, celebrem datas especiais e registrem memórias juntos.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0d" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={bricolage.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
