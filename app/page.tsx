'use client'

import { GlitchText } from '@/components/GlitchText'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const socialLinks = [
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaEnvelope, href: 'mailto:contact@example.com', label: 'Email' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 container-body flex flex-col justify-center relative z-10 pt-20 pb-20"
      >
        {/* Heading with Glitch Effect */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="relative inline-block">
            <GlitchText
              text="I'M ADENEKEN WONDERFUL"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
            />
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl text-foreground/70 mb-16 max-w-3xl font-light"
        >
          Frontend Developer, UX Architect & JavaScript Engineer. Crafting
          digital experiences that matter.
        </motion.h2>

        {/* Bio Section */}
        <motion.div
          variants={itemVariants}
          className="space-y-6 mb-16 max-w-3xl"
        >
          <p className="text-lg leading-relaxed text-foreground/80">
            I spend my days painting the internet canvas with{' '}
            <Link
              href="/projects"
              className="font-semibold text-foreground hover:text-foreground/80 inline-flex items-center gap-1 group"
            >
              beautiful projects
              <span className="group-hover:translate-x-1 transition-transform inline-block">
                →
              </span>
            </Link>{' '}
            and lines of code, turning zeroes and ones into immersive,
            interactive experiences.
          </p>

          <p className="text-lg leading-relaxed text-foreground/80">
            Minimalist at heart. Lover of clean design, good music, and
            meaningful code. When I'm not building web experiences, you'll find
            me exploring new technologies through{' '}
            <Link
              href="/blog"
              className="font-semibold text-foreground hover:text-foreground/80 inline-flex items-center gap-1 group"
            >
              articles
              <span className="group-hover:translate-x-1 transition-transform inline-block">
                →
              </span>
            </Link>{' '}
            or enjoying the latest pop and jazz.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 mb-20"
        >
          <Link
            href="/about"
            className="px-8 py-3 bg-foreground text-background rounded-lg font-semibold hover:scale-105 transition-transform duration-300 inline-flex items-center gap-2 group"
          >
            Learn About Me
            <FaArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            href="/projects"
            className="px-8 py-3 border-2 border-foreground text-foreground rounded-lg font-semibold hover:bg-foreground/10 transition-all duration-300"
          >
            View My Work
          </Link>
        </motion.div>

        {/* Featured Section */}
        <motion.div variants={itemVariants} className="mb-20">
          <h3 className="text-sm uppercase tracking-widest text-foreground/60 mb-8">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Modern Portfolio',
                desc: 'Next.js + Framer Motion showcase',
                tags: ['NextJS', 'TypeScript', 'Tailwind'],
              },
              {
                title: 'Design System',
                desc: 'Comprehensive React components',
                tags: ['React', 'Components', 'CSS'],
              },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="p-6 border border-foreground/10 rounded-lg hover:border-foreground/30 transition-colors group cursor-pointer bg-background/50"
              >
                <h4 className="text-lg font-semibold mb-2 group-hover:text-foreground/80 transition-colors">
                  {project.title}
                </h4>
                <p className="text-foreground/60 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-foreground/10 text-foreground/70 group-hover:bg-foreground/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Section */}
        <motion.div
          variants={itemVariants}
          className="border-t border-foreground/10 pt-12"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div className="mb-8 sm:mb-0">
              <p className="text-foreground/60 mb-4">Let's connect</p>
              <div className="flex gap-4">
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
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + idx * 0.05 }}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-foreground/60 hover:text-foreground transition-colors"
                    >
                      <Icon size={24} />
                    </motion.a>
                  )
                })}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-sm text-foreground/50"
            >
              <p>© 2026 Adeneken Wonderful. All rights reserved.</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
