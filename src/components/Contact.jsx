import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const backend = import.meta.env.VITE_BACKEND_URL || '';
      const res = await fetch(`${backend}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
          source: 'portfolio',
        }),
      });

      if (!res.ok) throw new Error('Request failed');
      setStatus('Thanks! I will reply shortly.');
      e.target.reset();
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  }

  return (
    <section id="contact" className="relative bg-slate-950 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Let’s build</h2>
          <p className="mt-3 text-blue-200/80">Tell me about your stack and what you want to automate. I’ll reply within 24 hours.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="mb-2 block text-sm text-blue-200/80">Name</label>
            <input name="name" required className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white outline-none ring-blue-500/30 placeholder:text-blue-200/50 focus:ring-2" placeholder="Your name" />
          </div>
          <div className="sm:col-span-1">
            <label className="mb-2 block text-sm text-blue-200/80">Email</label>
            <input name="email" type="email" required className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white outline-none ring-blue-500/30 placeholder:text-blue-200/50 focus:ring-2" placeholder="you@company.com" />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-2 block text-sm text-blue-200/80">Project details</label>
            <textarea name="message" rows="4" required className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white outline-none ring-blue-500/30 placeholder:text-blue-200/50 focus:ring-2" placeholder="What do you need automated?" />
          </div>
          <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-600">Send message</button>
            <p className="text-sm text-blue-200/80">{status}</p>
          </div>
        </form>
      </div>
    </section>
  );
}
