import { Text, Spinner, Box } from "@chakra-ui/react";
import useMatches from "../../hooks/useMatches";
import { useState } from "react";
import BracketView from "../tournament/bracketView";

const StandingsPage = () => {
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
    <Text fontSize="2xl" fontWeight="bold">Standings</Text>
      <BracketView
        matches={matches}
        onScoreUpdate={() => setRefreshKey((prev) => prev + 1)}
      />

    
  </Box>
  );
};

export default StandingsPage;
