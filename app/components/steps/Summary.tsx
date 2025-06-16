import { Field, ErrorMessage } from 'formik'

interface SummaryProps {
  values: any
  setFieldValue: (field: string, value: any) => void
}

export default function Summary({ values, setFieldValue }: SummaryProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Professional Summary</h2>
        <p className="text-gray-600">
          Write a compelling summary that highlights your key qualifications and experience.
        </p>
      </div>

      <div>
        <label
          htmlFor="summary.content"
          className="block text-sm font-medium text-gray-700"
        >
          Summary *
        </label>
        <Field
          as="textarea"
          name="summary.content"
          rows={6}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 px-3 py-2"
          placeholder="Write a brief summary of your professional background and key skills..."
        />
        <ErrorMessage
          name="summary.content"
          component="div"
          className="mt-1 text-sm text-red-600"
        />
      </div>
    </div>
  )
} 