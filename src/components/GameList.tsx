import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameListContainer from "./GameListContainer";
import GameListSkeleton from "./GameListSkeleton";

const GameList = () => {
  const { model, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        padding="10px"
        spacing={6}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameListContainer>
              <GameListSkeleton key={skeleton} />
            </GameListContainer>
          ))}
        {model.map((game) => (
          <GameListContainer>
            <GameCard key={game.id} game={game} />
          </GameListContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameList;
