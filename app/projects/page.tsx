'use client'

import { projects } from '@/data/projects'
import { socialLinks } from '@/data/social-link'
import { containerVariants, itemVariants } from '@/lib/constants'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const categories = useMemo(
    () => ['All', ...new Set(projects.map((post) => post.category))],
    [],
  )

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeCategory.replace('Designs', 'Design'),
        )

  return (
    <div className="relative overflow-hidden">
      {/* Large Background Page Title - Bottom Left Vertical */}
      <div className="fixed left-0 bottom-0 pointer-events-none z-0 ml-48 overflow-visible h-screen flex items-end">
        <h1 className="text-9xl sm:text-[12rem] md:text-[14rem] lg:text-[16rem] font-bold tracking-tighter text-foreground/3 origin-bottom-left -rotate-90 whitespace-nowrap">
          Projects
        </h1>
      </div>

      <div className="pt-32 pb-16 flex flex-col relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 container-body flex flex-col"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
              Projects.
            </h1>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="mb-14 max-w-2xl leading-8 text-foreground/75"
          >
            A selection of projects, tools, and experiments that I&apos;ve
            built, contributed to, or find inspiring in the web development and
            design space.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mb-12 flex flex-wrap gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-lg px-4 whitespace-nowrap py-2 text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-foreground text-background '
                    : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10 hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16"
          >
            {filteredProjects.map((project) => (
              <motion.a
                key={project.id}
                href={project.link}
                variants={itemVariants}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                whileHover={{ y: -4 }}
                className="group relative rounded-xl overflow-hidden border border-foreground/10"
              >
                <div className={`relative ${project.heightClass}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/12" />

                  <AnimatePresence>
                    {hoveredId === project.id && (
                      <motion.div
                        initial={{ y: 70, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 70, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="absolute inset-x-0 bottom-0 p-5 bg-linear-to-t from-black/95 via-black/78 to-transparent"
                      >
                        <p className="text-[11px] uppercase tracking-[0.18em] text-white/70 mb-2">
                          {project.category}
                        </p>
                        <h3 className="text-xl font-semibold text-white mb-2 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-sm text-white/85 mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] px-2.5 py-1 rounded-full bg-white/18 text-white"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.a>
            ))}
          </motion.div>
          {/* Footer Links */}{' '}
          <motion.div variants={itemVariants} className="mb-14">
            <Link
              href="/resume"
              className="group inline-flex items-center gap-2 text-lg font-semibold text-foreground transition-colors hover:text-foreground/80"
            >
              View My Resume
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
        </motion.div>
      </div>
    </div>
  )
}
