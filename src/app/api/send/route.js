import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev", 
      
      to: ["tec.vitoriarabelosantiago@gmail.com"], 
      
      reply_to: email, 
      
      subject: `Portfólio: ${subject}`,
      react: (
        <>
          <h1>Assunto: {subject}</h1>
          <p>Você recebeu uma nova mensagem de: <strong>{email}</strong></p>
          <p><strong>Mensagem:</strong></p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Erro na Resend:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}