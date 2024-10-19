import { Box, Progress } from "@chakra-ui/react";

interface ProgressBarProps {
  progress: number;
  total: number;
}

const ProgressBar = ({ progress, total }: ProgressBarProps) => {
  const progressPercentage = (progress / total) * 100;

  return (
    <Box className="w-full p-4">
      <Progress
        value={progressPercentage}
        size="md"
        colorScheme="blue"
        className="bg-gray-200 rounded-lg"
      />
      <div className="text-center mt-2">
        {progress} / {total} ({progressPercentage.toFixed(2)}%)
      </div>
    </Box>
  );
};

export default ProgressBar;
