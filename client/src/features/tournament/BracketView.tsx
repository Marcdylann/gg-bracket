import {
  Box,
  Text,
  Flex,
  Separator,
  Button,
  Dialog,
  Input,
} from "@chakra-ui/react";
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

  const [scoreA, setScoreA] = useState('');
  const [scoreB, setScoreB] = useState('');

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
      <Dialog.Root open={isOpen} onOpenChange={() => setIsOpen(false)}>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Text>Edit Score</Text>
            </Dialog.Header>
            <Dialog.Body>
              <Text>
                {selectedMatch?.team1_name} vs {selectedMatch?.team2_name}
              </Text>
              <Input
                value={scoreA}
                onChange={(e) => setScoreA(e.target.value)}
                placeholder={`${selectedMatch?.team1_name} score`}
                type="number"
              />
              <Input
                value={scoreB}
                onChange={(e) => setScoreB(e.target.value)}
                placeholder={`${selectedMatch?.team2_name} score`}
                type="number"
              />
              <Button>Submit</Button>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </>
  );
};

export default BracketView;
