import { useState, useEffect } from "react";

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
                        <li><a href="#" className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white">Home</a></li>
                        <li><a href="#" className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white">About</a></li>
                        <li><a href="#" className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white">Portofolio</a></li>
                        <li><a href="#" className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white">Services</a></li>
                        <li><a href="#" className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
