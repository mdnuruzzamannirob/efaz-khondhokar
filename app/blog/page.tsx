'use client'

import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import Link from 'next/link'

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
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export default function Blog() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4 sm:px-8 flex flex-col">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 max-w-4xl mx-auto w-full flex flex-col"
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
          className="text-lg text-gray-700 dark:text-gray-300 mb-12"
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
              className="group p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors mb-2">
                      {post.title}
                    </h2>
                  </div>
                  <ArrowRight
                    size={20}
                    className="text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors ml-4 flex-shrink-0"
                  />
                </div>

                <p className="text-gray-700 dark:text-gray-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-500">
                  <Calendar size={16} />
                  {post.date}
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  )
}
