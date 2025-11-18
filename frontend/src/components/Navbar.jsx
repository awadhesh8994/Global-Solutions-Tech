import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState({
    industries: false,
    services: false,
    career: false,
    about: false,
  });

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    industries: false,
    services: false,
    career: false,
    about: false,
  });

  // Scroll background for desktop only
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setScrolled(window.scrollY > 10);
      } else {
        setScrolled(false); // mobile: no scroll effect
      }
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleMouseEnter = (name) => setDropdownOpen((prev) => ({ ...prev, [name]: true }));
  const handleMouseLeave = (name) => setDropdownOpen((prev) => ({ ...prev, [name]: false }));
  const toggleMobileDropdown = (name) => setMobileDropdowns((prev) => ({ ...prev, [name]: !prev[name] }));

  const navItems = {
    industries: ["Industry 1", "Industry 2", "Industry 3", "Industry 4", "Industry 5", "Industry 6", "Industry 7", "Industry 8", "Industry 9"],
    services: ["Service 1", "Service 2", "Service 3", "Service 4"],
    career: ["Open Positions", "Internships"],
    about: ["Company", "Team", "Contact Info"],
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-blue-600 text-white shadow-lg' : 'bg-transparent text-black'}`}>
      <div className="max-w-8xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold pl-2 z-50">Global Solutions</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 items-center">
          {Object.keys(navItems).map((key) => (
            <li key={key} className="relative">
              <div onMouseEnter={() => handleMouseEnter(key)} onMouseLeave={() => handleMouseLeave(key)}>
                <button className={`flex items-center px-2 py-1 transition-colors duration-200 ${scrolled ? 'hover:text-gray-300' : 'hover:text-blue-200'}`}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                  <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${dropdownOpen[key] ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {dropdownOpen[key] && (
                  <ul className="absolute top-full left-0 bg-blue-600 rounded shadow-lg min-w-[180px] mt-0 z-50">
                    {navItems[key].map((item, idx) => (
                      <li key={idx} className="px-3 py-2 hover:bg-blue-400 whitespace-nowrap">
                        <a href={`/${key.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, "-")}`}>{item}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}

          <li>
            <a href="/contact" className={`px-2 py-1 transition-colors duration-200 ${scrolled ? 'hover:text-gray-300' : 'hover:text-blue-200'}`}>Contact</a>
          </li>
        </ul>

        {/* Mobile Hamburger/Close */}
        <div className="md:hidden relative z-50">
          <button className="p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"}>
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-blue-600 overflow-y-auto z-40">
          <div className="px-4 py-6 space-y-4">
            {Object.keys(navItems).map((key) => (
              <div key={key} className="border-b border-blue-500 pb-2">
                <button className="w-full flex justify-between items-center py-3 text-lg font-semibold text-white" onClick={() => toggleMobileDropdown(key)}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                  <svg className={`w-5 h-5 transition-transform duration-200 ${mobileDropdowns[key] ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileDropdowns[key] && (
                  <div className="pl-4 mt-2 space-y-2">
                    {navItems[key].map((item, idx) => (
                      <a key={idx} href={`/${key.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, "-")}`} className="block py-2 px-3 rounded-lg hover:bg-blue-500 transition-colors duration-200 text-white" onClick={() => setMobileOpen(false)}>
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Contact */}
            <div className="border-b border-blue-500 pb-2">
              <a href="/contact" className="block py-3 text-lg font-semibold text-white" onClick={() => setMobileOpen(false)}>Contact</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;