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
import api from "../../api/axios";
import { toaster } from "../../components/ui/toaster";

interface BracketViewProps {
  matches: Match[];
  onScoreUpdate: () => void;
}

const BracketView = ({ matches, onScoreUpdate }: BracketViewProps) => {
  const rounds = [...new Set(matches.map((m) => m.round))];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

  const [scoreA, setScoreA] = useState("");
  const [scoreB, setScoreB] = useState("");

  const [scoreUpdated, setScoreUpdated] = useState(false);

  const { user } = useAuth();

  const handleUpdateScore = async () => {
    if (!selectedMatch) return;
    await api.put(`/matches/${selectedMatch.id}`, {
      scoreA: scoreA,
      scoreB: scoreB,
    });
    toaster.create({
      title: "Score updated successfully!",
      type: "success",
    });
    onScoreUpdate(); // add this
    setIsOpen(false);
  };

  return (
    <>
      <Flex gap="8">
        {rounds.map((round) => (
          <Box key={round} p="4">
            <Text fontWeight="bold">Round {round}</Text>
            {matches
              .filter((match) => match.round === round)
              .map((match) => (
                <Box
                  key={match.id}
                  border="1px solid gray"
                  borderRadius="md"
                  p={4}
                  mb={4}
                  minW="150px"
                >
                  <Text>
                    {match.team1_name} - {match.score_team_a ?? 0}
                  </Text>
                  <Separator />
                  <Text>
                    {match.team2_name} - {match.score_team_b ?? 0}
                  </Text>
                  {user?.role === "admin" && (
                    <Button
                      mt={2}
                      size="sm"
                      onClick={() => {
                        setIsOpen(true);
                        setSelectedMatch(match);
                        setScoreA("");
                        setScoreB("");
                        setScoreUpdated(false);
                      }}
                    >
                      Edit Score
                    </Button>
                  )}
                </Box>
              ))}
          </Box>
        ))}
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
              <Button onClick={handleUpdateScore}>Submit</Button>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
      {scoreUpdated && (
        <Text color="green.500">Scores updated successfully!</Text>
      )}
    </>
  );
};

export default BracketView;
