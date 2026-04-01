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
    <div className="pt-32 pb-10 flex flex-col relative overflow-hidden">
      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 container-body flex flex-col justify-center relative z-10"
      >
        {/* Heading with Glitch Effect */}
        <div className="relative mb-8 inline-block">
          <GlitchText
            text="I'M ADENEKEN WONDERFUL"
            className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-[0.29em] leading-tight"
          />
        </div>

        {/* Bio Section */}
        <motion.div variants={itemVariants} className=" space-y-6 mb-12">
          <p className=" leading-8.75">
            Your friendly neighborhood frontend developer, UX architect, and
            JavaScript engineer. I spend my days (and often nights) painting the
            internet canvas with{' '}
            <Link
              href="/projects"
              className="font-semibold text-foreground hover:underline hover:opacity-70 transition-all"
            >
              PROJECTS
            </Link>{' '}
            and lines of code, turning zeroes and ones into immersive,
            interactive experiences.
          </p>

          <p className="leading-8.75">
            Bona fide photochromic{' '}
            <Link
              href="/about"
              className="font-semibold text-foreground hover:underline hover:opacity-70 transition-all"
            >
              LENS
            </Link>{' '}
            enthusiast – sunlight or indoors, I&apos;ve got it covered. I tread
            the path of minimalism, finding beauty in simplicity and order. When
            I&apos;m not crafting beautiful web experiences, you can find me
            reading{' '}
            <Link
              href="/blog"
              className="font-semibold text-foreground hover:underline hover:opacity-70 transition-all"
            >
              ARTICLES
            </Link>{' '}
            or swaying to the rhythm of Pop Music & Jazz, losing myself in the
            captivating flow of melodies. anyways you can{' '}
            <Link
              href="/contact"
              className="font-semibold text-foreground hover:underline hover:opacity-70 transition-all"
            >
              CONTACT ME
            </Link>
          </p>
        </motion.div>

        {/* CTA Link */}
        <motion.div variants={itemVariants} className="mb-16">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-foreground hover:gap-4 transition-all duration-300 font-medium group"
          >
            See More About Me
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>

        {/* Footer */}
        <motion.div variants={itemVariants}>
          <Footer />
        </motion.div>
      </motion.div>
    </div>
  )
}
