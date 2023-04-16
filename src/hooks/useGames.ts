import useModel from "./useModel";

export interface Platforms {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  description: string;
  background_image: string;
  parent_platforms: { platform: Platforms }[];
  metacritic: number;
}

const useGames = () => useModel<Game>("/games");

export default useGames;
