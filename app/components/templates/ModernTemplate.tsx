'use client';

import React from 'react';

interface ModernTemplateProps {
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

export default function ModernTemplate({ data, isPreview = false }: ModernTemplateProps) {
  const primaryColorClass = 'bg-gray-900';
  const secondaryTextColorClass = 'text-gray-300';
  const sectionBorderColorClass = 'border-gray-700';
  const skillBgClass = 'bg-gray-800';
  const fontClasses = 'font-sans';
  const spacingClass = 'space-y-4';

  return (
    <div className={`bg-white ${isPreview ? 'w-[210mm] h-[297mm]' : 'w-full'} shadow-lg ${fontClasses}`}>
      {/* Left sidebar */}
      <div className="flex h-full">
        <div className={`w-1/3 ${primaryColorClass} text-white p-8`}>
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">{data.personalInfo.name}</h1>
            <div className={`space-y-2 text-sm ${secondaryTextColorClass}`}>
              <p>{data.personalInfo.email}</p>
              <p>{data.personalInfo.phone}</p>
              <p>{data.personalInfo.location}</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className={`text-lg font-semibold mb-4 border-b ${sectionBorderColorClass} pb-2`}>Skills</h2>
            <div className={`space-y-2 ${spacingClass}`}>
              {data.skills.map((skill, index) => (
                <div key={index} className={`${skillBgClass} rounded px-3 py-1 text-sm`}>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className={`text-lg font-semibold mb-4 border-b ${sectionBorderColorClass} pb-2`}>Education</h2>
            <div className={`space-y-4 ${spacingClass}`}>
              {data.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-medium">{edu.degree}</h3>
                  <p className="text-sm text-gray-300">{edu.school}</p>
                  <p className="text-sm text-gray-400">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="w-2/3 p-8">
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Professional Summary
            </h2>
            <p className="text-gray-700">{data.personalInfo.summary}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Experience
            </h2>
            <div className={`space-y-6 ${spacingClass}`}>
              {data.experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                      <p className="text-gray-600">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          {data.projects && data.projects.length > 0 && (
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                Projects
              </h2>
              <div className={`space-y-4 ${spacingClass}`}>
                {data.projects.map((project, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-gray-900">{project.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Technologies: {project.technologies.join(', ')}
                    </p>
                    <p className="text-gray-700">{project.description}</p>
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

          {/* Additional Information */}
          {data.additionalInfo && (
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                Additional Information
              </h2>
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
      </div>
    </div>
  );
} 