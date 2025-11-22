import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-slate-950">
      {/* gradient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <span className="mb-4 inline-flex rounded-full border border-blue-300/20 bg-blue-300/10 px-3 py-1 text-xs font-medium tracking-wide text-blue-200">
            Tech VA • Automations • CRM Ops
          </span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Scalable automations for GHL, n8n, Zapier & Make
          </h1>
          <p className="mt-4 max-w-xl text-base text-blue-200/90 sm:text-lg">
            I design, build, and maintain no-code/low-code systems that connect your CRM,
            marketing, and ops. From GoHighLevel pipelines to advanced n8n flows, I turn
            manual processes into smooth, reliable automations.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-600"
            >
              Book a free consult
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              See recent work
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-blue-200/70">
            <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">GoHighLevel</span>
            <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">n8n</span>
            <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">Zapier</span>
            <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">Make (Integromat)</span>
            <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">Airtable</span>
            <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">Google Sheets</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 h-[400px] w-full md:order-2 md:h-[600px]"
        >
          <div className="relative h-full w-full rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-900/60">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
