import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ selectedImg, setSelectedImg }) => {
  return (
    <motion.div
      className='backdrop'
      onClick={() => setSelectedImg(null)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg.url}
        alt={selectedImg.name}
        initial={{ y: '-100vh', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      />
    </motion.div>
  );
};

export default Modal;
