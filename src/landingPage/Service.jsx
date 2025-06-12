import { motion } from 'framer-motion'
import { FaLinkedin } from "react-icons/fa"
import { SiGmail } from "react-icons/si"

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

export default function Service() {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 to-slate-900/80 -z-10" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />

            <div className="max-w-5xl mx-auto">
                {/* Title */}
                <motion.div
                    variants={fadeInUp}
                    className="text-center mb-12"
                >
                    <h2 className="inline-block text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                        Need My <span className="text-amber-500 relative">
              Service?
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-amber-500/50 rounded-full"></span>
            </span>
                    </h2>
                </motion.div>

                {/* Description */}
                <motion.div
                    variants={fadeInUp}
                    className="max-w-3xl mx-auto text-center mb-12"
                >
                    <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
                        I specialize in <span className="text-blue-400 font-medium">Data Analytics</span> using Tableau, Excel, SQL, and Python, and <span className="text-purple-400 font-medium">Full-Stack Web Development</span> with React.js and Laravel.
                        Whether you need a dynamic web application or insights from complex data, I'm here to help.
                    </p>
                    <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300">
                        Feel free to reach out through my contacts below.
                    </p>
                </motion.div>

                {/* Contact Buttons */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
                >
                    <motion.a
                        variants={fadeInUp}
                        href="https://www.linkedin.com/in/athallah-tsany-satriyaji-635630222/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaLinkedin className="text-2xl text-white" />
                        <span className="text-white font-semibold">Connect on LinkedIn</span>
                    </motion.a>

                    <motion.a
                        variants={fadeInUp}
                        href="mailto:athallahgamer4@gmail.com"
                        className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/20"
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <SiGmail className="text-2xl text-white" />
                        <span className="text-white font-semibold">Email Me</span>
                    </motion.a>
                </motion.div>

                {/* Decorative Elements */}
                <div className="hidden sm:block absolute top-1/4 left-8 w-20 h-20 border-2 border-amber-500/20 rounded-full"></div>
                <div className="hidden sm:block absolute bottom-1/4 right-8 w-12 h-12 border-2 border-blue-500/20 rounded-full"></div>
            </div>
        </motion.div>
    )
}
