import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameList from "./components/GameList";
import NavBar from "./components/NavBar";
const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">
        <GameList />
      </GridItem>
    </Grid>
  );
};

export default App;
