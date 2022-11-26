export interface PlayerStructure {
  id: string;
  rol: "owner" | "guest";
  material: string[];
}

export interface GameStructure {
  date: string;
  location: {
    type: string;
    coordinates: number[];
  };
  level: number;
  gender: "M" | "F" | "X";
  format: string;
  spots: number;
  description: string;
  players: PlayerStructure[];
}

export interface GamesState {
  games: GameStructure[];
}
