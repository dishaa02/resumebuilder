import React from 'react'
import { Field, ErrorMessage, FieldArray } from 'formik'
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline'

interface AdditionalInfoProps {
  values: any
  setFieldValue: (field: string, value: any) => void
}

export default function AdditionalInfo({ values, setFieldValue }: AdditionalInfoProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Additional Information</h2>
        <p className="text-gray-600">
          Include any other relevant information like languages, hobbies, or certifications.
        </p>
      </div>

      {/* Languages */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-bold mb-4 text-gray-900">Languages</h3>
        <FieldArray name="additional.languages">
          {({ push, remove }) => (
            <div>
              {values.additional.languages.map((language: string, index: number) => (
                <div key={index} className="flex items-center space-x-4 mb-3">
                  <div className="flex-1">
                    <label htmlFor={`additional.languages.${index}`} className="sr-only">Language</label>
                    <Field
                      type="text"
                      name={`additional.languages.${index}`}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 px-3 py-2"
                      placeholder="e.g., Spanish, French"
                    />
                    <ErrorMessage name={`additional.languages.${index}`} component="div" className="mt-1 text-sm text-red-600" />
                  </div>
                  {values.additional.languages.length > 1 && (
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <MinusCircleIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => push('')}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <PlusCircleIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Add Language
              </button>
            </div>
          )}
        </FieldArray>
      </div>

      {/* Hobbies */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-bold mb-4 text-gray-900">Hobbies</h3>
        <FieldArray name="additional.hobbies">
          {({ push, remove }) => (
            <div>
              {values.additional.hobbies.map((hobby: string, index: number) => (
                <div key={index} className="flex items-center space-x-4 mb-3">
                  <div className="flex-1">
                    <label htmlFor={`additional.hobbies.${index}`} className="sr-only">Hobby</label>
                    <Field
                      type="text"
                      name={`additional.hobbies.${index}`}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 px-3 py-2"
                      placeholder="e.g., Hiking, Photography"
                    />
                    <ErrorMessage name={`additional.hobbies.${index}`} component="div" className="mt-1 text-sm text-red-600" />
                  </div>
                  {values.additional.hobbies.length > 1 && (
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <MinusCircleIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => push('')}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <PlusCircleIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Add Hobby
              </button>
            </div>
          )}
        </FieldArray>
      </div>

      {/* Certifications */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4 text-gray-900">Certifications</h3>
        <FieldArray name="additional.certifications">
          {({ push, remove }) => (
            <div>
              {values.additional.certifications.map((certification: string, index: number) => (
                <div key={index} className="flex items-center space-x-4 mb-3">
                  <div className="flex-1">
                    <label htmlFor={`additional.certifications.${index}`} className="sr-only">Certification</label>
                    <Field
                      type="text"
                      name={`additional.certifications.${index}`}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 px-3 py-2"
                      placeholder="e.g., AWS Certified Solutions Architect"
                    />
                    <ErrorMessage name={`additional.certifications.${index}`} component="div" className="mt-1 text-sm text-red-600" />
                  </div>
                  {values.additional.certifications.length > 1 && (
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <MinusCircleIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => push('')}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <PlusCircleIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Add Certification
              </button>
            </div>
          )}
        </FieldArray>
      </div>
    </div>
  )
} 