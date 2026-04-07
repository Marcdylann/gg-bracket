import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import TournamentDashboard from "./features/tournament/TournamentDashboard";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <TournamentDashboard />
    </ChakraProvider>
  );
}

export default App;