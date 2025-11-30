/*import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState({
    services: false,
    about: false,
  });

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    services: false,
    about: false,
  });

  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isLandingPage = location.pathname === "/";

  // SCROLL + RESPONSIVE NAVBAR FIX
  useEffect(() => {
    if (isLandingPage) {
      const handleScroll = () => {
        if (window.innerWidth >= 768) {
          // Desktop – transparent until scroll
          setScrolled(window.scrollY > 10);
        } else {
          // Mobile – always solid navbar (fix overlapping)
          setScrolled(true);
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
    } else {
      setScrolled(true);
    }
  }, [isLandingPage]);

  // BACKGROUND
  const getNavbarBackground = () => {
    if (!isLandingPage) {
      return "bg-blue-900 text-white shadow-lg";
    }
    return scrolled
      ? "bg-blue-900 text-white shadow-lg"
      : "bg-transparent text-white";
  };

  const handleMouseEnter = (name) =>
    setDropdownOpen((prev) => ({ ...prev, [name]: true }));
  const handleMouseLeave = (name) =>
    setDropdownOpen((prev) => ({ ...prev, [name]: false }));
  const toggleMobileDropdown = (name) =>
    setMobileDropdowns((prev) => ({ ...prev, [name]: !prev[name] }));

  // Menu items
  const navItems = {
    services: [
      "Consulting",
      "Software Engineering",
      "Cloud Solution",
      "Mobile Applications",
    ],
    about: [
      { name: "Overview", path: "/about/overview" },
      { name: "Why Us?", path: "/about/why-us" },
      { name: "Quality Policy", path: "/about/quality-policy" },
      { name: "How Can We Help?", path: "/about/how-can-we-help" },
     
    ],
  };

  const getMenuItemInfo = (menuKey, item) => {
    if (menuKey === "about") {
      return { name: item.name, path: item.path };
    } else {
      return {
        name: item,
        path: `/${menuKey.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, "-")}`,
      };
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${getNavbarBackground()}`}>
      <div className="max-w-8xl mx-auto px-6 flex justify-between items-center h-20 md:h-16">
        
        {/* Logo *
        <Link to="/" className="text-2xl font-bold pl-2 pr-4 z-50 font-sans">
          Global Solutions Tech
        </Link>

        {/* Desktop Menu *
        <ul className="hidden md:flex flex-wrap gap-14 items-center font-sans">
          {Object.keys(navItems).map((key) => (
            <li key={key} className="relative">
              <div
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={() => handleMouseLeave(key)}
              >
                <button
                  className={`flex items-center px-2 py-1 transition-colors duration-200 font-medium ${
                    scrolled ? "hover:text-gray-300" : "hover:text-blue-200"
                  }`}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                      dropdownOpen[key] ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {dropdownOpen[key] && (
                  <ul className="absolute top-full left-0 bg-blue-900 rounded shadow-lg min-w-[180px] z-50 font-sans">
                    {navItems[key].map((item, idx) => {
                      const menuItem = getMenuItemInfo(key, item);
                      return (
                        <li key={idx} className="px-3 py-2 hover:bg-blue-700 whitespace-nowrap transition-colors duration-200">
                          <Link
                            to={menuItem.path}
                            onClick={() => setDropdownOpen((prev) => ({ ...prev, [key]: false }))}
                            className="block w-full"
                          >
                            {menuItem.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </li>
          ))}

          <li>
            <Link
              to="/contact-us"
              className={`px-2 py-1 transition-colors duration-200 font-medium ${
                scrolled ? "hover:text-gray-300" : "hover:text-blue-200"
              }`}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className={`px-4 py-2 ml-2 rounded-2xl font-semibold transition-colors duration-200 ${
                !isLandingPage || scrolled
                  ? "bg-white text-blue-900 hover:bg-gray-200"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Login
            </Link>
          </li>
        </ul>

        {/* Hamburger *
        <div className="md:hidden relative z-50">
          <button
            className="p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
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

      {/* Mobile Menu *
      {mobileOpen && (
        <div className="md:hidden fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-blue-900 overflow-y-auto z-40 font-sans ">
          <div className="px-4 py-6 space-y-4">
            {Object.keys(navItems).map((key) => (
              <div key={key} className="border-b border-blue-700 pb-2">
                <button
                  className="w-full flex justify-between items-center py-3 text-lg font-semibold text-white"
                  onClick={() => toggleMobileDropdown(key)}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      mobileDropdowns[key] ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {mobileDropdowns[key] && (
                  <div className="pl-4 mt-2 space-y-2">
                    {navItems[key].map((item, idx) => {
                      const menuItem = getMenuItemInfo(key, item);
                      return (
                        <Link
                          key={idx}
                          to={menuItem.path}
                          className="block py-2 px-3 rounded-lg hover:bg-blue-700 text-white font-medium"
                          onClick={() => setMobileOpen(false)}
                        >
                          {menuItem.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}

            <div className="border-b border-blue-700 pb-2">
              <Link
                to="/contact-us"
                className="block py-3 text-lg font-semibold text-white"
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </Link>
            </div>
            <div className="border-b border-blue-700 pb-2">
              <Link
                to="/login"
                className="block py-3 text-lg font-semibold text-white"
                onClick={() => setMobileOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;*/
import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState({
    services: false,
    about: false,
  });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    services: false,
    about: false,
  });
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isLandingPage = location.pathname === "/";

  // Memoized scroll handler
  const handleScroll = useCallback(() => {
    if (window.innerWidth >= 768) {
      setScrolled(window.scrollY > 10);
    } else {
      setScrolled(true);
    }
  }, []);

  // Optimized scroll effect
  useEffect(() => {
    if (!isLandingPage) {
      setScrolled(true);
      return;
    }

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

    // Initial check
    handleScroll();

    window.addEventListener("scroll", throttledScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isLandingPage, handleScroll]);

  // Close dropdowns when route changes
  useEffect(() => {
    setDropdownOpen({ services: false, about: false });
    setMobileOpen(false);
  }, [location]);

  // Consistent menu structure
  const navItems = {
    services: {
      title: "Services",
      items: [
        { name: "Consulting", path: "/services/consulting" },
        { name: "Software Engineering", path: "/services/software-engineering" },
        { name: "Cloud Solution", path: "/services/cloud-solution" },
        { name: "Mobile Applications", path: "/services/mobile-applications" },
      ],
    },
    about: {
      title: "About",
      items: [
        { name: "Overview", path: "/about/overview" },
        { name: "Why Us?", path: "/about/why-us" },
        { name: "Quality Policy", path: "/about/quality-policy" },
        { name: "How Can We Help?", path: "/about/how-can-we-help" },
      ],
    },
  };

  // Background styles
  const getNavbarBackground = () => {
    if (!isLandingPage) return "bg-blue-900 text-white shadow-lg";
    return scrolled
      ? "bg-blue-900 text-white shadow-lg"
      : "bg-transparent text-white";
  };

  // Event handlers
  const handleMouseEnter = (name) => {
    if (window.innerWidth >= 768) {
      setDropdownOpen((prev) => ({ ...prev, [name]: true }));
    }
  };

  const handleMouseLeave = (name) => {
    if (window.innerWidth >= 768) {
      setDropdownOpen((prev) => ({ ...prev, [name]: false }));
    }
  };

  const toggleMobileDropdown = (name) => {
    setMobileDropdowns((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const closeAllMenus = () => {
    setMobileOpen(false);
    setDropdownOpen({ services: false, about: false });
  };

  // Keyboard navigation handler
  const handleKeyDown = (e, menuKey) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (window.innerWidth < 768) {
        toggleMobileDropdown(menuKey);
      } else {
        setDropdownOpen(prev => ({ ...prev, [menuKey]: !prev[menuKey] }));
      }
    } else if (e.key === "Escape") {
      closeAllMenus();
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${getNavbarBackground()}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-xl sm:text-2xl font-bold z-50 font-sans hover:opacity-80 transition-opacity duration-200"
          onClick={closeAllMenus}
        >
          Global Solutions Tech
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-wrap gap-8 lg:gap-14 items-center font-sans">
          {Object.entries(navItems).map(([key, { title, items }]) => (
            <li key={key} className="relative">
              <div
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={() => handleMouseLeave(key)}
              >
                <button
                  className={`flex items-center px-3 py-2 transition-colors duration-200 font-medium rounded ${
                    scrolled ? "hover:text-gray-300" : "hover:text-blue-200"
                  }`}
                  aria-expanded={dropdownOpen[key]}
                  aria-haspopup="true"
                  onKeyDown={(e) => handleKeyDown(e, key)}
                >
                  {title}
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                      dropdownOpen[key] ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {dropdownOpen[key] && (
                  <ul 
                    className="absolute top-full left-0 bg-blue-900 rounded shadow-lg min-w-[200px] z-50 font-sans border border-blue-700"
                    role="menu"
                  >
                    {items.map((item, idx) => (
                      <li key={idx} role="none">
                        <Link
                          to={item.path}
                          className="block px-4 py-2 hover:bg-blue-700 whitespace-nowrap transition-colors duration-200"
                          role="menuitem"
                          onClick={() => setDropdownOpen({ services: false, about: false })}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}

          <li>
            <Link
              to="/contact-us"
              className={`px-3 py-2 transition-colors duration-200 font-medium rounded ${
                scrolled ? "hover:text-gray-300" : "hover:text-blue-200"
              }`}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className={`px-4 py-2 ml-2 rounded-2xl font-semibold transition-colors duration-200 ${
                !isLandingPage || scrolled
                  ? "bg-white text-blue-900 hover:bg-gray-200"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Login
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden relative z-50">
          <button
            className="p-2 rounded hover:bg-blue-800 transition-colors duration-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-blue-900 overflow-y-auto z-40 font-sans"
        >
          <div className="px-4 py-4 space-y-2">
            {Object.entries(navItems).map(([key, { title, items }]) => (
              <div key={key} className="border-b border-blue-700">
                <button
                  className="w-full flex justify-between items-center py-3 text-lg font-semibold text-white hover:bg-blue-800 rounded-lg px-2 transition-colors duration-200"
                  onClick={() => toggleMobileDropdown(key)}
                  aria-expanded={mobileDropdowns[key]}
                  aria-haspopup="true"
                  onKeyDown={(e) => handleKeyDown(e, key)}
                >
                  {title}
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      mobileDropdowns[key] ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {mobileDropdowns[key] && (
                  <div className="pl-4 pb-2 space-y-1" role="menu">
                    {items.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        className="block py-2 px-3 rounded-lg hover:bg-blue-700 text-white font-medium transition-colors duration-200"
                        role="menuitem"
                        onClick={closeAllMenus}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="border-b border-blue-700">
              <Link
                to="/contact-us"
                className="block py-3 text-lg font-semibold text-white hover:bg-blue-800 rounded-lg px-2 transition-colors duration-200"
                onClick={closeAllMenus}
              >
                Contact Us
              </Link>
            </div>
            <div className="border-b border-blue-700">
              <Link
                to="/login"
                className="block py-3 text-lg font-semibold text-white hover:bg-blue-800 rounded-lg px-2 transition-colors duration-200"
                onClick={closeAllMenus}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;