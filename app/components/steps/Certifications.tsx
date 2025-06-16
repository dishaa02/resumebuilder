import { Field, ErrorMessage, FieldArray } from 'formik'
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline'

interface CertificationsProps {
  values: any
  setFieldValue: (field: string, value: any) => void
}

export default function Certifications({ values, setFieldValue }: CertificationsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Certifications</h2>
        <p className="text-gray-600">
          List your professional certifications, licenses, and relevant training programs.
        </p>
      </div>

      <FieldArray name="certifications">
        {({ push, remove }) => (
          <div className="space-y-8">
            {values.certifications.map((_: any, index: number) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">
                    Certification {index + 1}
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
                  {/* Certification Name */}
                  <div className="col-span-2">
                    <label
                      htmlFor={`certifications.${index}.name`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Certification Name *
                    </label>
                    <Field
                      type="text"
                      name={`certifications.${index}.name`}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
                    />
                    <ErrorMessage
                      name={`certifications.${index}.name`}
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>

                  {/* Issuing Organization */}
                  <div className="col-span-2">
                    <label
                      htmlFor={`certifications.${index}.issuer`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Issuing Organization *
                    </label>
                    <Field
                      type="text"
                      name={`certifications.${index}.issuer`}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
                    />
                    <ErrorMessage
                      name={`certifications.${index}.issuer`}
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>

                  {/* Date Range */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor={`certifications.${index}.issueDate`}
                        className="block text-sm font-medium text-gray-700"
                      >
                        Issue Date *
                      </label>
                      <Field
                        type="date"
                        name={`certifications.${index}.issueDate`}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
                      />
                      <ErrorMessage
                        name={`certifications.${index}.issueDate`}
                        component="div"
                        className="mt-1 text-sm text-red-600"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor={`certifications.${index}.expiryDate`}
                        className="block text-sm font-medium text-gray-700"
                      >
                        Expiry Date
                      </label>
                      <Field
                        type="date"
                        name={`certifications.${index}.expiryDate`}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
                      />
                      <ErrorMessage
                        name={`certifications.${index}.expiryDate`}
                        component="div"
                        className="mt-1 text-sm text-red-600"
                      />
                    </div>
                  </div>

                  {/* Credential ID */}
                  <div className="col-span-2">
                    <label
                      htmlFor={`certifications.${index}.credentialId`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Credential ID
                    </label>
                    <Field
                      type="text"
                      name={`certifications.${index}.credentialId`}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
                      placeholder="e.g., AWS-123456"
                    />
                    <ErrorMessage
                      name={`certifications.${index}.credentialId`}
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>

                  {/* Credential URL */}
                  <div className="col-span-2">
                    <label
                      htmlFor={`certifications.${index}.credentialUrl`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Credential URL
                    </label>
                    <Field
                      type="url"
                      name={`certifications.${index}.credentialUrl`}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
                      placeholder="https://www.credential.net/..."
                    />
                    <ErrorMessage
                      name={`certifications.${index}.credentialUrl`}
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
                  name: '',
                  issuer: '',
                  issueDate: '',
                  expiryDate: '',
                  credentialId: '',
                  credentialUrl: '',
                })
              }
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <PlusIcon className="w-5 h-5 mr-2" />
              Add Another Certification
            </button>
          </div>
        )}
      </FieldArray>
    </div>
  )
} 