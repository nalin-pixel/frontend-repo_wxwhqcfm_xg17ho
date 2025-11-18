import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="backdrop-blur-sm rounded-3xl border border-white/10 bg-slate-900/40 p-8 md:p-10"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                Logistics • Supply Chain • Tech
              </div>
              <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                Building seamless logistics solutions
              </h1>
              <p className="mt-4 text-slate-300 text-base md:text-lg max-w-prose">
                I design and ship modern, data-driven tools for freight, warehousing, and last-mile delivery. From dashboards to optimization engines, I bring clarity and speed to supply chains.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#projects" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 px-5 py-3 font-medium text-white shadow-lg shadow-cyan-500/20">
                  View projects
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90">
                  Get in touch
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(59,130,246,0.15),transparent_70%)]" />
    </section>
  )
}
