// 1. FOR THE REGISTRY (The Table)
export interface Tournament {
  id: string;
  name: string;
  game: string;
  status: "Live" | "Upcoming" | "Finished";
  teams: number;
}

export const tournaments: Tournament[] = [
  { id: "1", name: "Cebu Invitational", game: "Valorant", status: "Live", teams: 8 },
  { id: "2", name: "Landmasters Cup", game: "Dota 2", status: "Upcoming", teams: 16 },
];

// 2. FOR THE BRACKET (The Visual Tree)
export interface Match {
  id: string;
  round: number;
  team1: string;
  team2: string;
  score1?: number;
  score2?: number;
  winner?: string;
}

export const initialMatches: Match[] = [
  { id: "m1", round: 1, team1: "TNC Predator", team2: "Blacklist Intl", score1: 2, score2: 0, winner: "TNC Predator" },
  { id: "m2", round: 1, team1: "Echo Loud", team2: "RSG PH", score1: 1, score2: 2, winner: "RSG PH" },
  { id: "m3", round: 2, team1: "TNC Predator", team2: "RSG PH" }, 
];