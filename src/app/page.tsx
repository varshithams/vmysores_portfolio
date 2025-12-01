'use client'

import React from 'react'
import { Navigation } from '@/components/ui/navigation'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { Experience } from '@/components/sections/experience'
import { Projects } from '@/components/sections/projects'
import { Contact } from '@/components/sections/contact'
import { motion } from 'framer-motion'

import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="pt-16">
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 py-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 flex justify-center md:justify-end"
            >
              <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Varshitha Mysore Suresh"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 text-center md:text-left space-y-6"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 tracking-tight"
              >
                Varshitha Mysore Suresh
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium"
              >
                Software Development Engineer
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed"
              >
                Experienced Software Development Engineer with a Master's in Information Systems from CMU. Skilled in building scalable web applications, event-driven architectures, and automation solutions using React, TypeScript, AWS, and Python.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap gap-4 justify-center md:justify-start"
              >
                <a
                  href="#contact"
                  className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/30"
                >
                  Get in Touch
                </a>
                <a
                  href="#experience"
                  className="px-8 py-3 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors shadow-sm"
                >
                  View Work
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <About />
        <Skills />
        <Experience />
        {/* <Projects /> */}
        <Contact />
      </div>
    </>
  )
} 