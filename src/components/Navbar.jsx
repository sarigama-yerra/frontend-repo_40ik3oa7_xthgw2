import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Approach', href: '#approach' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/10 backdrop-blur-xl px-5 py-3 shadow-[0_0_1px_1px_rgba(255,255,255,0.15)_inset]">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 via-violet-500 to-fuchsia-500 text-white shadow-lg">
              <Sparkles size={18} />
            </span>
            <span className="font-semibold tracking-tight text-white">Steve Hooper AI</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-4 py-2 font-medium shadow-sm hover:shadow-md transition-shadow">
              Start a project
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white" aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-4 md:hidden">
            <div className="flex flex-col gap-3 text-white/90">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="rounded-lg px-3 py-2 hover:bg-white/10" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="rounded-lg px-3 py-2 bg-white text-gray-900 font-medium text-center" onClick={() => setOpen(false)}>
                Start a project
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
