'use client'

import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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

export default function Home() {
  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-8 flex flex-col">
      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 max-w-4xl mx-auto w-full flex flex-col justify-center"
      >
        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 leading-tight"
        >
          I&apos;M ADENEKEN <br /> WONDERFUL
        </motion.h1>

        {/* Bio Section */}
        <motion.div
          variants={itemVariants}
          className="max-w-3xl space-y-6 mb-12"
        >
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Your friendly neighborhood frontend developer, UX architect, and
            JavaScript engineer. I spend my days (and often nights) painting the
            internet canvas with{' '}
            <span className="font-semibold text-gray-900 dark:text-white">
              PROJECTS
            </span>{' '}
            and lines of code, turning zeroes and ones into immersive,
            interactive experiences.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Bona fide photochromic{' '}
            <span className="font-semibold text-gray-900 dark:text-white">
              LENS
            </span>{' '}
            enthusiast – sunlight or indoors, I&apos;ve got it covered. I tread
            the path of minimalism, finding beauty in simplicity and order. When
            I&apos;m not crafting beautiful web experiences, you can find me
            reading{' '}
            <span className="font-semibold text-gray-900 dark:text-white">
              ARTICLES
            </span>{' '}
            or swaying to the rhythm of Pop Music & Jazz, losing myself in the
            captivating flow of melodies. anyways you can{' '}
            <span className="font-semibold text-gray-900 dark:text-white">
              CONTACT ME
            </span>
          </p>
        </motion.div>

        {/* CTA Link */}
        <motion.div variants={itemVariants}>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-gray-900 dark:text-white hover:gap-4 transition-all duration-300 font-medium group"
          >
            See More About Me
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </motion.div>

      {/* Footer with Social Links */}
      <Footer />
    </div>
  )
}
