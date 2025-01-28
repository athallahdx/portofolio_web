import dev1 from "../assets/dev1.jpg";
import data1 from "../assets/data1.png";
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import TechStackLogos from "./TechStackLogos";

  const AboutMe = () => {
    const [isDataAnalystVisible, setIsDataAnalystVisible] = useState(false);
    const [isWebDevVisible, setIsWebDevVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Initial state

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        const handleScroll = () => {
            if (isMobile) return; // Disable effect on mobile

            const dataAnalystElement = document.getElementById("slide-right");
            const webDevElement = document.getElementById("slide-left");

            if (dataAnalystElement) {
                const rect = dataAnalystElement.getBoundingClientRect();
                setIsDataAnalystVisible(rect.top <= window.innerHeight * 0.9 && rect.bottom >= 0);
            }

            if (webDevElement) {
                const rect = webDevElement.getBoundingClientRect();
                setIsWebDevVisible(rect.top <= window.innerHeight * 0.9 && rect.bottom >= 0);
            }
        };

        window.addEventListener("resize", handleResize);
        if (!isMobile) window.addEventListener("scroll", handleScroll);

        if (!isMobile) handleScroll();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isMobile]);

    return (
        <>
            <div className="About-Me lg:max-w-screen mt-6 lg:mt-12 shadow-lg pb-8">
                <div className="flex text-left flex-col justify-center text-white items-center lg:max-w-[100vw]">
    
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="aboutme place-items-center pb-5"
                    >
                        <div className="border-container text-center border-b-2">
                            <p className="text-2xl xs:text-3xl lg:text-6xl font-bold pb-1"><span>About</span> <span className="text-amber-500">Me</span></p>
                        </div>
                        <p className="max-w-[93vw] text-sm xs:text-base lg:text-xl 2xl:text-2xl  text-center mt-4">
                            As a Junior Data Analyst specializing in Tableau, Excel, SQL, and Python, and a Full-Stack Web Developer proficient in React.js and Laravel, I bridge the gap between data-driven insights and robust web solutions. My expertise enables me to analyze complex datasets and develop dynamic web applications, ensuring seamless integration and optimal performance.
                        </p>
                    </motion.div>

                    <div className="logos flex space-x-8 lg:space-x-36 mt-5 mb-8 justify-center">
                        <TechStackLogos /> 
                    </div>

                    {/* Data Analyst Section - Slide from Right */}
                    <div 
                        id="slide-right"
                        className={`dataanalystw-fit rounded-xl md:mt-5 flex flex-col items-center lg:items-start lg:flex-row h-auto justify-center shadow-2xl border border-gray-800 max-w-[90vw] transition-transform duration-700 ease-out ${
                            isDataAnalystVisible ? 'lg:translate-x-0 lg:opacity-100' : 'lg:translate-x-[100vw] lg:opacity-0'
                        }`}
                    >
                        <div className="picture1 w-full lg:w-auto shrink-0 lg:max-w-lg">
                            <img src={data1} className="w-[25rem]  object-cover h-auto rounded-t-xl lg:rounded-none lg:h-full lg:w-auto" alt="" />
                        </div>
                        <div className="desc1 ms-5 pb-5 md:pb-0 pe-4 lg:pe-12">
                            <p className="text-lg md:text-xl py-2 text-center lg:text-left 2xl:text-3xl font-bold lg:mb-2 2xl:mb-3">Data Analysis Expertise</p>

                            <ul className="list-disc list-outside text-sm xs:text-base md:text-lg 2xl:text-[22px] 2xl:space-y-3 space-y-1 pl-5">
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
                        className={`webdev w-fit rounded-xl mt-5 flex flex-col-reverse items-center lg:items-start lg:flex-row h-auto justify-center shadow-2xl border border-gray-800 max-w-[90vw] transition-transform duration-700 ease-out ${
                            isWebDevVisible ? 'lg:translate-x-0 lg:opacity-100' : 'lg:-translate-x-[100vw] lg:opacity-0'
                        }`}
                    >
                        <div className="desc1 ms-5 pb-5 md:pb-0 pe-4 lg:pe-12">
                            <p className="text-lg md:text-xl py-2 text-center lg:text-left 2xl:text-3xl font-bold lg:mb-2 2xl:mb-3">Web Development Skills</p>

                            <ul className="list-disc list-outside text-sm xs:text-base md:text-lg 2xl:text-[22px] space-y-1 2xl:space-y-3 pl-5">
                                <li><span className="font-medium">React.js: </span> Develop dynamic and responsive user interfaces with React.js, ensuring a seamless user experience.</li>
                                <li><span className="font-medium">Laravel: </span> Build robust back-end systems using Laravel, focusing on scalability and security.</li>
                                <li><span className="font-medium">Version Control (Git): </span> Experienced in using Git for version control, facilitating collaboration and code management.</li>
                                <li><span className="font-medium">RESTful APIs: </span> Skilled in designing and consuming RESTful APIs to enable communication between front-end and back-end systems.</li>
                            </ul>
                        </div>
                        <div className="picture1 w-full lg:w-auto lg:max-w-lg">
                            <img src={dev1} className="w-[25rem] h-auto rounded-t-xl lg:rounded-none lg:h-full lg:w-auto" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMe;
