import { Code2, Workflow, PlugZap, ServerCog } from 'lucide-react';

const items = [
  {
    icon: Workflow,
    title: 'Multi-branch n8n lead router',
    badges: ['n8n', 'Airtable', 'Webhooks'],
    desc: 'Consolidated 6 lead sources into a single router with validation, dedupe, and alerts. Reduced lead leakage by 94%.'
  },
  {
    icon: PlugZap,
    title: 'Zapier + GHL billing sync',
    badges: ['Zapier', 'GHL', 'Stripe'],
    desc: 'Accurate invoice status inside GHL using Stripe webhooks, Zapier storage, and rollback logic.'
  },
  {
    icon: ServerCog,
    title: 'Make scenario uptime guard',
    badges: ['Make', 'Slack', 'Ops'],
    desc: 'Heartbeat pings and Slack alerts for critical flows, with self-retry and escalation policy.'
  }
];

export default function Work() {
  return (
    <section id="work" className="relative bg-slate-950 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Selected work</h2>
          <p className="mt-3 text-blue-200/80">Highlights from recent automation projects. Details available on request.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, badges, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6">
              <div className="mb-3 flex items-center gap-2 text-blue-300">
                <Icon className="h-5 w-5" />
                <span className="text-sm font-medium">{title}</span>
              </div>
              <div className="mb-3 flex flex-wrap gap-2">
                {badges.map((b) => (
                  <span key={b} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-blue-200/80">{b}</span>
                ))}
              </div>
              <p className="text-sm text-blue-200/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
