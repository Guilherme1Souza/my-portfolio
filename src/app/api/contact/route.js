import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Garante execução no runtime Node (nodemailer não roda em edge).
export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(str) {
  return str.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c],
  );
}

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  const name = String(data?.name ?? "").trim();
  const email = String(data?.email ?? "").trim();
  const message = String(data?.message ?? "").trim();
  const honeypot = String(data?.company ?? "").trim(); // campo oculto anti-bot

  // Bot preencheu o honeypot: finge sucesso para não dar pistas.
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  // Validação no servidor (não confiar só no cliente).
  const errors = {};
  if (name.length < 2) errors.name = "Informe seu nome.";
  if (!EMAIL_RE.test(email)) errors.email = "E-mail inválido.";
  if (message.length < 10) errors.message = "Escreva uma mensagem um pouco maior.";
  if (message.length > 5000) errors.message = "Mensagem muito longa.";
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Dados inválidos.", errors }, { status: 422 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("[/api/contact] SMTP não configurado — defina as variáveis em .env.local");
    return NextResponse.json(
      { error: "Envio indisponível no momento. Use o e-mail direto ao lado." },
      { status: 503 },
    );
  }

  try {
    const port = Number(SMTP_PORT) || 587;
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465, // 465 = TLS implícito; 587 = STARTTLS
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Portfólio · Contato" <${SMTP_USER}>`,
      to: CONTACT_TO || SMTP_USER,
      replyTo: `"${name}" <${email}>`,
      subject: `Novo contato pelo portfólio — ${name}`,
      text: `Nome: ${name}\nE-mail: ${email}\n\n${message}`,
      html: `
        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[/api/contact] Falha ao enviar e-mail:", err);
    return NextResponse.json(
      { error: "Não foi possível enviar agora. Tente novamente em instantes." },
      { status: 502 },
    );
  }
}
