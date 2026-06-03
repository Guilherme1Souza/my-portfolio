"use client";

import { useState } from "react";
import Button from "@/components/UI/Button/page";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMPTY = { name: "", email: "", message: "", company: "" };

const inputBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-title placeholder:text-text/40 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-verde/40";

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [feedback, setFeedback] = useState("");

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (form.name.trim().length < 2) next.name = "Informe seu nome.";
    if (!EMAIL_RE.test(form.email.trim())) next.email = "E-mail inválido.";
    if (form.message.trim().length < 10) next.message = "Escreva uma mensagem um pouco maior.";
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (data.errors) setErrors(data.errors);
        throw new Error(data.error || "Erro ao enviar.");
      }

      setStatus("success");
      setFeedback("Mensagem enviada! Retorno o quanto antes. 🙌");
      setForm(EMPTY);
    } catch (err) {
      setStatus("error");
      setFeedback(err.message || "Não foi possível enviar agora.");
    }
  };

  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {/* Honeypot anti-bot — invisível para humanos */}
      <input
        type="text"
        name="company"
        value={form.company}
        onChange={update("company")}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-title font-medium text-sm">
          Nome
        </label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={update("name")}
          placeholder="Seu nome"
          aria-invalid={!!errors.name}
          className={`${inputBase} ${errors.name ? "border-red-400 focus:ring-red-300" : "border-title/15"}`}
        />
        {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-title font-medium text-sm">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={update("email")}
          placeholder="voce@email.com"
          aria-invalid={!!errors.email}
          className={`${inputBase} ${errors.email ? "border-red-400 focus:ring-red-300" : "border-title/15"}`}
        />
        {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-title font-medium text-sm">
          Mensagem
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Conte um pouco sobre o projeto ou a oportunidade…"
          aria-invalid={!!errors.message}
          className={`${inputBase} resize-y ${errors.message ? "border-red-400 focus:ring-red-300" : "border-title/15"}`}
        />
        {errors.message && <span className="text-red-500 text-xs">{errors.message}</span>}
      </div>

      <Button type="submit" variant="primary" size="lg" loading={sending} className="text-white mt-1 self-start">
        {sending ? "Enviando…" : "Enviar mensagem"}
      </Button>

      {feedback && (
        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${status === "success" ? "text-verde" : "text-red-500"}`}
        >
          {feedback}
        </p>
      )}
    </form>
  );
}
