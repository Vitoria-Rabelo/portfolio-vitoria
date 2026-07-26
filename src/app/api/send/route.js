import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_123");

export async function POST(req) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "RESEND_API_KEY não configurada no ambiente." },
      { status: 500 }
    );
  }

  try {
    const { email, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["tec.vitoriarabelosantiago@gmail.com"],
      replyTo: email,
      subject: `Portfólio: ${subject}`,
      html: `
        <h1>Assunto: ${subject}</h1>
        <p>Você recebeu uma nova mensagem de: <strong>${email}</strong></p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Erro na Resend:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}