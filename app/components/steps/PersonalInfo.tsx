import { Field, ErrorMessage } from 'formik'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

interface PersonalInfoProps {
  values: any
  setFieldValue: (field: string, value: any) => void
}

export default function PersonalInfo({ values, setFieldValue }: PersonalInfoProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Personal Information</h2>
        <p className="text-gray-600">
          Please provide your basic information. This will be used to create your
          resume header.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label
            htmlFor="personal.firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name *
          </label>
          <Field
            type="text"
            name="personal.firstName"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 px-3 py-2"
          />
          <ErrorMessage
            name="personal.firstName"
            component="div"
            className="mt-1 text-sm text-red-600"
          />
        </div>

        {/* Last Name */}
        <div>
          <label
            htmlFor="personal.lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name *
          </label>
          <Field
            type="text"
            name="personal.lastName"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 px-3 py-2"
          />
          <ErrorMessage
            name="personal.lastName"
            component="div"
            className="mt-1 text-sm text-red-600"
          />
        </div>

        {/* Profession */}
        <div className="col-span-2">
          <label
            htmlFor="personal.profession"
            className="block text-sm font-medium text-gray-700"
          >
            Profession *
          </label>
          <Field
            type="text"
            name="personal.profession"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 px-3 py-2"
          />
          <ErrorMessage
            name="personal.profession"
            component="div"
            className="mt-1 text-sm text-red-600"
          />
        </div>

        {/* Contact Information */}
        <div>
          <label
            htmlFor="personal.phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number *
          </label>
          <Field
            type="tel"
            name="personal.phone"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 px-3 py-2"
          />
          <ErrorMessage
            name="personal.phone"
            component="div"
            className="mt-1 text-sm text-red-600"
          />
        </div>

        <div>
          <label
            htmlFor="personal.email"
            className="block text-sm font-medium text-gray-700"
          >
            Email *
          </label>
          <Field
            type="email"
            name="personal.email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 px-3 py-2"
          />
          <ErrorMessage
            name="personal.email"
            component="div"
            className="mt-1 text-sm text-red-600"
          />
        </div>

        {/* Location */}
        <div>
          <label
            htmlFor="personal.city"
            className="block text-sm font-medium text-gray-700"
          >
            City *
          </label>
          <Field
            type="text"
            name="personal.city"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 px-3 py-2"
          />
          <ErrorMessage
            name="personal.city"
            component="div"
            className="mt-1 text-sm text-red-600"
          />
        </div>

        <div>
          <label
            htmlFor="personal.country"
            className="block text-sm font-medium text-gray-700"
          >
            Country *
          </label>
          <Field
            type="text"
            name="personal.country"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 px-3 py-2"
          />
          <ErrorMessage
            name="personal.country"
            component="div"
            className="mt-1 text-sm text-red-600"
          />
        </div>
      </div>
    </div>
  )
} 