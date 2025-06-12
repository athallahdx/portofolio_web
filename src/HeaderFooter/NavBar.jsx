"use client"

import { useLocation, useNavigate } from "react-router"
import { useState, useEffect, useCallback } from "react"
import { Link as ScrollLink } from "react-scroll"
import { Link } from "react-router"
import { X, Menu } from "lucide-react"

const NavLinks = ({ onLinkClick, isMobile = false }) => {
    const location = useLocation()
    const navigate = useNavigate()

    const handleScrollNav = useCallback(
        (section) => {
            if (location.pathname !== "/") {
                navigate("/")
                setTimeout(() => {
                    document.getElementById(section)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    })
                }, 100)
            } else {
                document.getElementById(section)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                })
            }

            // Close mobile menu after navigation
            if (isMobile && onLinkClick) {
                onLinkClick()
            }
        },
        [location.pathname, navigate, isMobile, onLinkClick],
    )

    const linkClasses = `
    relative cursor-pointer transition-all duration-300 ease-in-out
    hover:text-blue-300 active:text-blue-400
    text-base md:text-lg lg:text-base xl:text-lg
    font-medium tracking-wide
    before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 
    before:bg-gradient-to-r before:from-blue-400 before:to-purple-400
    before:transition-all before:duration-300 before:ease-in-out
    hover:before:w-full
    ${isMobile ? "py-3 px-4 rounded-lg hover:bg-white/10" : ""}
  `

    return (
        <div className={`flex text-white text-2xl ${isMobile ? "flex-col space-y-2" : "flex-row space-x-8 xl:space-x-12"}`}>
            <ScrollLink
                to="Profile"
                smooth={true}
                duration={500}
                className={linkClasses}
                onClick={() => isMobile && onLinkClick && onLinkClick()}
            >
                Home
            </ScrollLink>

            <button onClick={() => handleScrollNav("About")} className={linkClasses}>
                About Me
            </button>

            <Link to="/portofolio" className={linkClasses} onClick={() => isMobile && onLinkClick && onLinkClick()}>
                Portfolio
            </Link>

            <button onClick={() => handleScrollNav("Service")} className={linkClasses}>
                Services
            </button>
        </div>
    )
}

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    // Improved scroll and resize handlers with debouncing
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024)
        checkMobile()

        let scrollTimeout
        let resizeTimeout

        const handleScroll = () => {
            clearTimeout(scrollTimeout)
            scrollTimeout = setTimeout(() => {
                setIsScrolled(window.scrollY > 20)
            }, 10)
        }

        const handleResize = () => {
            clearTimeout(resizeTimeout)
            resizeTimeout = setTimeout(() => {
                checkMobile()
                if (window.innerWidth >= 1024) {
                    setIsMenuOpen(false)
                }
            }, 100)
        }

        window.addEventListener("resize", handleResize)
        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("scroll", handleScroll)
            clearTimeout(scrollTimeout)
            clearTimeout(resizeTimeout)
        }
    }, [])

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest("nav")) {
                setIsMenuOpen(false)
            }
        }

        if (isMenuOpen) {
            document.addEventListener("click", handleClickOutside)
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }

        return () => {
            document.removeEventListener("click", handleClickOutside)
            document.body.style.overflow = "unset"
        }
    }, [isMenuOpen])

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const closeMenu = () => setIsMenuOpen(false)

    const headerClasses = `
    fixed top-0 w-full z-50 transition-all duration-500 ease-in-out
    ${
        isScrolled || isMobile
            ? "bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-slate-700/50"
            : "bg-transparent border-b border-slate-600/30"
    }
  `

    return (
        <>
            <header className={headerClasses}>
                <nav className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12" role="navigation" aria-label="Main Navigation">
                    <div className="flex justify-between items-center py-4 lg:py-6">
                        {/* Logo */}
                        <div className="logo">
                            <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
                                AthallahTS
                            </h1>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center">
                            <NavLinks />
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <Menu className="w-6 h-6 sm:w-7 sm:h-7" />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu Overlay */}
                <div
                    className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
                        isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                    onClick={closeMenu}
                />

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden fixed top-full left-0 right-0 bg-slate-900/98 backdrop-blur-xl border-b border-slate-700/50 transform transition-all duration-300 ease-in-out ${
                        isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
                    }`}
                >
                    <div className="container mx-auto px-4 sm:px-6 py-6">
                        <NavLinks onLinkClick={closeMenu} isMobile={true} />
                    </div>
                </div>
            </header>
        </>
    )
}
