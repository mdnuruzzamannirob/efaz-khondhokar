'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="w-full z-50 container-header py-8 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-foreground">
        <Link href="/">Efaz.dev</Link>
      </div>

      {/* Nav Items */}
      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="nav-link text-sm px-2 relative"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Theme Toggle */}
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-2"
        aria-label="Toggle theme"
      >
        {mounted && (theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />)}
      </button>
    </header>
  )
}
