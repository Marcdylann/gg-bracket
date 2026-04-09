export interface Team {
  id: number;
  name: string;
  logo_url?: string;
}

export interface Match {
  id: number;
  round: number;
  status: 'pending' | 'ongoing' | 'completed';
  score_team1: number | null;
  score_team2: number | null;
  team1_name: string;
  team2_name: string;
}