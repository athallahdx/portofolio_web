import { Outlet } from "react-router"
import NavBar from "./HeaderFooter/NavBar"
import Footer from "./HeaderFooter/Footer"

export default function PageTemplate() {
    return (
        <div className="flex flex-col bg-custom-gradient min-h-screen">
            <NavBar />
            <main className="pt-16 sm:pt-20 lg:pt-24">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
