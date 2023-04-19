import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";
import GameListContainer from "./GameListContainer";
import GameListSkeleton from "./GameListSkeleton";

interface Props {
  selectedGenre: Genre | null;
}

const GameList = ({ selectedGenre }: Props) => {
  const { model, error, isLoading } = useGames(selectedGenre);
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
