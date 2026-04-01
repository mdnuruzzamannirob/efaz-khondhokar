'use client'

import { Footer } from '@/components/Footer'
import { GlitchText } from '@/components/GlitchText'
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
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-8 flex flex-col bg-white dark:bg-black relative overflow-hidden">
      {/* Gradient backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-30 dark:opacity-100 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(0deg, transparent 24%, rgba(120, 120, 120, 0.15) 25%, rgba(120, 120, 120, 0.15) 26%, transparent 27%, transparent 74%, rgba(120, 120, 120, 0.15) 75%, rgba(120, 120, 120, 0.15) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(120, 120, 120, 0.15) 25%, rgba(120, 120, 120, 0.15) 26%, transparent 27%, transparent 74%, rgba(120, 120, 120, 0.15) 75%, rgba(120, 120, 120, 0.15) 76%, transparent 77%, transparent)',
          backgroundSize: '150px 150px',
        }}
      ></div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 max-w-4xl mx-auto w-full flex flex-col justify-center relative z-10"
      >
        {/* Heading with Glitch Effect */}
        <div className="relative mb-8 inline-block">
          <GlitchText
            text="I'M ADENEKEN WONDERFUL"
            className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-[0.29em] leading-tight"
          />
        </div>

        {/* Bio Section */}
        <motion.div
          variants={itemVariants}
          className="max-w-3xl space-y-6 mb-12"
        >
          <p className=" leading-8.75 text-gray-700 dark:text-gray-300">
            Your friendly neighborhood frontend developer, UX architect, and
            JavaScript engineer. I spend my days (and often nights) painting the
            internet canvas with{' '}
            <span className="font-semibold text-gray-900 dark:text-white">
              PROJECTS
            </span>{' '}
            and lines of code, turning zeroes and ones into immersive,
            interactive experiences.
          </p>

          <p className="leading-8.75 text-gray-700 dark:text-gray-300">
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
