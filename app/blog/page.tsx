'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  FaArrowRight,
  FaCalendar,
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
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

const socialLinks = [
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaEnvelope, href: 'mailto:contact@example.com', label: 'Email' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
]

export default function Blog() {
  return (
    <div className="pt-32 pb-10 flex flex-col">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 container-body flex flex-col"
      >
        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl font-bold tracking-tighter mb-4"
        >
          Blog
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg text-foreground/80 mb-12"
        >
          Thoughts on web development, design, and technology.
        </motion.p>

        {/* Blog Posts */}
        <motion.div variants={containerVariants} className="space-y-6">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              whileHover={{ x: 8 }}
              className="group p-6 rounded-xl border border-foreground/10 bg-foreground/2 hover:bg-foreground/5 transition-all duration-300"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs px-2 py-1 rounded-full bg-foreground/10 text-foreground/70 font-medium">
                        {post.category}
                      </span>
                      <span className="text-xs text-foreground/60">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-foreground group-hover:text-foreground/80 transition-colors mb-2">
                      {post.title}
                    </h2>
                  </div>
                  <FaArrowRight
                    size={20}
                    className="text-foreground/40 group-hover:text-foreground transition-colors ml-4 shrink-0"
                  />
                </div>

                <p className="text-foreground/70 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 text-sm text-foreground/50">
                  <FaCalendar size={16} />
                  {post.date}
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* Footer Section */}
        <motion.div
          variants={itemVariants}
          className="border-t border-foreground/10 pt-12 mt-12"
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
