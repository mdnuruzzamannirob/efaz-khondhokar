'use client'

import { contactMethods } from '@/data/contact'
import { socialLinks } from '@/data/social-link'
import { containerVariants, itemVariants } from '@/lib/constants'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { FaExternalLinkAlt, FaPaperPlane } from 'react-icons/fa'
import { toast } from 'react-toastify'

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedFormData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    }

    if (
      !trimmedFormData.name ||
      !trimmedFormData.email ||
      !trimmedFormData.subject ||
      !trimmedFormData.message
    ) {
      toast.error('Please fill in all required fields.')
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(trimmedFormData.email)) {
      toast.error('Please enter a valid email address.')
      return
    }

    if (!serviceId || !templateId || !publicKey) {
      toast.error('Email service is not configured. Please try again later.')
      return
    }

    setIsSubmitting(true)

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: trimmedFormData.name,
          email: trimmedFormData.email,
          subject: trimmedFormData.subject,
          message: trimmedFormData.message,
          time: new Date().toLocaleString(),
        },
        {
          publicKey,
        },
      )

      toast.success('Message sent successfully. I will get back to you soon.')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch {
      toast.error('Failed to send message. Please try again in a moment.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative overflow-hidden pt-32 pb-20">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 container-body flex flex-col"
      >
        {/* Title */}
        <motion.div variants={itemVariants} className="mb-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
            Contact Me.
          </h1>
        </motion.div>
        {/* Intro */}
        <motion.p
          variants={itemVariants}
          className="mb-14 max-w-2xl leading-8 text-foreground/75"
        >
          Have a project in mind, a collaboration idea, or just want to say
          hello? I&apos;m always open to meaningful conversations and building
          thoughtful digital experiences together.
        </motion.p>
        {/* Contact Methods */}
        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="mb-10 text-3xl font-bold">Get In Touch.</h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {contactMethods.map((method) => {
              const Icon = method.icon

              return (
                <motion.a
                  key={method.label}
                  href={method.link}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="group rounded-xl border border-foreground/10 bg-foreground/3 p-6 transition-all duration-300 hover:border-foreground/20 hover:bg-foreground/5"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/5">
                    <Icon className="text-lg text-foreground/80" />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {method.label}
                  </h3>

                  <p className="text-sm leading-6 text-foreground/60 transition-colors group-hover:text-foreground/80">
                    {method.value}
                  </p>
                </motion.a>
              )
            })}
          </div>
        </motion.section>
        {/* Form */}
        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="mb-10 text-3xl font-bold">Send A Message.</h2>

          <div className="rounded-xl border border-foreground/10 bg-foreground/2 p-6 sm:p-8">
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/70">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-xl border border-foreground/10 bg-background px-4 py-3 text-foreground outline-none transition-all placeholder:text-foreground/35 focus:border-foreground/30"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/70">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-xl border border-foreground/10 bg-background px-4 py-3 text-foreground outline-none transition-all placeholder:text-foreground/35 focus:border-foreground/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/70">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  required
                  className="w-full rounded-xl border border-foreground/10 bg-background px-4 py-3 text-foreground outline-none transition-all placeholder:text-foreground/35 focus:border-foreground/30"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/70">
                  Message
                </label>
                <textarea
                  rows={7}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  className="w-full resize-none rounded-xl border border-foreground/10 bg-background px-4 py-3 text-foreground outline-none transition-all placeholder:text-foreground/35 focus:border-foreground/30"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="inline-flex items-center gap-3 rounded-xl bg-foreground px-6 py-3 font-medium text-background transition-all"
              >
                <FaPaperPlane size={14} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </div>
        </motion.section>
        {/* Footer Links */}{' '}
        <motion.div variants={itemVariants} className="mb-14">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-lg font-semibold text-foreground transition-colors hover:text-foreground/80"
          >
            Go Back Home
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
