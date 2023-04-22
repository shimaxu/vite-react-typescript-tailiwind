import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";

import { useState } from "react";
import { Genre } from "./hooks/useGenres";

import GameList from "./components/GameList";
import NavBar from "./components/NavBar";
import GenrerList from "./components/GenrerList";
import PlatformFilter from "./components/PlatformFilter";
import { Platform } from "./hooks/usePlatforms";
import SortOrderFilter from "./components/SortOrderFilter";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      gridTemplateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenrerList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack paddingX={2}>
          <PlatformFilter
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortOrderFilter
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>

        <GameList gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
