import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import TechStackLogos from "./TechStackLogos"
import dev1 from "../assets/dev1.jpg"
import data1 from "../assets/data1.png"

const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1 }
    }
}

const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
}

const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
}

const slideUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
}

export default function AboutMe() {
    // Using react-intersection-observer for better scroll animations
    const [dataAnalystRef, dataAnalystInView] = useInView({ threshold: 0.3, triggerOnce: true })
    const [webDevRef, webDevInView] = useInView({ threshold: 0.3, triggerOnce: true })

    const dataAnalystControls = useAnimation()
    const webDevControls = useAnimation()

    useEffect(() => {
        if (dataAnalystInView) {
            dataAnalystControls.start("visible")
        }

        if (webDevInView) {
            webDevControls.start("visible")
        }
    }, [dataAnalystInView, webDevInView, dataAnalystControls, webDevControls])

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 to-slate-900/80 -z-10" />
            <div className="absolute top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
                    className="text-center mb-12"
                >
                    <motion.h2
                        variants={slideUp}
                        className="inline-block text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
                    >
                        About <span className="text-amber-500 relative">
              Me
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-amber-500/50 rounded-full"></span>
            </span>
                    </motion.h2>

                    <motion.p
                        variants={slideUp}
                        className="max-w-3xl mx-auto mt-6 text-base sm:text-lg text-slate-300"
                    >
                        As a Junior Data Analyst specializing in Tableau, Excel, SQL, and Python, and a Full-Stack Web Developer proficient in React.js and Laravel, I bridge the gap between data-driven insights and robust web solutions. My expertise enables me to analyze complex datasets and develop dynamic web applications, ensuring seamless integration and optimal performance.
                    </motion.p>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                    className="flex justify-center mb-16"
                >
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 sm:gap-12">
                        <TechStackLogos />
                    </div>
                </motion.div>

                {/* Data Analysis Expertise */}
                <motion.div
                    ref={dataAnalystRef}
                    initial="hidden"
                    animate={dataAnalystControls}
                    variants={slideInRight}
                    className="mb-16"
                >
                    <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden shadow-xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="order-2 lg:order-1 p-6 sm:p-8">
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                                    Data Analysis Expertise
                                </h3>

                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    </span>
                                        <div>
                                            <span className="font-semibold text-blue-400">Tableau:</span>
                                            <p className="text-slate-300">Proficient in creating interactive visualizations, dashboards, and infographics to present data insights effectively.</p>
                                        </div>
                                    </li>

                                    <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    </span>
                                        <div>
                                            <span className="font-semibold text-green-400">Excel:</span>
                                            <p className="text-slate-300">Proficient in creating interactive dashboards and visualizations to present data insights effectively.</p>
                                        </div>
                                    </li>

                                    <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center mt-1">
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    </span>
                                        <div>
                                            <span className="font-semibold text-amber-400">SQL:</span>
                                            <p className="text-slate-300">Experienced in writing complex queries to extract, manipulate, and analyze data from relational databases.</p>
                                        </div>
                                    </li>

                                    <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center mt-1">
                      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    </span>
                                        <div>
                                            <span className="font-semibold text-purple-400">Python:</span>
                                            <p className="text-slate-300">Utilize Python for data cleaning, statistical analysis, and implementing machine learning algorithms.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="order-1 lg:order-2 h-64 sm:h-80 lg:h-auto">
                                <img
                                    src={data1 || "/placeholder.svg"}
                                    alt="Data Analysis"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Web Development Skills */}
                <motion.div
                    ref={webDevRef}
                    initial="hidden"
                    animate={webDevControls}
                    variants={slideInLeft}
                >
                    <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden shadow-xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="h-64 sm:h-80 lg:h-auto">
                                <img
                                    src={dev1 || "/placeholder.svg"}
                                    alt="Web Development"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-6 sm:p-8">
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                                    Web Development Skills
                                </h3>

                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    </span>
                                        <div>
                                            <span className="font-semibold text-blue-400">React.js:</span>
                                            <p className="text-slate-300">Develop dynamic and responsive user interfaces with React.js, ensuring a seamless user experience.</p>
                                        </div>
                                    </li>

                                    <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </span>
                                        <div>
                                            <span className="font-semibold text-red-400">Laravel:</span>
                                            <p className="text-slate-300">Build robust back-end systems using Laravel, focusing on scalability and security.</p>
                                        </div>
                                    </li>

                                    <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-500/20 flex items-center justify-center mt-1">
                      <span className="w-2 h-2 rounded-full bg-slate-500"></span>
                    </span>
                                        <div>
                                            <span className="font-semibold text-slate-400">Version Control (Git):</span>
                                            <p className="text-slate-300">Experienced in using Git for version control, facilitating collaboration and code management.</p>
                                        </div>
                                    </li>

                                    <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    </span>
                                        <div>
                                            <span className="font-semibold text-green-400">RESTful APIs:</span>
                                            <p className="text-slate-300">Skilled in designing and consuming RESTful APIs to enable communication between front-end and back-end systems.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}