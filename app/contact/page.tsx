'use client'

import { motion } from 'framer-motion'
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapPin,
  FaPhone,
  FaTwitter,
} from 'react-icons/fa'

const contactMethods = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'hello@adeneken.com',
    link: 'mailto:hello@adeneken.com',
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    icon: FaMapPin,
    label: 'Location',
    value: 'San Francisco, CA',
    link: '#',
  },
]

const socialLinks = [
  { icon: FaTwitter, label: 'Twitter', link: 'https://twitter.com' },
  { icon: FaEnvelope, label: 'Email', link: 'mailto:contact@example.com' },
  { icon: FaLinkedin, label: 'LinkedIn', link: 'https://linkedin.com' },
  { icon: FaGithub, label: 'GitHub', link: 'https://github.com' },
  { icon: FaInstagram, label: 'Instagram', link: 'https://instagram.com' },
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

export default function Contact() {
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
          CONTACT ME
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg text-foreground/80 mb-12"
        >
          Have a project in mind? Let&apos;s connect and create something
          amazing together.
        </motion.p>

        {/* Contact Methods */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {contactMethods.map((method) => {
            const Icon = method.icon
            return (
              <motion.a
                key={method.label}
                href={method.link}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="p-6 rounded-xl border border-foreground/10 bg-foreground/2 hover:bg-foreground/5 transition-all duration-300"
              >
                <Icon size={32} className="text-foreground mb-4" />
                <h3 className="font-semibold text-foreground mb-2">
                  {method.label}
                </h3>
                <p className="text-foreground/60 text-sm">{method.value}</p>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Send me a message
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/50 transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/50 transition-all"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/50 transition-all"
            />
            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/50 transition-all resize-none"
            ></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:shadow-lg transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Follow me on social media
          </h2>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-foreground/10 text-foreground hover:bg-foreground hover:text-background transition-all"
                >
                  <Icon size={24} />
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
