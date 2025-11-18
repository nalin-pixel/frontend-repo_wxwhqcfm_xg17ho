import { Truck, Box, Route, Database } from 'lucide-react'

const projects = [
  {
    title: 'Fleet ETA Predictor',
    description: 'Gradient-boosted ETA model that reduced late arrivals by 18% across a 120-vehicle fleet.',
    icon: Route,
    tags: ['Python', 'XGBoost', 'FastAPI', 'MongoDB'],
  },
  {
    title: 'Warehouse Slotting Optimizer',
    description: 'Heuristic + MILP engine to optimize pick paths and slotting, improving throughput by 22%.',
    icon: Box,
    tags: ['OR-Tools', 'NumPy', 'React'],
  },
  {
    title: 'Real-time Tracking Dashboard',
    description: 'Websocket-powered control tower for live fleet visibility and exception management.',
    icon: Truck,
    tags: ['React', 'Tailwind', 'WebSockets'],
  },
  {
    title: 'Ops Data Platform',
    description: 'Event-driven pipelines and curated datasets for ops analytics and forecasting.',
    icon: Database,
    tags: ['dbt', 'Airflow', 'BigQuery'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Highlighted projects</h2>
            <p className="mt-2 text-slate-300">A selection of tools built for logistics and supply chain operations.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-3xl border border-white/10 bg-slate-900/50 p-6 transition hover:border-cyan-400/40 hover:bg-slate-900/60">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-content-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              </div>
              <p className="mt-3 text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
    </section>
  )
}
