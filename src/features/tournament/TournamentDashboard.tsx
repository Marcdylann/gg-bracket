import { Box, Heading, useBreakpointValue, Text } from "@chakra-ui/react";
import MobileMatchList from "./components/MobileMatchList";
import type { Match } from "./types";

const mockMatches: Match[] = [
  { id: 1, round: 1, teamA: "Cebu Lancers", teamB: "Manila Stars", scoreA: 2, scoreB: 1, status: "Final" },
  { id: 2, round: 1, teamA: "Davao Eagles", teamB: "Iloilo Warriors", scoreA: 0, scoreB: 0, status: "Live" },
  { id: 3, round: 2, teamA: "Cebu Lancers", teamB: "TBD", scoreA: 0, scoreB: 0, status: "Scheduled" },
];

const TournamentDashboard = () => {
  // Chakra v3 useBreakpointValue
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box p="6" maxW="400px" mx="auto">
      <Heading size="2xl" mb="6" textAlign="center">GG-Bracket</Heading>
      
      {isMobile ? (
        <MobileMatchList matches={mockMatches} />
      ) : (
        <Box p="10" textAlign="center" border="2px dashed" borderColor="gray.200" borderRadius="lg">
          <Text>Desktop Visual Bracket View</Text>
        </Box>
      )}
    </Box>
  );
};

export default TournamentDashboard;