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
          <img src="/headset.svg" alt="headset" className="w-[24px] h-[24px] object-contain" />
          <span className="font-normal text-[16px] text-white">ENTER METAVERSE</span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="bg-white mb-[50px] h-[2px] opacity-10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white">Metaversus</h4>
            <p className="font-normal text-[14px] text-white opacity-50">Copyright @ 2022 - 2023 Metaversus. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
