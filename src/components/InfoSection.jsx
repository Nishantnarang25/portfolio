import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaLinkedin,
  FaGithub,
  FaEnvelope
} from 'react-icons/fa';
import {
  SiFigma,
  SiPostgresql,
  SiMongodb,
  SiExpress,
} from 'react-icons/si';

const InfoSection = () => {
  // State for the time
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000); // 1000 ms = 1 second

    return () => clearInterval(timer); // Clear the interval on component unmount
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
      <div className="w-full max-w-[700px] mx-auto px-6 py-4 bg-white shadow-sm rounded-xl mb-4 border-white border-2">
        <div className="flex flex-row items-start justify-between">
          <motion.img
            src="../public/profile.png"
            alt="profile"
            className="w-40 object-cover rounded-lg pt-6 mb-8"
            animate={{ y: [0, -10, 0] }}
            transition={{
              y: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
              },
            }}
          />
          <p className="text-[#0A0A0A]">{time}</p> {/* Dynamically updated time */}
        </div>
        <p className="text-[#0A0A0A] mt-4 text-medium text-left mb-6">
          Hi, I’m Nishant — a full-stack developer dedicated to building reliable, high-quality websites.
          With a strong foundation in both design and development, I ensure that every product is not only visually appealing but
          also secure, scalable, and user-friendly. I take pride in delivering work that’s thoughtful, functional, and tailored
          to your needs — so you can trust that your vision is in good hands.
        </p>
        <div className="flex flex-row items-center justify-start gap-6 mt-4">
          {/* LinkedIn */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/nishant-%E2%80%9C-6b4571246"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A0A0A] text-3xl hover:text-[#0A66C2] transition"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/Nishantnarang25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A0A0A] text-3xl hover:text-[#4d2886] transition"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nishantnarang111@gmail.com&su=Let's%20Connect&body=Hi%20Nishant%2C%20I%20wanted%20to%20connect%20regarding..."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A0A0A] text-3xl hover:text-[#EA4335] transition"
          >
            <FaEnvelope />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05}}
            whileTap={{ scale: 0.95 }}
            href="/public//resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#0A0A0A] text-white text-md rounded-xl hover:text-[#0A0A0A] hover:bg-[#FFD95A] transition"
          >
            Download Resume
          </motion.a>
        </div>
      </div>

      <div className="w-full max-w-[700px] mx-auto bg-white shadow-sm rounded-xl moving-div mb-4 border-white border-2">
        <motion.div
          className="max-w-[800px] bg-white py-4 rounded-xl shadow-sm flex items-center"
          style={{ overflow: 'hidden', height: '80px' }}
        >
          <motion.div
            className="flex items-center space-x-16 text-3xl"
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
                className="flex flex-row items-center justify-start text-left gap-2"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="text-[#0A0A0A]">{tech.icon}</div>
                <span className="text-lg text-[#0A0A0A] font-poppins">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default InfoSection;
