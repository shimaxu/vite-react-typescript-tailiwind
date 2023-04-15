import { Card, Heading, CardBody, Text, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import GameIconList from "./GameIconList";

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
        <GameIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
