import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'SERVICES', href: '#services' },
    { label: 'PROCESS', href: '#process' },
    { label: 'RESULTS', href: '#proof' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'INTEL', href: '#faq' },
    { label: 'CONTACT', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[var(--color-border)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl px-6 flex items-center justify-between h-20" style={{margin: '0 auto'}}>
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <img
            src="/brand/new%20washfather_transparent.png"
            alt="The WashFather"
            className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-bold text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] tracking-widest transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="tel:5163239495"
            className="hidden lg:block text-sm font-bold text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors tracking-wider border-r border-[var(--color-border)] pr-7"
          >
            516-323-9495
          </a>
          <a
            href="#contact"
            className="cta-button !py-2.5 !px-5 !text-xs tracking-widest"
          >
            GET A QUOTE
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-[var(--color-text-primary)] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-[var(--color-text-primary)] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-[var(--color-text-primary)] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } bg-[#0a0a0a]/98 backdrop-blur-xl border-b border-[var(--color-border)]`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-bold tracking-widest text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:5163239495"
            className="text-sm font-bold tracking-wider text-[var(--color-text-muted)]"
            onClick={() => setMenuOpen(false)}
          >
            516-323-9495
          </a>
          <a href="#contact" className="cta-button !text-center tracking-widest !text-xs mt-1" onClick={() => setMenuOpen(false)}>
            GET A QUOTE
          </a>
        </div>
      </div>
    </nav>
  )
}
