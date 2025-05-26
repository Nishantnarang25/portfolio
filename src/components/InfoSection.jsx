import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFileDownload,  
} from 'react-icons/fa';

import {
  SiFigma,
  SiPostgresql,
  SiMongodb,
  SiExpress,
} from 'react-icons/si';

const InfoSection = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const techStack = [
    { icon: <FaJsSquare />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiExpress />, name: 'Express' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
    { icon: <SiFigma />, name: 'Figma' },
    { icon: <FaGitAlt />, name: 'Git' },
  ];

  return (
    <>
      <div className="w-full max-w-[700px] mx-auto px-6 py-4  bg-[#FFFFFF] shadow-sm rounded-xl mb-4 border-[#F7F7F8] border-2">
        {/* Role + Time */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-8">
          <p className="flex items-center text-[#6B7280] text-md font-medium before:content-['●'] before:mr-2">
            Web Developer | UI/UX Designer
          </p>
          <p className="flex items-center bg-[#D9F6E1] text-[#9CC7A8] px-4 py-2 rounded-xl before:content-['●'] before:text-[#82c782] before:mr-2 text-sm font-normal">
            Available for work
          </p>
        </div>


        {/* Profile + Info */}
        <div className="flex flex-col sm:flex-row  justify-between items-center mt-4">
          <p className="text-[#374151] mt-4 sm:mt-0 text-base text-left max-w-[400px]">
            Hi, I’m Nishant — a full-stack developer who blends design with code to create clean, responsive, and meaningful digital experiences. I focus on functionality, user experience, and scalability — making sure your ideas come to life beautifully and reliably.
          </p>



          <motion.img
            src="../public/profile.png"
            alt="profile"
            className="w-40 h-60 object-cover  pt-6 mb-8 sm:mb-0 sm:w-48 sm:h-48 -ml-4 sm:-ml-6"
            animate={{ y: [0, -10, 0] }}
            transition={{
              y: {
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 1.5,
              },
            }}
          />


        </div>



        <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mt-6">
          <a
            href="https://www.linkedin.com/in/nishant-%E2%80%9C-6b4571246"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1E1E1E]  text-xl sm:text-2xl hover:text-[#0A66C2] transition-colors duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Nishantnarang25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1E1E1E] text-xl sm:text-2xl hover:text-[#4d2886] transition-colors duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nishantnarang111@gmail.com&su=Let's%20Connect&body=Hi%20Nishant%2C%20I%20wanted%20to%20connect%20regarding..."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1E1E1E] text-xl sm:text-2xl hover:text-[#EA4335] transition-colors duration-300"
          >
            <FaEnvelope />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#1E1E1E] text-white text-sm sm:text-md rounded-xl hover:text-gray-600 hover:bg-[#FFD95A] transition-colors duration-300"
          >
            <FaFileDownload className="text-lg" />
            Download Resume
          </a>
        </div>


      </div>

      {/* Tech Stack Carousel */}
      <div className="w-full max-w-[700px] mx-auto bg-[#F7F7F8] shadow-sm rounded-xl mb-4 border-[#F7F7F8] border-2">
        <motion.div
          className="bg-[#F7F7F8] py-4 rounded-xl shadow-sm flex items-center"
          style={{ overflow: 'hidden', height: '80px' }}
        >
          <motion.div
            className="flex items-center space-x-8 sm:space-x-16 text-2xl sm:text-3xl"
            animate={{ x: ['100%', '-100%'] }}
            transition={{
              duration: 12,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-row items-center gap-2"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="text-[#374151]">{tech.icon}</div>
                <span className="text-lg sm:text-xl text-[#374151] font-poppins">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default InfoSection;
