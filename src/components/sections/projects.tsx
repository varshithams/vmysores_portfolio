import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    title: 'Multi-Agent LLM for Reducing Unsheltered Homelessness — Accepted at ACMLC 2025. ',
    period: 'Aug 2024 - May 2025',
    description: 'Built a predictive and preventive system using XGBoost, Neo4j knowledge graphs, and LangGraph multi-agent orchestration, achieving 95% accuracy and designing real-time service coordination agents (housing, medical, food, employment) to equitably match vulnerable populations with resources.',
    techStack: [
      'Python', 'XGBoost', 'Scikit-learn', 
      'Neo4j', 'FAISS', 
      'LangChain', 'LangGraph', 'OpenAI API',
      'FastAPI', 'React', 'Tailwind CSS'
    ],
    link: 'Coming soon'
  },
  {
    title: 'Restaurant Recommender Android App',
    period: 'Aug 2024 - Dec 2024',
    description: 'Developed a location-based restaurant recommendation app using Google Maps SDK and OpenAI API, featuring personalized suggestions based on user preferences, dietary restrictions, and real-time location data. Implemented interactive map with radius filtering, preference controls for cuisine and price range, and offline caching via Room Database.',
    techStack: ['Kotlin', 'Java', 'Google Maps SDK', 'OpenAI API', 'Room Database', 'Retrofit', 'OkHttp', 'Material Design'],
    link: 'https://github.com/Vishvaas02/Android-app-Restaurant-Recommender'
  },
  {
    title: 'AI-Powered Content Generation Platform',
    period: 'Mar 2024 - May 2024',
    description: 'Developed an AI-driven content platform leveraging Angular, Node.js, and OpenAI API to automate social media post and blog generation with real-time previews and platform-specific customization.',
    techStack: ['Angular', 'Node.js', 'OpenAI API', 'MongoDB', 'Express.js'],
    link: 'https://github.com/Vishvaas02/CMPE-280-Final-Project'
  },
  {
    title: 'Streamlining Splitwise UI/UX Transformation',
    period: 'Sep 2023 - Dec 2023',
    description: 'Researched and redesigned the Splitwise app with a Figma-driven redesign, elevating user satisfaction scores by 45% and reducing user effort in expense management.',
    techStack: ['Figma', 'React', 'Material UI', 'User Research', 'Prototyping'],
    link: 'https://www.notion.so/vishvaasvasudevarao/Streamlining-Splitwise-6df934e0334647e485ded0c1b859c92a'
  },
  {
    title: 'Morphological Stemmer for Kannada Text',
    period: 'Feb 2021 - Apr 2021',
    description: 'Developed a morphological stemmer (a text processing technique for word segmentation) for Kannada applying NLP and machine learning approaches, achieving 85% accuracy and improving efficiency over traditional methods in linguistic analysis.',
    techStack: ['Python', 'NLTK', 'Machine Learning', 'NLP', 'Data Analysis'],
    link: 'https://github.com/Vishvaas02/project_nlp'
  }
  
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-12"
        >
          <h2 className="text-4xl font-semibold text-center text-gray-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                    {project.period}
                  </p>
                  <p className="text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 