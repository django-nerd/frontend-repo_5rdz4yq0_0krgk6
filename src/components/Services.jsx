import { Wrench, Workflow, Link2, Rocket } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'GoHighLevel (GHL) Systems',
    desc: 'Pipeline setup, automations, workflows, triggers, calendars, and CRM hygiene that scales.'
  },
  {
    icon: Workflow,
    title: 'n8n & Make Scenarios',
    desc: 'Reliable, monitored workflows with error handling, retries, and modular nodes.'
  },
  {
    icon: Link2,
    title: 'Zapier Integrations',
    desc: 'Fast, maintainable zaps that connect your stack: Airtable, Slack, Sheets, Webhooks and more.'
  },
  {
    icon: Rocket,
    title: 'Ops Audits & Optimization',
    desc: 'Audit existing automations, remove bottlenecks, and improve delivery speed and reliability.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-950 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">What I do</h2>
          <p className="mt-3 text-blue-200/80">Automation and CRM ops with a focus on clarity, documentation, and long-term maintainability.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
              <div className="mb-4 inline-flex rounded-lg border border-white/10 bg-white/5 p-2 text-blue-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-blue-200/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
