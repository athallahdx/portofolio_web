import { GrLinkPrevious } from "react-icons/gr";
import { Link } from 'react-router';


export default function Portofolio() {
    return (
        <div className="flex flex-col justify-center items-center w-full min-h-[94vh] text-center text-white px-4">
            <p className="flex flex-col md:flex-row md:space-x-3 text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold border-b-4 pb-1 md:pb-3">
                <div>Coming</div>
                <div className="text-amber-500">Soon</div>
            </p>

            {/* Back to Home */}
            <Link to="/">
                <div className="mt-6 flex items-center gap-2 text-lg sm:text-xl md:text-2xl text-white hover:text-gray-200 cursor-pointer">
                        <GrLinkPrevious className="text-2xl sm:text-3xl" />
                        <span>Back to Home</span>
                </div>
            </Link>
        </div>
    );
}
