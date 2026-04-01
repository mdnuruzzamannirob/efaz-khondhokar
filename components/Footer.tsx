'use client'

import { motion } from 'framer-motion'
import {
  Dribbble,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react'

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Dribbble, href: 'https://dribbble.com', label: 'Dribbble' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
]

export function Footer() {
  return (
    <footer className="flex justify-center items-center gap-6 py-8 px-4">
      {socialLinks.map((social, idx) => {
        const Icon = social.icon
        return (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Icon size={24} />
          </motion.a>
        )
      })}
    </footer>
  )
}
