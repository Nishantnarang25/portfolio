import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'info', label: 'Home', to: '/', sectionId: 'info', icon: 'home.png', hoveredIcon: 'homeHovered.png' },
  { id: 'skills', label: 'Technical Skills', to: '/', sectionId: 'skills', icon: 'skills.png', hoveredIcon: 'skillsHovered.png' },
  { id: 'work', label: 'My Projects', to: '/', sectionId: 'projects', icon: 'projects.png', hoveredIcon: 'projectsHovered.png' },
  { id: 'contact', label: 'Get in Touch', to: '/contact', icon: 'contact.png', hoveredIcon: 'contactHovered.png' },
];

const Navbar = () => {
  const [active, setActive] = useState('info');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (item) => {
    setActive(item.id);
    setIsOpen(false);

    if (item.to === '/contact') {
      navigate('/contact');
      return;
    }

    if (location.pathname === '/') {
      if (item.sectionId) {
        const el = document.getElementById(item.sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate('/', { state: { scrollTo: item.sectionId } });
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== '/') return;

      let closestSection = 'info';
      let minDistance = Infinity;

      navItems.forEach((item) => {
        if (item.sectionId) {
          const el = document.getElementById(item.sectionId);
          if (el) {
            const rect = el.getBoundingClientRect();
            const distance = Math.abs(rect.top);
            if (distance < minDistance && rect.top <= window.innerHeight / 2) {
              minDistance = distance;
              closestSection = item.id;
            }
          }
        }
      });

      setActive(closestSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <nav className="w-full max-w-[700px] mx-auto px-6 py-4 bg-[#ffffff] shadow-sm rounded-xl mb-4">
      <div className="flex items-center justify-between">
        <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="h-6 w-6 text-[#0A0A0A]" />
          ) : (
            <Menu className="h-6 w-6 text-[#0A0A0A]" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
     <div className={`lg:hidden ${isOpen ? 'flex' : 'hidden'} flex-col mt-4 w-full  py-2 gap-4`}>
  {navItems.map((item) => (
    <div
      key={item.id}
      onClick={() => handleClick(item)}
      className="flex items-center gap-3 cursor-pointer"
    >
      <img
        src={`/${active === item.id ? item.hoveredIcon : item.icon}`}
        alt={item.label}
        className="w-8 h-8"
      />
      <span className="text-[#0A0A0A] text-base font-medium">{item.label}</span>
    </div>
  ))}
</div>


      {/* Desktop Menu */}
      <div className="hidden lg:flex space-x-6 justify-start mt-4">
        {navItems.map((item) => (
          <img
            key={item.id}
            src={`/${active === item.id ? item.hoveredIcon : item.icon}`}
            alt={item.label}
            onClick={() => handleClick(item)}
            className="w-10 h-10 cursor-pointer"
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
