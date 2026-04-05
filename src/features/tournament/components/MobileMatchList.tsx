import { Tabs, Stack } from "@chakra-ui/react";
import MobileMatchCard from "./MobileMatchCard";
import type { Match } from "../types";

interface MobileMatchListProps {
  matches: Match[];
}

const MobileMatchList = ({ matches }: MobileMatchListProps) => {
  const getMatchesByRound = (round: number) => matches.filter((m) => m.round === round);
  const roundTabs = [
    { value: "1", label: "R1" },
    { value: "2", label: "QF" },
    { value: "3", label: "SF" },
    { value: "4", label: "Final" },
  ];

  return (
    <Tabs.Root defaultValue="1" variant="enclosed" fitted>
      <Tabs.List mb="4">
        {roundTabs.map((tab) => (
          <Tabs.Trigger key={tab.value} value={tab.value}>
            {tab.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {roundTabs.map((tab) => (
        <Tabs.Content key={tab.value} value={tab.value}>
          <Stack gap="4">
            {getMatchesByRound(parseInt(tab.value)).map((m) => (
              <MobileMatchCard key={m.id} {...m} />
            ))}
          </Stack>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export default MobileMatchList;