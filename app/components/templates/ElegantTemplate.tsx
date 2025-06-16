import React from 'react';
import { ResumeData } from '@/app/utils/sample-data';

interface ElegantTemplateProps {
  data: ResumeData;
  isPreview?: boolean;
}

export default function ElegantTemplate({ data, isPreview = false }: ElegantTemplateProps) {
  const primaryColor = '#3A506B'; // Dark blue-gray
  const sectionHeaderBg = '#F0F4F7'; // Light gray background for headers
  const textColor = '#4F5B66'; // Medium dark gray
  const lightTextColor = '#6A7A8A'; // Lighter gray for details
  const borderColor = '#E0E0E0'; // Light border color

  return (
    <div
      className={`bg-white ${isPreview ? 'w-[210mm] h-[297mm] p-8' : 'w-full p-4'} shadow-lg font-sans`}
      style={{ color: textColor }}
    >
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold mb-1" style={{ color: primaryColor }}>
          {data.personalInfo.name.toUpperCase()}
        </h1>
        <p className="text-lg font-semibold" style={{ color: lightTextColor }}>
          {data.personalInfo.title?.toUpperCase() || 'PROFESSIONAL TITLE'}
        </p>
        <div className="mt-4 flex justify-center space-x-4 text-sm" style={{ color: lightTextColor }}>
          {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
          {data.personalInfo.location && <span>| {data.personalInfo.location}</span>}
          {data.personalInfo.email && <span>| {data.personalInfo.email}</span>}
        </div>
        <div className="border-b mt-4" style={{ borderColor: borderColor }}></div>
      </div>

      {/* Technical Skills */}
      <div className="mb-6">
        <div className="py-2 px-4 mb-4" style={{ backgroundColor: sectionHeaderBg, color: primaryColor }}>
          <h2 className="text-lg font-bold">TECHNICAL SKILLS</h2>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
          {data.skills.map((skill, index) => (
            <div key={index} className="flex items-center">
              <span className="mr-2" style={{ color: primaryColor }}>•</span> {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <div className="mb-6">
          <div className="py-2 px-4 mb-4" style={{ backgroundColor: sectionHeaderBg, color: primaryColor }}>
            <h2 className="text-lg font-bold">PROJECTS</h2>
          </div>
          <div className="space-y-4">
            {data.projects.map((project, index) => (
              <div key={index}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold" style={{ color: primaryColor }}>
                    {project.title} | {project.technologies.join(', ')}
                  </h3>
                  <span className="text-sm" style={{ color: lightTextColor }}>
                    {project.duration}
                  </span>
                </div>
                <ul className="list-disc pl-5 text-sm space-y-1" style={{ color: textColor }}>
                  {project.description.split('\n').map((item, i) => item.trim() && <li key={i}>{item.trim()}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      <div className="mb-6">
        <div className="py-2 px-4 mb-4" style={{ backgroundColor: sectionHeaderBg, color: primaryColor }}>
          <h2 className="text-lg font-bold">EDUCATION</h2>
        </div>
        <div className="space-y-4">
          {data.education.map((edu, index) => (
            <div key={index}>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold" style={{ color: primaryColor }}>
                  {edu.degree} | {edu.school}
                </h3>
                <span className="text-sm" style={{ color: lightTextColor }}>
                  {edu.year}
                </span>
              </div>
              <ul className="list-disc pl-5 text-sm space-y-1" style={{ color: textColor }}>
                {edu.description.split('\n').map((item, i) => item.trim() && <li key={i}>{item.trim()}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Work Experience */}
      <div className="mb-6">
        <div className="py-2 px-4 mb-4" style={{ backgroundColor: sectionHeaderBg, color: primaryColor }}>
          <h2 className="text-lg font-bold">WORK EXPERIENCE</h2>
        </div>
        <div className="space-y-4">
          {data.experience.map((exp, index) => (
            <div key={index}>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold" style={{ color: primaryColor }}>
                  {exp.position} | {exp.company}
                </h3>
                <span className="text-sm" style={{ color: lightTextColor }}>
                  {exp.duration}
                </span>
              </div>
              <ul className="list-disc pl-5 text-sm space-y-1" style={{ color: textColor }}>
                {exp.description.split('\n').map((item, i) => item.trim() && <li key={i}>{item.trim()}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Awards & Achievements (from Additional Info) */}
      {data.additionalInfo?.certifications && data.additionalInfo.certifications.length > 0 && (
        <div>
          <div className="py-2 px-4 mb-4" style={{ backgroundColor: sectionHeaderBg, color: primaryColor }}>
            <h2 className="text-lg font-bold">AWARDS & ACHIEVEMENTS</h2>
          </div>
          <ul className="list-disc pl-5 text-sm space-y-1" style={{ color: textColor }}>
            {data.additionalInfo.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
} 