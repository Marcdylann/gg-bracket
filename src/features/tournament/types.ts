export const TYPE_CHECK = true; 

export interface Match {
  id: number;
  round: number;
  teamA: string;
  teamB: string;
  scoreA: number;
  scoreB: number;
  status: "Live" | "Scheduled" | "Final";
}