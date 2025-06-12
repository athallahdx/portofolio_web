import { RiTailwindCssFill } from "react-icons/ri"
import { FaReact } from "react-icons/fa"
import { SiVite } from "react-icons/si"

export default function Footer() {
    return (
        <footer className="bg-custom-gradient border-t border-slate-700/30 text-white py-3 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                    {/* Copyright Section */}
                    <div className="text-center md:text-left">
                        <p className="font-medium text-sm sm:text-base opacity-90 tracking-wide">
                            © 2025 <span className="font-semibold">Athallah Tsany Satriyaji</span> | All Rights Reserved
                        </p>
                    </div>

                    {/* Tech Stack Section */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 sm:gap-4">
                        <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-slate-300">Built with:</span>
                        <div className="flex items-center gap-5 sm:gap-6">
                            {/* Vite */}
                            <div className="group flex flex-col items-center">
                                <SiVite className="text-2xl sm:text-3xl text-yellow-200 group-hover:text-yellow-300 transition-all duration-300 transform group-hover:scale-110" />
                                <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                  Vite
                </span>
                            </div>

                            {/* React */}
                            <div className="group flex flex-col items-center">
                                <FaReact className="text-2xl sm:text-3xl text-blue-400 group-hover:text-blue-300 transition-all duration-300 transform group-hover:scale-110 animate-[spin_8s_linear_infinite]" />
                                <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                  React
                </span>
                            </div>

                            {/* Tailwind */}
                            <div className="group flex flex-col items-center">
                                <RiTailwindCssFill className="text-2xl sm:text-3xl text-cyan-400 group-hover:text-cyan-300 transition-all duration-300 transform group-hover:scale-110" />
                                <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                  Tailwind
                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
