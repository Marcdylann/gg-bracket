import { Box, Flex, Text, Badge, Stack, Separator } from "@chakra-ui/react";
import type { Match } from "../types";

const MobileMatchCard = ({ teamA, teamB, scoreA, scoreB, status }: Match) => {
  const isFinal = status === "Final";
  const winnerA = isFinal && scoreA > scoreB;
  const winnerB = isFinal && scoreB > scoreA;

  return (
    <Box
      p="4"
      borderWidth="1px"
      borderRadius="xl"
      bg="white"
      width="100%"
      borderLeftWidth="4px"
      borderLeftColor={status === "Live" ? "red.500" : "blue.500"}
    >
      <Flex justify="space-between" align="center" mb="3">
        <Badge colorPalette={status === "Live" ? "red" : "blue"} variant="solid">
          {status}
        </Badge>
        <Text fontSize="xs" fontWeight="bold" color="gray.500" textTransform="uppercase">
          Match Score
        </Text>
      </Flex>

      <Stack gap="3">
        <Flex justify="space-between" align="center">
          <Text fontWeight={winnerA ? "bold" : "medium"} fontSize="md" color="gray.800">
            {teamA}
          </Text>
          <Text fontWeight="bold" fontSize="lg">{scoreA}</Text>
        </Flex>

        <Separator />

        <Flex justify="space-between" align="center">
          <Text fontWeight={winnerB ? "bold" : "medium"} fontSize="md" color="gray.800">
            {teamB}
          </Text>
          <Text fontWeight="bold" fontSize="lg">{scoreB}</Text>
        </Flex>
      </Stack>
    </Box>
  );
};

export default MobileMatchCard;