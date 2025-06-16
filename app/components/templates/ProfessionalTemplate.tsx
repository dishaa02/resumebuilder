'use client';

import React from 'react';

interface ProfessionalTemplateProps {
  data: {
    personalInfo: {
      name: string;
      email: string;
      phone: string;
      location: string;
      summary: string;
    };
    experience: Array<{
      company: string;
      position: string;
      duration: string;
      description: string;
    }>;
    education: Array<{
      school: string;
      degree: string;
      year: string;
      description: string;
    }>;
    skills: string[];
    projects?: Array<{
      title: string;
      description: string;
      technologies: string[];
      link?: string;
    }>;
    additionalInfo?: {
      languages?: string[];
      hobbies?: string[];
      certifications?: string[];
    };
  };
  isPreview?: boolean;
}

export default function ProfessionalTemplate({ data, isPreview = false }: ProfessionalTemplateProps) {
  const primaryColorClass = 'text-blue-600';
  const borderColorClass = 'border-blue-600';
  const skillBgClass = 'bg-blue-50';
  const skillTextColorClass = 'text-blue-700';
  const fontClasses = 'font-sans';
  const spacingClass = 'space-y-4';

  return (
    <div className={`bg-white ${isPreview ? 'w-[210mm] h-[297mm] p-8' : 'w-full p-4'} shadow-lg ${fontClasses}`}>
      {/* Header */}
      <div className={`border-b-2 ${borderColorClass} pb-4 mb-6`}>
        <h1 className="text-3xl font-bold text-gray-900">{data.personalInfo.name}</h1>
        <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
          <span>{data.personalInfo.email}</span>
          <span>•</span>
          <span>{data.personalInfo.phone}</span>
          <span>•</span>
          <span>{data.personalInfo.location}</span>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-6">
        <h2 className={`text-lg font-semibold ${primaryColorClass} mb-2`}>Professional Summary</h2>
        <p className="text-gray-700">{data.personalInfo.summary}</p>
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h2 className={`text-lg font-semibold ${primaryColorClass} mb-4`}>Professional Experience</h2>
        <div className={`space-y-4`}>
          {data.experience.map((exp, index) => (
            <div key={index} className="border-l-2 border-gray-200 pl-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500">{exp.duration}</span>
              </div>
              <p className="mt-2 text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-6">
        <h2 className={`text-lg font-semibold ${primaryColorClass} mb-4`}>Education</h2>
        <div className={`space-y-4`}>
          {data.education.map((edu, index) => (
            <div key={index} className="border-l-2 border-gray-200 pl-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.school}</p>
                </div>
                <span className="text-sm text-gray-500">{edu.year}</span>
              </div>
              <p className="mt-2 text-gray-700">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <div className="mb-6">
          <h2 className={`text-lg font-semibold ${primaryColorClass} mb-4`}>Projects</h2>
          <div className={`space-y-4`}>
            {data.projects.map((project, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-4">
                <h3 className="font-semibold text-gray-900">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  Technologies: {project.technologies.join(', ')}
                </p>
                <p className="mt-2 text-gray-700">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    View Project
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      <div>
        <h2 className={`text-lg font-semibold ${primaryColorClass} mb-2`}>Skills</h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, index) => (
            <span
              key={index}
              className={`px-3 py-1 ${skillBgClass} ${skillTextColorClass} rounded-full text-sm`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      {data.additionalInfo && (
        <div className="mt-6">
          <h2 className={`text-lg font-semibold ${primaryColorClass} mb-2`}>Additional Information</h2>
          <div className="text-gray-700 space-y-1">
            {data.additionalInfo.languages && data.additionalInfo.languages.length > 0 && (
              <p><strong>Languages:</strong> {data.additionalInfo.languages.join(', ')}</p>
            )}
            {data.additionalInfo.hobbies && data.additionalInfo.hobbies.length > 0 && (
              <p><strong>Hobbies:</strong> {data.additionalInfo.hobbies.join(', ')}</p>
            )}
            {data.additionalInfo.certifications && data.additionalInfo.certifications.length > 0 && (
              <p><strong>Certifications:</strong> {data.additionalInfo.certifications.join(', ')}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 