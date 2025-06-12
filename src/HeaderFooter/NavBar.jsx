"use client"

import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from 'lucide-react'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()
    const menuRef = useRef(null)
    const buttonRef = useRef(null)

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false)
    }, [location])

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Only close if menu is open and click is outside both menu and button
            if (
                isOpen &&
                menuRef.current &&
                buttonRef.current &&
                !menuRef.current.contains(event.target) &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [isOpen])

    const navItems = [
        { name: "Home", href: "/#Profile" },
        { name: "About", href: "/#About" },
        { name: "Portfolio", href: "/portofolio" },
        { name: "Service", href: "/#Service" },
    ]

    const handleNavClick = (href) => {
        setIsOpen(false)

        if (href.startsWith("/#")) {
            // Handle hash navigation
            if (location.pathname !== "/") {
                // If not on home page, navigate to home first
                window.location.href = href
            } else {
                // If on home page, smooth scroll to section
                const id = href.replace("/#", "")
                const element = document.getElementById(id)
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                }
            }
        }
    }

    const toggleMenu = (e) => {
        e.stopPropagation()
        setIsOpen(!isOpen)
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50" : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-2xl sm:text-3xl font-bold text-white"
                        >
                            <span className="text-amber-500">A</span>thallah
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <motion.div key={item.name} whileHover={{ y: -2 }}>
                                    {item.href.startsWith("/#") ? (
                                        <button
                                            onClick={() => handleNavClick(item.href)}
                                            className="text-slate-300 hover:text-amber-500 px-4 py-3 text-lg font-semibold transition-colors duration-200 relative group"
                                        >
                                            {item.name}
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                                        </button>
                                    ) : (
                                        <Link
                                            to={item.href}
                                            className="text-slate-300 hover:text-amber-500 px-4 py-3 text-lg font-semibold transition-colors duration-200 relative group"
                                        >
                                            {item.name}
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                                        </Link>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden relative">
                        <motion.button
                            ref={buttonRef}
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-3 rounded-lg text-slate-300 hover:text-amber-500 hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500 transition-colors duration-200"
                            aria-expanded={isOpen}
                            aria-label="Toggle navigation menu"
                        >
                            {isOpen ? (
                                <X className="block h-7 w-7" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-7 w-7" aria-hidden="true" />
                            )}
                        </motion.button>

                        {/* Mobile Dropdown Menu */}
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    ref={menuRef}
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="absolute right-0 top-full mt-2 w-64 bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-xl overflow-hidden z-50"
                                >
                                    {/* Navigation Links */}
                                    <div className="py-2">
                                        {navItems.map((item, index) => (
                                            <motion.div
                                                key={item.name}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05, duration: 0.2 }}
                                            >
                                                {item.href.startsWith("/#") ? (
                                                    <button
                                                        onClick={() => handleNavClick(item.href)}
                                                        className="w-full text-left block px-6 py-4 text-lg font-semibold text-slate-300 hover:text-amber-500 hover:bg-slate-800/50 transition-all duration-200 border-b border-slate-700/30 last:border-b-0"
                                                    >
                                                        {item.name}
                                                    </button>
                                                ) : (
                                                    <Link
                                                        to={item.href}
                                                        className="block px-6 py-4 text-lg font-semibold text-slate-300 hover:text-amber-500 hover:bg-slate-800/50 transition-all duration-200 border-b border-slate-700/30 last:border-b-0"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Footer */}
                                    <div className="px-6 py-3 bg-slate-800/30 border-t border-slate-700/50">
                                        <p className="text-xs text-slate-400 text-center">© 2025 Athallah</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </motion.nav>
    )
}