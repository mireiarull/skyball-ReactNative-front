export interface PlayerStructure {
  id: string;
  role: "owner" | "guest";
  material: {
    net: boolean;
    ball: boolean;
    rods: boolean;
  };
}

export interface GameStructure {
  dateTime: Date;
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
  backupImage?: string;
}

export interface GamesState {
  games: GameStructure[];
}
