import useModel from "./useModel";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () => useModel<Genre>("/genres");

export default useGenres;
