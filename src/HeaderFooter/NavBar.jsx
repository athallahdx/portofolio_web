import { useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router";
import { FaTimes } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";

const NavLinks = () => {
  const location = useLocation(); 
  const navigate = useNavigate(); 

  const handleScrollNav = (section) => {
    if (location.pathname !== "/") {
      navigate("/"); 
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      }, 100); 
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ScrollLink
        to="Profile"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-gray-300 text-xl"
      >
        Home
      </ScrollLink>

      <button onClick={() => handleScrollNav("About")} className="cursor-pointer hover:text-gray-300 text-xl ">
        About Me
      </button>

      <Link
        to="/portofolio"
        className="cursor-pointer hover:text-gray-300 text-xl"
      >
        Portofolio
      </Link>

      <button onClick={() => handleScrollNav("Service")} className="cursor-pointer hover:text-gray-300 text-xl">
        Service
      </button>
    </>
  );
};


export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 801);

    const handleResize = () => setIsMobile(window.innerWidth < 801);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getHeaderClass = () => {
    return isMobile
      ? "fixed top-0 w-full z-50 transition-all duration-300 bg-blue-950 bg-opacity-80 backdrop-blur-md shadow-lg border-b border-gray-600"
      : isScrolled
      ? "fixed top-0 w-full z-50 transition-all duration-300 bg-blue-950 bg-opacity-80 backdrop-blur-md shadow-lg border-b border-gray-600"
      : "fixed top-0 w-full z-50 transition-all duration-300 md:bg-transparent border-b border-gray-600";
  };

  const getNavBarClass = () => {
    return isMobile && isMenuOpen
      ? "navbar flex justify-between items-center py-3 md:py-6 border-b border-gray-600 text-lg font-semibold leading-7 text-slate-700 dark:text-slate-200"
      : "navbar flex justify-between items-center py-3 md:py-6 text-lg font-semibold leading-7 text-slate-700 dark:text-slate-200";
  };

  return (
    <header className={getHeaderClass()}>
      <nav className={getNavBarClass()} role="navigation" aria-label="Main Navigation">
        <div className="logo text-white ms-5 sm:ms-6 lg:ms-24">
          <h1 className="text-xl xs:text-2xl md:text-3xl font-bold">AthallahTS</h1>
        </div>
        <div className="hidden lg:flex nav-links space-x-16 me-10">
          <NavLinks />
        </div>
        <div className="menu text-white lg:hidden me-8">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <FaTimes className="text-[28px] xs:text-[30px] sm:text-[40px]" />
            ) : (
              <CgMenu className="text-[28px] xs:text-[30px] sm:text-[40px]" />
            )}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center font-bold text-white basis-full flex-wrap pb-5 pt-5 sm:pb-4 sm:pt-4 space-y-6 xs:space-y-8 sm:space-y-8">
          <NavLinks />
        </div>
      )}
    </header>
  );
}
