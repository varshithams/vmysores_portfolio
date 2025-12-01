import React from 'react'
import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-3xl font-bold text-center text-gray-900 dark:text-white"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="prose dark:prose-invert max-w-none"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I am a Software Development Engineer with a Master's degree in Information Systems from Carnegie Mellon University.
              I have a strong background in Computer Science from The National Institute of Engineering.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
              My professional experience includes roles at Amazon and Deloitte, where I've built scalable web applications,
              optimized workflows, and implemented event-driven architectures. I am passionate about leveraging technology
              to solve complex problems and deliver high-quality software solutions.
            </p>

            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
              <ul className="space-y-4">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
                >
                  <h4 className="font-semibold">Master's, Information Systems</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Carnegie Mellon University | GPA: 3.85</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">August 2023 - December 2024</p>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
                >
                  <h4 className="font-semibold">Bachelor's, Computer Science</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">The National Institute of Engineering | GPA: 3.95</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">August 2017 - July 2021</p>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 