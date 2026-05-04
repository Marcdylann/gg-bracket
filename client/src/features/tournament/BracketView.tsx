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

const statusColor = (status: string) => {
  if (status === "Live") return "red.500";
  if (status === "Final") return "green.500";
  return "gray.500";
};

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

  const handleStatusUpdate = async (match: Match) => {
    const nextStatus = match.status === "Scheduled" ? "Live" : "Final";
    await api.put(`/matches/${match.id}/status`, { status: nextStatus });
    onScoreUpdate();
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
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  borderLeft="4px solid"
                  borderLeftColor={statusColor(match.status)}
                  borderRadius="md"
                  p={4}
                  mb={6}
                  minW="180px"
                  bg="whiteAlpha.50"
                >
                  <Text
                    fontWeight={
                      match.status === "Final" &&
                      (match.score_team_a ?? 0) > (match.score_team_b ?? 0)
                        ? "bold"
                        : "normal"
                    }
                  >
                    {match.team1_name} - {match.score_team_a ?? 0}
                  </Text>
                  <Separator />
                  <Text
                    fontWeight={
                      match.status === "Final" &&
                      (match.score_team_b ?? 0) > (match.score_team_a ?? 0)
                        ? "bold"
                        : "normal"
                    }
                  >
                    {match.team2_name} - {match.score_team_b ?? 0}
                  </Text>

                  <Text
                    fontSize="xs"
                    fontWeight="semibold"
                    color={statusColor(match.status)}
                    mt={2}
                  >
                    {match.status}
                  </Text>

                  {user?.role === "admin" && (
                    <Flex gap={2} mt={3}>
                      <Button
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
                      {match.status !== "Final" && (
                        <Button
                          size="sm"
                          onClick={() => handleStatusUpdate(match)}
                        >
                          {match.status === "Scheduled"
                            ? "Start Match"
                            : "End Match"}
                        </Button>
                      )}
                    </Flex>
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
