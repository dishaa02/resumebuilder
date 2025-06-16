import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCw, Printer } from 'lucide-react';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  onPrint: () => void;
}

const PreviewModal: React.FC<PreviewModalProps> = ({
  isOpen,
  onClose,
  children,
  onPrint
}) => {
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  if (!isOpen) return null;

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.1, 2));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.1, 0.5));
  };

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4">
        <div className="relative bg-white rounded-lg w-full h-full max-w-6xl max-h-[90vh] flex flex-col">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 border-b bg-gray-50 gap-2 sm:gap-0">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Resume Preview</h2>
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={handleZoomOut}
                className="p-1.5 sm:p-2 hover:bg-gray-200 rounded-full text-gray-700"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={handleZoomIn}
                className="p-1.5 sm:p-2 hover:bg-gray-200 rounded-full text-gray-700"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={handleRotate}
                className="p-1.5 sm:p-2 hover:bg-gray-200 rounded-full text-gray-700"
                title="Rotate"
              >
                <RotateCw className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={onPrint}
                className="p-1.5 sm:p-2 hover:bg-gray-200 rounded-full text-gray-700"
                title="Print"
              >
                <Printer className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={onClose}
                className="p-1.5 sm:p-2 hover:bg-gray-200 rounded-full text-gray-700"
                title="Close"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto p-2 sm:p-4 bg-gray-100">
            <div 
              className="mx-auto transition-all duration-200"
              style={{
                transform: `scale(${zoom}) rotate(${rotation}deg)`,
                transformOrigin: 'center center',
                width: '210mm',
                minHeight: '297mm',
                background: 'white',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal; 