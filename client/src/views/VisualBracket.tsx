import { Box, Flex, Text, VStack, HStack, Heading, Badge } from "@chakra-ui/react";
import { initialMatches } from "../data/mockData";

const VisualBracket = () => {
  // Logic: Organize data by columns (Rounds)
  const round1 = initialMatches.filter(m => m.round === 1);
  const round2 = initialMatches.filter(m => m.round === 2);

  return (
    <Box>
      <Heading size="lg" mb={10} color="cyan.400">Tournament Progress</Heading>
      
      <HStack align="stretch" gap={20}>
        {/* ROUND 1: SEMI-FINALS */}
        <VStack gap={10} justify="center">
          <Text fontSize="xs" fontWeight="bold" color="gray.500" letterSpacing="widest">SEMI-FINALS</Text>
          {round1.map(match => (
            <Box key={match.id} bg="gray.900" border="1px solid" borderColor="gray.800" borderRadius="md" w="240px">
              <Flex justify="space-between" p={3} borderBottom="1px solid" borderColor="gray.800">
                <Text color={match.winner === match.team1 ? "cyan.400" : "white"}>{match.team1}</Text>
                <Text fontWeight="bold">{match.score1}</Text>
              </Flex>
              <Flex justify="space-between" p={3}>
                <Text color={match.winner === match.team2 ? "cyan.400" : "white"}>{match.team2}</Text>
                <Text fontWeight="bold">{match.score2}</Text>
              </Flex>
            </Box>
          ))}
        </VStack>

        {/* ROUND 2: FINALS */}
        <VStack gap={10} justify="center">
          <Text fontSize="xs" fontWeight="bold" color="gray.500" letterSpacing="widest">FINALS</Text>
          {round2.map(match => (
            <Box key={match.id} bg="gray.900" border="2px solid" borderColor="cyan.600" borderRadius="md" w="240px">
              <Box p={3} borderBottom="1px solid" borderColor="gray.800">
                <Text color="gray.400">{match.team1 || "TBD"}</Text>
              </Box>
              <Box p={3}>
                <Text color="gray.400">{match.team2 || "TBD"}</Text>
              </Box>
            </Box>
          ))}
        </VStack>
      </HStack>
    </Box>
  );
};

export default VisualBracket;