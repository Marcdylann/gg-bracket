export type Match = {
  id: number;
  round: number;
  teamA: string;
  teamB: string;
  scoreA: number;
  scoreB: number;
  status: "Live" | "Scheduled" | "Final";
};