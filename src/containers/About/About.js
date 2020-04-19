import React from "react";
import {
  PageWrapper,
  GridWrapper
} from "../../components/UI/Wrappers/Wrappers";
import Card from "../../components/UI/Card/Card";
import {
  AnimatedGridWrapper,
  AnimatedCard
} from "../../components/animations/animatedCardGrid/animatedCardGrid";
import { AnimatedPageWrapper } from "../../components/animations/animatedRoutes/animatedRoutes";

const about = props => (
  <AnimatedPageWrapper>
    <h1>ABOUT</h1>
    <GridWrapper>
      <AnimatedCard whileHover="hover">This</AnimatedCard>
      <AnimatedCard whileHover="hover">is</AnimatedCard>
      <AnimatedCard whileHover="hover">my</AnimatedCard>
      <AnimatedCard whileHover="hover">This</AnimatedCard>
      <AnimatedCard whileHover="hover">is</AnimatedCard>
      <AnimatedCard whileHover="hover">my</AnimatedCard>
      <AnimatedCard whileHover="hover">is</AnimatedCard>
      <AnimatedCard whileHover="hover">my</AnimatedCard>
    </GridWrapper>
  </AnimatedPageWrapper>
);

export default about;
