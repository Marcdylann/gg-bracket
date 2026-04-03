export interface Tournament {
    id: string;
    name: string
    game: "Valorant" | "Dota" | "Apex Legends";
    status: "Live" | "Upcoming" | "Finished";
    teams: number;
}

export const tournaments: Tournament[] = [
  { id: "1", name: "Cebu Masters", game: "Valorant", status: "Live", teams: 8 },
  { id: "2", name: "Cyber Cup", game: "Dota 2", status: "Upcoming", teams: 16 },
];