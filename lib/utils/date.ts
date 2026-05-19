export function daysBetween(from: Date, to: Date = new Date()): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.floor((to.getTime() - from.getTime()) / msPerDay);
}

export function formatDate(date: string | Date, locale = "pt-BR"): string {
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function formatDateTime(date: string | Date, locale = "pt-BR"): string {
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

export function isToday(date: string | Date): boolean {
  const d = new Date(date);
  const now = new Date();
  return (
    d.getDate() === now.getDate() &&
    d.getMonth() === now.getMonth() &&
    d.getFullYear() === now.getFullYear()
  );
}
