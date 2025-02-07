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
      className="
        flex flex-col-reverse space-y-5 justify-center items-center lg:justify-center lg:items-center w-screen max-h-screen mt-20 pb-6 lg:flex-row md:justify-evenly lg:min-h-screen lg:mt-0 lg:pb-5 lg:space-x-[5vw] xl:space-x-[5vw] 2xl:space-x-[17vw] md:pt-14 md:pb-8 shadow-lg
      "
    >
      {/* Text Section */}
      <div className="
        flex flex-col justify-center text-white font-extrabold text-center lg:text-left 
        xl:me-20 lg:mt-20 xl:ms-8 2xl:mt-28 pt-3
      ">
        <p className="text-2xl xs:text-3xl sm:text-3xl mdp:text-4xl 2xl:text-5xl pb-1 md:pb-3">
          Hello, It&apos;s Me
        </p>
        <p className="text-3xl xs:text-4xl sm:text-4xl mdp:text-6xl 2xl:text-7xl">
          Athallah Tsany Satriyaji
        </p>
        <p className="text-2xl xs:text-3xl sm:text-3xl mdp:text-4xl 2xl:text-5xl pt-1 md:pt-3 pb-0">
          And I&apos;m a{' '}
          <TypeAnimation
            sequence={['Data Analyst', 1000, 'Web Developer', 1000]}
            speed={40}
            wrapper="span"
            repeat={Infinity}
            className='text-amber-500'
          />
        </p>
        <p className='
          max-w-3xl font-medium mt-2 xs:mt-6 px-4 lg:px-0 lg:leading-7 
          text-base xs:text-base sm:text-xl mdp:text-xl lg:text-lg 2xl:text-xl pt-0
        '>
          <span className='hidden lg:inline'>
            I&apos;am a Junior Data Analyst specializing in Tableau, Excel, SQL, and Python, and a Full-Stack Web Developer 
            skilled in React.js and Laravel. I analyze complex data and build dynamic web applications, ensuring seamless 
            integration and performance.
          </span>
          <span className='lg:hidden'>
            I&apos;m a Junior Data Analyst specializing in Tableau, Excel, SQL, and Python, and a Full-Stack Web Developer 
            skilled in React.js and Laravel.
          </span>
        </p>
        {/* Social Links */}
        <div className='
          flex flex-row justify-center lg:justify-start space-x-10 mt-4 xs:mt-8 mb-1
        '>
          <a target="_blank" href="https://github.com/athallahdx">
            <FaGithub className='text-[38px] xs:text-[44px] mdp:text-[55px]' />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/athallah-tsany-satriyaji-635630222/">
            <FaLinkedin className='text-[38px] xs:text-[44px] mdp:text-[55px]'/>
          </a>
          <a target="_blank" href="https://www.instagram.com/ath_tsany">
            <FaInstagram className='text-[38px] xs:text-[44px] mdp:text-[55px]'/>
          </a>
        </div>
        {/* Download CV Button */}
        <div className="flex justify-center lg:justify-start">
          <a href="">
            <div className="
              bg-amber-500 hover:bg-amber-600 active:bg-amber-700 
              rounded-full text-center text-sm xs:text-xl mdp:text-xl lg:text-lg 2xl:text-2xl 
              px-5 py-3 xs:py-3 mdp:max-lg:px-8 mdp:max-lg:py-6 max-w-80 mx-auto 
              focus:outline-2 focus:outline-offset-2 focus:outline-amber-500 mb-0 mt-4 xs:mt-8 sm:mt-10
            ">
              Download CV
            </div>
          </a>
        </div>
      </div>

      <div className="
        flex justify-center items-center animate-bounceCustom 
        pb-2 pt-0 sm:mt-[0px] md:mb-0 mdp:mt-0
        max-w-xs sm:max-w-lg mdp:max-w-xl lg:max-w-xl xl:max-w-2xl lg:pb-20 
      ">
        <img
          className="
            object-contain drop-shadow-2xl h-auto lg:w-auto 
            max-w-[60vw] xs:max-w-[70vw] sm:max-w-[40vw] mdp:max-w-[50vw] lg:mt-28
            lg:max-h-[550px] xl:max-w-[30vw] 2xl:max-h-full xl:me-16 2xl:me-20
          "
          src={profil}
          alt="Profile"
        />
      </div>
    </motion.div>
  );
}
