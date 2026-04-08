'use client'

import { techStack } from '@/data/about'
import { socialLinks } from '@/data/social-link'
import { containerVariants, itemVariants } from '@/lib/constants'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

export default function TechStack() {
  return (
    <div className="min-h-screen">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-body flex flex-col pt-32 pb-20"
      >
        <motion.h1
          variants={itemVariants}
          className="mb-16 text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl"
        >
          Tech Stack.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mb-20 max-w-2xl text-lg leading-relaxed text-foreground/70"
        >
          My professional toolkit encompasses a diverse range of modern
          technologies designed to build scalable, efficient, and user-friendly
          applications. Below is a comprehensive overview of the technologies I
          work with daily.
        </motion.p>

        <div className="grid gap-12 lg:grid-cols-2">
          {techStack.map((category) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="rounded-lg border border-foreground/10 bg-foreground/2 p-6 backdrop-blur-sm transition-all hover:border-foreground/20 hover:bg-foreground/4"
            >
              <h2 className="mb-6 text-2xl font-bold">{category.category}</h2>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border border-foreground/20 bg-foreground/5 px-4 py-2 text-sm font-medium text-foreground/80 transition-all hover:border-foreground/40 hover:bg-foreground/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Links */}
        <motion.div variants={itemVariants} className="mb-14 mt-20">
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-lg font-semibold text-foreground transition-colors hover:text-foreground/80"
          >
            Back to About
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
