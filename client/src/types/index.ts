export interface Team {
  id: number;
  name: string;
  logo_url?: string;
}

export interface Match {
  id: number;
  round: number;
  status: 'Scheduled' | 'Live' | 'Final'
  score_team_a: number | null;
  score_team_b: number | null;
  team1_name: string;
  team2_name: string;
}