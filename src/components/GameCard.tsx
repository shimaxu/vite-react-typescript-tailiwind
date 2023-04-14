import {
  Card,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Button,
  Image,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card key={game.id} borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading size="md"> {game.name}</Heading>
        <Text>{game.description}</Text>
      </CardBody>
      <CardFooter>
        <Button>View Game</Button>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
