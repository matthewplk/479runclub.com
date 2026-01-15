"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200 space-y-6"
      >
        <header className="text-center mb-12">
        <h1 className="text-4xl font-black text-slate-900">Contact Us</h1>
        <p className="mt-4 text-slate-600">
          Questions, partnerships, or general inquiries — we’d love to hear from you.
        </p>
        </header>

        {/* Name */}
        <div className="space-y-1">
          <label className="text-sm font-semibold text-slate-700">
            Name
          </label>
          <input
            name="name"
            required
            placeholder="Your full name"
            className="w-full rounded-xl border border-slate-300 px-4 py-3
                       focus:outline-none focus:ring-2 focus:ring-slate-900/20
                       focus:border-slate-400 transition"
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="text-sm font-semibold text-slate-700">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-xl border border-slate-300 px-4 py-3
                       focus:outline-none focus:ring-2 focus:ring-slate-900/20
                       focus:border-slate-400 transition"
          />
        </div>

        {/* Message */}
        <div className="space-y-1">
          <label className="text-sm font-semibold text-slate-700">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="How can we help?"
            className="w-full rounded-xl border border-slate-300 px-4 py-3
                       focus:outline-none focus:ring-2 focus:ring-slate-900/20
                       focus:border-slate-400 transition resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-xl bg-slate-900 text-white py-3 font-semibold
                     hover:opacity-95 active:scale-[0.99]
                     transition disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>

        {/* Feedback */}
        {status === "sent" && (
          <div className="rounded-xl bg-green-50 border border-green-200 p-3 text-center text-green-700 text-sm">
            ✅ Message sent successfully — we’ll be in touch soon.
          </div>
        )}

        {status === "error" && (
          <div className="rounded-xl bg-red-50 border border-red-200 p-3 text-center text-red-700 text-sm">
            ⚠️ Something went wrong. Please try again in a moment.
          </div>
        )}
      </form>
    </main>
  );
}
