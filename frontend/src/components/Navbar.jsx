
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    services: false,
    about: false,
  });

  const navItems = [
    {
      name: "Services",
      key: "services",
      children: [
        { label: "Consulting", path: "/services/consulting" },
        { label: "Software Engineering", path: "/services/software-engineering" },
        { label: "Cloud Solution", path: "/services/cloud-solution" },
        { label: "Mobile Applications", path: "/services/mobile-applications" },
      ],
    },
    {
      name: "About",
      key: "about",
      children: [
        { label: "Overview", path: "/about/overview" },
        { label: "Why Us?", path: "/about/why-us" },
        { label: "Quality Policy", path: "/about/quality-policy" },
        { label: "How Can We Help?", path: "/about/how-can-we-help" },
      ],
    },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Login", path: "/login" },
  ];

  return (
    <nav
      className={`fixed w-full bg-blue-900 text-white z-50 transition-all duration-300 ${
        mobileOpen ||
        dropdownOpen.services ||
        dropdownOpen.about
          ? "h-auto py-4"
          : "h-20 md:h-16"
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 flex justify-between items-center transition-all duration-300">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Global Solutions Tech
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center relative">
          {navItems.map((item, idx) => (
            <li key={idx} className="relative group">
              {!item.children ? (
                <Link to={item.path} className="hover:text-gray-300">
                  {item.name}
                </Link>
              ) : (
                <>
                  <button className="hover:text-gray-300">
                    {item.name}
                  </button>

                  {/* Desktop Dropdown */}
                  <div className="absolute hidden group-hover:block top-full mt-2 bg-blue-800 rounded shadow-lg p-3 min-w-[180px]">
                    {item.children.map((child, i) => (
                      <Link
                        key={i}
                        to={child.path}
                        className="block py-2 px-3 hover:bg-blue-700 rounded"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <div className="md:hidden flex flex-col items-end w-1/2">
          {/* Hamburger */}
          {!mobileOpen && (
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2"
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}

          {/* Mobile Vertical Menu Inside Navbar */}
          {mobileOpen && (
            <ul className="flex flex-col gap-2 mt-4 w-full">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  {!item.children ? (
                    <Link
                      to={item.path}
                      className="block py-2 px-4 rounded hover:bg-blue-700"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <>
                      {/* Dropdown Toggle */}
                      <button
                        onClick={() =>
                          setDropdownOpen((prev) => ({
                            ...prev,
                            [item.key]: !prev[item.key],
                          }))
                        }
                        className="w-full text-left py-2 px-4 rounded hover:bg-blue-700"
                      >
                        {item.name}
                      </button>

                      {/* DROPDOWN EXPANDS INSIDE NAVBAR */}
                      {dropdownOpen[item.key] && (
                        <div className="ml-4 mt-1 flex flex-col gap-1">
                          {item.children.map((child, i) => (
                            <Link
                              key={i}
                              to={child.path}
                              className="py-2 px-4 rounded bg-blue-800 hover:bg-blue-700"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
