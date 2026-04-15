import { Text, Spinner, Box } from "@chakra-ui/react";
import useMatches from "../../hooks/useMatches";
import { useState } from "react";

const MatchesPage = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const {
    matches,
    isLoading: matchesLoading,
    error: matchesError,
  } = useMatches(refreshKey);

  if (matchesLoading && refreshKey === 0) {
    return <Spinner size="xl" />;
  }
  if (matchesError) {
    return <Text color="red.500">{matchesError}</Text>;
  }

  return (
    <Box p={8}>
    <Text fontSize="2xl" fontWeight="bold">Matches</Text>
    {matches.map((match) => (
      <Box key={match.id} border="1px solid gray" borderRadius="md" p={4} mb={4}>
        <Text>Round {match.round}</Text>
        <Text>{match.team1_name} vs {match.team2_name}</Text>
        <Text>Score: {match.score_team_a ?? 0} - {match.score_team_b ?? 0}</Text>
        <Text>Status: {match.status}</Text>
      </Box>
    ))}
  </Box>
  );
};

export default MatchesPage
