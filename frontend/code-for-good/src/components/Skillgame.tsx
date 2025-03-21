import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import LevelButton from "./LevelButton";
import Dot from "./Dot";
import { Link } from "react-router-dom";
import Navbar2 from "./Navbar2";
// Function to generate dots in a line between two points
const generateDotTrail = (
  startX: number,
  startY: number,
  endX: number,
  endY: number,
  numDots: number
) => {
  const dots = [];
  const deltaX = (endX - startX) / (numDots + 1);
  const deltaY = (endY - startY) / (numDots + 1);

  for (let i = 1; i <= numDots; i++) {
    dots.push(
      <Dot
        key={`dot-${startX}-${startY}-${i}`}
        style={{
          left: `${startX + i * deltaX}px`,
          top: `${startY + i * deltaY}px`,
        }}
      />
    );
  }
  return dots;
};

const Skillgame = () => {
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);

  const handleLevelClick = (level: number) => {
    if (!completedLevels.includes(level)) {
      setCompletedLevels([...completedLevels, level]);
    }
  };

  return (
    <div>
      <Navbar2></Navbar2>
      <Box
        position="relative"
        width="100vw"
        height="100vh"
        bg="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {/* Top Right Stats */}
        <Box
          position="absolute"
          top="2rem"
          right="2rem"
          bg="gray.200"
          padding="1rem"
          borderRadius="lg"
        >
          <Text fontSize="lg">XP: 0</Text>
          <Text fontSize="lg">Streak: 0 days</Text>
        </Box>
        <Box
          position="absolute"
          top="2rem"
          right="13rem"
          bg="#002982"
          color="white"
          padding="2rem" // Increased padding for a bigger box
          width="220px" // Set a larger width for the box
          borderRadius="lg"
          alignItems="center"
        >
          <Text fontSize="2xl" fontWeight="bold">
            Game Topics
          </Text>{" "}
          {/* Larger and bold */}
          <Text fontSize="lg">1. Financial Literacy</Text>
          <Text fontSize="lg">2. Cooking</Text>
        </Box>
        {/* Custom Zigzag Layout of Buttons and Dotted Trails */}
        <Box
          position="relative"
          width="100%"
          height="100%"
          maxWidth="600px"
          maxHeight="600px"
        >
          {/* Button 1 */}
          <Link to="/lesson1">
            <LevelButton
              level={1}
              isCompleted={completedLevels.includes(1)}
              onClick={() => handleLevelClick(1)}
              style={{ top: "50px", left: "50px" }} // Custom position
            />
          </Link>
          {/* Dotted Trail 1 - More dots, farther from buttons */}
          {generateDotTrail(110, 100, 300, 190, 8)}

          {/* Button 2 */}
          <Link to="/lesson2">
            <LevelButton
              level={2}
              isCompleted={completedLevels.includes(2)}
              onClick={() => handleLevelClick(2)}
              style={{ top: "150px", left: "290px" }} // Move to the right
            />
          </Link>
          {/* Dotted Trail 2 - More dots, farther from buttons */}
          {generateDotTrail(110, 300, 300, 190, 8)}

          {/* Button 3 */}
          <LevelButton
            level={3}
            isCompleted={completedLevels.includes(3)}
            onClick={() => handleLevelClick(3)}
            style={{ top: "260px", left: "50px" }} // Move back to the left
          />
          {/* Dotted Trail 3 - More dots, farther from buttons */}
          {generateDotTrail(110, 300, 300, 390, 8)}

          {/* Button 4 */}
          <LevelButton
            level={4}
            isCompleted={completedLevels.includes(4)}
            onClick={() => handleLevelClick(4)}
            style={{ top: "355px", left: "290px" }} // Move to the right again
          />
          {/* Dotted Trail 4 - More dots, farther from buttons */}
          {generateDotTrail(110, 500, 300, 390, 8)}

          {/* Button 5 */}
          <LevelButton
            level={5}
            isCompleted={completedLevels.includes(5)}
            onClick={() => handleLevelClick(5)}
            style={{ top: "470px", left: "50px" }} // Back to the left
          />
        </Box>
      </Box>
    </div>
  );
};

export default Skillgame;
