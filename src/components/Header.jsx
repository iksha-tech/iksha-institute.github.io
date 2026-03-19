import logo from '../assets/logo-2.png';
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black border-b border-[#1f2937] sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 h-28 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" height="100" width="375" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-[#d1d5db] hover:text-[#D84C00] transition">Home</a>
          <a href="#courses" className="text-[#d1d5db] hover:text-[#D84C00] transition">Courses</a>
          <a href="#aboutus" className="text-[#d1d5db] hover:text-[#D84C00] transition">About Us</a>
          <a href="#contact" className="text-[#d1d5db] hover:text-[#D84C00] transition">Contact</a>
        </nav>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-[#d1d5db] focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-[#1f2937]">
          <nav className="flex flex-col space-y-4 px-6 py-6">
            <a
              href="#home"
              className="text-[#d1d5db] hover:text-[#D84C00] transition"
              onClick={() => setOpen(false)}
            >
              Home
            </a>
            <a
              href="#courses"
              className="text-[#d1d5db] hover:text-[#D84C00] transition"
              onClick={() => setOpen(false)}
            >
              Courses
            </a>
            <a
              href="#aboutus"
              className="text-[#d1d5db] hover:text-[#D84C00] transition"
              onClick={() => setOpen(false)}
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-[#d1d5db] hover:text-[#D84C00] transition"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
