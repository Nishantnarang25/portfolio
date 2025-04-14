import React from 'react';
import certificationsData from '../data/certification.json';

const CertificationsSection = () => {
  return (
    <div className="w-full max-w-[700px] mx-auto px-6 py-4 bg-white shadow-sm rounded-xl mb-4 border-white border-2">
      <h1 className="text-3xl font-semibold text-left text-[#1B1B1B] mb-6">Certifications</h1>
      {certificationsData.certifications.map((certification) => {
        return (
          <a
            key={certification.certificationName}
            href={certification.certificateURL}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div
              className="bg-white p-6 border-2 border-[#E0E0E0] rounded-lg shadow-sm mb-6 transform transition-all duration-300 hover:shadow-lg"
            >
              <img
                src={certification.certificateImage}
                alt={certification.certificationName}
                className="w-full max-h-80 rounded-lg mb-4 object-cover"
              />
              <div className="flex flex-col items-start">
                <h2 className="text-2xl text-left font-semibold text-[#333333] mb-2">{certification.certificationName}</h2>
                <p className="text-md text-[#555] mb-1"><strong>Issued At:</strong> {certification.issuedAt}</p>
                <p className="text-md text-[#555]"><strong>Issued By:</strong> {certification.issuedBy}</p>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default CertificationsSection;
