import { Field, ErrorMessage, FieldArray } from 'formik'
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline'

interface EducationProps {
  values: any
  setFieldValue: (field: string, value: any) => void
}

export default function Education({ values, setFieldValue }: EducationProps) {
  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Education</h2>
        <p className="text-gray-600">
          List your educational background in reverse chronological order. Start
          with your most recent degree.
        </p>
      </div>

      <FieldArray name="education.degrees">
        {({ push, remove }) => (
          <div className="space-y-8">
            {values.education.degrees.map((_: any, index: number) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Degree {index + 1}
                  </h3>
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {/* Degree */}
                  <div className="col-span-2">
                    <label
                      htmlFor={`education.degrees.${index}.degree`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Degree/Certificate *
                    </label>
                    <Field
                      type="text"
                      name={`education.degrees.${index}.degree`}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 px-3 py-2"
                    />
                    <ErrorMessage
                      name={`education.degrees.${index}.degree`}
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>

                  {/* Institution */}
                  <div className="col-span-2">
                    <label
                      htmlFor={`education.degrees.${index}.institution`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Institution *
                    </label>
                    <Field
                      type="text"
                      name={`education.degrees.${index}.institution`}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 px-3 py-2"
                    />
                    <ErrorMessage
                      name={`education.degrees.${index}.institution`}
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label
                      htmlFor={`education.degrees.${index}.location`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Location *
                    </label>
                    <Field
                      type="text"
                      name={`education.degrees.${index}.location`}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 px-3 py-2"
                    />
                    <ErrorMessage
                      name={`education.degrees.${index}.location`}
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>

                  {/* Currently Studying Here */}
                  <div className="flex items-center">
                    <Field
                      type="checkbox"
                      name={`education.degrees.${index}.isPresent`}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setFieldValue(`education.degrees.${index}.isPresent`, e.target.checked);
                        if (e.target.checked) {
                          setFieldValue(`education.degrees.${index}.endDate`, '');
                        }
                      }}
                    />
                    <label
                      htmlFor={`education.degrees.${index}.isPresent`}
                      className="ml-2 block text-sm text-gray-700"
                    >
                      I am currently studying here
                    </label>
                  </div>

                  {/* Date Range */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor={`education.degrees.${index}.startDate`}
                        className="block text-sm font-medium text-gray-700"
                      >
                        Start Date *
                      </label>
                      <Field
                        type="date"
                        name={`education.degrees.${index}.startDate`}
                        max={today}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 px-3 py-2"
                      />
                      <ErrorMessage
                        name={`education.degrees.${index}.startDate`}
                        component="div"
                        className="mt-1 text-sm text-red-600"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor={`education.degrees.${index}.endDate`}
                        className="block text-sm font-medium text-gray-700"
                      >
                        End Date {!values.education.degrees[index].isPresent && '*'}
                      </label>
                      <Field
                        type="date"
                        name={`education.degrees.${index}.endDate`}
                        max={today}
                        disabled={values.education.degrees[index].isPresent}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 px-3 py-2 disabled:bg-gray-100 disabled:text-gray-500"
                      />
                      <ErrorMessage
                        name={`education.degrees.${index}.endDate`}
                        component="div"
                        className="mt-1 text-sm text-red-600"
                      />
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="col-span-2">
                    <label
                      htmlFor={`education.degrees.${index}.achievements`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Achievements & Activities
                    </label>
                    <Field
                      as="textarea"
                      name={`education.degrees.${index}.achievements`}
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 px-3 py-2"
                      placeholder="List any academic achievements, extracurricular activities, or relevant coursework..."
                    />
                    <ErrorMessage
                      name={`education.degrees.${index}.achievements`}
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={() =>
                push({
                  degree: '',
                  institution: '',
                  location: '',
                  startDate: '',
                  endDate: '',
                  achievements: '',
                })
              }
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <PlusIcon className="w-5 h-5 mr-2" />
              Add Another Degree
            </button>
          </div>
        )}
      </FieldArray>
    </div>
  )
} 