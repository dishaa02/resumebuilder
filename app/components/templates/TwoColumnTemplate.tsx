import React from 'react';
import { ResumeData } from '@/app/utils/sample-data';

interface TwoColumnTemplateProps {
  data: ResumeData;
  isPreview?: boolean;
}

export default function TwoColumnTemplate({ data, isPreview = false }: TwoColumnTemplateProps) {
  const primaryColor = '#2196F3'; // Blue for headers
  const textColor = '#424242'; // Dark gray for general text
  const lightTextColor = '#757575'; // Lighter gray for secondary text
  const borderColor = '#E0E0E0'; // Light gray border

  return (
    <>
      <div
        className={`bg-white ${isPreview ? 'w-[210mm] h-[297mm] p-8' : 'w-full p-4'} shadow-lg font-sans`}
        style={{ color: textColor }}
      >
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold" style={{ color: primaryColor }}>
            {data.personalInfo.name}
          </h1>
          <p className="text-sm mt-2" style={{ color: lightTextColor }}>
            {data.personalInfo.summary}
          </p>
        </div>

        <div className="flex">
          {/* Left Column */}
          <div className="w-2/3 pr-8 border-r" style={{ borderColor: borderColor }}>
            {/* Work Experience */}
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-3" style={{ color: primaryColor }}>
                Work Experience
              </h2>
              <div className="space-y-4">
                {data.experience.map((exp, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-bold" style={{ color: textColor }}>
                      {exp.position}, {exp.company}
                    </h3>
                    <p className="text-sm" style={{ color: lightTextColor }}>
                      {exp.duration}
                    </p>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-1" style={{ color: textColor }}>
                      {exp.description.split('\n').map((item, i) => item.trim() && <li key={i}>{item.trim()}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Educational Background */}
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-3" style={{ color: primaryColor }}>
                Educational Background
              </h2>
              <div className="space-y-4">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-bold" style={{ color: textColor }}>
                      {edu.degree}
                    </h3>
                    <p className="text-sm" style={{ color: lightTextColor }}>
                      {edu.school} {edu.year}
                    </p>
                    {edu.description && (
                      <p className="text-sm mt-1" style={{ color: textColor }}>
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-1/3 pl-8">
            {/* Contact */}
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-3" style={{ color: primaryColor }}>
                Contact
              </h2>
              <div className="text-sm space-y-1" style={{ color: lightTextColor }}>
                <p>{data.personalInfo.location}</p>
                <p>{data.personalInfo.phone}</p>
                <p>{data.personalInfo.email}</p>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-3" style={{ color: primaryColor }}>
                Skills
              </h2>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm mb-1" style={{ color: textColor }}>Technical Skills</h4>
                <ul className="list-disc pl-5 text-sm space-y-1" style={{ color: lightTextColor }}>
                  {data.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Languages (from Additional Info) */}
            {data.additionalInfo?.languages && data.additionalInfo.languages.length > 0 && (
              <div className="mb-6">
                <h2 className="text-lg font-bold mb-3" style={{ color: primaryColor }}>
                  Languages
                </h2>
                <ul className="list-disc pl-5 text-sm space-y-1" style={{ color: lightTextColor }}>
                  {data.additionalInfo.languages.map((lang, index) => (
                    <li key={index}>{lang}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Certifications (from Additional Info) */}
            {data.additionalInfo?.certifications && data.additionalInfo.certifications.length > 0 && (
              <div className="mb-6">
                <h2 className="text-lg font-bold mb-3" style={{ color: primaryColor }}>
                  Certification/Short Courses
                </h2>
                <ul className="list-disc pl-5 text-sm space-y-1" style={{ color: lightTextColor }}>
                  {data.additionalInfo.certifications.map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Additional Information (for hobbies) */}
            {data.additionalInfo?.hobbies && data.additionalInfo.hobbies.length > 0 && (
              <div className="mb-6">
                <h2 className="text-lg font-bold mb-3" style={{ color: primaryColor }}>
                  Additional Information
                </h2>
                <ul className="list-disc pl-5 text-sm space-y-1" style={{ color: lightTextColor }}>
                  {data.additionalInfo.hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Projects Section */}
            {data.projects && data.projects.length > 0 && (
              <div className="mb-6">
                <h2 className="text-lg font-bold mb-3" style={{ color: primaryColor}}>
                  Projects
                </h2>
                <div className="space-y-3 text-sm" style={{ color: textColor }}>
                  {data.projects.map((project, index) => (
                    <div key={index}>
                      <h3 className="font-semibold" style={{ color: primaryColor }}>{project.title}</h3>
                      <p>{project.description}</p>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          View Project
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}