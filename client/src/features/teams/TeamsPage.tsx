import { Spinner, Text, Box } from "@chakra-ui/react";
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
    <Box>
      <Text fontSize="2xl" fontWeight="bold">
        Teams ({teams.length})
      </Text>
      {teams.map((team) => (
        <TeamCard key={team.id} name={team.name} logo_url={team.logo_url} />
      
      ))}
    
    </Box>
    );


}

export default TeamPage;