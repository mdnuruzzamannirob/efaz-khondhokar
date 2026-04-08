'use client'

import { techStack } from '@/data/about'
import { socialLinks } from '@/data/social-link'
import { containerVariants, itemVariants } from '@/lib/constants'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  FaBrain,
  FaCode,
  FaDatabase,
  FaExternalLinkAlt,
  FaServer,
  FaTools,
} from 'react-icons/fa'

const categoryIcons: Record<string, typeof FaCode> = {
  Frontend: FaCode,
  Backend: FaServer,
  Database: FaDatabase,
  'DevOps & Tools': FaTools,
  'Other Skills': FaBrain,
}

const categoryColors: Record<
  string,
  { bg: string; border: string; icon: string }
> = {
  Frontend: {
    bg: 'from-blue-500/10 to-cyan-500/10',
    border: 'border-blue-500/20 hover:border-blue-500/40',
    icon: 'text-blue-500',
  },
  Backend: {
    bg: 'from-violet-500/10 to-purple-500/10',
    border: 'border-violet-500/20 hover:border-violet-500/40',
    icon: 'text-violet-500',
  },
  Database: {
    bg: 'from-emerald-500/10 to-green-500/10',
    border: 'border-emerald-500/20 hover:border-emerald-500/40',
    icon: 'text-emerald-500',
  },
  'DevOps & Tools': {
    bg: 'from-amber-500/10 to-orange-500/10',
    border: 'border-amber-500/20 hover:border-amber-500/40',
    icon: 'text-amber-500',
  },
  'Other Skills': {
    bg: 'from-pink-500/10 to-rose-500/10',
    border: 'border-pink-500/20 hover:border-pink-500/40',
    icon: 'text-pink-500',
  },
}

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
}

export default function TechStack() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Large Background Page Title - Bottom Left */}
      <div className="fixed left-0 bottom-0 pointer-events-none z-0 overflow-hidden">
        <h1 className="text-9xl sm:text-[12rem] md:text-[14rem] lg:text-[16rem] font-bold tracking-tighter text-foreground/3 whitespace-nowrap -ml-20">
          Tech Stack
        </h1>
      </div>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-body flex flex-col pt-32 pb-20 relative z-10"
      >
        {/* Title */}
        <motion.div variants={itemVariants} className="mb-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
            Tech Stack.
          </h1>
        </motion.div>
        {/* Intro */}
        <motion.p
          variants={itemVariants}
          className="mb-14 max-w-2xl leading-8 text-foreground/75"
        >
          My toolkit for building scalable, robust backend systems and modern
          applications. Master of server-side architecture, database design, and
          DevOps practices—crafted to deliver performance and reliability at
          every level.
        </motion.p>

        <div className="grid gap-8 lg:gap-12">
          {techStack.map((category) => {
            const Icon = categoryIcons[category.category] || FaCode
            const colors =
              categoryColors[category.category] || categoryColors.Frontend

            return (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="group"
              >
                {/* Category Header */}
                <div className="mb-8 flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-lg bg-linear-to-br ${colors.bg} border ${colors.border} transition-all`}
                  >
                    <Icon className={`text-2xl ${colors.icon}`} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {category.category}
                    </h2>
                    <p className="text-sm text-foreground/50">
                      {category.skills.length} technologies
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={skill}
                      variants={skillVariants}
                      transition={{
                        delay: idx * 0.05,
                      }}
                      whileHover={{ y: -4 }}
                      className="group/skill"
                    >
                      <div
                        className={`relative flex flex-col items-center justify-center rounded-xl border px-4 py-4 text-center transition-all duration-300 ${colors.border} bg-linear-to-br ${colors.bg} hover:shadow-lg hover:shadow-foreground/10`}
                      >
                        <span className="text-sm font-semibold text-foreground/80 group-hover/skill:text-foreground transition-colors">
                          {skill}
                        </span>

                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 rounded-xl opacity-0 blur-lg group-hover/skill:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Stats section */}
        <motion.div
          variants={itemVariants}
          className="mt-24 grid grid-cols-2 gap-6 rounded-xl border border-foreground/10 bg-foreground/2 p-8 md:grid-cols-4"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-500">5</div>
            <p className="mt-2 text-sm text-foreground/60">Categories</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-violet-500">30+</div>
            <p className="mt-2 text-sm text-foreground/60">Technologies</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-500">8+</div>
            <p className="mt-2 text-sm text-foreground/60">Years Exp.</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-500">100%</div>
            <p className="mt-2 text-sm text-foreground/60">Dedicated</p>
          </div>
        </motion.div>

        {/* Footer Links */}
        <motion.div variants={itemVariants} className="mb-14 mt-20">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-lg font-semibold text-foreground transition-colors hover:text-foreground/80"
          >
            View Projects
            <FaExternalLinkAlt className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-5 pt-8"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon

            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-foreground/60 transition-colors hover:text-foreground"
              >
                <Icon size={22} />
              </motion.a>
            )
          })}
        </motion.div>
      </motion.section>
    </div>
  )
}
