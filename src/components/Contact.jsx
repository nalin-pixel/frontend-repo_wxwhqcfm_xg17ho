import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const submit = (e) => {
    e.preventDefault()
    setStatus('Thanks! I will get back to you soon.')
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 md:p-10">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-content-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white">
              <Mail className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Let’s connect</h2>
          </div>
          <p className="mt-2 text-slate-300">Have a project in logistics or supply chain? I’d love to help.</p>

          <form onSubmit={submit} className="mt-6 grid gap-4">
            <input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Your email" required />
            <textarea rows={4} className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Tell me about your project" required />
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 px-5 py-3 font-medium text-white">
              <Send className="h-4 w-4" /> Send message
            </button>
            {status && <p className="text-sm text-cyan-300">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
