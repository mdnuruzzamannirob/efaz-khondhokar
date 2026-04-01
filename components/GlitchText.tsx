'use client'

import { motion } from 'framer-motion'

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className = '' }: GlitchTextProps) {
  return (
    <div className="relative inline-block">
      {/* Red glitch layer - continuous */}
      <motion.h1
        className={`${className} absolute top-0 left-0 opacity-50 pointer-events-none`}
        animate={{
          x: [0, -2, 2, -2, 0],
          transition: { duration: 0.2 },
        }}
      >
        {text}
      </motion.h1>

      {/* Cyan glitch layer - continuous */}
      <motion.h1
        className={`${className} absolute top-0 left-0 opacity-50 pointer-events-none`}
        animate={{
          x: [0, 2, -2, 2, 0],
          transition: {
            duration: 0.2,

            delay: 0.05,
          },
        }}
      >
        {text}
      </motion.h1>

      {/* Main text */}
      <motion.h1
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {text}
      </motion.h1>
    </div>
  )
}
