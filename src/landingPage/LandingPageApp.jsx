"use client"

import { useEffect } from "react"
import AboutMe from "./AboutMe.jsx"
import Profile from "./profile"
import Service from "./service"
import LatestWork from "./LatestWork.jsx"
import "../css/styles.css"

export default function LandingPageApp() {
    // Smooth scroll implementation
    useEffect(() => {
        const handleHashChange = () => {
            const { hash } = window.location
            if (hash) {
                const id = hash.replace("#", "")
                const element = document.getElementById(id)
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                }
            }
        }

        // Handle initial hash on load
        if (window.location.hash) {
            handleHashChange()
        }

        window.addEventListener("hashchange", handleHashChange)
        return () => window.removeEventListener("hashchange", handleHashChange)
    }, [])

    return (
        <main className="text-white overflow-hidden">
            <section id="Profile" className="scroll-mt-20 lg:scroll-mt-24">
                <Profile />
            </section>

            <section id="About" className="scroll-mt-20 lg:scroll-mt-24">
                <AboutMe />
            </section>

            <section id="Portfolio" className="scroll-mt-20 lg:scroll-mt-24">
                <LatestWork />
            </section>

            <section id="Service" className="scroll-mt-20 lg:scroll-mt-24">
                <Service />
            </section>
        </main>
    )
}
