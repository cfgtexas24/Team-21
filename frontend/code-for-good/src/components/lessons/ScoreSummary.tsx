import { Box, Card, Text, VStack, Link, Grid } from "@chakra-ui/react";

interface ScoreSummaryProps {
  topic: string;
  score: number;
  total: number;
  resources: { name: string; link: string }[];
}

const ScoreSummary = ({
  topic,
  score,
  total,
  resources,
}: ScoreSummaryProps) => {
  const percentage = (score / total) * 100;
  const message =
    percentage >= 50
      ? "Well done! Keep it up! Check out these resources to sharpen your skills in " +
        topic +
        "!"
      : "Keep trying, you can improve! Check out these resources on " +
        topic +
        "!";

  return (
    <Box display="grid grid-cols-12" justifyContent="center" p={4}>
      <VStack spacing={6} align="center">
        <Card p={10} textAlign="center" boxShadow="lg">
          <Text fontSize="xl" fontWeight="bold">
            Score: {score + "/" + total}
          </Text>
          <Text mt={2}>{message}</Text>
        </Card>

        <Grid templateColumns="repeat(3, 1fr)" gap={3} p={2}>
          {resources.map((resource, index) => (
            <Link
              href={resource.link}
              isExternal
              _hover={{ textDecoration: "none" }}
              key={index}
            >
              <Card
                p={3}
                _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
                transition="transform 0.2s, box-shadow 0.2s"
                height={"auto"}
              >
                <Text fontWeight="bold">{resource.name}</Text>
              </Card>
            </Link>
          ))}
        </Grid>
      </VStack>
    </Box>
  );
};

export default ScoreSummary;
