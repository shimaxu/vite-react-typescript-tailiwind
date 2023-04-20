import useModel from "./useModel";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";
import { GameQuery } from "../App";

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

const useGames = (gameQuery: GameQuery) =>
  useModel<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );

export default useGames;
