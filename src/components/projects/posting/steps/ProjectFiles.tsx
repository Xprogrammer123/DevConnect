import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Upload, X } from 'lucide-react';
import { fadeIn } from '../../../animations/variants';

interface ProjectFilesProps {
  data: {
    files: File[];
  };
  onChange: (data: Partial<typeof data>) => void;
}

export const ProjectFiles = ({ data, onChange }: ProjectFilesProps) => {
  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const droppedFiles = Array.from(e.dataTransfer.files);
      onChange({ files: [...data.files, ...droppedFiles] });
    },
    [data.files, onChange]
  );

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      onChange({ files: [...data.files, ...selectedFiles] });
    }
  };

  const removeFile = (index: number) => {
    const newFiles = [...data.files];
    newFiles.splice(index, 1);
    onChange({ files: newFiles });
  };

  return (
    <motion.div variants={fadeIn} className="space-y-6">
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#4A90E2] transition-colors"
      >
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-gray-600">
          Drag and drop your files here, or{' '}
          <label className="text-[#4A90E2] hover:text-[#4A90E2]/80 cursor-pointer">
            browse
            <input
              type="file"
              multiple
              className="hidden"
              onChange={handleFileInput}
            />
          </label>
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Support for documents, images, and PDFs
        </p>
      </div>

      {data.files.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-medium text-gray-900">Uploaded Files</h4>
          <div className="space-y-2">
            {data.files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <span className="text-sm text-gray-600">{file.name}</span>
                <button
                  onClick={() => removeFile(index)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};