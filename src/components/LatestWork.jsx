import webproject1 from '../assets/boys.png';
// import webproject2 from '../assets/vedect.png';
import webproject3 from '../assets/ilabs.png';
import dataproject from '../assets/dataDashboard.png';
import { FiExternalLink } from "react-icons/fi";
import { motion } from 'framer-motion';


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
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className='Latest-Work-Container lg:max-w-screen mt-3 lg:mt-6 shadow-top-lg text-white flex-col justify-center items-center py-10 space-y-10'>

            <div className="title text-center">         
                <p className="text-2xl xs:text-3xl mdp:text-5xl lg:text-6xl font-bold pb-1 inline-block border-b-2">
                    <span>Latest </span> 
                    <span className="text-amber-500">Work</span>
                </p>
            </div>


            <div className="Latest-Work flex col justify-center gap-10 p-5">
                {projects.map((project, index) => (
                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                    key={index} className="relative group w-[28vw] h-auto overflow-hidden rounded-lg shadow-lg">
                        <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h3 className="text-white text-3xl font-bold mb-2">{project.title}</h3>
                            <p className='text-lg text-center px-5'>{project.description}</p>
                            <a href={project.link} className="bg-white mt-10 text-black px-4 py-2 rounded-lg hover:bg-gray-300 text-2xl transition">
                            <FiExternalLink />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className='button rounded-full text-center text-sm xs:text-xl mdp:text-3xl lg:text-xl focus:outline-2 hover:bg-amber-600 focus:outline-offset-2 focus:outline-amber-500 active:bg-amber-700 2xl:text-2xl bg-amber-500 mt-5 xs:mt-8 sm:mt-10 px-5 py-3 xs:py-3 mdp:max-lg:px-8 mdp:max-lg:py-6 max-w-80 mx-auto font-semibold'>
                <a href="/portfolio">
                    View All Portofolio
                </a>
            </div>
        </motion.div>
        </>
    );
}
