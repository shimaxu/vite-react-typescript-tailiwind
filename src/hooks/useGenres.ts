import useModel from "./useModel";

export interface Genres {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGames = () => useModel<Genres>("/genres");

export default useGames;
