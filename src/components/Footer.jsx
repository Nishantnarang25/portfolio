import { FaGithub, FaLinkedin, FaDribbble, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full max-w-[700px] mx-auto px-6 py-6 bg-white text-[#333333] text-center text-sm rounded-xl mb-4 border-white border-2">
      <p className="mb-4 text-md">© {new Date().getFullYear()} Nishant. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-4">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.linkedin.com/in/nishant-%E2%80%9C-6b4571246"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0A0A0A] text-2xl hover:text-[#0A66C2] transition duration-300 ease-in-out"
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/Nishantnarang25"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0A0A0A] text-2xl hover:text-[#4d2886] transition duration-300 ease-in-out"
        >
          <FaGithub />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="https://mail.google.com/mail/?view=cm&fs=1&to=nishantnarang111@gmail.com&su=Let's%20Connect&body=Hi%20Nishant%2C%20I%20wanted%20to%20connect%20regarding..."
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0A0A0A] text-2xl hover:text-[#EA4335] transition duration-300 ease-in-out"
        >
          <FaEnvelope />
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;
