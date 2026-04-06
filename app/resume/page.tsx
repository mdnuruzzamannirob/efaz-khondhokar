'use client'

import { resumeData } from '@/data/resume'
import { socialLinks } from '@/data/social-link'
import { containerVariants, itemVariants } from '@/lib/constants'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

export default function Resume() {
  return (
    <div className="relative overflow-hidden pt-32 pb-20">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-body flex flex-col"
      >
        {/* Title */}
        <motion.div variants={itemVariants} className="mb-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
            Résumé.
          </h1>
        </motion.div>
        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mb-10 max-w-3xl leading-8 text-foreground/90"
        >
          Reach out to me via my{' '}
          <Link
            href="/contact"
            className="font-semibold text-foreground transition-all hover:opacity-70 hover:underline"
          >
            contact page
          </Link>
          ,{' '}
          <Link
            href={
              'https://drive.google.com/file/d/1WmrCuX0tmdo6_xueU0F5XvBjRlGy3Tl_/view?usp=sharing'
            }
            target="_blank"
            className="font-semibold text-foreground transition-all hover:opacity-70 hover:underline"
          >
            view
          </Link>{' '}
          or{' '}
          <a
            href={resumeData.pdfUrl}
            download
            className="font-semibold text-foreground transition-all hover:opacity-70 hover:underline cursor-pointer"
          >
            download
          </a>{' '}
          the resume
        </motion.p>
        {/* PDF Viewer */}
        <motion.div
          variants={itemVariants}
          className="w-full rounded-xl border border-border overflow-hidden shadow-lg bg-transparent"
        >
          <iframe
            src={`${resumeData.pdfUrl}#toolbar=0`}
            width="100%"
            height="1200"
            className="w-full border-none bg-transparent"
            title="Resume PDF"
          />
        </motion.div>
        {/* Footer Links */}{' '}
        <motion.div variants={itemVariants} className="my-14">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-lg font-semibold text-foreground transition-colors hover:text-foreground/80"
          >
            Read My Blog
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
                <Icon size={22} />
              </motion.a>
            )
          })}
        </motion.div>
      </motion.section>
    </div>
  )
}
