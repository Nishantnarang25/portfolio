import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';

const navItems = [
  { id: 'info', label: 'Info', to: '/' },
  { id: 'skills', label: 'Skills', to: '/', sectionId: 'skills' },
  { id: 'work', label: 'Work', to: '/', sectionId: 'projects' },
  { id: 'contact', label: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('info');
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (item) => {
    setActive(item.id);

    if (item.to === '/contact') {
      navigate('/contact');
      return;
    }

    // If already on "/", scroll to section if applicable
    if (location.pathname === '/') {
      if (item.sectionId) {
        const el = document.getElementById(item.sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Navigate to "/" and pass sectionId in state
      navigate('/', { state: { scrollTo: item.sectionId } });
    }
  };

  return (
    <nav className="w-full max-w-[700px] mx-auto px-6 py-4 bg-white shadow-sm rounded-xl mb-4 border-white border-2">
      <div className="flex items-center justify-between">
        <img
          src="/logo.png"
          alt="logo"
          className="h-6 w-auto object-contain opacity-90"
        />
        <div className="flex space-x-3 text-sm font-medium">
          {navItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleClick(item)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer transition-colors duration-300 min-w-24 justify-center ${
                active === item.id ? 'bg-[#FFD95A]' : 'bg-[#F2F2F2]'
              }`}
            >
              <span className="text-[#0A0A0A]">{item.label}</span>
              <div className="flex items-center justify-center w-6 h-6 rounded-full border-[#0A0A0A] border-2">
                {active === item.id ? (
                  <Minus className="h-4 w-4 text-[#0A0A0A]" />
                ) : (
                  <Plus className="h-4 w-4 text-[#0A0A0A]" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
