import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa';

import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiFigma,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiRender,
  SiPostman,
  SiOpenai,
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
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiExpress />, name: 'Express.js' },
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3Alt />, name: 'CSS3' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    { icon: <SiBootstrap />, name: 'Bootstrap' },
    { icon: <SiFigma />, name: 'Figma' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
    { icon: <SiFirebase />, name: 'Firebase' },
    { icon: <SiVercel />, name: 'Vercel' },
    { icon: <SiNetlify />, name: 'Netlify' },
    { icon: <SiRender />, name: 'Render' },
    { icon: <FaGitAlt />, name: 'Git' },
    { icon: <FaGithub />, name: 'GitHub' },
    { icon: <SiPostman />, name: 'Postman' },
    { icon: <SiOpenai />, name: 'OpenAI API' },
    { icon: <FaGoogle />, name: 'Google OAuth' },
  ];

  return (
    <>
      <div className="w-full max-w-[700px] mx-auto px-6 py-4  bg-[#FFFFFF] shadow-sm rounded-xl mb-4 border-[#F7F7F8] border-2">
        {/* Role + Time */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
          <p className="flex items-center text-[#6B7280] text-md font-medium before:content-['●'] before:mr-2">
            Web Developer | UI/UX Designer
          </p>
          <p className="flex items-center bg-[#D9F6E1] text-[#9CC7A8] px-4 py-2 rounded-xl text-sm font-normal gap-2">
            <span className="w-2 h-2 rounded-full bg-[#82c782] animate-pulse "></span>
            Available for work
          </p>
        </div>


        {/* Profile + Info */}
        <div className="flex flex-col sm:flex-row  justify-between items-center mt-4">
          <p className="text-[#374151] mt-4 sm:mt-0 text-base text-left max-w-[400px]">
            Hi, I’m Nishant — a full-stack developer who blends design with code to create clean, responsive, and meaningful digital experiences. I focus on functionality, user experience, and scalability — making sure your ideas come to life beautifully and reliably.
          </p>



          <motion.img
            src="/profile.PNG"
            alt="profile"
            className="w-40 h-60 object-cover pt-6 mb-8 sm:mb-0 sm:w-48 sm:h-48 -ml-4 sm:-ml-6"
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



        <div className="flex flex-wrap items-center justify-start gap-4 mt-6">
          <a
            href="https://www.linkedin.com/in/nishant-%E2%80%9C-6b4571246"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111827]  text-xl sm:text-2xl hover:text-[#0A66C2] transition-colors duration-300 py-1"
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


          <a
            href="/NishantWebDevResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 sm:px-4 py-2 sm:py-3 bg-[#111827] text-white text-sm sm:text-md rounded-xl hover:text-white hover:bg-[#111827] transition-colors duration-300 sm:text-sm"
          >
            View My Resume
          </a>

        </div>


      </div>

      {/* Tech Stack Carousel */}
      <div className="w-full max-w-[700px] mx-auto bg-white shadow-sm rounded-xl mb-4 border-white border-2">
        <motion.div
          className="bg-white py-4 rounded-xl shadow-sm flex items-center"
          style={{ overflow: 'hidden', height: '80px' }}
        >
          <motion.div
            className="flex items-center space-x-8 sm:space-x-16 text-xl sm:text-2xl bg-white"
            animate={{ x: ['0%', '-100%'] }}

            transition={{
              duration: 20, // slower speed
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
                <span className="text-sm sm:text-base text-[#374151] font-poppins whitespace-nowrap">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

    </>
  );
};

export default InfoSection;
