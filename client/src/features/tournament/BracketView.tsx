import { Box, Text, Flex, Separator, Button } from "@chakra-ui/react";
import { Match } from "../../types";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

interface BracketViewProps {
  matches: Match[];
}

const BracketView = ({ matches }: BracketViewProps) => {
  const roundOne = matches.filter((matches) => matches.round === 1);
  const roundTwo = matches.filter((matches) => matches.round === 2);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

  const { user } = useAuth();

  return (
    <>
      <Flex gap="8">
        <Box p="12">
          <Text>Semi Finals</Text>
          {roundOne.map((match) => (
            <Box
              key={match.id}
              border="1px solid gray"
              borderRadius="md"
              p={4}
              mb={4}
              minW="150px"
            >
              <Text>{match.team1_name}</Text>
              <Separator />
              <Text>{match.team2_name}</Text>
              {user?.role === "admin" && (
                <Button
                  mt={2}
                  size="sm"
                  onClick={() => {
                    setIsOpen(true);
                    setSelectedMatch(match);
                  }}
                >
                  Edit Score
                </Button>
              )}
            </Box>
          ))}
        </Box>
        <Box>
          <Text>Final</Text>
          {roundTwo.map((match) => (
            <Box
              key={match.id}
              border="1px solid gray"
              borderRadius="md"
              p={4}
              mb={4}
              minW="150px"
            >
              <Text>{match.team1_name}</Text>
              <Separator />
              <Text>{match.team2_name}</Text>
              {user?.role === "admin" && (
                <Button
                  mt={2}
                  size="sm"
                  onClick={() => {
                    setIsOpen(true);
                    setSelectedMatch(match);
                  }}
                >
                  Edit Score
                </Button>
              )}
            </Box>
          ))}
        </Box>
      </Flex>
      {isOpen && selectedMatch && (
        <Box>
          <Text>Edit Score</Text>
          <Text>
            {selectedMatch.team1_name} vs {selectedMatch.team2_name}
          </Text>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Box>
      )}
    </>
  );
};

export default BracketView;
