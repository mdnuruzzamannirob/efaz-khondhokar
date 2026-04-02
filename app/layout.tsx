import { Header } from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'
import type { Metadata } from 'next'
import { Inter as Geist, Roboto_Mono as Geist_Mono } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Efaz.dev | Portfolio',
  description: 'Frontend Developer, UX Architect, and JavaScript Engineer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.className} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-background text-foreground relative"
      >
        <ThemeProvider>
          <Header />
          <main className="flex-1 relative z-10">{children}</main>
          <ToastContainer
            position="top-right"
            autoClose={3500}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover
            draggable
            theme="colored"
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
