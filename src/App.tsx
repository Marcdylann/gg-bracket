import { useState } from "react";
import { MainLayout } from "./layouts/MainLayout";
import { Box, Heading } from "@chakra-ui/react";

function App() {
  // 1. STATE: Remembers which button you clicked
  const [activeView, setActiveView] = useState<"list" | "bracket">("list");

  return (
    <MainLayout onViewChange={setActiveView}>
      {/* 2. CONDITIONAL RENDERING: The "Swap" Logic */}
      {activeView === "list" ? (
        <Box>
          <Heading size="lg" mb={6}>Tournament Registry</Heading>
          <p>Table component will go here.</p>
        </Box>
      ) : (
        <Box>
          <Heading size="lg" mb={6}>Bracket View</Heading>
          <p>Bracket visualization will go here.</p>
        </Box>
      )}
    </MainLayout>
  );
}

export default App;