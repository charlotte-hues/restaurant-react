import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { Switch, Route, useLocation } from "react-router-dom";
import MountTransition from "../MountTransition/MountTransition";

export const AnimatedRoutesWrapper = props => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        {props.children}
      </Switch>
    </AnimatePresence>
  );
};

const StyledPageWrapper = styled(motion.div)`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const pageTransitions = {
  in: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.05 }
  },
  out: { opacity: 0 }
};

export const AnimatedPageWrapper = props => (
  <StyledPageWrapper
    exit="out"
    animate="in"
    initial="out"
    variants={pageTransitions}
  >
    {props.children}
  </StyledPageWrapper>
);

export const RouteTransition = props => {
  return (
    <Route path={props.path} exact={props.exact}>
      <MountTransition slide="0" slideUp="-10vh">
        {props.children}
      </MountTransition>
    </Route>
  );
};
