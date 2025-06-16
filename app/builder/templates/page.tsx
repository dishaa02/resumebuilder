'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ProfessionalTemplate from '@/app/components/templates/ProfessionalTemplate'
import ModernTemplate from '@/app/components/templates/ModernTemplate'
import SleekTemplate from '@/app/components/templates/SleekTemplate'
import CleanTemplate from '@/app/components/templates/CleanTemplate'
import ElegantTemplate from '@/app/components/templates/ElegantTemplate'
import TwoColumnTemplate from '@/app/components/templates/TwoColumnTemplate'
import BoldTemplate from '@/app/components/templates/BoldTemplate'

// Sample data for preview
const sampleData = {
  personalInfo: {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
    location: "New York, NY",
    summary: "Experienced software developer with a passion for creating efficient and scalable solutions. Skilled in full-stack development and cloud architecture, with a proven track record of delivering high-quality software products."
  },
  experience: [
    {
      company: "Tech Corp",
      position: "Senior Software Engineer",
      duration: "2020 - Present",
      description: "Led the development of scalable cloud-based applications using React and Node.js. Implemented CI/CD pipelines, resulting in a 40% improvement in deployment efficiency. Mentored junior developers and conducted code reviews to ensure high code quality."
    },
    {
      company: "Innovate Solutions",
      position: "Software Developer",
      duration: "2018 - 2020",
      description: "Developed and maintained web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to define, design, and ship new features. Contributed to a 25% reduction in bug reports through rigorous testing and debugging."
    }
  ],
  education: [
    {
      school: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      year: "2014 - 2018",
      description: "Graduated with honors. Coursework included Data Structures, Algorithms, and Software Engineering Principles."
    },
    {
      school: "Online Certifications",
      degree: "Full Stack Web Development Bootcamp",
      year: "2017",
      description: "Completed an intensive bootcamp covering front-end and back-end development."
    }
  ],
  skills: ["React", "Node.js", "TypeScript", "JavaScript", "Python", "AWS", "Docker", "Kubernetes", "CI/CD", "MongoDB", "SQL", "Agile Methodologies"],
  projects: [
    {
      title: "Resume Builder Application",
      description: "Developed a full-stack resume builder application with a user-friendly interface, multiple template options, and real-time preview functionality.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Prisma", "PostgreSQL"],
      link: "https://github.com/example/resume-builder"
    },
    {
      title: "E-commerce Platform Redesign",
      description: "Led the front-end redesign of an existing e-commerce platform, improving user engagement by 20% and conversion rates by 15%.",
      technologies: ["React", "Redux", "Material-UI", "Node.js", "Express.js"]
    }
  ],
  additionalInfo: {
    languages: ["English (Native)", "Spanish (Conversational)"],
    hobbies: ["Hiking", "Photography", "Reading science fiction"],
    certifications: ["AWS Certified Developer - Associate", "Google Cloud Professional Cloud Architect"]
  }
}

// Template data with preview components
const templates = [
  {
    id: 'professional',
    name: 'Professional',
    category: 'Professional',
    description: 'Clean and professional design for corporate roles',
    component: ProfessionalTemplate,
    previewData: sampleData
  },
  {
    id: 'modern',
    name: 'Modern',
    category: 'Creative',
    description: 'Contemporary design with a creative touch',
    component: ModernTemplate,
    previewData: sampleData
  },
  {
    id: 'sleek',
    name: 'Sleek',
    category: 'Modern',
    description: 'A sleek and modern design from your image',
    component: SleekTemplate,
    previewData: sampleData
  },
  {
    id: 'clean',
    name: 'Clean',
    category: 'Professional',
    description: 'A clean and professional design from your image',
    component: CleanTemplate,
    previewData: sampleData
  },
  {
    id: 'elegant',
    name: 'Elegant',
    category: 'Modern',
    description: 'An elegant design with a clear structure',
    component: ElegantTemplate,
    previewData: sampleData
  },
  {
    id: 'two-column',
    name: 'Two Column',
    category: 'Professional',
    description: 'A two-column layout for concise information',
    component: TwoColumnTemplate,
    previewData: sampleData
  },
  {
    id: 'bold',
    name: 'Bold',
    category: 'Creative',
    description: 'A bold and impactful design from your image',
    component: BoldTemplate,
    previewData: sampleData
  }
]

const categories = ['All', 'Professional', 'Creative', 'Modern']
const colors = ['blue', 'green', 'purple', 'red', 'gray']
const fonts = ['sans', 'serif', 'mono']
const spacings = ['2', '4', '6']

export default function TemplateSelection() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)

  const filteredTemplates = selectedCategory === 'All'
    ? templates
    : templates.filter(template => template.category === selectedCategory)

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId)
  }

  const handleContinue = () => {
    if (selectedTemplate) {
      router.push(`/builder?template=${selectedTemplate}`)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Choose a Template
          </h1>
          <p className="mt-3 text-lg text-gray-500">
            Select a template that best represents your professional style
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex justify-center space-x-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTemplates.map(template => (
            <div
              key={template.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer ${selectedTemplate === template.id ? 'ring-4 ring-blue-500' : ''}`}
              onClick={() => handleTemplateSelect(template.id)}
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900">{template.name}</h2>
                <p className="mt-2 text-gray-500 text-sm">{template.description}</p>
              </div>
              <div className="relative bg-gray-100 aspect-[8.5/11] overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full transform scale-[0.5] origin-top-left pointer-events-none">
                  <template.component data={template.previewData} isPreview={true} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={handleContinue}
            disabled={!selectedTemplate}
            className={`px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 ${!selectedTemplate ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Continue with Selected Template
          </button>
        </div>
      </div>
    </div>
  )
} 