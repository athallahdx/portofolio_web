import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";

export default function Footer() {
    return (
        <footer className="bg-footer-color mb- text-white py-4 px-6 md:px-10 flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between items-center text-base md:text-lg font-medium">
            <span className="text-center md:text-left">
                © 2025 Athallah Tsany Satriyaji | All Rights Reserved
            </span>

            <div className="flex flex-row items-center space-x-4 space-y-2  md:space-y-0">
                <span className="text-sm md:text-base">Made with:</span>
                <div className="flex space-x-6 md:space-x-4 text-[25px] md:text-[30px]">
                    <SiVite />
                    <FaReact />
                    <RiTailwindCssFill />
                </div>
            </div>
        </footer>
    );
}
