'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const professionalExperiences = [
  {
    title: 'Software Development Engineer',
    company: 'Amazon',
    location: 'San Diego, CA, USA',
    period: 'February 2025 - Present',
    description: [
      'Built an internal seller-facing workflow portal end-to-end using React, TypeScript, AWS Lambda, Step Functions, SNS/SQS, and DynamoDB to automate seller legal-entity migrations, integrating APIs for contract generation, transaction routing, and data synchronization; reduced manual workload and migration time by 60% while providing real-time operational visibility.',
      'Deployed a web application that replaced manual seller migration and contract-creation workflows, integrating React, TypeScript, API Gateway, and Fargate to streamline data processing for 100K+ sellers and saving over 4 weeks of operational effort.',
      'Designed and implemented an event-driven monitoring and analytics framework using EventBridge, Glue, and Athena to process Iceberg-based audit logs, enabling incremental reconciliation, faster anomaly detection, and proactive insight generation.',
      'Collaborated cross-functionally with data, legal, and engineering teams to drive infrastructure innovation and ensure high availability across large-scale distributed systems.'
    ]
  },
  {
    title: 'Software Development Engineer Intern',
    company: 'Amazon',
    location: 'San Diego, CA, USA',
    period: 'May 2024 - August 2024',
    description: [
      'Architected and implemented a serverless data pipeline using AWS Lambda, Step Functions, and EventBridge to automate the ingestion and processing of 1M+ daily transaction records, reducing data latency by 40%.',
      'Developed a real-time dashboard using React and Amazon QuickSight to visualize key performance metrics, enabling stakeholders to make data-driven decisions 30% faster.',
      'Optimized DynamoDB access patterns and query performance, resulting in a 25% reduction in read/write costs and improved application response times.'
    ]
  },
  {
    title: 'Business Technology Analyst',
    company: 'Deloitte',
    location: 'India',
    period: 'August 2021 - July 2023',
    description: [
      'Led the migration of legacy on-premise applications to AWS cloud infrastructure, utilizing EC2, S3, and RDS, which improved system scalability and reduced maintenance costs by 20%.',
      'Developed and maintained RESTful APIs using Python (Flask) and Java (Spring Boot) to facilitate seamless communication between microservices, handling over 50K requests daily.',
      'Implemented CI/CD pipelines using Jenkins and GitLab CI to automate testing and deployment processes, reducing release cycles from 2 weeks to 3 days.',
      'Collaborated with cross-functional teams to gather requirements, design solution architectures, and conduct code reviews, ensuring high-quality software delivery.'
    ]
  }
]

const leadershipJourney = [
  {
    title: "National Trainer",
    company: "Junior Chamber International",
    location: "India",
    period: "2022 – Present",
    description: [
      "Conducted training programs on Study Techniques, Effective Public Speaking, Interview Skills, and Interpersonal Skills for over 5K students across India"
    ],
    skills: ["Public Speaking", "Training", "Leadership"],
    images: [
      "/images/leadership/jci-training.png"
    ]
  },
  {
    title: "CEO",
    company: "Capital Grains (Student-Run Restaurant)",
    location: "Carnegie Mellon University",
    period: "Feb 2024 - Dec 2024",
    description: [
      "Led a cross-functional student team to manage operations, budgeting, and marketing of a campus-based restaurant, fostering leadership and entrepreneurial management skills"
    ],
    skills: ["Leadership", "Management", "Operations"],
    images: [
      "/images/leadership/capital-grains-team.jpg",
      "/images/leadership/capital-grains-group.jpg",
      "/images/leadership/capital-grains-kitchen.jpg"
    ]
  },
  {
    title: "President",
    company: "JCI Mysore Brindavan",
    location: "Mysore, India",
    period: "2022 - 2023",
    description: [
      "Hosted 'Effective Public Speaking' (EPS) training, empowering participants to become confident speakers",
      "Led social initiatives like Clean India, Project DAAN, and conducted menstrual hygiene training for young minds",
      "Facilitated leadership development through CAPP & Action Framework training",
      "Spearheaded wildlife conservation efforts, including adopting a peacock during a national visit",
      "Received the 'Golden Collar Award' for the chapter's exponential growth and collective dedication"
    ],
    skills: ["Leadership", "Public Speaking", "Social Impact", "Team Management", "Event Planning"],
    images: [
      "/images/jci-president.png"
    ]
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {professionalExperiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                    {exp.company}
                  </p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full inline-block">
                    {exp.period}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {exp.location}
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 mt-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Leadership Journey
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadershipJourney.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative h-[500px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ${index === leadershipJourney.length - 1 && leadershipJourney.length % 2 !== 0
                  ? 'md:col-span-2'
                  : ''
                }`}
            >
              {/* Background Image */}
              {role.images && role.images.length > 0 && (
                <div className="absolute inset-0">
                  <Image
                    src={role.images[0]}
                    alt={`${role.title} at ${role.company}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:from-black/95 group-hover:via-black/70 group-hover:to-black/40 transition-colors duration-500" />
                </div>
              )}

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8 text-white z-10">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {role.title}
                  </h3>
                  <p className="text-lg text-blue-300 font-medium mb-4">
                    {role.company}
                  </p>

                  <div className="flex justify-between items-center mb-6 text-gray-300 text-sm">
                    <span>{role.location}</span>
                    {role.period && (
                      <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                        {role.period}
                      </span>
                    )}
                  </div>

                  <ul className="space-y-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-h-0 group-hover:max-h-40 overflow-y-auto custom-scrollbar">
                    {role.description.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-200 text-sm">
                        <span className="mr-2 mt-1.5 w-1 h-1 bg-blue-400 rounded-full flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium text-white bg-blue-600/80 backdrop-blur-sm rounded-full border border-blue-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}