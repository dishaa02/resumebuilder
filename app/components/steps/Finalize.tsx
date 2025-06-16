import { Field, ErrorMessage } from 'formik'

interface FinalizeProps {
  values: any
  setFieldValue: (field: string, value: any) => void
}

export default function Finalize({ values, setFieldValue }: FinalizeProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Finalize Your Resume</h2>
        <p className="text-gray-600">
          Review your resume and make any final adjustments before generating the final version.
        </p>
      </div>

      <div className="space-y-6">
        {/* Resume Title */}
        <div>
          <label
            htmlFor="finalize.title"
            className="block text-sm font-medium text-gray-700"
          >
            Resume Title *
          </label>
          <Field
            type="text"
            name="finalize.title"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 px-3 py-2"
            placeholder="e.g., Software Engineer Resume"
          />
          <ErrorMessage
            name="finalize.title"
            component="div"
            className="mt-1 text-sm text-red-600"
          />
        </div>

        {/* Template Selection */}
        <div>
          <label
            htmlFor="finalize.template"
            className="block text-sm font-medium text-gray-700"
          >
            Resume Template *
          </label>
          <Field
            as="select"
            name="finalize.template"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 px-3 py-2"
          >
            <option value="modern">Modern</option>
            <option value="professional">Professional</option>
            <option value="sleek">Sleek</option>
            <option value="clean">Clean</option>
            <option value="elegant">Elegant</option>
            <option value="two-column">Two Column</option>
            <option value="bold">Bold</option>
          </Field>
          <ErrorMessage
            name="finalize.template"
            component="div"
            className="mt-1 text-sm text-red-600"
          />
        </div>
      </div>
    </div>
  )
} 