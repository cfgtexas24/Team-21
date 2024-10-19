import React from "react";
import { Box } from "@chakra-ui/react";

interface DotProps {
  style?: React.CSSProperties;  // Allow custom styles for positioning
}

const Dot: React.FC<DotProps> = ({ style }) => {
  return (
    <Box
      position="absolute"
      width="8px"
      height="8px"
      borderRadius="50%"  // Make it a circle
      bg="gray"
      style={style}
    />
  );
};

export default Dot;
