import { Field, ErrorMessage, FieldArray } from 'formik'
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline'

interface WorkHistoryProps {
  values: any
  setFieldValue: (field: string, value: any) => void
}

export default function WorkHistory({ values, setFieldValue }: WorkHistoryProps) {
  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Work History</h2>
        <p className="text-gray-600">
          List your work experience in reverse chronological order. Start with your
          most recent position.
        </p>
      </div>

      <FieldArray name="work.experiences">
        {({ push, remove }) => (
          <div className="space-y-8">
            {values.work.experiences.map((_: any, index: number) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Experience {index + 1}
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
                  {/* Job Title */}
                  <div className="col-span-2">
                    <label
                      htmlFor={`work.experiences.${index}.jobTitle`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Job Title *
                    </label>
                    <Field
                      type="text"
                      name={`work.experiences.${index}.jobTitle`}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 px-3 py-2"
                    />
                    <ErrorMessage
                      name={`work.experiences.${index}.jobTitle`}
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="col-span-2">
                    <label
                      htmlFor={`work.experiences.${index}.companyName`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Company Name *
                    </label>
                    <Field
                      type="text"
                      name={`work.experiences.${index}.companyName`}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 px-3 py-2"
                    />
                    <ErrorMessage
                      name={`work.experiences.${index}.companyName`}
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label
                      htmlFor={`work.experiences.${index}.location`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Location *
                    </label>
                    <Field
                      type="text"
                      name={`work.experiences.${index}.location`}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 px-3 py-2"
                    />
                    <ErrorMessage
                      name={`work.experiences.${index}.location`}
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>

                  {/* Present Checkbox */}
                  <div>
                    <label className="flex items-center h-full">
                      <Field
                        type="checkbox"
                        name={`work.experiences.${index}.isPresent`}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded text-gray-900"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        I currently work here
                      </span>
                    </label>
                  </div>

                  {/* Date Range */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor={`work.experiences.${index}.startDate`}
                        className="block text-sm font-medium text-gray-700"
                      >
                        Start Date *
                      </label>
                      <Field
                        type="date"
                        name={`work.experiences.${index}.startDate`}
                        max={today}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 px-3 py-2"
                      />
                      <ErrorMessage
                        name={`work.experiences.${index}.startDate`}
                        component="div"
                        className="mt-1 text-sm text-red-600"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor={`work.experiences.${index}.endDate`}
                        className="block text-sm font-medium text-gray-700"
                      >
                        End Date {!values.work.experiences[index].isPresent && '*'}
                      </label>
                      <Field
                        type="date"
                        name={`work.experiences.${index}.endDate`}
                        max={today}
                        disabled={values.work.experiences[index].isPresent}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-100 text-gray-900 px-3 py-2"
                      />
                      <ErrorMessage
                        name={`work.experiences.${index}.endDate`}
                        component="div"
                        className="mt-1 text-sm text-red-600"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="col-span-2">
                    <label
                      htmlFor={`work.experiences.${index}.description`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description *
                    </label>
                    <Field
                      as="textarea"
                      name={`work.experiences.${index}.description`}
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 px-3 py-2"
                      placeholder="Describe your responsibilities and achievements..."
                    />
                    <ErrorMessage
                      name={`work.experiences.${index}.description`}
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
                  jobTitle: '',
                  companyName: '',
                  location: '',
                  startDate: '',
                  endDate: '',
                  isPresent: false,
                  description: '',
                })
              }
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <PlusIcon className="w-5 h-5 mr-2" />
              Add Another Experience
            </button>
          </div>
        )}
      </FieldArray>
    </div>
  )
} 