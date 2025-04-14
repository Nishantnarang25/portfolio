import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import InfoSection from '../components/InfoSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import CertificationsSection from '../components/CertificationSection';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const target = document.getElementById(location.state.scrollTo);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 100); // small delay ensures the section is mounted
      }
    }
  }, [location]);

  return (
    <div>
      <section id="info">
        <InfoSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="certifications">
        <CertificationsSection />
      </section>
    </div>
  );
};

export default Home;
