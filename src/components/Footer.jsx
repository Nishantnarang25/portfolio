import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full max-w-[700px] mx-auto px-6 py-6 bg-white text-[#333333] rounded-xl mb-4 border-white border-2">

      {/* Follow Me and Icons in one row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start flex-col  justify-between mb-4">
          <p className="text-md font-medium text-[#6B7280]  py-1 rounded-lg">
            Follow Me
          </p>
          <div className="text-sm text-[#6B7280] text-left">
            © {new Date().getFullYear()} Nishant. All rights reserved.
          </div>
        </div>


        <div className='flex flex-row space-x-4'>
          <a
            href="https://www.linkedin.com/in/nishant-%E2%80%9C-6b4571246"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111827] text-xl sm:text-2xl hover:text-[#0A66C2] transition-colors duration-300 py-1"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Nishantnarang25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111827] text-xl sm:text-2xl hover:text-[#4d2886] transition-colors duration-300 py-1"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:nishantnarang111@gmail.com?subject=Let's Connect&body=Hi Nishant, I wanted to connect regarding..."
            className="text-[#111827] text-xl sm:text-2xl hover:text-[#EA4335] transition-colors duration-300 py-1"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
