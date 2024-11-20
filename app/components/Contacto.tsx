"use client";

import { useState } from "react";

export default function Contacto() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        throw new Error("Error al enviar el formulario");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <section className="py-16 bg-slate-950 text-white" id="Contacto">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>

        {formStatus === "success" && (
          <p className="text-green-400 text-center mb-4 font-semibold">
            Your form has been sent successfully!
          </p>
        )}
        {formStatus === "error" && (
          <p className="text-red-400 text-center mb-4 font-semibold">
            There was an error sending the form. Please try again.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6  p-8 rounded-lg">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Your email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full p-3 border border-white rounded-md bg-slate-950 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="subject">
              Subject:
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              className="w-full p-3 border border-white rounded-md bg-slate-950 text-white"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Your message:
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={5}
              className="w-full p-3 border border-white rounded-md bg-slate-950 text-white"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full p-3 text-center bg-slate-950 text-white border border-white font-bold rounded-md hover:bg-white hover:text-black transition duration-200"
            disabled={formStatus === "sending"}
          >
            {formStatus === "sending" ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}
