import { Box, Text, Flex, Separator } from "@chakra-ui/react";
import { Match } from "../../types";

interface BracketViewProps {
  matches: Match[];
}

const BracketView = ({ matches }: BracketViewProps) => {
  const roundOne = matches.filter((matches) => matches.round === 1);
  const roundTwo = matches.filter((matches) => matches.round === 2);

  return (
    <Flex gap = "8">
      <Box>
        <Text>Semi Finals</Text>
        {roundOne.map((match) => (
          <Box key={match.id} border ="1px solid gray" borderRadius="md" p={4} mb={4} minW="150px">
            <Text>{match.team1_name}</Text>
            <Separator/>
            <Text>{match.team2_name}</Text>
          </Box>
        ))}
      </Box>
      <Box>
        <Text>Final</Text>
        {roundTwo.map((match) => (
          <Box key={match.id} border ="1px solid gray" borderRadius="md" p={4} mb={4} minW="150px">
            <Text>{match.team1_name}</Text>
            <Separator/>
            <Text>{match.team2_name}</Text>
          </Box>
        ))}
      </Box>
    </Flex>
  );
};

export default BracketView;
