import React from 'react';
import { ResumeData } from '@/app/utils/sample-data';

interface CleanTemplateProps {
  data: ResumeData;
  isPreview?: boolean;
}

export default function CleanTemplate({ data, isPreview = false }: CleanTemplateProps) {
  const primaryColor = '#212121'; // Dark text
  const secondaryColor = '#424242'; // Slightly lighter text
  const lineColor = '#E0E0E0'; // Light gray for lines

  return (
    <div
      className={`bg-white ${isPreview ? 'w-[210mm] h-[297mm] p-8' : 'w-full p-4'} shadow-lg text-[${secondaryColor}] font-sans`}
    >
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold mb-1" style={{ color: primaryColor }}>
          {data.personalInfo.name.toUpperCase()}
        </h1>
        <p className="text-lg font-semibold" style={{ color: secondaryColor }}>
          {data.personalInfo.title?.toUpperCase() || 'PROFESSIONAL TITLE'}
        </p>
        <div className="mt-4 flex justify-center space-x-6 text-sm" style={{ color: secondaryColor }}>
          {data.personalInfo.phone && (
            <div className="flex items-center space-x-1">
              <span>{data.personalInfo.phone}</span>
            </div>
          )}
          {data.personalInfo.location && (
            <div className="flex items-center space-x-1">
              <span>{data.personalInfo.location}</span>
            </div>
          )}
          {data.personalInfo.email && (
            <div className="flex items-center space-x-1">
              <span>{data.personalInfo.email}</span>
            </div>
          )}
        </div>
        <div className="border-b mt-4" style={{ borderColor: lineColor }}></div>
      </div>

      {/* About Me / Summary */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2 pb-1 border-b" style={{ color: primaryColor, borderColor: lineColor }}>
          ABOUT ME
        </h2>
        <p className="text-sm" style={{ color: secondaryColor }}>
          {data.personalInfo.summary}
        </p>
      </div>

      {/* Education */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-3 pb-1 border-b" style={{ color: primaryColor, borderColor: lineColor }}>
          EDUCATION
        </h2>
        <div className="space-y-4">
          {data.education.map((edu, index) => (
            <div key={index} className="flex justify-between items-start">
              <div className="w-1/4 text-sm font-semibold" style={{ color: primaryColor }}>
                {edu.year}
              </div>
              <div className="w-3/4">
                <h3 className="font-bold" style={{ color: primaryColor }}>
                  {edu.degree}
                </h3>
                <p className="text-sm" style={{ color: secondaryColor }}>
                  {edu.school}
                </p>
                {edu.description && (
                  <p className="text-sm mt-1" style={{ color: secondaryColor }}>
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-3 pb-1 border-b" style={{ color: primaryColor, borderColor: lineColor }}>
          EXPERIENCE
        </h2>
        <div className="space-y-4">
          {data.experience.map((exp, index) => (
            <div key={index} className="flex justify-between items-start">
              <div className="w-1/4 text-sm font-semibold" style={{ color: primaryColor }}>
                {exp.duration}
              </div>
              <div className="w-3/4">
                <h3 className="font-bold" style={{ color: primaryColor }}>
                  {exp.position}
                </h3>
                <p className="text-sm" style={{ color: secondaryColor }}>
                  {exp.company}
                </p>
                <p className="text-sm mt-1" style={{ color: secondaryColor }}>
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-3 pb-1 border-b" style={{ color: primaryColor, borderColor: lineColor }}>
          SKILLS
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm" style={{ color: secondaryColor }}>
          {data.skills.map((skill, index) => (
            <div key={index} className="flex items-center">
              <span className="mr-2 text-gray-400">•</span> {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Projects - Not in the image, but kept for consistency with data structure */}
      {data.projects && data.projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3 pb-1 border-b" style={{ color: primaryColor, borderColor: lineColor }}>
            PROJECTS
          </h2>
          <div className="space-y-4">
            {data.projects.map((project, index) => (
              <div key={index}>
                <h3 className="font-bold" style={{ color: primaryColor }}>
                  {project.title}
                </h3>
                <p className="text-sm" style={{ color: secondaryColor }}>
                  Technologies: {project.technologies.join(', ')}
                </p>
                <p className="text-sm mt-1" style={{ color: secondaryColor }}>
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm mt-1 block"
                  >
                    View Project
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* References / Additional Information */}
      {(data.additionalInfo?.languages || data.additionalInfo?.hobbies || data.additionalInfo?.certifications) && (
        <div>
          <h2 className="text-xl font-bold mb-3 pb-1 border-b" style={{ color: primaryColor, borderColor: lineColor }}>
            ADDITIONAL INFORMATION
          </h2>
          <div className="space-y-2 text-sm" style={{ color: secondaryColor }}>
            {data.additionalInfo?.languages && data.additionalInfo.languages.length > 0 && (
              <p><strong>Languages:</strong> {data.additionalInfo.languages.join(', ')}</p>
            )}
            {data.additionalInfo?.hobbies && data.additionalInfo.hobbies.length > 0 && (
              <p><strong>Hobbies:</strong> {data.additionalInfo.hobbies.join(', ')}</p>
            )}
            {data.additionalInfo?.certifications && data.additionalInfo.certifications.length > 0 && (
              <p><strong>Certifications:</strong> {data.additionalInfo.certifications.join(', ')}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 