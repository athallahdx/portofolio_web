import { TypeAnimation } from 'react-type-animation';
import profil from '../assets/new_profile.png';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from 'framer-motion';


export default function Profile() {
  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      className="h-screen w-screen flex flex-col-reverse lg:flex-row justify-evenly items-center lg:space-x-[5vw] 2xl:space-x-[17vw] pt-14 shadow-lg pb-8"
    >
      <div className="Text-Description text-center lg:text-left lg:mt-20 2xl:mt-28 text-white font-bold">
        <p className="text-2xl lg:text-4xl pb-3">Hello, It&apos;s Me</p>
        <p className="text-3xl lg:text-6xl">Athallah Tsany Satriyaji</p>
        <p className="text-2xl lg:text-4xl pt-3">
          And I&apos;m a{' '}
          <TypeAnimation
            sequence={['Data Analyst', 1000, 'Web Developer', 1000]}
            speed={40}
            wrapper="span"
            repeat={Infinity}
            // style={{ color: '#3B82F6' }}
            className='text-amber-500'
          />
        </p>
        <p className='text-sm lg:text-base px-4 lg:px-0 2xl:text-lg mt-6 font-medium max-w-3xl lg:leading-7'>
        I&apos;am a Junior Data Analyst specializing in Tableau, Excel, SQL, and Python, and a Full-Stack Web Developer proficient in React.js and Laravel, I bridge the gap between data-driven insights and robust web solutions. My expertise enables me to analyze complex datasets and develop dynamic web applications, ensuring seamless integration and optimal performance. 
        </p>
        <div className='my-account flex flex-row justify-center lg:justify-start space-x-10 mt-6'>
            <a target="_blank" href="https://github.com/athallahdx"><FaGithub size={40} /></a>
            <a target="_blank" href="https://www.linkedin.com/in/athallah-tsany-satriyaji-635630222/"><FaLinkedin size={40}/></a>
            <a target="_blank" href="https://www.instagram.com/ath_tsany"><FaInstagram size={40}/></a>
        </div>

        <div className="flex justify-center lg:justify-start">
          <a href="">
            <div className="rounded-full text-center lg:text-xl focus:outline-2 hover:bg-amber-600 focus:outline-offset-2 focus:outline-amber-500 active:bg-amber-700 2xl:text-2xl bg-amber-500 mt-10 px-5 py-3 max-w-80 mx-auto">
              Download CV
            </div>
          </a>
        </div>


        </div>

      <div className="Image-Profil animate-bounceCustom flex justify-center items-center max-w-xs sm:max-w-lg lg:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <img
          className="drop-shadow-2xl max-w-[50vw] lg:max-h-[600px] 2xl:max-h-full w-auto h-auto object-contain"
          src={profil}
          alt="Profile"
        />
      </div>

    </motion.div>
  );
}
