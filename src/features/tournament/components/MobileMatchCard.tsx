import { Box, Flex, Text, Badge, VStack, Divider } from "@chakra-ui/react";

const MobileMatchCard = ({ teamA, teamB, scoreA, scoreB, status }) => {
  // Logic to highlight the winner if the match is finished
  const isFinal = status === "Final";
  const winnerA = isFinal && scoreA > scoreB;
  const winnerB = isFinal && scoreB > scoreA;

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="xl"
      bg="white"
      boxShadow="sm"
      width="100%"
      borderLeft="4px solid"
      borderLeftColor={status === "Live" ? "red.400" : "blue.400"}
    >
      <Flex justify="space-between" align="center" mb={3}>
        <Badge variant="subtle" colorScheme={status === "Live" ? "red" : "gray"}>
          {status}
        </Badge>
        <Text fontSize="xs" fontWeight="bold" color="gray.400" uppercase>
          Scoreboard
        </Text>
      </Flex>

      <VStack align="stretch" spacing={3}>
        {/* Team A Row */}
        <Flex justify="space-between" align="center">
          <Text 
            fontWeight={winnerA ? "bold" : "medium"} 
            color={winnerA ? "blue.600" : "gray.700"}
            fontSize="lg"
          >
            {teamA}
          </Text>
          <Text fontWeight="bold" fontSize="lg">{scoreA}</Text>
        </Flex>

        <Divider />

        {/* Team B Row */}
        <Flex justify="space-between" align="center">
          <Text 
            fontWeight={winnerB ? "bold" : "medium"} 
            color={winnerB ? "blue.600" : "gray.700"}
            fontSize="lg"
          >
            {teamB}
          </Text>
          <Text fontWeight="bold" fontSize="lg">{scoreB}</Text>
        </Flex>
      </VStack>
    </Box>
  );
};