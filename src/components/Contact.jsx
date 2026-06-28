import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://getform.io/f/bnllyomb", {
      method: "POST",
      body: new FormData(e.target),
    }).then(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    });
  };

  return (
    <div
      name="contact"
      className="scroll-mt-24 w-full bg-gradient-to-b from-black to-gray-800 py-16 text-white sm:py-20"
    >
      <div className="mx-auto flex h-full max-w-screen-lg flex-col justify-center px-4 sm:px-6">
        <div className="pb-8">
          <p className="inline border-b-4 border-gray-500 p-2 text-4xl font-bold">
            Contact
          </p>
          <p className="py-6 text-gray-300">
            Let’s build something meaningful together. Feel free to reach out for opportunities, collaborations, or just to say hello.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-gray-900/70 p-6 shadow-xl shadow-black/30">
            <h3 className="mb-4 text-xl font-semibold text-cyan-300">Quick connect</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <p>Open to internships, freelance projects, and full-time opportunities.</p>
              <p>Response time is usually within 1–2 business days.</p>
              <p>Prefer email or LinkedIn for professional conversations.</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col rounded-2xl border border-gray-700 bg-gray-900/70 p-6 shadow-xl shadow-black/30"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="rounded-lg border border-gray-600 bg-transparent p-3 text-white placeholder-gray-400 outline-none focus:border-cyan-400"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="my-4 rounded-lg border border-gray-600 bg-transparent p-3 text-white placeholder-gray-400 outline-none focus:border-cyan-400"
            />
            <textarea
              name="message"
              rows="8"
              required
              placeholder="Tell me about your idea or opportunity"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="rounded-lg border border-gray-600 bg-transparent p-3 text-white placeholder-gray-400 outline-none focus:border-cyan-400"
            ></textarea>

            <button
              type="submit"
              className="mx-auto mt-6 flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-white transition duration-300 hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>

        {submitted && (
          <p className="mt-6 text-center text-lg text-cyan-400">
            Thank you for your message! I’ll get back to you soon.
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
