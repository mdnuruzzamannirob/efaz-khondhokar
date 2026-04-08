'use client'

import { blogPosts } from '@/data/blog'
import { socialLinks } from '@/data/social-link'
import { containerVariants, itemVariants } from '@/lib/constants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { FaCalendarAlt, FaClock, FaExternalLinkAlt } from 'react-icons/fa'

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = useMemo(
    () => ['All', ...new Set(blogPosts.map((post) => post.category))],
    [],
  )

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return blogPosts
    return blogPosts.filter((post) => post.category === activeCategory)
  }, [activeCategory])

  return (
    <div className="relative overflow-hidden pt-32 pb-20">
      {/* Large Background Page Title - Bottom Left Vertical */}
      <div className="fixed left-0 bottom-0 pointer-events-none z-0 ml-48 overflow-visible h-screen flex items-end">
        <h1 className="text-9xl sm:text-[12rem] md:text-[14rem] lg:text-[16rem] font-bold tracking-tighter text-foreground/3 origin-bottom-left -rotate-90 whitespace-nowrap">
          Blog
        </h1>
      </div>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-body flex min-h-[calc(100vh-8rem)] flex-col relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
            Blog.
          </h1>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mb-10 max-w-2xl leading-8 text-foreground/75"
        >
          Thoughts, experiments, and reflections on web development, design,
          performance, and the tools I enjoy building with.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mb-12 flex flex-wrap gap-3"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category
            const btnClass = isActive
              ? 'bg-foreground text-background'
              : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10 hover:text-foreground'

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-lg px-4 py-2 whitespace-nowrap text-sm font-medium transition-all ${btnClass}`}
              >
                {category}
              </button>
            )
          })}
        </motion.div>

        <motion.section variants={itemVariants} className="mb-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group"
              >
                <a
                  href={post.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative overflow-hidden rounded-xl border border-foreground/10 bg-foreground/3">
                    <div className="relative h-80 w-full overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/35 to-black/10 transition-opacity duration-300" />

                      <div className="absolute left-4 top-4">
                        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                          {post.category}
                        </span>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <div className="translate-y-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          <div className="mb-3 flex items-center gap-4 text-xs text-white/80">
                            <span className="inline-flex items-center gap-2">
                              <FaCalendarAlt size={12} />
                              {post.date}
                            </span>
                            <span className="inline-flex items-center gap-2">
                              <FaClock size={12} />
                              {post.readTime}
                            </span>
                          </div>

                          <p className="line-clamp-3 text-sm leading-6 text-white/85">
                            {post.excerpt}
                          </p>

                          <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white">
                            Visit Article
                            <FaExternalLinkAlt
                              size={14}
                              className="transition-transform group-hover:translate-x-1"
                            />
                          </div>
                        </div>

                        <div className="transition-all duration-300 group-hover:opacity-0">
                          <h2 className="line-clamp-2 text-xl font-semibold leading-snug text-white">
                            {post.title}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.div variants={itemVariants} className="mb-14">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-lg font-semibold text-foreground transition-colors hover:text-foreground/80"
          >
            Can I help you?
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
                <Icon size={20} />
              </motion.a>
            )
          })}
        </motion.div>
      </motion.section>
    </div>
  )
}
