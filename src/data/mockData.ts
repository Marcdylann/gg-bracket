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
  // Round 1 (Semi-Finals)
  { id: "m1", round: 1, team1: "TNC Predator", team2: "Blacklist Intl", score1: 2, score2: 0, winner: "TNC Predator" },
  { id: "m2", round: 1, team1: "Echo Loud", team2: "RSG PH", score1: 1, score2: 2, winner: "RSG PH" },
  // Round 2 (Finals)
  { id: "m3", round: 2, team1: "TNC Predator", team2: "RSG PH" }, 
];