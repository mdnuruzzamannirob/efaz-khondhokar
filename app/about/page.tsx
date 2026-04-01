'use client'

import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

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

const skills = [
  {
    title: 'Engineering',
    icon: '◯',
    description:
      'The power of first impressions cannot be underestimated, and the gateway to capitalizing on them lies in exceptional website design. An outstanding website transcends mere aesthetics and extends its influence to encompass seamless functionality and user-friendly navigation. Drawing upon my expertise as a seasoned programmer, I possess the unique ability to tackle intricate technical challenges while crafting websites that exude sleekness and visual allure.',
    link: 'View Github',
    href: '#',
  },
  {
    title: 'Product',
    icon: '◯',
    description:
      "While I may not fit the conventional mold of a product manager, my diverse skill set in research, product design, and product coordination empowers me to drive the growth of a product from its inception. As an exceptional analytical thinker, I possess the ability to uphold the product's vision throughout its entire journey, effectively bridging the technical and product aspects.",
    link: 'View Products',
    href: '#',
  },
  {
    title: 'Design',
    icon: '◯',
    description:
      'Despite not fitting the typical designer stereotype, my exceptional visual abilities enable me to excel as a presenter, effectively conveying design concepts to stakeholders and design teams. I possess a remarkable aptitude for conceptualization, allowing me to envision and bring forth stunning creations.',
    link: 'View Dribbble',
    href: '#',
  },
]

const reads = [
  {
    title: 'Human Centered Design 101',
    author: 'Acumen',
    year: '2017 - 2018',
    description:
      'This is an intensive, hands-on learning experience that will challenge you to get out of your chair and out into the real world to talk to people and test your ideas.',
  },
  {
    title: 'Data Structure And Algorithm',
    author: 'Udemy',
    year: '2019',
    description:
      'Many developers who are "self taught", feel that one of the main disadvantages they face compared to college educated graduates in computer science...',
  },
  {
    title: 'Adaptive Leadership',
    author: 'edX',
    year: '2019',
    description:
      "This introductory course helps you identify leadership challenges in your own life, team, or community. You'll apply the tools and techniques of Adaptative...",
  },
  {
    title: 'Learning Something Great',
    author: '😊',
    year: 'Currently',
    description: 'We continue learning everyday.',
  },
]

const playlists = [
  {
    title: 'Codewonders',
    platform: 'Spotify',
    description:
      'This is an intensive, energizing songs list that helps me through the day and inspires generate breakthrough ideas.',
    link: 'View Playlist',
  },
  {
    title: 'Chill Lofi Study Beats',
    platform: 'Spotify',
    description:
      'The perfect study beats, twenty four seven. with over 178 SONGS',
    link: 'View Playlist',
  },
  {
    title: 'Mellow Drive',
    platform: 'Spotify',
    description: 'Easy listening for pleasant drive',
    link: 'View Playlist',
  },
  {
    title: 'Rap UK',
    platform: 'Spotify',
    description: 'One of the finest rap in UK. Cover: Aitch',
    link: 'View Playlist',
  },
  {
    title: 'Mood Booster',
    platform: 'Spotify',
    description: "Get happy with today's dose of feel-good songs!",
    link: 'View Playlist',
  },
]

const lens = {
  title: "Adeneken's Collection",
  platform: 'ADenekan',
  description:
    'This is an intensive, curation of the photochromic lenses that standout and the ones that i personally love. NOTE this is just by preference actualy.',
  link: 'Visit Page',
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 container-body flex flex-col pt-32 pb-20"
      >
        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-16"
        >
          About Me.
        </motion.h1>

        {/* Skills Timeline Section */}
        <motion.div variants={itemVariants} className="mb-20">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="flex gap-6 mb-12"
              variants={itemVariants}
            >
              {/* Timeline Dot */}
              <div className="flex flex-col items-center pt-1">
                <div className="w-6 h-6 rounded-full border-2 border-foreground flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-foreground" />
                </div>
                {idx < skills.length - 1 && (
                  <div className="w-0.5 h-32 bg-linear-to-b from-foreground/20  to-transparent my-4" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-12">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold">{skill.title}</h3>
                  <a
                    href={skill.href}
                    className="text-sm font-semibold text-foreground/60 hover:text-foreground transition-colors whitespace-nowrap underline"
                  >
                    {skill.link}
                  </a>
                </div>
                <p className="text-foreground/70 leading-relaxed mt-4 max-w-2xl">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* My Reads Section */}
        <motion.div variants={itemVariants} className="mb-20">
          <h2 className="text-3xl font-bold mb-12">My Reads.</h2>
          <div className="space-y-12">
            {reads.map((read, idx) => (
              <motion.div
                key={idx}
                className="flex gap-6"
                variants={itemVariants}
              >
                {/* Timeline Dot */}
                <div className="flex flex-col items-center pt-1">
                  <div className="w-6 h-6 rounded-full border-2 border-foreground flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-foreground" />
                  </div>
                  {idx < reads.length - 1 && (
                    <div className="w-0.5 h-32 bg-linear-to-b from-foreground/20 to-transparent  my-4" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">{read.title}</h3>
                      <p className="text-sm text-foreground/60 mt-1">
                        {read.author}
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-foreground/60 whitespace-nowrap">
                      📅 {read.year}
                    </p>
                  </div>
                  <p className="text-foreground/70 leading-relaxed mt-3 max-w-2xl">
                    {read.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* My Playlist Section */}
        <motion.div variants={itemVariants} className="mb-20">
          <h2 className="text-3xl font-bold mb-12">My Playlist.</h2>
          <div className="space-y-8">
            {playlists.map((playlist, idx) => (
              <motion.div
                key={idx}
                className="flex gap-6"
                variants={itemVariants}
              >
                {/* Timeline Dot */}
                <div className="flex flex-col items-center pt-1">
                  <div className="w-6 h-6 rounded-full border-2 border-foreground flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-foreground" />
                  </div>
                  {idx < playlists.length - 1 && (
                    <div className="w-0.5 h-24 bg-linear-to-b from-foreground/20 to-transparent  my-4" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">
                        {playlist.title}
                      </h3>
                      <p className="text-sm text-foreground/60 mt-1">
                        {playlist.platform}
                      </p>
                    </div>
                    <a
                      href="#"
                      className="text-sm font-semibold text-foreground/60 hover:text-foreground transition-colors underline whitespace-nowrap"
                    >
                      {playlist.link}
                    </a>
                  </div>
                  <p className="text-foreground/70 leading-relaxed mt-3 max-w-2xl">
                    {playlist.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* My Photochromic Lens Section */}
        <motion.div variants={itemVariants} className="mb-20">
          <h2 className="text-3xl font-bold mb-12">My Photochromic Lens.</h2>
          <div className="flex gap-6">
            {/* Timeline Dot */}
            <div className="flex flex-col items-center pt-1">
              <div className="w-6 h-6 rounded-full border-2 border-foreground flex items-center justify-center shrink-0">
                <div className="w-2 h-2 rounded-full bg-foreground" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{lens.title}</h3>
                  <p className="text-sm text-foreground/60 mt-1">
                    {lens.platform}
                  </p>
                </div>
                <a
                  href="#"
                  className="text-sm font-semibold text-foreground/60 hover:text-foreground transition-colors underline whitespace-nowrap"
                >
                  {lens.link}
                </a>
              </div>
              <p className="text-foreground/70 leading-relaxed mt-3 max-w-2xl">
                {lens.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div variants={itemVariants} className="py-12">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors group text-lg font-semibold"
          >
            Lets Continue To Projects
            <ExternalLink
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div variants={itemVariants}>
          <Footer />
        </motion.div>
      </motion.div>
    </div>
  )
}
