import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { FiExternalLink, FiArrowRight } from "react-icons/fi"
import { motion } from 'framer-motion'

// Import images
import webproject1 from '../assets/boys.png'
import webproject3 from '../assets/ilabs.png'
import dataproject from '../assets/dataDashboard.png'

const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

export default function LatestWork() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640)
        }

        // Initial check
        checkMobile()

        // Add event listener
        window.addEventListener('resize', checkMobile)

        // Cleanup
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const projects = [
        {
            img: webproject3,
            title: "I-Labs",
            description: "I-Labs is a practical lab assignment platform built with native PHP MVC, MySQL, and styled with Tailwind CSS. It allows students to submit assignments and Lab Assistant to manage tasks and grades.",
            link: "/project2",
            tags: ["PHP", "MySQL", "Tailwind CSS"]
        },
        {
            img: webproject1,
            title: "The Boys",
            description: "Create a simple backend system using native PHP MVC and MySQL for a satire website inspired by the Amazon Prime tv series \"The Boys\"",
            link: "/project1",
            tags: ["PHP", "MySQL", "MVC"]
        },
        {
            img: dataproject,
            title: "PT. Expertindo Dashboard",
            description: "Developed a data dashboard for PT. Expertindo, using Tableau to visualize website traffic and perform page clustering for better insights.",
            link: "/data-dashboard",
            tags: ["Tableau", "Data Analysis", "Dashboard"]
        },
    ]

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 to-slate-900/80 -z-10" />
            <div className="absolute top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <motion.div
                    variants={fadeInUp}
                    className="text-center mb-12"
                >
                    <h2 className="inline-block text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                        Latest <span className="text-amber-500 relative">
              Work
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-amber-500/50 rounded-full"></span>
            </span>
                    </h2>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                >
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                            isMobile={isMobile}
                        />
                    ))}
                </motion.div>

                {/* View All Button */}
                <motion.div
                    variants={fadeInUp}
                    className="flex justify-center"
                >
                    <Link to="/portofolio">
                        <motion.button
                            className="group flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View All Portfolio
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </motion.section>
    )
}

function ProjectCard({ project, index, isMobile }) {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.1
            }
        }
    }

    const CardContent = (
        <motion.div
            variants={cardVariants}
            className="group h-full overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700/50 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500"
        >
            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                    src={project.img || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="p-5">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-medium px-2 py-1 rounded-full bg-slate-700/50 text-slate-300">
              {tag}
            </span>
                    ))}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors duration-300">
                    {project.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 mb-4 line-clamp-3">
                    {project.description}
                </p>

                <div className="flex justify-end">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link to={project.link} className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/20 text-amber-500 hover:bg-amber-500 hover:text-white transition-all duration-300">
                            <FiExternalLink className="text-lg" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )

    return isMobile ? (
        <Link to="/portofolio" className="block h-full">
            {CardContent}
        </Link>
    ) : (
        <div className="h-full">
            {CardContent}
        </div>
    )
}
