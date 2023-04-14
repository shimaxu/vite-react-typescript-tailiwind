import {
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameList = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        padding={5}
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {games.map((game) => (
          <Card key={game.id}>
            <CardHeader>
              <Heading size="md"> {game.name}</Heading>
            </CardHeader>
            <CardBody>
              <Text>{game.description}</Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameList;
