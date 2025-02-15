// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import webproject1 from '../assets/boys.png';
import webproject3 from '../assets/ilabs.png';
import dataproject from '../assets/dataDashboard.png';
import { FiExternalLink } from "react-icons/fi";
import { motion } from 'framer-motion';
import { Link } from 'react-router';


export default function LatestWork() {
    const projects = [
        { 
          img: webproject3, 
          title: "I-Labs", 
          description: "I-Labs is a practical lab assignment platform built with native PHP MVC, MySQL, and styled with Tailwind CSS. It allows students to submit assignments and Lab Assistant to manage tasks and grades.", 
          link: "/project2"
        },
        { 
          img: webproject1, 
          title: "The Boys", 
          description: "Create a simple backend system using native PHP MVC and MySQL for a satire website inspired by the Amazon Prime tv series \"The Boys\"",
          link: "/project1"
        },
        { 
          img: dataproject, 
          title: "PT. Expertindo Dashboard", 
          description: "Developed a data dashboard for PT. Expertindo, using Tableau to visualize website traffic and perform page clustering for better insights.", 
          link: "/data-dashboard"
        },
      ];
      

    return (
        <>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className='Latest-Work-Container lg:max-w-screen mt-3 lg:mt-6 shadow-all-sides-lg text-white flex-col justify-items-center py-3 md:py-6 lg:py-8 xs:space-y-3 md:space-y-6 lg:space-y-8'>

            <div className="title text-center">         
                <p className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold pb-0 border-b-2 inline-block">
                    <span>Latest </span> 
                    <span className="text-amber-500">Work</span>
                </p>
            </div>


            <div className="Latest-Work flex flex-col lg:flex-row justify-items-center gap-10 p-5 w-[95vw]">
                {projects.map((project, index) => {
                    const isMobile = window.innerWidth < 640;

                    const ProjectCard = (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative group h-auto overflow-hidden rounded-lg shadow-lg"
                    >
                        <img
                        src={project.img}
                        alt={project.title}
                        className="w-auto lg:h-[35vh] object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <h3 className="text-3xl text-center xs:text-xl md:text-4xl lg:text-2xl 2xl:text-3xl font-bold mb-2">
                            {project.title}
                        </h3>
                        <p className="hidden md:block md:text-2xl text-center lg:text-base 2xl:text-xl px-5">
                            {project.description}
                        </p>

                        {!isMobile && (
                            <Link to="/portofolio"
                            className="hidden sm:block bg-white md:mt-8 mdp:mt-8 lg:mt-5 2xl:mt-10 text-black px-4 py-2 rounded-lg hover:bg-gray-300 text-2xl transition"
                            >
                            <FiExternalLink className="hidden sm:block xs:text-xs md:text-4xl xl:text-2xl 2xl:text-3xl" />
                            </Link>
                        )}
                        </div>
                    </motion.div>
                    );

                    return isMobile ? (
                    <Link to="/portofolio" key={index} className="block w-full">
                        {ProjectCard}
                    </Link >
                    ) : (
                    <div key={index}>{ProjectCard}</div>
                    );
                })}
            </div>

            <Link to="/portofolio"> {/* Use the 'to' prop for routing */}
                <div className='button rounded-full text-center text-sm xs:text-lg md:text-2xl mdp:text-3xl xl:text-2xl focus:outline-2 hover:bg-amber-600 focus:outline-offset-2 focus:outline-amber-500 active:bg-amber-700 bg-amber-500 mt-2 xs:mt-6 sm:mt-10 px-3 py-3 xs:py-2 mdp:max-lg:px-3 mdp:max-lg:py-3 max-w-80 md:mx-auto mb-3 font-bold md:font-semibold'>
                    <p className='lg:px-3'>
                        View All Portofolio
                    </p>
                </div>
            </Link>
        </motion.div>
        </>
    );
}
