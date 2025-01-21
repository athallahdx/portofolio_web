import { TypeAnimation } from 'react-type-animation';
import profil from '../assets/profil_fix.png';
import './styles.css';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="flex flex-row justify-center items-center space-x-52">
      <div className="Text-Description text-white font-bold">
        <p className="text-4xl pb-3">Hello, It&apos;s Me</p>
        <p className="text-6xl">Athallah Tsany Satriyaji</p>
        <p className="text-4xl pt-3">
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
        <p className='text-m mt-6 font-medium max-w-2xl'>
        I&apos;am a Junior Data Analyst specializing in Tableau, Excel, SQL, and Python, and a Full-Stack Web Developer proficient in React.js and Laravel, I bridge the gap between data-driven insights and robust web solutions. My expertise enables me to analyze complex datasets and develop dynamic web applications, ensuring seamless integration and optimal performance. 
        </p>
        <div className='my-account flex flex-row space-x-10 mt-6'>
            <a target="_blank" href="https://github.com/athallahdx"><FaGithub size={40} /></a>
            <a target="_blank" href="https://www.linkedin.com/in/athallah-tsany-satriyaji-635630222/"><FaLinkedin size={40}/></a>
            <a target="_blank" href="https://www.instagram.com/ath_tsany"><FaInstagram size={40}/></a>
        </div>
      </div>
      <div className="Image-Profile">
        <img src={profil} alt="Profile" />
      </div>
    </div>
  );
}
