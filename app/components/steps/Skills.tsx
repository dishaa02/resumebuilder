import { Field, ErrorMessage, FieldArray } from 'formik'
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline'

interface SkillsProps {
  values: any
  setFieldValue: (field: string, value: any) => void
}

export default function Skills({ values, setFieldValue }: SkillsProps) {
  const skillCategories = [
    { id: 'technical', label: 'Technical Skills' },
    { id: 'soft', label: 'Soft Skills' },
    { id: 'tools', label: 'Tools & Technologies' },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Skills</h2>
        <p className="text-gray-600">
          Add your skills in different categories. You can add multiple skills in each category.
        </p>
      </div>

      {skillCategories.map((category) => (
        <div key={category.id} className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">{category.label}</h3>
          
          <FieldArray name={`skills.${category.id}`}>
            {({ push, remove }) => (
              <div className="space-y-4">
                {values.skills[category.id].map((_: any, index: number) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-grow">
                      <Field
                        type="text"
                        name={`skills.${category.id}.${index}`}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 px-3 py-2"
                        placeholder={`Add ${category.label.toLowerCase()}`}
                      />
                      <ErrorMessage
                        name={`skills.${category.id}.${index}`}
                        component="div"
                        className="mt-1 text-sm text-red-600"
                      />
                    </div>
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
                ))}

                <button
                  type="button"
                  onClick={() => push('')}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <PlusIcon className="w-5 h-5 mr-2" />
                  Add {category.label}
                </button>
              </div>
            )}
          </FieldArray>
        </div>
      ))}
    </div>
  )
} 