"use client"

import { FaReact, FaLaravel, FaPython, FaFileExcel } from "react-icons/fa"
import { IoLogoTableau } from "react-icons/io5"
import { PiFileSqlDuotone } from "react-icons/pi"
import { motion } from "framer-motion"

const iconVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
}

const TechStackLogos = () => {
    const icons = [
        { Icon: FaReact, color: "text-blue-400", name: "React" },
        { Icon: FaLaravel, color: "text-red-500", name: "Laravel" },
        { Icon: IoLogoTableau, color: "text-blue-600", name: "Tableau" },
        { Icon: FaPython, color: "text-yellow-500", name: "Python" },
        { Icon: FaFileExcel, color: "text-green-500", name: "Excel" },
        { Icon: PiFileSqlDuotone, color: "text-amber-500", name: "SQL" },
    ]

    return (
        <>
            {icons.map(({ Icon, color, name }, index) => (
                <motion.div
                    key={name}
                    custom={index}
                    variants={iconVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-2"
                >
                    <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }} className="relative group">
                        <div className="absolute inset-0 rounded-full bg-white/5 blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <Icon
                            className={`text-3xl sm:text-4xl md:text-5xl ${color} transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]`}
                        />
                    </motion.div>
                    <span className="text-xs text-slate-400 font-medium">{name}</span>
                </motion.div>
            ))}
        </>
    )
}

export default TechStackLogos
