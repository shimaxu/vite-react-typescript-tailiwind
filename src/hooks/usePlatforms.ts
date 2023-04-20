import useModel from "./useModel";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useModel<Platform>("/platforms/lists/parents");

export default usePlatforms;
