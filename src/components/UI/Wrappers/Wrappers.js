import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

export const PageWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const GridWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-wrap;
  justify-content: center;
`;
