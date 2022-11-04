import { Flex, Box, Stack } from '@chakra-ui/react';
import { motion } from "framer-motion";

export const animationFlex = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2
    }
  }
}

export const itemAnimation = {
  hidden: { y: -300 , opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export const itemRotate = {
  initial: { scale: 0 },
  animate: { rotate: 180, scale: 1 },
  transition: {
    type: "spring",
    stiffness: 260,
    damping: 20
  }
}

export const MotionFlex = motion(Flex);
export const MotionBox = motion(Box);
export const MotionStack = motion(Stack);