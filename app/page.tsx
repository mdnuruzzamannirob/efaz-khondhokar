'use client'

import { GlitchText } from '@/components/GlitchText'
import { socialLinks } from '@/data/social-link'
import { containerVariants, itemVariants } from '@/lib/constants'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

export default function Home() {
  return (
    <div className="relative overflow-hidden pt-32 pb-10">
      {/* Large Background Page Title - Bottom Left */}
      <div className="fixed left-0 bottom-0 pointer-events-none z-0 overflow-hidden">
        <h1 className="text-9xl sm:text-[12rem] md:text-[14rem] lg:text-[16rem] font-bold tracking-tighter text-foreground/3 whitespace-nowrap -ml-20">
          Welcome
        </h1>
      </div>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-body relative z-10 flex flex-col justify-center"
      >
        {/* 1. Title */}
        <motion.div variants={itemVariants} className="mb-8">
          <GlitchText
            text="I'M EFAZ KHONDHOKAR"
            className="text-2xl font-medium leading-tight tracking-[0.29em] sm:text-3xl lg:text-4xl"
          />
        </motion.div>

        {/* 2. Description 1 */}
        <motion.p
          variants={itemVariants}
          className="mb-6 max-w-3xl leading-8 text-foreground/90"
        >
          Your friendly neighborhood frontend developer, UX architect, and
          JavaScript engineer. I spend my days (and often nights) painting the
          internet canvas with{' '}
          <Link
            href="/projects"
            className="font-semibold text-foreground transition-all hover:opacity-70 hover:underline"
          >
            PROJECTS
          </Link>{' '}
          and lines of code, turning zeroes and ones into immersive, interactive
          experiences.
        </motion.p>

        {/* 3. Description 2 */}
        <motion.p
          variants={itemVariants}
          className="mb-10 max-w-3xl leading-8 text-foreground/90"
        >
          Bona fide photochromic{' '}
          <Link
            href="/about"
            className="font-semibold text-foreground transition-all hover:opacity-70 hover:underline"
          >
            LENS
          </Link>{' '}
          enthusiast — sunlight or indoors, I&apos;ve got it covered. I tread
          the path of minimalism, finding beauty in simplicity and order. When
          I&apos;m not crafting beautiful web experiences, you can find me
          reading{' '}
          <Link
            href="/blog"
            className="font-semibold text-foreground transition-all hover:opacity-70 hover:underline"
          >
            ARTICLES
          </Link>{' '}
          or swaying to the rhythm of Pop Music & Jazz, losing myself in the
          captivating flow of melodies. Anyways, you can{' '}
          <Link
            href="/contact"
            className="font-semibold text-foreground transition-all hover:opacity-70 hover:underline"
          >
            CONTACT ME
          </Link>
          .
        </motion.p>

        {/* 4. Button / CTA */}
        <motion.div variants={itemVariants} className="mb-14">
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 font-medium text-foreground transition-all duration-300 hover:gap-4"
          >
            See More About Me
            <BsArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* 5. Footer Links */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-5 pt-2"
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
