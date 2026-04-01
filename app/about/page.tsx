'use client'

import { motion } from 'framer-motion'

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

export default function About() {
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
          className="text-5xl sm:text-6xl font-bold tracking-tighter mb-8"
        >
          About Me
        </motion.h1>

        {/* Content */}
        <motion.div variants={itemVariants} className="max-w-3xl space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Frontend Developer & UX Architect
            </h2>
            <p className="text-lg leading-relaxed text-foreground/80">
              With over years of experience in building web applications, I
              specialize in creating beautiful, intuitive user interfaces that
              delight users and drive business results. My approach combines
              technical excellence with thoughtful design principles.
            </p>
          </div>

          <div className="space-y-4 pt-6">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              What I Do
            </h2>
            <ul className="space-y-3 text-lg leading-relaxed text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-foreground font-semibold mt-1">•</span>
                <span>Design and develop responsive web applications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground font-semibold mt-1">•</span>
                <span>
                  Create engaging animations and interactive experiences
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground font-semibold mt-1">•</span>
                <span>
                  Optimize applications for performance and accessibility
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground font-semibold mt-1">•</span>
                <span>Collaborate with designers and product teams</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4 pt-6">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-foreground/80">
              {[
                'React',
                'Next.js',
                'TypeScript',
                'Tailwind CSS',
                'Framer Motion',
                'JavaScript',
                'Web Design',
                'UX/UI',
                'Node.js',
              ].map((skill) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  className="p-3 rounded-lg bg-foreground/5 text-center font-medium text-foreground"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Outside of Work
            </h2>
            <p className="text-lg leading-relaxed text-foreground/80">
              When I&apos;m not coding, you can find me exploring photography
              through my photochromic lenses (indoors or outdoors—I&apos;ve got
              it covered). I&apos;m a huge fan of minimalist design and love
              discovering beauty in simplicity. I spend time reading articles
              about design trends and technology, and I unwind by listening to
              pop music and jazz—there&apos;s something magical about losing
              yourself in the flow of melodies.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
