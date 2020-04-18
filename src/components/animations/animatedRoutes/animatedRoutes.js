import React from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route } from "react-router-dom";
import MountTransition from "../MountTransition/MountTransition";

export const AnimatedRoutesWrapper = props => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>{props.children}</Switch>
    </AnimatePresence>
  );
};

export const RouteTransition = props => {
  return (
    <Route path={props.path} exact={props.exact}>
      <MountTransition slide="0" slideUp="-10vh">
        {props.component}
      </MountTransition>
    </Route>
  );
};
