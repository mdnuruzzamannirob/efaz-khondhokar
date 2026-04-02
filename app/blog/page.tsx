'use client'

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import {
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa'

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Framer Motion',
    excerpt:
      'Learn how to create beautiful animations in React using Framer Motion. A comprehensive guide for beginners.',
    date: 'March 15, 2026',
    readTime: '5 min read',
    category: 'Tutorial',
    slug: 'getting-started-framer-motion',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Building Performant Web Applications',
    excerpt:
      'Best practices and techniques for optimizing your web applications for speed and performance.',
    date: 'March 10, 2026',
    readTime: '8 min read',
    category: 'Performance',
    slug: 'building-performant-web-apps',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'The Art of Minimalist Web Design',
    excerpt:
      'Explore how minimalist design principles can create more engaging and user-friendly web experiences.',
    date: 'March 5, 2026',
    readTime: '6 min read',
    category: 'Design',
    slug: 'minimalist-web-design',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    title: 'TypeScript Tips and Tricks',
    excerpt:
      'Advanced TypeScript patterns and techniques to write more maintainable and type-safe code.',
    date: 'February 28, 2026',
    readTime: '7 min read',
    category: 'Development',
    slug: 'typescript-tips-tricks',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    title: 'Next.js 16 Features Overview',
    excerpt:
      'Discover the latest features and improvements in Next.js 16 and how to leverage them in your projects.',
    date: 'February 20, 2026',
    readTime: '9 min read',
    category: 'Framework',
    slug: 'nextjs-16-features',
    image:
      'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    title: 'Creating Accessible Web Applications',
    excerpt:
      'A guide to building web applications that are accessible to everyone, including users with disabilities.',
    date: 'February 15, 2026',
    readTime: '10 min read',
    category: 'Accessibility',
    slug: 'accessible-web-apps',
    image:
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80',
  },
]

const socialLinks = [
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaEnvelope, href: 'mailto:contact@example.com', label: 'Email' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

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
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-body flex min-h-[calc(100vh-8rem)] flex-col"
      >
        {/* Title */}
        <motion.div variants={itemVariants} className="mb-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
            Blog.
          </h1>
        </motion.div>

        {/* Intro */}
        <motion.p
          variants={itemVariants}
          className="mb-10 max-w-2xl leading-8 text-foreground/75"
        >
          Thoughts, experiments, and reflections on web development, design,
          performance, and the tools I enjoy building with.
        </motion.p>

        {/* Category Filter */}
        <motion.div
          variants={itemVariants}
          className="mb-12 flex flex-wrap gap-3"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-foreground text-background'
                    : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10 hover:text-foreground'
                }`}
              >
                {category}
              </button>
            )
          })}
        </motion.div>

        {/* Blog Grid */}
        <motion.section variants={itemVariants} className="mb-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative overflow-hidden rounded-xl border border-foreground/10 bg-foreground/3">
                    <div className="relative h-72 w-full overflow-hidden">
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
                            Read Article
                            <FaArrowRight
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
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-5 border-t border-foreground/10 pt-8"
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
