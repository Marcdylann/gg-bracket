import { useState } from "react";
import { MainLayout } from "./layouts/MainLayout";
import { Box, Heading } from "@chakra-ui/react";
import TournamentList from "./views/TournamentList"; 
import VisualBracket from "./views/VisualBracket";

function App() {
  const [activeView, setActiveView] = useState<"list" | "bracket">("list");

  return (
    <MainLayout onViewChange={setActiveView}>
      {activeView === "list" ? (
        <TournamentList />
      ) : (
        <VisualBracket/>
      )}
      
    </MainLayout>
    
  );
}

export default App;