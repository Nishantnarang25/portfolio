import React from 'react';
import certificationsData from '../data/certification.json';
import { FaExternalLinkAlt } from 'react-icons/fa';


const CertificationsSection = () => {
  return (
    <div className="w-full max-w-[700px] mx-auto px-6 py-4 bg-white shadow-sm rounded-xl mb-4 border border-white">
      <h1 className="text-xl font-medium text-left text-[#6B7280] mb-4 before:content-['●'] before:mr-2 before:text-[#6B7280]">
        Certifications
      </h1>


  {certificationsData.certifications.map((certification) => {
  return (
          <div className="w-full max-w-[700px] mx-auto px-6 py-6  bg-[#F8F8F9] shadow-sm rounded-xl mb-6">

      <img
        src={certification.certificateImage}
        alt={certification.certificationName}
        className="w-full h-auto rounded-lg mb-4 object-contain"
      />
      <div className="flex flex-col items-start">
        <h2 className="text-lg font-semibold text-[#333333] mb-1 truncate max-w-full">
          {certification.certificationName}
        </h2>
        <p className="text-sm text-[#555] mb-1">
          <strong>Issued At:</strong> {certification.issuedAt}
        </p>
        <p className="text-sm text-[#555] mb-3">
          <strong>Issued By:</strong> {certification.issuedBy}
        </p>

        <a
          href={certification.certificateURL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0A66C2] hover:text-[#0A3C7E] font-medium flex items-center text-sm"
        >
          <FaExternalLinkAlt className="h-3 w-3 mr-2" />
          View Credential
        </a>
      </div>
    </div>
  );
})}

    </div>
  );
};

export default CertificationsSection;
