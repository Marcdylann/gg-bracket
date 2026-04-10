import { Box, Text, Flex } from "@chakra-ui/react";
import { Match } from "../../types";

interface BracketViewProps {
  matches: Match[];
}

const BracketView = ({ matches }: BracketViewProps) => {
  const roundOne = matches.filter((matches) => matches.round === 1);
  const roundTwo = matches.filter((matches) => matches.round === 2);

  return (
    <Flex>
      <Box>
        <Text>Semi Finals</Text>
        {roundOne.map((match) => (
          <Text key={match.id}>
            {" "}
            Round: {match.round} {match.team1_name} vs {match.team2_name}{" "}
          </Text>
        ))}
      </Box>
      <Box>
        <Text>Final</Text>
        {roundTwo.map((match) => (
          <Text key={match.id}>
            {" "}
            Round: {match.round} {match.team1_name} vs {match.team2_name}
          </Text>
        ))}
      </Box>
    </Flex>
  );
};

export default BracketView;
