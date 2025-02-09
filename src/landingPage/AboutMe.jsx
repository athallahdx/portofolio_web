import dev1 from "../assets/dev1.jpg";
import data1 from "../assets/data1.png";
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import TechStackLogos from "./TechStackLogos";

  export default function AboutMe()  {
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
            <div className="About-Me lg:max-w-screen mt-6 lg:mt-8 pb-8">
                <div className="flex text-left flex-col justify-center text-white items-center lg:max-w-[100vw]">
    
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="aboutme place-items-center pb-5"
                    >
                        <div className="border-container text-center border-b-2">
                            <p className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold pb-0 border-b-2 inline-block">
                                <span>About</span> 
                                <span className="text-amber-500"> Me</span>
                            </p>
                        </div>
                        <p className="hidden lg:block max-w-[93vw] text-sm xs:text-base md:text-xl mdp:text-2xl 2xl:text-2xl  text-center mt-4">
                            As a Junior Data Analyst specializing in Tableau, Excel, SQL, and Python, and a Full-Stack Web Developer proficient in React.js and Laravel, I bridge the gap between data-driven insights and robust web solutions. My expertise enables me to analyze complex datasets and develop dynamic web applications, ensuring seamless integration and optimal performance.
                        </p>
                        <p className="lg:hidden max-w-[93vw] text-sm xs:text-base md:text-xl mdp:text-2xl 2xl:text-2xl  text-center mt-4">
                            As a Junior Data Analyst and a Full-Stack Web Developer, I bridge the gap between data-driven insights and robust web solutions. My expertise enables me to analyze complex datasets and develop dynamic web applications, ensuring seamless integration and optimal performance.
                        </p>
                    </motion.div>

                    <div className="logos flex space-x-8 sm:space-x-16 lg:space-x-36 mt-3 mb-3 sm:mb-0 lg:mb-4 justify-center items-center">
                        <TechStackLogos /> 
                    </div>


                    <div 
                        id="slide-right"
                        className={`dataanalystw-fit flex flex-col lg:flex-row justify-center items-center lg:items-start  w-fit rounded-xl mt-5 sm:pb-5 lg:pb-0 2xl:pb-0 h-auto shadow-all-sides-lg border border-gray-800 max-w-[90vw] transition-transform duration-700 ease-out ${
                            isDataAnalystVisible ? 'lg:translate-x-0 lg:opacity-100' : 'lg:translate-x-[100vw] lg:opacity-0'
                        }`}
                    >
                        <div className="picture1 w-full justify-items-center sm:pt-3 lg:pt-0 lg:w-auto lg:max-w-lg">
                            <img src={data1} className="w-[25rem] h-auto rounded-t-xl sm:mt-3 lg:mt-0 sm:rounded-2xl sm:object-cover object-center lg:rounded-none lg:h-[300px] lg:w-auto xl:h-[335px]" alt="" />
                        </div>
                        <div className="desc1 ms-5 pb-5 md:pb-0 pe-4 lg:pe-12 xl:pb-5">
                            <p className="text-xl md:text-xl py-2 text-center md:max-lg:text-3xl lg:text-left xl:text-3xl font-bold mdp:max-lg:mb-1 md:py-3 mdp:max-lg:mt-1 lg:mb-2  2xl:mb-3">Data Analysis Expertise</p>

                            <ul className="list-disc list-outside text-sm xs:text-base md:text-xl mdp:text-2xl xl:text-xl 2xl:text-[22px] 2xl:space-y-3 space-y-1 mdp:max-lg:space-y-2 pl-5">
                                <li> <span className="font-bold md:font-medium">Tableau: </span> Proficient in creating interactive visualizations, dashboard, and infographics to present data insights effectively.</li>
                                <li> <span className="font-bold md:font-medium">Excel: </span> Proficient in creating interactive dashboards and visualizations to present data insights effectively.</li>
                                <li> <span className="font-bold md:font-medium">SQL: </span> Experienced in writing complex queries to extract, manipulate, and analyze data from relational databases.</li>
                                <li> <span className="font-bold md:font-medium">Python: </span> Utilize Python for data cleaning, statistical analysis, and implementing machine learning algorithms.</li>
                            </ul>
                        </div>
                    </div>


                    <div 
                        id="slide-left"
                        className={`webdev flex flex-col-reverse lg:flex-row justify-center items-center lg:items-start w-fit rounded-xl mt-5 sm:pb-5 lg:pb-0 2xl:pb-0 h-auto shadow-all-sides-lg border border-gray-800 max-w-[90vw] transition-transform duration-700 ease-out ${
                            isWebDevVisible ? 'lg:translate-x-0 lg:opacity-100' : 'lg:-translate-x-[100vw] lg:opacity-0'
                        }`}
                    >
                        <div className="desc1 ms-5 pb-5 md:pb-0 pe-4 lg:pe-8 xl:pe-12 lg:pb-4">
                            <p className="text-xl md:text-xl py-2 text-center md:max-lg:text-3xl lg:text-left xl:text-3xl font-bold mdp:max-lg:mb-1  md:py-3 mdp:max-lg:mt-1 lg:mb-2 2xl:mb-3">Web Development Skills</p>

                            <ul className="list-disc list-outside text-sm xs:text-base md:text-xl mdp:text-2xl xl:text-xl 2xl:text-[22px] 2xl:space-y-3 space-y-1 mdp:max-lg:space-y-2 xl:pb-3 pl-5">
                                <li><span className="font-bold md:font-medium">React.js: </span> Develop dynamic and responsive user interfaces with React.js, ensuring a seamless user experience.</li>
                                <li><span className="font-bold md:font-medium">Laravel: </span> Build robust back-end systems using Laravel, focusing on scalability and security.</li>
                                <li><span className="font-bold md:font-medium">Version Control (Git): </span> Experienced in using Git for version control, facilitating collaboration and code management.</li>
                                <li><span className="font-bold md:font-medium">RESTful APIs: </span> Skilled in designing and consuming RESTful APIs to enable communication between front-end and back-end systems.</li>
                            </ul>
                        </div>
                        <div className="picture2 w-full justify-items-center sm:pt-3 lg:pt-0 lg:w-auto lg:max-w-lg">
                            <img src={dev1} className="w-[25rem] h-auto rounded-t-xl sm:mt-3 lg:mt-0 sm:rounded-2xl sm:object-cover object-center lg:rounded-none lg:h-[310px] 2xl:h-[300px] xl:w- lg:w-auto" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
