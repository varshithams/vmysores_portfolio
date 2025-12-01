import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Varshitha Mysore Suresh - Software Development Engineer',
  description: 'Portfolio of Varshitha Mysore Suresh, a Software Development Engineer with expertise in building scalable web applications, event-driven architectures, and automation solutions.',
  keywords: ['Software Development', 'Web Application', 'AWS', 'React', 'Python', 'Automation'],
  authors: [{ name: 'Varshitha Mysore Suresh' }],
  openGraph: {
    title: 'Varshitha Mysore Suresh - Software Development Engineer',
    description: 'Portfolio of Varshitha Mysore Suresh, showcasing expertise in software development, cloud architecture, and automation.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative flex min-h-screen flex-col">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
} 