import { Tabs, TabList, TabPanels, Tab, TabPanel, VStack } from "@chakra-ui/react";

const MobileMatchList = ({ matches }) => {
  // Helper function to filter matches by round number
  const getMatchesByRound = (roundNumber) => 
    matches.filter(m => m.round === roundNumber);

  const roundLabels = ["Round 1", "Quarters", "Semis", "Finals"];

  return (
    <Tabs isFitted variant="soft-rounded" colorScheme="blue">
      <TabList bg="gray.50" p={2} borderRadius="full" mb={6}>
        {roundLabels.map((label) => (
          <Tab key={label} fontSize="sm">{label}</Tab>
        ))}
      </TabList>

      <TabPanels>
        {[1, 2, 3, 4].map((roundNum) => (
          <TabPanel key={roundNum} p={0}>
            <VStack spacing={4}>
              {getMatchesByRound(roundNum).map((match) => (
                <MobileMatchCard key={match.id} {...match} />
              ))}
            </VStack>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};