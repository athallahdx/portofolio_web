import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";

const NavLinks = () => (
  <>
    <Link to="Profile" smooth={true} duration={500} className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer">
      Home
    </Link>
    <Link to="About" smooth={true} duration={500} className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer">
      About Me
    </Link>
    <Link to="portfolio" smooth={true} duration={500} className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer">
      Portfolio
    </Link>
    <Link to="services" smooth={true} duration={500} className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer">
      Services
    </Link>
    <Link to="contact" smooth={true} duration={500} className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer">
      Contact
    </Link>
  </>
);

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getHeaderClass = () => {
    if (isMobile) return "fixed w-full top-0 mx-auto transition-all duration-300 bg-blue-950 shadow-lg bg-opacity-80 backdrop-blur-md border-b border-gray-600 z-50";
    return isScrolled ? "fixed w-full top-0 mx-auto transition-all duration-300 bg-blue-950 shadow-lg bg-opacity-80 backdrop-blur-md border-b border-gray-600 z-50" : "fixed w-full top-0 mx-auto transition-all duration-300 md:bg-transparent border-b border-gray-600 z-50";
  };

  const getNavBarClass = () => {
    if(!isMobile) return "navbar flex justify-between items-center py-4 md:py-6 text-lg leading-7 font-semibold text-slate-700 dark:text-slate-200" ;
    return isMenuOpen ? "navbar flex justify-between items-center border-b border-gray-600 py-4 md:py-6 text-lg leading-7 font-semibold text-slate-700 dark:text-slate-200" : "navbar flex justify-between items-center py-4 md:py-6 text-lg leading-7 font-semibold text-slate-700 dark:text-slate-200";
  };

  return (
    <header className={getHeaderClass()}>
      <nav className={getNavBarClass()} role="navigation" aria-label="Main Navigation">
        <div className="logo ms-5 md:ms-24">
          <h1 className="text-2xl md:text-3xl font-bold">AthallahTS</h1>
        </div>
        <div className="hidden md:flex space-x-16 nav-links me-24">
          <NavLinks />
        </div>
        <div className="menu md:hidden me-8">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes size={30} /> : <CgMenu size={30} />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 font-normal text-white items-center basis-full flex-wrap pb-3 pt-3">
          <NavLinks />
        </div>
      )}
    </header>
  );
}
