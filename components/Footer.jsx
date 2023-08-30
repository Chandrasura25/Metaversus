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
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">Enter the Metaverse</h4>
        <button type="button" className="flex items-center h0fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]">
          <img src="/headset.svg" alt="headset" />
        </button>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
