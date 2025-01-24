import PropTypes from 'prop-types'; // Import PropTypes
import { FaReact, FaLaravel, FaPython, FaFileExcel } from 'react-icons/fa';
import { IoLogoTableau } from 'react-icons/io5';
import { PiFileSqlDuotone } from 'react-icons/pi';
import { motion } from 'framer-motion';

const TechStackLogos = ({ isMobile }) => {
    return (
      <>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <FaReact size={isMobile ? 30 : 50} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <FaLaravel size={isMobile ? 30 : 50} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <IoLogoTableau size={isMobile ? 30 : 50} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <FaPython size={isMobile ? 30 : 50} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <FaFileExcel size={isMobile ? 30 : 50} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <PiFileSqlDuotone size={isMobile ? 30 : 50} />
        </motion.div>
      </>
    );
};

// Add prop types validation
TechStackLogos.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default TechStackLogos;
