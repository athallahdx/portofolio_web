import NavBar from './NavBar';
import { GrLinkPrevious } from "react-icons/gr";

export default function Portofolio() {
    return (
        <div id='Portofolio' className='flex flex-col bg-custom-gradient min-h-screen'>
            {/* Navigation Bar */}
            <NavBar />

            {/* Coming Soon Section */}
            <div className='flex flex-col justify-center items-center w-full min-h-screen text-center px-4'>
                <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold border-b-4 pb-2'>
                    <span>Coming </span>
                    <span className='text-amber-500'>Soon</span>
                </p>

                {/* Back to Home */}
                <div className='mt-6 flex items-center gap-2 text-lg sm:text-xl md:text-2xl text-gray-700 hover:text-gray-900 cursor-pointer'>
                    <GrLinkPrevious className='text-2xl sm:text-3xl' />
                    <span>Back to Home</span>
                </div>
            </div>
        </div>
    );
}
