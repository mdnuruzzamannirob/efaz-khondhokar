'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'Modern Portfolio Website',
    description:
      'A minimalist portfolio website built with Next.js and Framer Motion.',
    tags: ['NextJS', 'TypeScript', 'FramerMotion', 'Tailwind'],
    link: '#',
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description:
      'Full-stack e-commerce with inventory management and payments.',
    tags: ['React', 'NodeJS', 'MongoDB', 'Stripe'],
    link: '#',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates.',
    tags: ['NextJS', 'Firebase', 'ReactQuery', 'Tailwind'],
    link: '#',
  },
  {
    id: 4,
    title: 'Design System',
    description: 'Comprehensive design system with reusable components.',
    tags: ['React', 'TypeScript', 'Storybook', 'CSS'],
    link: '#',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function Projects() {
  return (
    <div className="pt-32 pb-10 flex flex-col">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 container-body flex flex-col"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl font-bold tracking-tighter mb-16"
        >
          Projects
        </motion.h1>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group p-6 rounded-xl border border-foreground/10 bg-foreground/2 hover:bg-foreground/5 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    className="text-foreground/40 group-hover:text-foreground transition-colors"
                  />
                </div>
                <p className="text-foreground/70 mb-6">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-foreground/10 text-foreground/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="text-center py-12">
          <p className="text-foreground/60 mb-4">
            Want to see more? Let&apos;s work together!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:scale-105 transition-transform"
          >
            Get in Touch
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
