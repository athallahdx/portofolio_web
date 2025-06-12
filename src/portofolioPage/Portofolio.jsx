"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router"
import { ArrowLeft, Mail, Bell, Sparkles, Code, Palette, Database } from "lucide-react"

const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1 },
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

const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
    },
}

export default function Portfolio() {
    const [email, setEmail] = useState("")
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    // Countdown timer (set to 30 days from now)
    useEffect(() => {
        const targetDate = new Date()
        targetDate.setDate(targetDate.getDate() + 30)

        const timer = setInterval(() => {
            const now = new Date().getTime()
            const distance = targetDate.getTime() - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            setTimeLeft({ days, hours, minutes, seconds })

            if (distance < 0) {
                clearInterval(timer)
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
            }
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const handleSubscribe = (e) => {
        e.preventDefault()
        if (email) {
            setIsSubscribed(true)
            setEmail("")
            setTimeout(() => setIsSubscribed(false), 3000)
        }
    }

    const features = [
        {
            icon: Code,
            title: "Web Projects",
            description: "Full-stack applications built with modern technologies",
        },
        {
            icon: Database,
            title: "Data Analytics",
            description: "Interactive dashboards and data visualization projects",
        },
        {
            icon: Palette,
            title: "UI/UX Design",
            description: "Beautiful and functional user interface designs",
        },
    ]

    return (
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20 -z-10" />

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
            <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000" />
            <div className="absolute bottom-40 left-20 w-24 h-24 bg-amber-500/10 rounded-full blur-xl animate-pulse delay-2000" />
            <div className="absolute bottom-20 right-10 w-16 h-16 bg-green-500/10 rounded-full blur-xl animate-pulse delay-3000" />

            {/* Decorative Elements */}
            {/* Circles */}
            <div className="hidden sm:block absolute top-1/4 left-8 w-20 h-20 border-2 border-amber-500/20 rounded-full"></div>
            <div className="hidden sm:block absolute bottom-1/4 right-8 w-12 h-12 border-2 border-blue-500/20 rounded-full"></div>
            <div className="hidden sm:block absolute top-1/6 right-1/4 w-16 h-16 border-2 border-purple-500/20 rounded-full"></div>
            <div className="hidden sm:block absolute bottom-1/6 left-1/4 w-10 h-10 border-2 border-green-500/20 rounded-full"></div>
            <div className="hidden sm:block absolute top-1/2 left-12 w-8 h-8 border-2 border-teal-500/20 rounded-full"></div>
            <div className="hidden sm:block absolute bottom-1/2 right-12 w-14 h-14 border-2 border-cyan-500/20 rounded-full"></div>

            {/* Triangles */}
            <div className="hidden sm:block absolute top-1/3 right-16">
                <div className="w-0 h-0 border-l-[12px] border-l-transparent border-b-[18px] border-b-cyan-500/20 border-r-[12px] border-r-transparent"></div>
            </div>
            <div className="hidden sm:block absolute bottom-1/3 left-16 rotate-180">
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-b-[14px] border-b-pink-500/20 border-r-[8px] border-r-transparent"></div>
            </div>
            <div className="hidden sm:block absolute top-2/3 right-1/3 rotate-90">
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-b-[16px] border-b-indigo-500/20 border-r-[10px] border-r-transparent"></div>
            </div>
            <div className="hidden sm:block absolute bottom-2/3 left-1/3 rotate-45">
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-b-[10px] border-b-rose-500/20 border-r-[6px] border-r-transparent"></div>
            </div>

            {/* Rectangles/Squares */}
            <div className="hidden sm:block absolute top-1/5 right-1/5 w-12 h-8 border-2 border-rose-500/20 rotate-12"></div>
            <div className="hidden sm:block absolute bottom-1/5 left-1/5 w-8 h-8 border-2 border-emerald-500/20 rotate-45"></div>
            <div className="hidden sm:block absolute top-3/4 right-1/4 w-10 h-6 border-2 border-violet-500/20 -rotate-12"></div>
            <div className="hidden sm:block absolute bottom-3/4 left-1/3 w-6 h-10 border-2 border-orange-500/20 rotate-30"></div>
            <div className="hidden sm:block absolute top-1/2 right-1/6 w-14 h-10 border-2 border-lime-500/20 -rotate-15"></div>

            {/* X shapes */}
            <div className="hidden sm:block absolute top-1/4 right-1/3">
                <div className="relative w-8 h-8">
                    <div className="absolute w-full h-0.5 bg-lime-500/20 top-1/2 left-0 rotate-45"></div>
                    <div className="absolute w-full h-0.5 bg-lime-500/20 top-1/2 left-0 -rotate-45"></div>
                </div>
            </div>
            <div className="hidden sm:block absolute bottom-1/4 left-1/3">
                <div className="relative w-6 h-6">
                    <div className="absolute w-full h-0.5 bg-sky-500/20 top-1/2 left-0 rotate-45"></div>
                    <div className="absolute w-full h-0.5 bg-sky-500/20 top-1/2 left-0 -rotate-45"></div>
                </div>
            </div>
            <div className="hidden sm:block absolute top-1/2 right-1/5">
                <div className="relative w-10 h-10">
                    <div className="absolute w-full h-0.5 bg-fuchsia-500/20 top-1/2 left-0 rotate-45"></div>
                    <div className="absolute w-full h-0.5 bg-fuchsia-500/20 top-1/2 left-0 -rotate-45"></div>
                </div>
            </div>

            {/* Plus signs */}
            <div className="hidden sm:block absolute top-1/6 left-1/6">
                <div className="relative w-6 h-6">
                    <div className="absolute w-full h-0.5 bg-yellow-500/30 top-1/2 left-0"></div>
                    <div className="absolute w-0.5 h-full bg-yellow-500/30 top-0 left-1/2"></div>
                </div>
            </div>
            <div className="hidden sm:block absolute bottom-1/6 right-1/6">
                <div className="relative w-8 h-8">
                    <div className="absolute w-full h-0.5 bg-red-500/30 top-1/2 left-0"></div>
                    <div className="absolute w-0.5 h-full bg-red-500/30 top-0 left-1/2"></div>
                </div>
            </div>
            <div className="hidden sm:block absolute top-3/4 left-1/6">
                <div className="relative w-5 h-5">
                    <div className="absolute w-full h-0.5 bg-blue-500/30 top-1/2 left-0"></div>
                    <div className="absolute w-0.5 h-full bg-blue-500/30 top-0 left-1/2"></div>
                </div>
            </div>

            {/* Dots */}
            <div className="hidden sm:block absolute top-1/3 left-1/4 w-2 h-2 bg-blue-500/40 rounded-full"></div>
            <div className="hidden sm:block absolute top-2/3 right-1/4 w-3 h-3 bg-purple-500/40 rounded-full"></div>
            <div className="hidden sm:block absolute bottom-1/2 left-1/6 w-1 h-1 bg-green-500/40 rounded-full"></div>
            <div className="hidden sm:block absolute top-1/2 right-1/6 w-2 h-2 bg-amber-500/40 rounded-full"></div>
            <div className="hidden sm:block absolute bottom-1/3 right-1/6 w-2 h-2 bg-pink-500/40 rounded-full"></div>

            {/* Diamond shapes */}
            <div className="hidden sm:block absolute top-1/5 left-1/3 w-6 h-6 border-2 border-teal-500/20 rotate-45"></div>
            <div className="hidden sm:block absolute bottom-1/5 right-1/3 w-4 h-4 border-2 border-pink-500/20 rotate-45"></div>
            <div className="hidden sm:block absolute top-2/3 left-1/5 w-5 h-5 border-2 border-cyan-500/20 rotate-45"></div>

            {/* Geometric Shapes (Enhanced existing ones) */}
            <motion.div
                animate={floatingAnimation}
                className="absolute top-1/4 left-1/4 w-4 h-4 border-2 border-blue-400/30 rotate-45"
            />
            <motion.div
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
                className="absolute top-1/3 right-1/3 w-6 h-6 border-2 border-purple-400/30 rounded-full"
            />
            <motion.div
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
                className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-amber-400/20 rotate-12"
            />

            <div className="max-w-4xl w-full mx-auto text-center">
                <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-8">
                    {/* Main Title */}
                    <motion.div variants={slideUp} className="space-y-4">
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                            className="inline-block"
                        >
                            <Sparkles className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                        </motion.div>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
                Coming
              </span>
                            <br />
                            <span className="text-white">Soon</span>
                        </h1>

                        <p className="text-xl sm:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            I'm crafting something amazing for you. My portfolio is getting a major upgrade with exciting new projects
                            and features.
                        </p>
                    </motion.div>

                    {/* Countdown Timer */}
                    <motion.div variants={slideUp} className="py-8">
                        <h3 className="text-lg font-semibold text-slate-300 mb-6">Expected Launch</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto">
                            {[
                                { label: "Days", value: timeLeft.days },
                                { label: "Hours", value: timeLeft.hours },
                                { label: "Minutes", value: timeLeft.minutes },
                                { label: "Seconds", value: timeLeft.seconds },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: index * 0.1, type: "spring" }}
                                    className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 backdrop-blur-sm"
                                >
                                    <div className="text-2xl sm:text-3xl font-bold text-amber-500">
                                        {item.value.toString().padStart(2, "0")}
                                    </div>
                                    <div className="text-sm text-slate-400">{item.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Features Preview */}
                    <motion.div variants={slideUp} className="py-8">
                        <h3 className="text-2xl font-bold text-white mb-8">What's Coming</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300"
                                >
                                    <feature.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                                    <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                                    <p className="text-slate-300 text-sm">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Email Subscription */}
                    <motion.div variants={slideUp} className="py-8">
                        <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm max-w-md mx-auto">
                            <Bell className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Get Notified</h3>
                            <p className="text-slate-300 mb-6">Be the first to know when my portfolio goes live!</p>

                            {!isSubscribed ? (
                                <form onSubmit={handleSubscribe} className="space-y-4">
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                                    >
                                        Notify Me
                                    </motion.button>
                                </form>
                            ) : (
                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-center">
                                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}>
                                            ✓
                                        </motion.div>
                                    </div>
                                    <p className="text-green-400 font-semibold">Thanks! You'll be notified soon.</p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>

                    {/* Back to Home */}
                    <motion.div variants={slideUp}>
                        <Link to="/">
                            <motion.button
                                whileHover={{ scale: 1.05, x: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className="group flex items-center gap-3 mx-auto text-slate-300 hover:text-white transition-colors duration-300"
                            >
                                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                                <span className="text-lg font-medium">Back to Home</span>
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}