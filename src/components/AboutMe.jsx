import dev1 from "../assets/dev1.jpg";
import data1 from "../assets/data1.png";
import { FaReact, FaLaravel, FaPython, FaFileExcel } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { IoLogoTableau } from 'react-icons/io5';
import { PiFileSqlDuotone } from 'react-icons/pi';
import { useEffect, useState } from "react";

const AboutMe = () => {
    const [isDataAnalystVisible, setIsDataAnalystVisible] = useState(false);
    const [isWebDevVisible, setIsWebDevVisible] = useState(false);

    
    useEffect(() => {
        const handleScroll = () => {
            const dataAnalystElement = document.getElementById('slide-right');
            const webDevElement = document.getElementById('slide-left');

            if (dataAnalystElement) {
                const rect = dataAnalystElement.getBoundingClientRect();
                const isVisible = rect.top <= window.innerHeight * 0.9 && rect.bottom >= 0;
                setIsDataAnalystVisible(isVisible);
            }

            if (webDevElement) {
                const rect = webDevElement.getBoundingClientRect();
                const isVisible = rect.top <= window.innerHeight * 0.9 && rect.bottom >= 0;
                setIsWebDevVisible(isVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger once on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="About-Me w-screen mt-12 shadow-lg pb-8">
                <div className="text-left justify-items-center text-white">
                    <div className="flex flex-col lg:max-w-[80vw]">

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="aboutme place-items-center pb-5"
                        >
                            <div className="border-container text-center border-b-2">
                                <p className="text-6xl font-bold pb-1"><span>About</span> <span className="text-amber-500">Me</span></p>
                            </div>
                            <p className="text-xl 2xl:text-2xl  text-center mt-4">
                                As a Junior Data Analyst specializing in Tableau, Excel, SQL, and Python, and a Full-Stack Web Developer proficient in React.js and Laravel, I bridge the gap between data-driven insights and robust web solutions. My expertise enables me to analyze complex datasets and develop dynamic web applications, ensuring seamless integration and optimal performance.
                            </p>
                        </motion.div>

                        <div className="logos flex space-x-36 mt-5 mb-8 justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <FaReact size={50} />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <FaLaravel size={50} />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <IoLogoTableau size={50} />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <FaPython size={50} />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <FaFileExcel size={50} />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <PiFileSqlDuotone size={50} />
                            </motion.div>
                            </div>


                        {/* Data Analyst Section - Slide from Right */}
                        <div 
                            id="slide-right"
                            className={`dataanalyst flex justify-center shadow-2xl border border-gray-800 transition-transform duration-700 ease-out ${
                                isDataAnalystVisible ? 'translate-x-0 opacity-100' : 'translate-x-[100vw] opacity-0'
                            }`}
                        >
                            <div className="picture1 max-w-lg">
                                <img src={data1} alt="" />
                            </div>
                            <div className="desc1 ms-5 pe-12">
                                <p className="text-xl font-semibold mt-3 mb-2">Data Analysis Expertise:</p>
                                <ul className="list-disc list-outside text-lg space-y-1 pl-5">
                                    <li> <span className="font-medium">Tableau: </span> Proficient in creating interactive visualizations, dashboard, and infographics to present data insights effectively.</li>
                                    <li> <span className="font-medium">Excel: </span> Proficient in creating interactive dashboards and visualizations to present data insights effectively.</li>
                                    <li> <span className="font-medium">SQL: </span> Experienced in writing complex queries to extract, manipulate, and analyze data from relational databases.</li>
                                    <li> <span className="font-medium">Python: </span> Utilize Python for data cleaning, statistical analysis, and implementing machine learning algorithms.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Web Development Section - Slide from Left */}
                        <div 
                            id="slide-left"
                            className={`webdev mt-5 flex h-auto justify-center shadow-2xl border border-gray-800 transition-transform duration-700 ease-out ${
                                isWebDevVisible ? 'translate-x-0 opacity-100' : '-translate-x-[100vw] opacity-0'
                            }`}
                        >
                            <div className="desc1 ms-5 pe-12">
                                <p className="text-xl font-semibold mt-3 mb-2">Web Development Skills:</p>
                                <ul className="list-disc list-outside text-lg space-y-1 pl-5">
                                    <li><span className="font-medium">React.js: </span> Develop dynamic and responsive user interfaces with React.js, ensuring a seamless user experience.</li>
                                    <li><span className="font-medium">Laravel: </span> Build robust back-end systems using Laravel, focusing on scalability and security.</li>
                                    <li><span className="font-medium">Version Control (Git): </span> Experienced in using Git for version control, facilitating collaboration and code management.</li>
                                    <li><span className="font-medium">RESTful APIs: </span> Skilled in designing and consuming RESTful APIs to enable communication between front-end and back-end systems.</li>
                                </ul>
                            </div>
                            <div className="picture1 max-w-lg">
                                <img src={dev1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMe;
