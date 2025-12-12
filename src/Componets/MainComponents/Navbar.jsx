import React, { useState } from "react";
import { FaWhatsapp, FaBars, FaTimes, FaTelegramPlane } from "react-icons/fa";
import logo from "../../assets/logo.png";
import header from "../../assets/header.png";
import { MessageCircle } from "lucide-react";
import Header from "../HomeComponents/Header";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // ВАЖНО — ссылки идут как ID, без /
  const links = [
    { label: "KATALOG", to: "catalog" },
    { label: "QO'LLANISHI", to: "apply" },
    { label: "NATIJALAR", to: "results" },
    { label: "KOMPANIYA HAQIDA", to: "company" },
    { label: "SERTIFIKAT (RU)", to: "cert" },
    { label: "ALOQA", to: "contacts" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">

      {/* ================= NAVBAR ================= */}
      <header className="bg-white/10 w-full flex items-center justify-between py-3 sm:py-5 px-4 sm:px-6 lg:px-10 backdrop-blur-md fixed top-0 left-0 z-50">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-lg" />
          <div>
            <p className="text-lg md:text-xl font-semibold tracking-wide">HYDROGENIUM</p>
            <p className="text-xs text-gray-500 -mt-1">YOSHLIGINGIZNI QAYTARING</p>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-8 text-lg font-medium text-gray-700">
          {links.map((item) => (
            <button
              key={item.to}
              onClick={() => scrollToSection(item.to)}
              className="hover:text-black transition"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Tellegramm + mobile menu */}
        <div className="flex items-center gap-4">
          <a href="https://t.me/hydrogen_uzb" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane className="text-3xl text-cyan-600 hover:text-cyan-700 transition-colors" />
          </a>


          <button className="lg:hidden text-3xl" onClick={() => setIsOpen(true)}>
            <FaBars />
          </button>
        </div>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 z-51 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center p-6 border-b ">
          <p className="text-lg font-semibold">Меню</p>
          <button onClick={() => setIsOpen(false)} className="">
            <FaTimes className="text-3xl" />
          </button>
        </div>

        <nav className="flex flex-col px-6 mt-6 gap-5 text-lg font-medium">
          {links.map((item) => (
            <button
              key={item.to}
              onClick={() => {
                scrollToSection(item.to);
                setIsOpen(false);
              }}
              className="py-2 border-b text-left"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/30 z-30 lg:hidden" onClick={() => setIsOpen(false)}></div>
      )}

      {/* ================= SHOWCASE HEADER ================= */}
      <Header />
    </div>
  );
}
