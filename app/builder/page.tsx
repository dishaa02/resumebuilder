'use client'

import { useState, useEffect, useRef, Suspense } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useSearchParams } from 'next/navigation'
import PersonalInfo from '../components/steps/PersonalInfo'
import WorkHistory from '../components/steps/WorkHistory'
import Education from '../components/steps/Education'
import Skills from '../components/steps/Skills'
import Summary from '../components/steps/Summary'
import Finalize from '../components/steps/Finalize'
import ResumePreview from '../components/ResumePreview'
import ProgressBar from '../components/ProgressBar'
import Projects from '../components/steps/Projects'
import AdditionalInfo from '../components/steps/AdditionalInfo'
import PreviewModal from '../components/PreviewModal'
import { useReactToPrint } from 'react-to-print'
import { Eye } from 'lucide-react'

type StepId = 'personal' | 'summary' | 'work' | 'projects' | 'skills' | 'education' | 'additional' | 'finalize'

const steps = [
  { id: 'personal', title: 'Personal Info', component: PersonalInfo },
  { id: 'summary', title: 'Summary', component: Summary },
  { id: 'work', title: 'Experience', component: WorkHistory },
  { id: 'projects', title: 'Projects', component: Projects },
  { id: 'skills', title: 'Skills', component: Skills },
  { id: 'education', title: 'Education', component: Education },
  { id: 'additional', title: 'Additional Information', component: AdditionalInfo },
  { id: 'finalize', title: 'Finalize', component: Finalize },
]

const initialValues = {
  personal: {
    firstName: '',
    lastName: '',
    profession: '',
    phone: '',
    email: '',
    city: '',
    country: '',
  },
  work: {
    experiences: [
      {
        jobTitle: '',
        companyName: '',
        location: '',
        startDate: '',
        endDate: '',
        isPresent: false,
        description: '',
      },
    ],
  },
  projects: {
    projects: [
      {
        title: '',
        description: '',
        technologies: [''],
        link: '',
      },
    ],
  },
  education: {
    degrees: [
      {
        degree: '',
        institution: '',
        location: '',
        startDate: '',
        endDate: '',
        isPresent: false,
        achievements: '',
      },
    ],
    tools: [''],
  },
  skills: {
    technical: [''],
    soft: [''],
    languages: [''],
    tools: [''],
  },
  additional: {
    languages: [''],
    hobbies: [''],
    certifications: [''],
  },
  summary: {
    content: '',
  },
  finalize: {
    title: '',
    template: 'modern',
    colorScheme: 'blue',
    font: 'roboto',
    notes: '',
    spacing: '4',
  },
}

const validationSchema = Yup.object().shape({
  personal: Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    profession: Yup.string().required('Profession is required'),
    phone: Yup.string().required('Phone number is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    city: Yup.string().required('City is required'),
    country: Yup.string().required('Country is required'),
  }),
  work: Yup.object().shape({
    experiences: Yup.array().of(
      Yup.object().shape({
        jobTitle: Yup.string().required('Job title is required'),
        companyName: Yup.string().required('Company name is required'),
        location: Yup.string().required('Location is required'),
        startDate: Yup.string()
          .required('Start date is required')
          .test('not-future', 'Start date cannot be in the future', function(value) {
            if (!value) return true;
            return new Date(value) <= new Date();
          }),
        endDate: Yup.string()
          .when('isPresent', {
            is: false,
            then: () => Yup.string()
              .required('End date is required')
              .test('not-future', 'End date cannot be in the future', function(value) {
                if (!value) return true;
                return new Date(value) <= new Date();
              })
              .test('after-start', 'End date must be after start date', function(value) {
                const startDate = this.parent.startDate;
                if (!value || !startDate) return true;
                return new Date(value) >= new Date(startDate);
              })
          }),
        description: Yup.string().required('Description is required'),
      })
    ),
  }),
  projects: Yup.object().shape({
    projects: Yup.array().of(
      Yup.object().shape({
        title: Yup.string().required('Project title is required'),
        description: Yup.string().required('Project description is required'),
        technologies: Yup.array().of(Yup.string()),
        link: Yup.string().url('Invalid URL').notRequired(),
      })
    ),
  }),
  education: Yup.object().shape({
    degrees: Yup.array().of(
      Yup.object().shape({
        degree: Yup.string().required('Degree is required'),
        institution: Yup.string().required('Institution is required'),
        location: Yup.string().required('Location is required'),
        startDate: Yup.date()
          .required('Start date is required')
          .test('not-future', 'Start date cannot be in the future', function(value) {
            return !value || new Date(value) <= new Date();
          }),
        endDate: Yup.date()
          .when('isPresent', {
            is: true,
            then: () => Yup.date().nullable(),
            otherwise: () => Yup.date()
              .required('End date is required')
              .test('not-future', 'End date cannot be in the future', function(value) {
                return !value || new Date(value) <= new Date();
              })
              .test('after-start', 'End date must be after start date', function(value) {
                const startDate = this.parent.startDate;
                return !value || !startDate || new Date(value) >= new Date(startDate);
              })
          }),
        isPresent: Yup.boolean(),
        achievements: Yup.string(),
      })
    ),
    tools: Yup.array().of(Yup.string()),
  }),
  skills: Yup.object().shape({
    technical: Yup.array().of(Yup.string()),
    soft: Yup.array().of(Yup.string()),
    languages: Yup.array().of(Yup.string()),
    tools: Yup.array().of(Yup.string()),
  }),
  additional: Yup.object().shape({
    languages: Yup.array().of(Yup.string()),
    hobbies: Yup.array().of(Yup.string()),
    certifications: Yup.array().of(Yup.string()),
  }),
  summary: Yup.object().shape({
    content: Yup.string().required('Summary is required'),
  }),
  finalize: Yup.object().shape({
    title: Yup.string().required('Resume title is required'),
    template: Yup.string().required('Template is required'),
    colorScheme: Yup.string().required('Color scheme is required'),
    font: Yup.string().required('Font is required'),
    spacing: Yup.string().required('Spacing is required'),
  }),
})

const transformFormData = (values: any) => {
  return {
    personalInfo: {
      name: `${values.personal.firstName} ${values.personal.lastName}`,
      email: values.personal.email,
      phone: values.personal.phone,
      location: `${values.personal.city}, ${values.personal.country}`,
      summary: values.summary.content,
      title: values.personal.profession,
    },
    experience: values.work.experiences.map((exp: any) => ({
      company: exp.companyName,
      position: exp.jobTitle,
      duration: `${exp.startDate} - ${exp.isPresent ? 'Present' : exp.endDate}`,
      description: exp.description,
    })),
    education: values.education.degrees.map((edu: any) => ({
      school: edu.institution,
      degree: edu.degree,
      year: `${edu.startDate} - ${edu.endDate}`,
      description: edu.achievements,
    })),
    skills: values.skills.technical,
    projects: values.projects.projects.map((proj: any) => ({
      title: proj.title,
      description: proj.description,
      technologies: proj.technologies,
      link: proj.link,
    })),
    additionalInfo: {
      languages: values.additional.languages,
      hobbies: values.additional.hobbies,
      certifications: values.additional.certifications,
    },
  };
};

export default function Builder() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BuilderContent />
    </Suspense>
  );
}

function BuilderContent() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState(initialValues)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const searchParams = useSearchParams()
  const componentRef = useRef(null)

  useEffect(() => {
    const templateId = searchParams.get('template')
    if (templateId) {
      setFormData(prev => ({
        ...prev,
        finalize: {
          ...prev.finalize,
          template: templateId
        }
      }))
    }
  }, [searchParams])

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
  });

  const handleStepClick = async (stepIndex: number) => {
    // Only allow going back to completed steps
    if (stepIndex < currentStep) {
      setCurrentStep(stepIndex);
    }
  };

  const handleNext = async (validateForm: any, setTouched: any, errors: any) => {
    const currentStepId = steps[currentStep].id as StepId
    const fieldNamesInCurrentStep = Object.keys(initialValues[currentStepId])

    const touchedFields: { [key: string]: boolean } = {}
    fieldNamesInCurrentStep.forEach(field => {
      if (typeof initialValues[currentStepId][field as keyof typeof initialValues[typeof currentStepId]] === 'object') {
        // Handle nested objects/arrays for touched fields
        if (Array.isArray(initialValues[currentStepId][field as keyof typeof initialValues[typeof currentStepId]])) {
          (initialValues[currentStepId][field as keyof typeof initialValues[typeof currentStepId]] as Array<any>).forEach((_: any, idx: number) => {
            Object.keys(_).forEach(nestedField => {
              touchedFields[`${currentStepId}.${field}.${idx}.${nestedField}`] = true
            })
          })
        } else {
          Object.keys(initialValues[currentStepId][field as keyof typeof initialValues[typeof currentStepId]]).forEach(nestedField => {
            touchedFields[`${currentStepId}.${field}.${nestedField}`] = true
          })
        }
      } else {
        touchedFields[`${currentStepId}.${field}`] = true
      }
    })

    setTouched(touchedFields)

    const currentStepErrors = await validateForm()

    const hasErrorsInCurrentStep = Object.keys(currentStepErrors).some(key => key.startsWith(currentStepId))

    if (!hasErrorsInCurrentStep) {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
    }
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const CurrentStepComponent = steps[currentStep].component

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-4 md:py-8">
        {/* Mobile Menu Button */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-lg"
          >
            <span className="font-semibold text-gray-900">
              {steps[currentStep].title}
            </span>
            <svg
              className={`w-6 h-6 transform transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          {/* Left sidebar with progress */}
          <div className={`lg:w-64 flex-shrink-0 ${isMobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="bg-white rounded-lg shadow-lg p-4 lg:sticky lg:top-8">
              <ProgressBar 
                steps={steps} 
                currentStep={currentStep} 
                onStepClick={handleStepClick}
              />
            </div>
          </div>

          {/* Main content area */}
          <div className="flex-1">
            <Formik
              initialValues={formData}
              validationSchema={validationSchema}
              enableReinitialize={true}
              onSubmit={(values) => {
                setFormData(values)
                if (currentStep === steps.length - 1) {
                  console.log("Form submitted", values)
                }
              }}
            >
              {({ values, setFieldValue, validateForm, errors, setTouched }) => (
                <>
                  <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                      <h2 className="text-xl font-semibold text-gray-900">
                        {steps[currentStep].title}
                      </h2>
                      <button
                        type="button"
                        onClick={() => setIsPreviewOpen(true)}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                      >
                        <Eye className="w-5 h-5" />
                        Preview Resume
                      </button>
                    </div>

                    <Form className="flex-1">
                      <CurrentStepComponent
                        values={values}
                        setFieldValue={setFieldValue}
                      />
                      <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4">
                        <button
                          type="button"
                          onClick={handleBack}
                          disabled={currentStep === 0}
                          className="w-full sm:w-auto px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={() => handleNext(validateForm, setTouched, errors)}
                          className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                          {currentStep === steps.length - 1 ? 'Save Resume' : 'Next'}
                        </button>
                      </div>
                    </Form>
                  </div>

                  {/* Preview Modal */}
                  <PreviewModal
                    isOpen={isPreviewOpen}
                    onClose={() => setIsPreviewOpen(false)}
                    onPrint={handlePrint}
                  >
                    <ResumePreview
                      data={transformFormData(values)}
                      templateId={values.finalize.template}
                      ref={componentRef}
                    />
                  </PreviewModal>
                </>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </main>
  )
} 