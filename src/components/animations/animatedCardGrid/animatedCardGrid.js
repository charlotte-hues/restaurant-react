import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const StyledGridWapper = styled(motion.div)`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-wrap;
  justify-content: center;
`;

const StyledCard = styled(motion.div)`
  opacity: 1;
  background: white;
  margin: 8px;
  border: 2px solid var(--primary);
  border-radius: 6px;
  min-height: 300px;
  min-width: 200px;
  color: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  }
`;

export const AnimatedGridWrapper = props => {
  return (
    <AnimatePresence exitBeforeEnter>
      <StyledGridWapper
        exit={{ opacity: 1, scale: 0.8 }}
        initial={{ opacity: 1, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, transition: { staggerChildren: 3.8 } }}
      >
        {props.children}
      </StyledGridWapper>
    </AnimatePresence>
  );
};

export const AnimatedCard = props => {
  return (
    <StyledCard
      exit={{ opacity: 0, scale: 0.8 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      disabled={props.disabled}
    >
      {props.children}
    </StyledCard>
  );
};
