import React from 'react'
import { Field, ErrorMessage, FieldArray } from 'formik'
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline'

interface ProjectsProps {
  values: any
  setFieldValue: (field: string, value: any) => void
}

export default function Projects({ values, setFieldValue }: ProjectsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Projects</h2>
        <p className="text-gray-600">
          Showcase your personal or professional projects that highlight your skills and achievements.
        </p>
      </div>

      <FieldArray name="projects.projects">
        {({ push, remove }) => (
          <div>
            {values.projects.projects.map((project: any, index: number) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Project #{index + 1}</h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Project Title */}
                  <div>
                    <label htmlFor={`projects.projects.${index}.title`} className="block text-sm font-medium text-gray-700">Title *</label>
                    <Field
                      type="text"
                      name={`projects.projects.${index}.title`}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 px-3 py-2"
                      placeholder="e.g., Personal Portfolio Website"
                    />
                    <ErrorMessage name={`projects.projects.${index}.title`} component="div" className="mt-1 text-sm text-red-600" />
                  </div>

                  {/* Project Link */}
                    <div>
                    <label htmlFor={`projects.projects.${index}.link`} className="block text-sm font-medium text-gray-700">Link (Optional)</label>
                    <Field
                      type="url"
                      name={`projects.projects.${index}.link`}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 px-3 py-2"
                      placeholder="e.g., https://my-project.com"
                    />
                    <ErrorMessage name={`projects.projects.${index}.link`} component="div" className="mt-1 text-sm text-red-600" />
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-6">
                  <label htmlFor={`projects.projects.${index}.technologies`} className="block text-sm font-medium text-gray-700">Technologies (comma-separated)</label>
                  <Field
                    type="text"
                    name={`projects.projects.${index}.technologies`}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 px-3 py-2"
                    placeholder="e.g., React, Node.js, MongoDB"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue(`projects.projects.${index}.technologies`, e.target.value.split(',').map(tech => tech.trim()))}
                    value={values.projects.projects[index].technologies.join(', ')}
                    />
                  <ErrorMessage name={`projects.projects.${index}.technologies`} component="div" className="mt-1 text-sm text-red-600" />
                  </div>

                  {/* Description */}
                <div className="mt-6">
                  <label htmlFor={`projects.projects.${index}.description`} className="block text-sm font-medium text-gray-700">Description *</label>
                    <Field
                      as="textarea"
                    name={`projects.projects.${index}.description`}
                      rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 px-3 py-2"
                    placeholder="Describe your project, your role, and key achievements..."
                    />
                  <ErrorMessage name={`projects.projects.${index}.description`} component="div" className="mt-1 text-sm text-red-600" />
                  </div>

                {values.projects.projects.length > 1 && (
                  <div className="mt-6 flex justify-end">
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      <MinusCircleIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                      Remove Project
                    </button>
                  </div>
                )}
              </div>
            ))}
            <div className="mt-6">
            <button
              type="button"
                onClick={() => push({ title: '', description: '', technologies: [''], link: '' })}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                <PlusCircleIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Add Project
            </button>
            </div>
          </div>
        )}
      </FieldArray>
    </div>
  )
} 