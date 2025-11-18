export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 md:p-10">
          <h2 className="text-3xl font-bold text-white tracking-tight">About me</h2>
          <p className="mt-4 text-slate-300">
            I specialize in building products at the intersection of logistics and technology. My work spans predictive models, optimization tools, and intuitive dashboards that help ops teams move faster and make better decisions.
          </p>
          <ul className="mt-6 grid gap-3 text-slate-200">
            <li>• End-to-end product delivery: discovery → design → build → launch</li>
            <li>• Strong foundations in data science, optimization, and systems design</li>
            <li>• Passion for clean interfaces and delightful user experiences</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
