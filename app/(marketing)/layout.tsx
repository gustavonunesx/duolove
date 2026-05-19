import type { Metadata } from "next";
import { MarketingHeader } from "@/components/marketing/marketing-header";
import { MarketingFooter } from "@/components/marketing/marketing-footer";

export const metadata: Metadata = {
  title: "DuoLove — Sua vida a dois, organizada",
  description:
    "O app de calendário compartilhado para casais. Organizem a rotina, celebrem datas especiais e registrem memórias juntos.",
  openGraph: {
    title: "DuoLove — Sua vida a dois, organizada",
    description:
      "O app de calendário compartilhado para casais. Organizem a rotina, celebrem datas especiais e registrem memórias juntos.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "DuoLove — Sua vida a dois, organizada",
    description:
      "O app de calendário compartilhado para casais. Organizem a rotina, celebrem datas especiais e registrem memórias juntos.",
  },
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <MarketingHeader />
      <main className="flex-1">{children}</main>
      <MarketingFooter />
    </div>
  );
}
