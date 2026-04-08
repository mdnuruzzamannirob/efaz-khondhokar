'use client'

import {
  education,
  experience,
  lens,
  playlists,
  reads,
  skills,
} from '@/data/about'
import { socialLinks } from '@/data/social-link'
import { containerVariants, itemVariants } from '@/lib/constants'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  FaBookOpen,
  FaBriefcase,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaSpotify,
} from 'react-icons/fa'

function TimelineNode({
  children,
  isLast = false,
}: {
  children: React.ReactNode
  isLast?: boolean
}) {
  return (
    <div className="flex gap-5 sm:gap-6">
      <div className="flex flex-col items-center pt-1">
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-foreground">
          <div className="h-2 w-2 rounded-full bg-foreground" />
        </div>
        {!isLast && (
          <div className="my-4 h-full min-h-20 w-px bg-linear-to-b from-foreground/20 to-transparent" />
        )}
      </div>

      <div className="flex-1 pb-10">{children}</div>
    </div>
  )
}

export default function About() {
  return (
    <div className="min-h-screen">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-body flex flex-col pt-32 pb-20"
      >
        <motion.h1
          variants={itemVariants}
          className="mb-16 text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl"
        >
          About Me.
        </motion.h1>
        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="mb-12 text-3xl font-bold">What I Do.</h2>

          <div>
            {skills.map((skill, idx) => {
              const Icon = skill.icon

              return (
                <motion.div key={skill.title} variants={itemVariants}>
                  <TimelineNode isLast={idx === skills.length - 1}>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Icon className="text-foreground/60" />
                        <h3 className="text-xl font-semibold">{skill.title}</h3>
                      </div>

                      <a
                        href={skill.href}
                        className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-foreground/60 underline transition-colors hover:text-foreground"
                      >
                        {skill.link}
                        <FaExternalLinkAlt size={12} />
                      </a>
                    </div>

                    <p className="mt-4 max-w-2xl leading-relaxed text-foreground/70">
                      {skill.description}
                    </p>
                  </TimelineNode>
                </motion.div>
              )
            })}
          </div>
        </motion.section>
        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="mb-12 text-3xl font-bold">My Experience.</h2>

          <div>
            {experience.map((exp, idx) => (
              <motion.div key={exp.title} variants={itemVariants}>
                <TimelineNode isLast={idx === experience.length - 1}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <FaBriefcase className="text-foreground/60" />
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                      </div>

                      <p className="mt-2 text-sm text-foreground/60">
                        {exp.company}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-foreground/60">
                      <FaCalendarAlt size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="mt-3 max-w-2xl leading-relaxed text-foreground/70">
                    {exp.description}
                  </p>
                </TimelineNode>
              </motion.div>
            ))}
          </div>
        </motion.section>
        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="mb-12 text-3xl font-bold">My Education.</h2>

          <div>
            {education.map((edu, idx) => (
              <motion.div key={edu.title} variants={itemVariants}>
                <TimelineNode isLast={idx === education.length - 1}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <FaGraduationCap className="text-foreground/60" />
                        <h3 className="text-xl font-semibold">{edu.title}</h3>
                      </div>

                      <p className="mt-2 text-sm text-foreground/60">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-foreground/60">
                      <FaCalendarAlt size={14} />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <p className="mt-3 max-w-2xl leading-relaxed text-foreground/70">
                    {edu.description}
                  </p>
                </TimelineNode>
              </motion.div>
            ))}
          </div>
        </motion.section>
        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="mb-12 text-3xl font-bold">My Reads.</h2>

          <div>
            {reads.map((read, idx) => (
              <motion.div key={read.title} variants={itemVariants}>
                <TimelineNode isLast={idx === reads.length - 1}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <FaBookOpen className="text-foreground/60" />
                        <h3 className="text-xl font-semibold">{read.title}</h3>
                      </div>

                      <p className="mt-2 text-sm text-foreground/60">
                        {read.author}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-foreground/60">
                      <FaCalendarAlt size={14} />
                      <span>{read.year}</span>
                    </div>
                  </div>

                  <p className="mt-3 max-w-2xl leading-relaxed text-foreground/70">
                    {read.description}
                  </p>
                </TimelineNode>
              </motion.div>
            ))}
          </div>
        </motion.section>
        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="mb-12 text-3xl font-bold">My Playlist.</h2>

          <div>
            {playlists.map((playlist, idx) => (
              <motion.div key={playlist.title} variants={itemVariants}>
                <TimelineNode isLast={idx === playlists.length - 1}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <FaSpotify className="text-foreground/60" />
                        <h3 className="text-xl font-semibold">
                          {playlist.title}
                        </h3>
                      </div>

                      <p className="mt-2 text-sm text-foreground/60">
                        {playlist.platform}
                      </p>
                    </div>

                    <a
                      href={playlist.href}
                      className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-foreground/60 underline transition-colors hover:text-foreground"
                    >
                      {playlist.link}
                      <FaExternalLinkAlt size={12} />
                    </a>
                  </div>

                  <p className="mt-3 max-w-2xl leading-relaxed text-foreground/70">
                    {playlist.description}
                  </p>
                </TimelineNode>
              </motion.div>
            ))}
          </div>
        </motion.section>
        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="mb-12 text-3xl font-bold">My Photochromic Lens.</h2>

          <TimelineNode isLast>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">{lens.title}</h3>
                <p className="mt-2 text-sm text-foreground/60">
                  {lens.platform}
                </p>
              </div>

              <a
                href={lens.href}
                className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-foreground/60 underline transition-colors hover:text-foreground"
              >
                {lens.link}
                <FaExternalLinkAlt size={12} />
              </a>
            </div>

            <p className="mt-3 max-w-2xl leading-relaxed text-foreground/70">
              {lens.description}
            </p>
          </TimelineNode>
        </motion.section>
        {/* Footer Links */}{' '}
        <motion.div variants={itemVariants} className="mb-14">
          <Link
            href="/tech-stack"
            className="group inline-flex items-center gap-2 text-lg font-semibold text-foreground transition-colors hover:text-foreground/80"
          >
            Explore My Tech Stack
            <FaExternalLinkAlt className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
        <motion.div variants={itemVariants} className="mb-14">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-lg font-semibold text-foreground transition-colors hover:text-foreground/80"
          >
            Lets Continue To Projects
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
