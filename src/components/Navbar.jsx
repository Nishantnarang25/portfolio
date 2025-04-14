import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Plus, Minus, Menu, X } from 'lucide-react';

const navItems = [
  { id: 'info', label: 'Info', to: '/' },
  { id: 'skills', label: 'Skills', to: '/', sectionId: 'skills' },
  { id: 'work', label: 'Work', to: '/', sectionId: 'projects' },
  { id: 'contact', label: 'Contact', to: '/contact' },
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

  return (
    <nav className="w-full max-w-[700px] mx-auto px-6 py-4 bg-white shadow-sm rounded-xl mb-4 border-white border-2">
      <div className="flex items-center justify-between">
        <img
          src="/logo.png"
          alt="logo"
          className="h-6 w-auto object-contain opacity-90"
        />

        {/* Hamburger Menu Button */}
        <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="h-6 w-6 text-[#0A0A0A]" />
          ) : (
            <Menu className="h-6 w-6 text-[#0A0A0A]" />
          )}
        </div>
      </div>

      {/* Mobile Menu (Dropdown below Navbar) */}
      <div
        className={`lg:hidden ${isOpen ? 'block' : 'hidden'} mt-4 w-full px-6 py-2 bg-white shadow-lg rounded-xl border-t-2 border-[#F2F2F2] space-y-2`}
      >
        {navItems.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item)}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer transition-colors duration-300 justify-start ${
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

      {/* Desktop Navbar items */}
      <div className="hidden lg:flex space-x-6 text-sm font-medium">
        {navItems.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item)}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer transition-colors duration-300 min-w-24 justify-center mb-2 ${
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
    </nav>
  );
};

export default Navbar;
