import { FaReact, FaLaravel, FaPython, FaFileExcel } from 'react-icons/fa';
import { IoLogoTableau } from 'react-icons/io5';
import { PiFileSqlDuotone } from 'react-icons/pi';
import { motion } from 'framer-motion';

const TechStackLogos = () => {
    return (
      <>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <FaReact className='text-[27px] mbm:text-[30px] xs:text-[38px] sm:text-[50px] xl:text-[55px]' />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <FaLaravel className='text-[27px] mbm:text-[30px] xs:text-[38px] sm:text-[50px] xl:text-[55px]' />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <IoLogoTableau className='text-[27px] mbm:text-[30px] xs:text-[38px] sm:text-[50px] xl:text-[55px]' />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <FaPython className='text-[27px] mbm:text-[30px] xs:text-[38px] sm:text-[50px] xl:text-[55px]' />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <FaFileExcel className='text-[27px] mbm:text-[30px] xs:text-[38px] sm:text-[50px] xl:text-[55px]' />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <PiFileSqlDuotone className='text-[27px] mbm:text-[30px] xs:text-[38px] sm:text-[50px] xl:text-[55px]' />
        </motion.div>
      </>
    );
};

export default TechStackLogos;
