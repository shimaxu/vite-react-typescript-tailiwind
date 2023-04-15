import { Card, Heading, CardBody, Text, Image, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";
import GameIconList from "./GameIconList";
import getCroppedImageUrl from "../services/crop-image-url";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card key={game.id} borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading size="md"> {game.name}</Heading>
        <Text>{game.description}</Text>
        <HStack justify="space-between">
          <GameIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
