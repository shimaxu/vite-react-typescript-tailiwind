import { Grid, GridItem, Show } from "@chakra-ui/react";

import { useState } from "react";
import { Genre } from "./hooks/useGenres";

import GameList from "./components/GameList";
import NavBar from "./components/NavBar";
import GenrerList from "./components/GenrerList";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
          <GenrerList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameList selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
};

export default App;
