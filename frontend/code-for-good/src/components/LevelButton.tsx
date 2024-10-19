import React from "react";
import { Button } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

interface LevelButtonProps {
  isCompleted: boolean;
  onClick: () => void;
  style?: React.CSSProperties;  // Allow custom styles for positioning
  level: number;  // Add the level prop to display numbers on buttons
}

const LevelButton: React.FC<LevelButtonProps> = ({ isCompleted, onClick, style, level }) => {
  return (
    <Button
      onClick={onClick}
      borderRadius="50%"
      width="80px"
      height="80px"
      bg={isCompleted ? "green.400" : "radial-gradient(circle at top left, #ffdd57, #f7c531)"}  // Green if completed, yellow gradient otherwise
      color="black"
      fontWeight="bold"
      fontSize="xl"
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.2), inset 0 -2px 4px rgba(0, 0, 0, 0.3)"
      _active={{ transform: "scale(0.95)" }}
      transition="transform 0.1s ease"
      display="flex"
      justifyContent="center"
      alignItems="center" 
      position="absolute"  // Customizable positioning
      style={style}
    >
      {isCompleted ? <FaCheck color="#fff" size="32px" /> : <span>{level}</span>}
    </Button>
  );
};

export default LevelButton;
