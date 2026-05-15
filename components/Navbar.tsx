'use client'
import React, { useEffect, useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'
export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navLinks = [
    {
      name: 'About',
      href: '#about',
    },
    {
      name: 'Skills',
      href: '#skills',
    },
    {
      name: 'Projects',
      href: '#projects',
    },
    {
      name: 'Experience',
      href: '#experience',
    },
    {
      name: 'Contact',
      href: '#contact',
    },
  ]
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    }
  }
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      {/* Desktop pill nav */}
      <nav className="hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-xl rounded-full px-2 py-2 shadow-lg shadow-black/[0.03] border border-gray-200/50">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Mobile nav */}
      <div className="md:hidden w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg shadow-black/[0.03] border border-gray-200/50">
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-sm font-semibold text-gray-900">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="px-2 pb-3 border-t border-gray-100">
              <nav className="flex flex-col gap-1 pt-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
