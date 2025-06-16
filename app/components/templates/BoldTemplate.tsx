import React from 'react';
import { ResumeData } from '@/app/utils/sample-data';

interface BoldTemplateProps {
  data: ResumeData;
  isPreview?: boolean;
}

export default function BoldTemplate({ data, isPreview = false }: BoldTemplateProps) {
  const primaryColor = '#1A237E'; // Dark blue
  const accentColor = '#283593'; // Slightly lighter blue
  const textColor = '#212121'; // Dark gray for general text
  const lightTextColor = '#424242'; // Lighter gray for secondary text
  const headerBgColor = '#F0F4F7'; // Light gray for the header background

  return (
    <div
      className={`bg-white ${isPreview ? 'w-[210mm] h-[297mm] p-6' : 'w-full p-4'} shadow-lg font-sans`}
      style={{ color: textColor }}
    >
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold mb-1" style={{ color: primaryColor }}>
          {data.personalInfo.name.toUpperCase()}
        </h1>
        <p className="text-base font-semibold" style={{ color: lightTextColor }}>
          {data.personalInfo.title?.toUpperCase() || 'GRAPHIC DESIGNER'}
        </p>
        <div className="mt-2 flex justify-center space-x-4 text-sm" style={{ color: lightTextColor }}>
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
      </div>

      {/* About Me */}
      <div className="mb-4">
        <div className="bg-blue-900 text-white py-1 px-4 mb-2" style={{ backgroundColor: primaryColor }}>
          <h2 className="text-base font-bold">ABOUT ME</h2>
        </div>
        <p className="text-sm" style={{ color: lightTextColor }}>
          {data.personalInfo.summary}
        </p>
      </div>

      {/* Work Experience */}
      <div className="mb-4">
        <div className="bg-blue-900 text-white py-1 px-4 mb-2" style={{ backgroundColor: primaryColor }}>
          <h2 className="text-base font-bold">WORK EXPERIENCE</h2>
        </div>
        <div className="space-y-3">
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-sm" style={{ color: textColor }}>
                  {exp.company}
                </h3>
                <span className="text-xs" style={{ color: lightTextColor }}>
                  {exp.duration}
                </span>
              </div>
              <p className="text-sm font-semibold" style={{ color: primaryColor }}>
                {exp.position}
              </p>
              <ul className="list-disc pl-4 text-xs space-y-0.5 mt-1" style={{ color: lightTextColor }}>
                {exp.description.split('\n').map((item, i) => item.trim() && <li key={i}>{item.trim()}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-4">
        <div className="bg-blue-900 text-white py-1 px-4 mb-2" style={{ backgroundColor: primaryColor }}>
          <h2 className="text-base font-bold">EDUCATION</h2>
        </div>
        <div className="space-y-3">
          {data.education.map((edu, index) => (
            <div key={index}>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-sm" style={{ color: textColor }}>
                  {edu.school}
                </h3>
                <span className="text-xs" style={{ color: lightTextColor }}>
                  {edu.year}
                </span>
              </div>
              <p className="text-sm font-semibold" style={{ color: primaryColor }}>
                {edu.degree}
              </p>
              {edu.description && (
                <p className="text-xs mt-1" style={{ color: lightTextColor }}>
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-4">
        <div className="bg-blue-900 text-white py-1 px-4 mb-2" style={{ backgroundColor: primaryColor }}>
          <h2 className="text-base font-bold">SKILLS</h2>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs" style={{ color: lightTextColor }}>
          {data.skills.map((skill, index) => (
            <div key={index} className="flex items-center">
              <span className="mr-1" style={{ color: primaryColor }}>•</span> {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <div className="mb-4">
          <div className="bg-blue-900 text-white py-1 px-4 mb-2" style={{ backgroundColor: primaryColor }}>
            <h2 className="text-base font-bold">PROJECTS</h2>
          </div>
          <div className="space-y-3">
            {data.projects.map((project, index) => (
              <div key={index}>
                <h3 className="font-bold text-sm" style={{ color: textColor }}>
                  {project.title}
                </h3>
                <p className="text-xs" style={{ color: lightTextColor }}>
                  Technologies: {project.technologies.join(', ')}
                </p>
                <p className="text-xs mt-1" style={{ color: lightTextColor }}>
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-xs mt-1 block"
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
      {(data.additionalInfo?.languages || data.additionalInfo?.hobbies || data.additionalInfo?.certifications) && (
        <div>
          <div className="bg-blue-900 text-white py-1 px-4 mb-2" style={{ backgroundColor: primaryColor }}>
            <h2 className="text-base font-bold">ADDITIONAL INFORMATION</h2>
          </div>
          <div className="space-y-1 text-xs" style={{ color: lightTextColor }}>
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