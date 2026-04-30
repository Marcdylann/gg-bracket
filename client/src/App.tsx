import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./features/auth/Login";
import { AuthProvider } from "./context/AuthContext"; // Make sure this is here!
import TournamentPage from "./features/tournament/TournamentPage";
import Navbar from "./components/Navbar";
import TeamPage from "./features/teams/TeamsPage";
import MatchesPage from "./features/matches/MatchesPage";
import StandingsPage from "./features/standings/StandingsPage";
import Register from "./features/auth/Register";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/register" element={<Register />} />

        {/* This is the "Doorway" to your login page */}
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          {/* Your main bracket/home page route */}
          <Route path="/teams" element={<TeamPage />} />
          <Route path="/" element={<TournamentPage />} />
          <Route path="/matches" element={<MatchesPage />} />
          <Route path="/standings" element={<StandingsPage />} />
        </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
