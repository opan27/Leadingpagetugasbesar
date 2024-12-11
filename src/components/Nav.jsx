import { useState, useEffect, useRef } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false); // State untuk mengelola menu hamburger
  const dropdownRef = useRef(null); // Refs untuk mendeteksi klik di luar dropdown

  // Toggle menu hamburger
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle antara buka dan tutup menu hamburger
  };

  // Menutup menu dropdown jika klik di luar elemen
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Tutup menu jika klik di luar dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup listener saat komponen unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="w-full">
        {/* Navbar dengan fixed position dan background putih */}
        <nav className="flex justify-between items-center bg-white fixed top-0 left-0 w-full z-50 shadow-lg py-4 px-6">
          <a href="/">
            <img src={headerLogo} alt="logo" width={150} height={29} className="m-0 w-[150px] h-[29px]" />
          </a>

          {/* Navbar untuk desktop (perangkat besar, tidak ada dropdown) */}
          <ul className="flex justify-center gap-16 lg:flex max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Menu Sign in dan Explore untuk desktop (perangkat besar, tidak ada dropdown) */}
          <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat lg:flex max-lg:hidden">
            <a href="/">Sign in</a>
            <span>/</span>
            <a href="/">Explore now</a>
          </div>

          {/* Menu Hamburger untuk mobile */}
          <div className="block lg:hidden">
            <button onClick={toggleMenu} aria-label="Open menu">
              <img src={hamburger} alt="hamburger icon" width={25} height={25} />
            </button>
          </div>
        </nav>
      </header>

      {/* Menu Dropdown untuk mobile jika isOpen true */}
      {isOpen && (
        <div
          ref={dropdownRef} // Referensi untuk dropdown
          className="max-lg:block fixed top-0 left-0 w-full bg-white shadow-lg z-40"
        >
          <ul className="flex flex-col items-center py-4">
            {navLinks.map((item) => (
              <li key={item.label} className="py-2">
                <a href={item.href} className="font-montserrat text-lg text-slate-gray">
                  {item.label}
                </a>
              </li>
            ))}
            <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat">
              <a href="/">Sign in</a>
              <span>/</span>
              <a href="/">Explore now</a>
            </div>
          </ul>
        </div>
      )}
    </>
  );
};

export default Nav;
