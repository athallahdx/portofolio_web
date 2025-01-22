import { useState, useEffect } from "react";
import { Link } from 'react-scroll';

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true); 
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed w-full transition-all duration-300 ${
                isScrolled ? "bg-blue-950 shadow-lg bg-opacity-50 backdrop-blur-md" : "bg-transparent"
            } border-b border-gray-600 z-50`}
        >
            <nav className="navbar flex justify-between items-center py-6 text-lg leading-7
             font-semibold text-slate-700 dark:text-slate-200" role="navigation" aria-label="Main Navigation ">
                <div className="logo ms-24">
                    <h1 className="text-3xl font-bold">AthallahTS</h1>
                </div>
                <div className="nav-links me-24">
                <ul className="flex space-x-16">
                    <li>
                    <Link
                        to="Profile"
                        smooth={true}
                        duration={500}
                        className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
                    >
                        Home
                    </Link>
                    </li>
                    <li>
                    <Link
                        to="About"
                        smooth={true}
                        duration={500}
                        className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
                    >
                        About Me
                    </Link>
                    </li>
                    <li>
                    <Link
                        to="portfolio"
                        smooth={true}
                        duration={500}
                        className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
                    >
                        Portfolio
                    </Link>
                    </li>
                    <li>
                    <Link
                        to="services"
                        smooth={true}
                        duration={500}
                        className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
                    >
                        Services
                    </Link>
                    </li>
                    <li>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
                    >
                        Contact
                    </Link>
                    </li>
                </ul>
                </div>
            </nav>
        </header>
    );
}
