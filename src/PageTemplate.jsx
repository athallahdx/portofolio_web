import { Outlet } from 'react-router'; // Correct import for Outlet
import NavBar from './HeaderFooter/NavBar';
import Footer from './HeaderFooter/Footer';

export default function PageTemplate() {
    return (
        <div className="flex flex-col bg-custom-gradient min-h-screen">
            <NavBar />
            <main>
                <Outlet /> {/* The Outlet renders child routes like LandingPageApp or Portofolio */}
            </main>
            <Footer />
        </div>
    );
}
