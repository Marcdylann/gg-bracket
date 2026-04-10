import { Box, Text, Spinner } from '@chakra-ui/react';
import useTeams from '../../hooks/useTeams';
import useMatches from '../../hooks/useMatches';
import TeamCard from './TeamCard';
import BracketView from './BracketView';

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
        <TeamCard key={team.id} name={team.name} logo_url={team.logo_url} />
      ))}

      <Text fontSize="2xl" fontWeight="bold" mt={6}>Matches</Text>
      <BracketView matches={matches} />
    </Box>
  );
};

export default TournamentPage;