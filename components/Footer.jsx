'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    className={`${styles.paddings} py-8 relative`}
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
  >
    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="">Enter the Metaverse</h4>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
