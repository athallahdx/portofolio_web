import { motion } from 'framer-motion';
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Service() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="Latest-Work-Container lg:max-w-screen  text-white flex flex-col items-center justify-center py-6 space-y-3 md:space-y-4 lg:space-y-6"
        >
            {/* Title */}
            <div className="title text-center space-y-4">
                <p className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold pb-0 border-b-2 inline-block">
                    <span>Need My </span> 
                    <span className="text-amber-500">Service?</span>
                </p>
            </div>

            <div className="w-full lg:max-w-[80vw] text-center px-6 space-y-2 md:space-y-3 lg:space-y-4">
                <div className='text-sm xs:text-base md:text-xl 2xl:text-2xl'>    
                    <p>
                        I specialize in Data Analytics using Tableau, Excel, SQL, and Python, and Full-Stack Web Development with React.js and Laravel.
                        Whether you need a dynamic web application or insights from complex data, I&apos;m here to help.
                    </p>
                    <p className='mt-6'>Feel free to reach out through my contacts below.</p>
                </div>
            </div>

            <div className="flex flex-row space-x-6 text-white">
                <a
                    href="https://www.linkedin.com/in/athallah-tsany-satriyaji-635630222/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    <FaLinkedin className='text-[20px] sm:text-[30px]' />
                    <span className="text-lg font-semibold">LinkedIn</span>
                </a>

                <a
                    href="mailto:athallahgamer4@gmail.com" 
                    className="flex items-center space-x-2 bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition"
                >
                    <SiGmail className='text-[20px] sm:text-[30px]' />
                    <span className="text-lg font-semibold">Gmail</span>
                </a>
            </div>
        </motion.div>
    );
}
