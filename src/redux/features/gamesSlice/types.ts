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
  beachName: string;
  level: number;
  gender: "M" | "F" | "X";
  format: number;
  spots: number;
  description: string;
  players: PlayerStructure[];
  image: string;
}

export interface GamesState {
  games: GameStructure[];
}
