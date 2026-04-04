'use client'

import { navItems } from '@/lib/constants'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { MdClose, MdDarkMode, MdLightMode, MdMenu } from 'react-icons/md'

export function Header() {
  const pathname = usePathname()

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    return pathname === href
  }

  return (
    <header className="w-full z-50 container-header py-8 flex items-center justify-between relative">
      {/* Logo */}
      <div className="text-xl sm:text-2xl font-bold text-foreground">
        <Link href="/">efaz.dev</Link>
      </div>

      {/* Nav Items - Desktop */}
      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-link text-sm px-2 relative transition-all duration-300 ${
              isActive(item.href) ? 'active' : ''
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Right Side - Theme Toggle & Mobile Menu */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2  rounded-md hover:bg-surface-hover transition-colors"
          aria-label="Toggle theme"
        >
          {mounted &&
            (theme === 'dark' ? (
              <MdLightMode size={20} />
            ) : (
              <MdDarkMode size={20} />
            ))}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-surface-hover transition-colors"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer - Fullscreen Modal */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 md:hidden bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden z-50 w-full max-w-lg flex items-center justify-center p-4">
            <div className="w-full bg-background border border-border rounded-xl shadow-2xl animate-in fade-in zoom-in-95 duration-300">
              {/* Header with Close Button */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="text-lg font-semibold text-foreground">Menu</h2>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-surface-hover transition-colors"
                  aria-label="Close menu"
                >
                  <MdClose size={24} className="text-foreground" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="flex flex-col p-4 gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? 'bg-surface-hover '
                        : 'hover:bg-surface-hover'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Theme Toggle in Drawer */}
              <div className="border-t border-border p-4">
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="w-full px-4 py-3 rounded-lg bg-surface hover:bg-surface-hover transition-colors flex items-center justify-center gap-2 text-foreground font-medium"
                  aria-label="Toggle theme"
                >
                  {mounted &&
                    (theme === 'dark' ? (
                      <>
                        <MdLightMode size={20} />
                        Light Mode
                      </>
                    ) : (
                      <>
                        <MdDarkMode size={20} />
                        Dark Mode
                      </>
                    ))}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
