'use client';

import { motion } from 'framer-motion';

import { textContainer } from '../utils/motion';

export const TypingText = ({title, textStyles}) => (
  <motion.p 
    className={`font-normal text-[14px] text-secondary-white`}
    variants={textContainer}>
    {Array.from(title).map((letter,index)=>(
      
    ))}
  </motion.p>
);

export const TitleText = () => (
  <h2>Title Text</h2>
);
