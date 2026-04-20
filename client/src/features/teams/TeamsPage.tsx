import { Spinner, Text, Box, SimpleGrid } from "@chakra-ui/react";
import useTeams from "../../hooks/useTeams";
import TeamCard from "../tournament/TeamCard";

const TeamPage = () => {
  const { teams, isLoading: teamsLoading, error: teamsError } = useTeams();
  if (teamsLoading) {
    return <Spinner size="xl" />;
  }

  if (teamsError) {
    return <Text color="red.500">{teamsError}</Text>;
  }

  return (
    <Box p = "8">
      <Text fontSize="3xl" fontWeight="bold" mb ={8}>
        Teams ({teams.length})
      </Text>

      <SimpleGrid columns={2} gap={4}>
        {teams.map((team) => (
          <TeamCard key={team.id} name={team.name} logo_url={team.logo_url} />
        ))}
        
      </SimpleGrid>
    </Box>
  );
};

export default TeamPage;
