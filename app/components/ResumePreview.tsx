import ProfessionalTemplate from './templates/ProfessionalTemplate';
import ModernTemplate from './templates/ModernTemplate';
import SleekTemplate from './templates/SleekTemplate';
import CleanTemplate from './templates/CleanTemplate';
import ElegantTemplate from './templates/ElegantTemplate';
import TwoColumnTemplate from './templates/TwoColumnTemplate';
import BoldTemplate from './templates/BoldTemplate';
import React, { useEffect, useState } from 'react';

interface ResumePreviewProps {
  data: any; // Replace with proper type
  templateId: string;
}

const templateComponents = {
  'professional': ProfessionalTemplate,
  'modern': ModernTemplate,
  'sleek': SleekTemplate,
  'clean': CleanTemplate,
  'elegant': ElegantTemplate,
  'two-column': TwoColumnTemplate,
  'bold': BoldTemplate,
};

const A4_WIDTH = '210mm';
const A4_HEIGHT = '297mm';

const ResumePreview = React.forwardRef<HTMLDivElement, ResumePreviewProps>(({
  data,
  templateId
}, ref) => {
  const Template = templateComponents[templateId as keyof typeof templateComponents];
  const [contentHeight, setContentHeight] = useState<string>(A4_HEIGHT);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateDimensions = () => {
      const container = document.querySelector('.resume-container');
      if (container) {
        const height = container.scrollHeight;
        const a4Height = 297 * 3.78; // Convert mm to pixels (1mm ≈ 3.78px)
        
        if (height > a4Height) {
          setContentHeight(`${height / 3.78}mm`);
        } else {
          setContentHeight(A4_HEIGHT);
        }

        // Calculate scale for mobile/tablet view
        const containerWidth = container.clientWidth;
        const a4Width = 210 * 3.78; // Convert mm to pixels
        const newScale = Math.min(1, containerWidth / a4Width);
        setScale(newScale);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, [data]);

  return (
    <div className="w-full h-full bg-gray-100 p-2 md:p-4" ref={ref}>
      <div 
        className="resume-container"
        style={{ 
          width: A4_WIDTH,
          minHeight: contentHeight,
          margin: '0 auto', 
          background: 'white',
          transition: 'all 0.3s ease',
          transform: `scale(${scale})`,
          transformOrigin: 'top center'
        }}
      >
        <style jsx global>{`
          @media print {
            .resume-container {
              width: 100% !important;
              height: auto !important;
              min-height: 100% !important;
              margin: 0 !important;
              padding: 0 !important;
              page-break-after: avoid !important;
              page-break-inside: avoid !important;
              transform: none !important;
            }
          }
        `}</style>
        <Template data={data} isPreview={true} />
      </div>
    </div>
  );
});

export default ResumePreview; 