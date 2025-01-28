import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";

const NavLinks = () => (
  <>
    <Link to="Profile" smooth={true} duration={500} className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer sm:max-lg:text-2xl sm:max-lg:font-semibold">
      Home
    </Link>
    <Link to="About" smooth={true} duration={500} className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer sm:max-lg:text-2xl sm:max-lg:font-semibold">
      About Me
    </Link>
    <Link to="portfolio" smooth={true} duration={500} className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer sm:max-lg:text-2xl sm:max-lg:font-semibold">
      Portfolio
    </Link>
    <Link to="services" smooth={true} duration={500} className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer sm:max-lg:text-2xl sm:max-lg:font-semibold">
      Services
    </Link>
    <Link to="contact" smooth={true} duration={500} className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer sm:max-lg:text-2xl sm:max-lg:font-semibold">
      Contact
    </Link>
  </>
);

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 801);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 801);
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
        <div className="logo ms-5 sm:ms-6 lg:ms-24">
          <h1 className="text-xl xs:text-2xl md:text-3xl font-bold">AthallahTS</h1>
        </div>
        <div className="hidden lg:flex space-x-16 nav-links me-10">
          <NavLinks />
        </div>
        <div className="menu lg:hidden me-8">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes className=" text-[28px] xs:text-[30px] sm:text-[40px]"/> : <CgMenu className="text-[28px] xs:text-[30px] sm:text-[40px]" />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col space-y-2 xs:space-y-4 sm:space-y-8 font-normal text-white items-center basis-full flex-wrap pb-3 pt-3 sm:pt-4 sm:pb-4">
          <NavLinks />
        </div>
      )}
    </header>
  );
}
