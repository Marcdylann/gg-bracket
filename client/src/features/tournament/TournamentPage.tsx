import { Box, Text, Spinner } from '@chakra-ui/react';
import useTeams from '../../hooks/useTeams';
import useMatches from '../../hooks/useMatches';

const TournamentPage = () => {
  const { teams, isLoading: teamsLoading, error: teamsError } = useTeams();
  const { matches, isLoading: matchesLoading, error: matchesError } = useMatches();

  if (teamsLoading || matchesLoading) {
    return <Spinner size="xl" />;
  }

  if (teamsError || matchesError) {
    return <Text color="red.500">{teamsError || matchesError}</Text>;
  }

  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold">Teams ({teams.length})</Text>
      {teams.map(team => (
        <Text key={team.id}>{team.name}</Text>
      ))}

      <Text fontSize="2xl" fontWeight="bold" mt={6}>Matches</Text>
      {matches.map(match => (
        <Text key={match.id}>
          Round {match.round}: {match.team1_name} vs {match.team2_name} — {match.status}
        </Text>
      ))}
    </Box>
  );
};

export default TournamentPage;