import React from 'react';
import { ResumeData } from '@/app/utils/sample-data';

interface SleekTemplateProps {
  data: ResumeData;
  isPreview?: boolean;
}

export default function SleekTemplate({ data, isPreview = false }: SleekTemplateProps) {
  const primaryColor = '#3F5159'; // Dark blue-gray from the image
  const secondaryColor = '#E0E0E0'; // Light gray for sidebar background
  const accentColor = '#607D8B'; // Slightly lighter blue-gray for borders/headers
  const textColor = '#424242'; // Dark gray for general text
  const lightTextColor = '#757575'; // Lighter gray for secondary text

  return (
    <div
      className={`bg-white ${isPreview ? 'w-[210mm] h-[297mm]' : 'w-full'} shadow-lg text-[${textColor}] font-sans`}
    >
      {/* Header Section */}
      <div className="relative h-28" style={{ backgroundColor: secondaryColor }}>
        <div className="w-full h-full flex flex-col justify-center pl-8">
          <h1 className="text-4xl font-bold" style={{ color: primaryColor }}>
            {data.personalInfo.name.toUpperCase()}
          </h1>
          <div className="mb-2" />
          <p className="text-lg font-semibold" style={{ color: accentColor }}>
            {data.personalInfo.title?.toUpperCase() || 'PROFESSIONAL TITLE'}
          </p>
        </div>
      </div>

      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-1/3 p-8" style={{ backgroundColor: secondaryColor, color: textColor }}>
          {/* Contact */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-3" style={{ color: primaryColor }}>
              CONTACT
            </h2>
            <div className="space-y-2 text-sm" style={{ color: lightTextColor }}>
              <p>{data.personalInfo.phone}</p>
              <p>{data.personalInfo.email}</p>
              <p>{data.personalInfo.location}</p>
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-3" style={{ color: primaryColor }}>
              EDUCATION
            </h2>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={index}>
                  <p className="font-semibold" style={{ color: textColor }}>
                    {edu.year}
                  </p>
                  <p className="font-medium mt-1" style={{ color: lightTextColor }}>
                    {edu.school.toUpperCase()}
                  </p>
                  <p className="text-sm" style={{ color: lightTextColor }}>
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
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-3" style={{ color: primaryColor }}>
              SKILLS
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm" style={{ color: lightTextColor }}>
              {data.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Languages (from Additional Info) */}
          {data.additionalInfo?.languages && data.additionalInfo.languages.length > 0 && (
            <div>
              <h2 className="text-lg font-bold mb-3" style={{ color: primaryColor }}>
                LANGUAGES
              </h2>
              <ul className="list-disc list-inside space-y-1 text-sm" style={{ color: lightTextColor }}>
                {data.additionalInfo.languages.map((lang, index) => (
                  <li key={index}>{lang}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="w-2/3 p-8 bg-white" style={{ color: textColor }}>
          {/* Profile / Summary */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-3 pb-1 border-b" style={{ color: primaryColor, borderColor: accentColor }}>
              PROFILE
            </h2>
            <p className="text-sm" style={{ color: lightTextColor }}>
              {data.personalInfo.summary}
            </p>
          </div>

          {/* Work Experience */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-3 pb-1 border-b" style={{ color: primaryColor, borderColor: accentColor }}>
              WORK EXPERIENCE
            </h2>
            <div className="space-y-6">
              {data.experience.map((exp, index) => (
                <div key={index} className="relative pl-5">
                  <div className="absolute left-0 top-1 w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }}></div>
                  <div className="flex justify-between items-baseline mb-1">
                    <div>
                      <h3 className="font-semibold" style={{ color: textColor }}>
                        {exp.company}
                      </h3>
                      <p className="text-sm" style={{ color: lightTextColor }}>
                        {exp.position}
                      </p>
                    </div>
                    <span className="text-sm font-semibold" style={{ color: lightTextColor }}>
                      {exp.duration}
                    </span>
                  </div>
                  <ul className="list-disc pl-5 text-sm space-y-1" style={{ color: lightTextColor }}>
                    {exp.description.split('\n').map((item, i) => item.trim() && <li key={i}>{item.trim()}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          {data.projects && data.projects.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-3 pb-1 border-b" style={{ color: primaryColor, borderColor: accentColor }}>
                PROJECTS
              </h2>
              <div className="space-y-4">
                {data.projects.map((project, index) => (
                  <div key={index} className="relative pl-5">
                    <div className="absolute left-0 top-1 w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }}></div>
                    <h3 className="font-semibold" style={{ color: textColor }}>
                      {project.title}
                    </h3>
                    <p className="text-sm" style={{ color: lightTextColor }}>
                      Technologies: {project.technologies.join(', ')}
                    </p>
                    <p className="text-sm mt-1" style={{ color: lightTextColor }}>
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

          {/* Certifications (from Additional Info) */}
          {data.additionalInfo?.certifications && data.additionalInfo.certifications.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-3 pb-1 border-b" style={{ color: primaryColor, borderColor: accentColor }}>
                CERTIFICATIONS
              </h2>
              <ul className="list-disc list-inside space-y-1 text-sm" style={{ color: lightTextColor }}>
                {data.additionalInfo.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Hobbies (from Additional Info) */}
          {data.additionalInfo?.hobbies && data.additionalInfo.hobbies.length > 0 && (
            <div>
              <h2 className="text-lg font-bold mb-3 pb-1 border-b" style={{ color: primaryColor, borderColor: accentColor }}>
                HOBBIES
              </h2>
              <ul className="list-disc list-inside space-y-1 text-sm" style={{ color: lightTextColor }}>
                {data.additionalInfo.hobbies.map((hobby, index) => (
                  <li key={index}>{hobby}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 