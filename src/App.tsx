import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameList from "./components/GameList";
import NavBar from "./components/NavBar";
import GenrerList from "./components/GenrerList";
const App = () => {
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
          <GenrerList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameList />
      </GridItem>
    </Grid>
  );
};

export default App;
