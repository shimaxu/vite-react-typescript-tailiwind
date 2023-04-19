import useModel from "./useModel";

interface Platforms {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useModel<Platforms>("/platforms/lists/parents");

export default usePlatforms;
