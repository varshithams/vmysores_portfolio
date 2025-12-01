import React from 'react'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['C/C++', 'Java', 'Python', 'SAP ABAP', 'SQL', 'TypeScript']
  },
  {
    title: 'Databases',
    skills: ['Adobe After Effects', 'MySQL', 'NoSQL', 'MongoDB']
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Django', 'Tensorflow', 'Pytorch', 'PIL', 'TorchVision', 'Pillow', 'FastAPI']
  },
  {
    title: 'Cloud & AWS Services',
    skills: ['EC2', 'S3', 'IAM', 'CloudFormation', 'Lambda', 'CloudWatch', 'SQS', 'SNS', 'DynamoDB', 'ECS', 'Fargate', 'API Gateway', 'Redshift', 'Athena', 'Kinesis', 'Glue', 'Step Functions']
  },
  {
    title: 'Tools & Platforms',
    skills: ['SAP Logon System', 'SAP MDG', 'SAP Fiori', 'Nvidia GPU']
  },
  {
    title: 'Domains',
    skills: ['Computer Vision', 'Image Processing']
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
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
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white tracking-tight">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 