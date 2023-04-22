import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameListContainer from "./GameListContainer";
import GameListSkeleton from "./GameListSkeleton";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameList = ({ gameQuery }: Props) => {
  const { model, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        padding="10px"
        spacing={3}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameListContainer key={skeleton}>
              <GameListSkeleton />
            </GameListContainer>
          ))}
        {model.map((game) => (
          <GameListContainer key={game.id}>
            <GameCard game={game} />
          </GameListContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameList;
