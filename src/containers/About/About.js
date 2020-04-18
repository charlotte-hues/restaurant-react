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

const about = props => (
  <PageWrapper>
    <h1>ABOUT</h1>
    <GridWrapper>
      <AnimatedCard>This</AnimatedCard>
      <AnimatedCard>is</AnimatedCard>
      <AnimatedCard>my</AnimatedCard>
      <AnimatedCard>This</AnimatedCard>
      <AnimatedCard>is</AnimatedCard>
      <AnimatedCard>my</AnimatedCard>
      <AnimatedCard>is</AnimatedCard>
      <AnimatedCard>my</AnimatedCard>
    </GridWrapper>
  </PageWrapper>
);

export default about;
