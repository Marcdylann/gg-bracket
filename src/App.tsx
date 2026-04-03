import { useState } from "react";
import { MainLayout } from "./layouts/MainLayout";
import { Box, Heading } from "@chakra-ui/react";
// We will create this file in the next step!
import TournamentList from "./views/TournamentList"; 

function App() {
  const [activeView, setActiveView] = useState<"list" | "bracket">("list");

  return (
    <MainLayout onViewChange={setActiveView}>
      {activeView === "list" ? (
        <TournamentList />
      ) : (
        <Box>
          <Heading size="lg" mb={6}>Visual Bracket</Heading>
          {/* We'll build the bracket component soon */}
          <p>Bracket View logic coming soon...</p>
        </Box>
      )}
    </MainLayout>
  );
}

export default App;