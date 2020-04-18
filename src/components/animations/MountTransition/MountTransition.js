import React from "react";
import { motion } from "framer-motion";

const mountTransition = props => {
  return (
    <motion.div
      exit={{ opacity: 0, x: props.slide, y: props.slideUp }}
      initial={{ opacity: 0, x: props.slide, y: props.slideUp }}
      animate={{ opacity: 1, x: 0, y: 0 }}
    >
      {props.children}
    </motion.div>
  );
};

export default mountTransition;
