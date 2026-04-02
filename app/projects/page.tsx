'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa'

type Project = {
  id: number
  title: string
  description: string
  image: string
  category: 'Projects' | 'Dev Tools' | 'Open Source' | 'Design'
  tags: string[]
  link: string
  heightClass: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Pigment',
    description: 'The gradients and colors for the next smart creator.',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&h=680&fit=crop',
    category: 'Design',
    tags: ['React', 'Sass & CSS', 'Javascript', 'Contrast'],
    link: '#',
    heightClass: 'h-[310px] sm:h-[350px]',
  },
  {
    id: 2,
    title: 'Manage all your properties in one place',
    description: 'Property management made simple and efficient.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=680&fit=crop',
    category: 'Projects',
    tags: ['React', 'NodeJS', 'MongoDB'],
    link: '#',
    heightClass: 'h-[310px] sm:h-[350px]',
  },
  {
    id: 3,
    title: 'Navigation is hard, lets automate it',
    description: 'Automated route optimization and navigation tools.',
    image:
      'https://images.unsplash.com/photo-1460925895917-adf4e11526eb?w=900&h=760&fit=crop',
    category: 'Dev Tools',
    tags: ['NextJS', 'TypeScript', 'React Query'],
    link: '#',
    heightClass: 'h-[340px] sm:h-[390px]',
  },
  {
    id: 4,
    title: 'usable Query',
    description:
      'A streamlined and centralized approach to managing queries and mutations.',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&h=760&fit=crop',
    category: 'Open Source',
    tags: ['React', 'TypeScript', 'Open Source'],
    link: '#',
    heightClass: 'h-[340px] sm:h-[390px]',
  },
  {
    id: 5,
    title: 'Empty Canvases Interior',
    description: 'Minimal interior layouts and visual language system.',
    image:
      'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=900&h=680&fit=crop',
    category: 'Design',
    tags: ['UI/UX', 'Interior', 'Design'],
    link: '#',
    heightClass: 'h-[310px] sm:h-[350px]',
  },
  {
    id: 6,
    title: 'Enjoy this summer trends',
    description: 'Fashion and lifestyle campaign direction.',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&h=680&fit=crop',
    category: 'Design',
    tags: ['Fashion', 'Trends', 'Marketing'],
    link: '#',
    heightClass: 'h-[310px] sm:h-[350px]',
  },
]

const categories = ['All', 'Projects', 'Dev Tools', 'Open Source', 'Designs']

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.16 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

const socialLinks = [
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaEnvelope, href: 'mailto:contact@example.com', label: 'Email' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeCategory.replace('Designs', 'Design'),
        )

  return (
    <div className="pt-32 pb-16 flex flex-col">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 container-body flex flex-col"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-10"
        >
          Projects.
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="flex gap-4 mb-8 overflow-x-auto pb-1"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
                activeCategory === category
                  ? 'bg-foreground text-background font-semibold'
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              {category}
            </motion.button>
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

        <motion.div
          variants={itemVariants}
          className="border-t border-foreground/10 pt-12"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div className="mb-8 sm:mb-0">
              <p className="text-foreground/60 mb-4">Let&apos;s connect</p>
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
