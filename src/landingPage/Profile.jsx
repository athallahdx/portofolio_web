"use client"

import { TypeAnimation } from "react-type-animation"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { HiOutlineDocumentDownload } from "react-icons/hi"
import { motion } from "framer-motion"
import profil from "../assets/new_profile.png"

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
}

const slideIn = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function Profile() {
  return (
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 to-slate-900/80 -z-10" />
        <div className="absolute top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Text Content */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
                className="order-2 lg:order-1 text-center lg:text-left"
            >
              <motion.p variants={slideIn} className="text-xl sm:text-2xl text-slate-300 mb-2">
                Hello, It's Me
              </motion.p>

              <motion.h1
                  variants={slideIn}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              >
                Athallah Tsany Satriyaji
              </motion.h1>

              <motion.div variants={slideIn} className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-6">
                And I'm a{" "}
                <TypeAnimation
                    sequence={["Data Analyst", 1000, "Web Developer", 1000]}
                    speed={40}
                    wrapper="span"
                    repeat={Number.POSITIVE_INFINITY}
                    className="text-amber-500 font-medium"
                />
              </motion.div>

              <motion.p
                  variants={slideIn}
                  className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              >
                I'm a Junior Data Analyst specializing in Tableau, Excel, SQL, and Python, and a Full-Stack Web Developer
                skilled in React.js and Laravel. I analyze complex data and build dynamic web applications, ensuring
                seamless integration and performance.
              </motion.p>

              {/* Social Links */}
              <motion.div variants={staggerContainer} className="flex justify-center lg:justify-start space-x-6 mb-8">
                <motion.a
                    variants={slideUp}
                    href="https://github.com/athallahdx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/20">
                    <FaGithub className="text-2xl" />
                  </div>
                </motion.a>

                <motion.a
                    variants={slideUp}
                    href="https://www.linkedin.com/in/athallah-tsany-satriyaji-635630222/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                    <FaLinkedin className="text-2xl" />
                  </div>
                </motion.a>

                <motion.a
                    variants={slideUp}
                    href="https://www.instagram.com/ath_tsany"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-pink-500/20">
                    <FaInstagram className="text-2xl" />
                  </div>
                </motion.a>
              </motion.div>

              {/* Download CV Button */}
              <motion.div variants={slideUp}>
                <a href="#" className="inline-block">
                  <motion.button
                      className="group flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                  >
                    <HiOutlineDocumentDownload className="text-xl" />
                    Download CV
                  </motion.button>
                </a>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                className="order-1 lg:order-2 flex justify-center"
            >
              <motion.img
                  src={profil || "/placeholder.svg"}
                  alt="Athallah Tsany Satriyaji"
                  className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain drop-shadow-2xl"
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, 1, -1, 0],
                    transition: {
                      scale: { duration: 0.3 },
                      rotate: { duration: 0.5, repeat: 2 },
                    },
                  }}
              />
            </motion.div>
          </div>
        </div>
      </div>
  )
}
