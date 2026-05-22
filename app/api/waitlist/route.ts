import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const result = schema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ error: "Email inválido" }, { status: 400 });
  }

  // TODO: conectar a Supabase, Mailchimp, ConvertKit ou Resend
  console.log("[waitlist]", result.data.email, new Date().toISOString());

  return NextResponse.json({ success: true });
}
