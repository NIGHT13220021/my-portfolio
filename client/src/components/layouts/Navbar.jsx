import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import photo from "../../assets/photo.png";

export default function Navbar() {
  const [active, setActive] = useState(4);

  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
    { label: "Hire Me", id: "contact", highlight: true },
  ];

  const scrollToSection = (id, index) => {
    setActive(index);
    setIsOpen(false);
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-0 w-full z-50 flex justify-center"
    >
      <div className="w-[95%] max-w-7xl flex items-center justify-between relative">

        {/* LOGO */}
        <span
          onClick={() => scrollToSection("home", 0)}
          className="font-[Playfair_Display] text-2xl tracking-[0.2em] text-[#3E2616] cursor-pointer select-none"
        >
          KUNDAN
          <span className="text-sm align-super ml-1 opacity-70">
            .dev
          </span>
        </span>

        {/* CENTER NAV */}
        <div
          className="absolute left-1/2 -translate-x-1/2 hidden md:flex 
                     items-center gap-2
                     bg-[rgba(255,248,240,0.7)] backdrop-blur-xl
                     px-3 py-2 rounded-full
                     border border-[#E6D5C3]
                     shadow-[0_10px_30px_rgba(92,58,33,0.15)]"
        >
          {items.map((item, index) => {
            const isActive = active === index;

            return (
              <button
                key={index}
                onClick={() => scrollToSection(item.id, index)}
                className="relative px-6 py-2 rounded-full text-sm font-medium cursor-pointer"
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-[#5C3A21] rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : item.highlight
                      ? "text-[#5C3A21] font-semibold"
                      : "text-[#2B1B12]"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* PROFILE IMAGE (DESKTOP) */}
        <div className="hidden md:block">
          <img
            src={photo}
            alt="Kundan"
            onClick={() => scrollToSection("about", 1)}
            className="w-12 h-12 rounded-full object-cover object-top 
                       border border-[#E6D5C3] 
                       shadow-md 
                       cursor-pointer 
                       hover:scale-105 
                       transition"
          />
        </div>

        {/* HAMBURGER (MOBILE) */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-[2px] bg-[#5C3A21]" />
          <span className="w-6 h-[2px] bg-[#5C3A21]" />
          <span className="w-6 h-[2px] bg-[#5C3A21]" />
        </div>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-[#F5EFE6] 
                       flex flex-col items-center justify-center 
                       gap-8 text-2xl 
                       font-[Playfair_Display] text-[#3E2616]"
          >
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id, index)}
                className="cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
