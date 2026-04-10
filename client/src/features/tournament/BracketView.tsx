import { Box, Text } from '@chakra-ui/react';
import { Match } from '../../types';

interface BracketViewProps{
    matches: Match[]
}

const BracketView = ({matches}: BracketViewProps) => {
  return (
    <Box>
      {matches.map(match => 
        <Text key={match.id}> Round: {match.round} {match.team1_name} vs {match.team2_name} </Text>
      )}
    </Box>
  );
};

export default BracketView;