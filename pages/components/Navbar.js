import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Navbar({ scrollContainerRef }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!scrollContainerRef?.current) return;

    let lastScrollY = scrollContainerRef.current.scrollTop;

    const controlNavbar = () => {
      const currentScrollY = scrollContainerRef.current.scrollTop;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    const container = scrollContainerRef.current;
    container.addEventListener("scroll", controlNavbar);

    return () => container.removeEventListener("scroll", controlNavbar);
  }, [scrollContainerRef]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section && scrollContainerRef?.current) {
      scrollContainerRef.current.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full transition-transform duration-400 z-50 bg-gradient-to-r from-secondary to-primary ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="px-4 md:px-[90px]">
        <div className="flex justify-between min-h-[90px] items-center">
          <Image
            className="cursor-pointer"
            src={"/icons/zas_icon_white.png"}
            width={72}
            height={50}
            alt="Logo"
            onClick={() => scrollToSection("home")}
          />
          <div className="flex gap-6 items-center">
            <ul className="hidden md:flex gap-6 text-white">
              <li
                className="cursor-pointer"
                onClick={() => scrollToSection("clients")}
              >
                Clients
              </li>
              <li
                className="cursor-pointer"
                onClick={() => scrollToSection("services")}
              >
                Services
              </li>
              <li
                className="cursor-pointer"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </li>
              <li
                className="cursor-pointer"
                onClick={() => scrollToSection("about")}
              >
                About Us
              </li>
            </ul>
            <Image
              className="cursor-pointer"
              src={"/icons/search_icon.png"}
              width={33}
              height={33}
              alt="Search"
            />
            <Image
              className="cursor-pointer md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              src={"/icons/ham_menu_icon.png"}
              width={33}
              height={33}
              alt="Menu"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
